import express from 'express';
import { PythonShell } from 'python-shell';
const router = express.Router();

/* GET home page. */
router.get('/', (request, response, next) => {
  response.render('index', { title: 'Express' });
});

router.post('/ghome', (request, response, next) => {
  console.log(request.body);
  if ('heart' === request.body.message) {
    console.log('executing heart');
    PythonShell.run('/home/pi/bin/sense_heart.py', null, error => {
      if (error) throw error;
      console.log('heart executed');
    });
  } else if ('off' === request.body.message) {
    console.log('executing off');
    PythonShell.run('/home/pi/bin/sense_off.py', null, error => {
      if (error) throw error;
      console.log('off executed');
    });
  }

  response.send({ message: 'all is well' });
});

module.exports = router;
