'use strict';

var _arp_cron = require('./crons/arp_cron');

var _arp_cron2 = _interopRequireDefault(_arp_cron);

var _test_cron = require('./crons/test_cron');

var _test_cron2 = _interopRequireDefault(_test_cron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    start: function start() {
        _arp_cron2.default.start();
        _test_cron2.default.start();
    }
};