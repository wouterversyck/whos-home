const CronJob = require('cron').CronJob;
const arpScanner = require('arpscan/promise');

const job = new CronJob('0 */5 * * * *', function() {
    const d = new Date();
    console.log('At Ten Minutes:', d);

    arpScanner({sudo: true}).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = job;
