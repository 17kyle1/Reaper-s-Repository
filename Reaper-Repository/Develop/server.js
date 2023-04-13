const path = require('path');

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store)

//const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);
