var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ping', (req, res)=> {
  res.status(200).json('Server working properly')
});

module.exports = router;
