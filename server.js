const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helper = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helper });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'omegalol',
  cookie: {
    maxAge: 150
  },
  rolling: true,
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));

app.use(function(req, res, next) {
    // Perform some operation on the request and response objects
    next();
  });
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});