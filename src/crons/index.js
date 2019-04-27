import arp from './crons/arp_cron';
import test from './crons/test_cron';

module.exports = {
  start: () => {
    arp.start();
    test.start();
  },
};
