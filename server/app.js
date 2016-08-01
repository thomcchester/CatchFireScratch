var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local');
var mongoose = require('mongoose');
var Admin = require('./models/admin.js');
var defaultModel = require('./models/default.js');
var admin = require('./routes/admin.js');
var submit = require('./routes/submit.js');
var index = require('./routes/index.js');
var default_value = require('./routes/default.js');
var register = require('./routes/register.js');