const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello');
});

router.get('/reverse/:name', (req, res) => {
  var reverse = req.params.name.split("").reverse().join("");
  res.send(reverse);
});

module.exports = router;
