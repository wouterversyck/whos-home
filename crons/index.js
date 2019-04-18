arp = require('./arp_cron');

module.exports = {
    start: ()=> {
        arp.start();
    }
};