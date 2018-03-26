var express = require('express');
var app = express.Router();
var question, answer1, answer2;

/* Bodyparser setup */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

/* use bodyparser */
app.use(bodyParser.json());

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { answer2: a2, answer1: a1, question: q });
  
});

/* GET createpoll page */
app.get('/createpoll', function(req, res, next){
  res.render('live', {title: "Create Poll"});
});

/* POST createpoll page */
app.post('/createpoll',function(req,res,next){
  question = req.body.question;
  answer1 = req.body.answer1;
  answer2 = req.body.answer2;
  res.redirect('/');
});