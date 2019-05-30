import arp from './crons/arp_cron';

module.exports = {
  start: () => {
    arp.start();
  },
};
