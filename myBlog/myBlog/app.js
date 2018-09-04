var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const detailsRouter = require('./routes/details');
const adminRouter = require('./routes/admin');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const forgotpassRouter = require('./routes/forgotpass');
const {sequelize} = require('./databases/database');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1) 

var SequelizeStore = require("connect-session-sequelize")(session.Store);

var myStore = new SequelizeStore({
  db: sequelize
})

app.set("trust proxy", 1);
app.use(
	session({
		secret: "keyboard cat",
		store: myStore,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
		proxy: true
	})
);
// myStore.sync();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts',postsRouter);
app.use('/details', detailsRouter);
app.use('/admin',adminRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/forgotpassword',forgotpassRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
    return res.sendStatus(204);
  }
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
