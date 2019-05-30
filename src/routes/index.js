import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/ghome', (req, res, nex) => {
  console.log(req);
});

module.exports = router;
