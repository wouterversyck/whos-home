'use strict';

var _cron = require('cron');

var job = new _cron.CronJob('*/2 * * * * *', function () {
  var d = new Date();
  console.log('At twooo seconds:', d);
});

module.exports = job;