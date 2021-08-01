const express = require('express');
const router = express.Router();

const { database } = require('../config/helpers');

/* GET all products */
router.get('/', function (req, res, next) {
  // set the current page number
  let page =
    req.query.page !== undefined && req.query.page !== 0 ? req.query.page : 1;
  // set the limit of items per page
  const limit =
    req.query.limit !== undefined && req.query.limit !== 0
      ? req.query.limit
      : 10;
  let startValue;
  let endValue;

  if (page > 0) {
    startValue = page * limit - limit; // 0, 10, 20, 30
    endValue = page * limit;
  } else {
    startValue = 0;
    endValue = 10;
  }
});

module.exports = router;
