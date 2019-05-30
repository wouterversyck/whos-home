'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pythonShell = require('python-shell');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET home page. */
router.get('/', function (request, response, next) {
  response.render('index', { title: 'Express' });
});

router.post('/ghome', function (request, response, next) {
  console.log(request.body);
  if ('heart' === request.body.message) {
    console.log('executing heart');
    _pythonShell.PythonShell.run('/home/pi/bin/sense_heart.py', null, function (error) {
      if (error) throw error;
      console.log('heart executed');
    });
  } else if ('off' === request.body.message) {
    console.log('executing off');
    _pythonShell.PythonShell.run('/home/pi/bin/sense_off.py', null, function (error) {
      if (error) throw error;
      console.log('off executed');
    });
  }

  response.send({ message: 'all is well' });
});

module.exports = router;