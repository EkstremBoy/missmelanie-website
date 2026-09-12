module.exports = (req, res) => {
  const authHeader = req.headers['authorization'];
  const p = req.query.path;
  res.status(200).send('auth=' + JSON.stringify(authHeader) + ' path=' + JSON.stringify(p));
};
