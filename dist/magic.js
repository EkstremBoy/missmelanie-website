(() => {
  'use strict';
  const canvas = document.querySelector('#universe');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = { x: -1000, y: -1000, active: false };
  let w, h, particles = [], stars = [], dots = [], fireworks = [], last = 0, frame, burst = 0;
  let taglineRevealed = false, glintStart = performance.now()+4300;
  function revealTagline(){
    if(taglineRevealed) return;
    taglineRevealed=true;
    document.querySelector('#tagline').classList.add('revealed');
  }
  // Hit-test the visible luminous core, never the surrounding magnetic halo.
  function hitDot(x, y, now = performance.now()) {
    return dots.find(dot => now >= dot.hiddenUntil && dot.particles.some(p =>
      Math.hypot(x-p.x,y-p.y) <= Math.max(2,p.r*.5)));
  }
  function updateCursor() {
    canvas.style.cursor = pointer.active && hitDot(pointer.x,pointer.y) ? 'pointer' : 'default';
  }
  function explode(dot) {
    const now = performance.now();
    dot.hiddenUntil = now + 2000;
    revealTagline();
    const x=dot.particles.reduce((sum,p)=>sum+p.x,0)/dot.particles.length;
    const y=dot.particles.reduce((sum,p)=>sum+p.y,0)/dot.particles.length;
    if(!reduced.matches) for(let i=0;i<95;i++) {
      const angle=Math.random()*Math.PI*2, speed=35+Math.random()*145;
      fireworks.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,born:now,life:900+Math.random()*850,color:Math.floor(Math.random()*4)});
    }
    updateCursor();
    draw(now);
    setTimeout(()=>{draw(performance.now());updateCursor();},2000);
  }
  const palette = ['65,44,122','81,56,148','101,76,164','38,111,127'];
  const sprites = palette.map(color => {
    const c = document.createElement('canvas'); c.width = c.height = 32;
    const g = c.getContext('2d');
    const gradient = g.createRadialGradient(16,16,0,16,16,16);
    gradient.addColorStop(0, `rgba(${color},1)`);
    gradient.addColorStop(.12, `rgba(${color},.95)`);
    gradient.addColorStop(.3, `rgba(${color},.23)`);
    gradient.addColorStop(1, `rgba(${color},0)`);
    g.fillStyle = gradient; g.fillRect(0,0,32,32); return c;
  });
  function resize() {
    w = innerWidth; h = document.querySelector('main').clientHeight;
    const dpr = Math.min(devicePixelRatio || 1,2);
    canvas.width = Math.round(w*dpr); canvas.height = Math.round(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const mask = document.createElement('canvas'); mask.width = w; mask.height = h;
    const m = mask.getContext('2d', { willReadFrequently: true });
    const mobile = w < 600;
    let size = Math.min(w * (mobile ? .215 : .135), 200, h * .28);
    const lines = mobile ? ['Miss','Melanie'] : ['Miss Melanie'];
    m.font = `400 ${size}px Georgia, 'Times New Roman', serif`;
    const widest = Math.max(...lines.map(s => m.measureText(s).width));
    if(widest > w*.85) size *= w*.85/widest;
    m.font = `400 ${size}px Georgia, 'Times New Roman', serif`;
    m.textAlign = 'center'; m.textBaseline = 'middle'; m.fillStyle = '#fff';
    lines.forEach((s,i) => m.fillText(s,w/2,h*.455+(i-(lines.length-1)/2)*size*1.08));
    const data = m.getImageData(0,0,w,h).data;
    // Connected ink components isolate the actual dots of the two lowercase i's,
    // including when the title wraps onto two lines on mobile.
    const labels = new Int32Array(w*h);
    const components = [];
    let id=0;
    for(let pixel=0;pixel<w*h;pixel++) {
      if(labels[pixel] || data[pixel*4+3]<=100) continue;
      const component={id:++id,minX:w,maxX:0,minY:h,maxY:0,count:0};
      const queue=[pixel];labels[pixel]=id;
      for(let q=0;q<queue.length;q++) {
        const n=queue[q],x=n%w,y=Math.floor(n/w);
        component.minX=Math.min(component.minX,x);component.maxX=Math.max(component.maxX,x);
        component.minY=Math.min(component.minY,y);component.maxY=Math.max(component.maxY,y);component.count++;
        for(const next of [x>0?n-1:-1,x<w-1?n+1:-1,y>0?n-w:-1,y<h-1?n+w:-1]) {
          if(next>=0&&!labels[next]&&data[next*4+3]>100){labels[next]=id;queue.push(next);}
        }
      }
      components.push(component);
    }
    dots=components.filter(c=>c.count>4 && c.maxX-c.minX<size*.3 && c.maxY-c.minY<size*.25)
      .sort((a,b)=>b.count-a.count).slice(0,2).map(c=>({...c,hiddenUntil:0,particles:[]}));
    fireworks=[];
    particles = [];
    const step = mobile ? 2.3 : 2.65;
    for(let y=0;y<h;y+=step) for(let x=0;x<w;x+=step) {
      if(data[(Math.floor(y)*w+Math.floor(x))*4+3] > 100 && Math.random()>.09) {
        const ax=x+(Math.random()-.5)*1.6, ay=y+(Math.random()-.5)*1.6;
        const dot=dots.find(d=>d.id===labels[Math.floor(y)*w+Math.floor(x)]);
        const particle={ax,ay,x:ax,y:ay,vx:0,vy:0,r:2.5+Math.random()*3.2,phase:Math.random()*Math.PI*2,color:Math.floor(Math.random()*4),dot};
        particles.push(particle);
        if(dot) dot.particles.push(particle);
      }
    }
    stars = Array.from({length:Math.min(430,Math.floor(w*h/2600))},()=>({x:Math.random()*w,y:Math.random()*h,r:.3+Math.random()*.9,phase:Math.random()*6.28,alpha:.12+Math.random()*.43}));
    document.documentElement.classList.add('canvas-ready');
    draw(performance.now());
  }
  function draw(now) {
    cancelAnimationFrame(frame);
    const dt = Math.min((now-last)/16.667 || 1,2); last=now;
    const t = reduced.matches ? 0 : now*.001;
    ctx.clearRect(0,0,w,h);
    for(const s of stars) {
      ctx.globalAlpha=s.alpha*(.72+.28*Math.sin(t*.55+s.phase));
      ctx.fillStyle='#9D93D8';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
      if(s.r>1.12) {ctx.globalAlpha*=.28;ctx.fillRect(s.x-3,s.y-.3,6,.6);ctx.fillRect(s.x-.3,s.y-3,.6,6);}
    }
    ctx.globalCompositeOperation='source-over';
    burst *= Math.pow(.93,dt);
    for(const p of particles) {
      if(p.dot && now<p.dot.hiddenUntil){p.x=p.ax;p.y=p.ay;p.vx=p.vy=0;continue;}
      let tx=p.ax,ty=p.ay;
      if(!reduced.matches) {
        tx+=Math.sin(t*.6+p.phase)*.6;ty+=Math.cos(t*.5+p.phase)*.7;
        const dx=pointer.x-p.ax,dy=pointer.y-p.ay,d=Math.hypot(dx,dy);
        if(pointer.active && d<96) {
          const pull=Math.pow(1-d/96,1.3)*.91;
          tx+=dx*pull;ty+=dy*pull;
        }
        if(burst>.01){tx+=(p.ax-w/2)*burst*.25;ty+=(p.ay-h*.455)*burst*.25;}
        p.vx=(p.vx+(tx-p.x)*.055*dt)*Math.pow(.80,dt);
        p.vy=(p.vy+(ty-p.y)*.055*dt)*Math.pow(.80,dt);
        p.x+=p.vx*dt;p.y+=p.vy*dt;
      }else{p.x=p.ax;p.y=p.ay;}
      let glint=0;
      if(!taglineRevealed && dots[0]===p.dot && now>glintStart){
        const cycle=(now-glintStart)%2600;
        if(cycle<900) glint=Math.sin(cycle/900*Math.PI);
      }
      const radius=p.r*(1+glint*.65);
      ctx.globalAlpha=Math.min(1,.88+.12*Math.sin(t*.8+p.phase)+glint*.25);
      ctx.drawImage(sprites[p.color],p.x-radius,p.y-radius,radius*2,radius*2);
    }
    fireworks=fireworks.filter(s=>now-s.born<s.life);
    for(const s of fireworks){
      const age=(now-s.born)/1000, fade=1-(now-s.born)/s.life;
      const x=s.x+s.vx*age,y=s.y+s.vy*age+45*age*age;
      ctx.globalAlpha=fade*.65;
      ctx.strokeStyle=`rgb(${palette[s.color]})`;ctx.lineWidth=1;
      ctx.beginPath();ctx.moveTo(x-s.vx*.045,y-(s.vy+90*age)*.045);ctx.lineTo(x,y);ctx.stroke();
      ctx.globalAlpha=fade;ctx.drawImage(sprites[s.color],x-4,y-4,8,8);
    }
    updateCursor();
    if(pointer.active&&!reduced.matches){ctx.globalAlpha=.16;ctx.drawImage(sprites[1],pointer.x-32,pointer.y-32,64,64);}
    ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;
    if(!document.hidden&&!reduced.matches) frame=requestAnimationFrame(draw);
  }
  canvas.addEventListener('pointermove',e=>{pointer.x=e.clientX;pointer.y=e.clientY;pointer.active=true;updateCursor();});
  canvas.addEventListener('click',e=>{const dot=hitDot(e.clientX,e.clientY);if(dot)explode(dot);});
  const release=()=>{pointer.active=false;updateCursor();};
  canvas.addEventListener('pointerleave',release);canvas.addEventListener('pointercancel',release);
  canvas.addEventListener('pointerup',e=>{if(e.pointerType!=='mouse')release();});
  window.addEventListener('blur',release);
  window.addEventListener('resize',resize);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden){last=performance.now();draw(last);}else cancelAnimationFrame(frame);});
  reduced.addEventListener('change',()=>draw(performance.now()));
  const dialog=document.querySelector('#welcome');
  const hint=document.querySelector('#firework-hint');
  let hintTimer;
  let language='fr';
  function showHint(){
    clearTimeout(hintTimer);
    hint.classList.remove('visible');
    requestAnimationFrame(()=>requestAnimationFrame(()=>hint.classList.add('visible')));
    hintTimer=setTimeout(()=>hint.classList.remove('visible'),3600);
  }
  function setLanguage(lang){
    language=lang;document.documentElement.lang=lang;
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
    document.querySelector('#start-label').textContent=lang==='fr'?'Commencez ici':'Start here';
    hint.textContent=lang==='fr'?'Saurez-vous trouver le feu d’artifice ?':'Can you find the fireworks?';
    document.querySelector('#tagline').textContent=lang==='fr'?'Le plaisir d’apprendre':'The joy of learning';
    document.querySelector('#preview-note').textContent=lang==='fr'?'La suite de votre univers arrive bientôt.':'The rest of your universe is coming soon.';
    document.querySelector('#close').setAttribute('aria-label',lang==='fr'?'Fermer':'Close');
    showHint();
  }
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  document.querySelector('#start').addEventListener('click',()=>{burst=1;dialog.showModal();});
  document.querySelector('#close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  resize();
  showHint();
  setTimeout(revealTagline,9000);
})();
