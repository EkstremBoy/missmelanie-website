module.exports = (req, res) => {
  res.setHeader('WWW-Authenticate', 'Basic realm="test"');
  res.setHeader('Cache-Control', 'no-store');
  res.status(401).send('test 401');
};
