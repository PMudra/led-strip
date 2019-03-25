const { setColor, strobe } = require('../led-strip');
const express = require('express');
const router = express.Router();

router.get('/hex/:value', function (req, res, next) {
  const value = parseInt(req.params.value.replace(/^#/, ''), 16)
  console.log(`Setting color to: #${value.toString(16)}`);
  res.send(`Setting color to: #${value.toString(16)}`);
  setColor(value);
});

router.get('/strobe/:interval', function (req, res, next) {
  res.send(`Strobe!`);
  strobe(req.params.interval);
});

module.exports = router;
