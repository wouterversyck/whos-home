import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (request, response, next) => {
  response.render('index', { title: 'Express' });
});

router.post('/ghome', (request, response, next) => {
  console.log(request.body);
  if ('raspberry' === request.body.message) {
    exec('sense_heart');
  }
});

module.exports = router;
