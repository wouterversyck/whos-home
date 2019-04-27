import { CronJob } from 'cron';

const job = new CronJob('*/2 * * * * *', function() {
  const d = new Date();
  console.log('At twooo seconds:', d);
});

module.exports = job;
