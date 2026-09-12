const pages = require('./_admin-content');

module.exports = (req, res) => {
  res.status(200).send('keys: ' + Object.keys(pages).join(', '));
};
