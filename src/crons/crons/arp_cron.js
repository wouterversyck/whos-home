import { CronJob } from 'cron';
import arpScanner from 'arpscan/promise';

const job = new CronJob('0 */5 * * * *', function() {
  const d = new Date();
  console.log('Performing arpscan at: ', d);

  arpScanner({ sudo: true })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = job;
