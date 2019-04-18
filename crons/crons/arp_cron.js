const CronJob = require('cron').CronJob;
const job = new CronJob('* * * * * *', function() {
    const d = new Date();
    console.log('At Ten Minutes:', d);
});

module.exports = job;
