const arp = require('./crons/arp_cron');
const test = require('./crons/test_cron');

module.exports = {
    start: ()=> {
        arp.start();
        test.start();
    }
};
