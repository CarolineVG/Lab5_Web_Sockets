var express = require('express');
var router = express.Router();
var question, answer1, answer2;

/* Bodyparser setup */
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: false
}));

router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('index', {question: question, answer1: answer1, answer2: answer2 });
  
});

/* GET createpoll page */
router.get('/createpoll', function(req, res, next){
  res.render('createpoll', {title: "Create Poll"});
  
});

router.post('/createpoll',function(req,res,next){
  question = req.body.question; 
  answer1 = req.body.answer1;
  answer2 = req.body.answer2;
  res.redirect('/');
});

module.exports = router;