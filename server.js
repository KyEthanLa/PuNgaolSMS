var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

const indexRouter = require('./routes/index')
const homeRouter = require('./routes/home')
const jobRouter = require('./routes/home')
const confirmRouter = require('./routes/home')
const weatherRouter = require('./routes/home')
const villagerRouter = require('./routes/home')

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.render("index")
})

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/home', homeRouter)
app.use('/job', jobRouter)
app.use('/confirm', confirmRouter)
app.use('/weather', weatherRouter)
app.use('/villager', villagerRouter)

app.use(function(req, res, next) {
    next(createError(404));
  });

  app.listen(3000);
  
  module.exports = app;

