'use strict';

var _cron = require('cron');

var _promise = require('arpscan/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var job = new _cron.CronJob('0 */5 * * * *', function () {
    var d = new Date();
    console.log('Performing arpscan at: ', d);

    (0, _promise2.default)({ sudo: true }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    });
});

module.exports = job;