/**
 * app 入口
 * @Steudnera
 */

const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')

const routes = require('./routes')
const users = require('./routes/users')

const app = express()

app.use(session({
	secret: 'secret',
	cookie:{
		maxAge: 1000 * 60 * 30
	},
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine("html",require("ejs").__express)

// app.set("view engine", "ejs")
app.set('view engine', 'html')

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
  const err = req.session.error
	res.locals.user = req.session.user

	delete req.session.error
	res.locals.message = ""
	
  if (err) {
		res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">' + err + '</div>';
	}

	next()
})

app.use('/', routes)
app.use('/users', users)
app.use('/login', routes)
app.use('/register', routes)
app.use('/home', routes)
app.use("/logout", routes)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404

  next(err)
})

module.exports = app
