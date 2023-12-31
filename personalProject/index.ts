const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect.ts');
const Routes = require('./routes/indexs.ts');
const { auth, requiresAuth } = require('express-openid-connect');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', Routes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log('Connected to DB and listening on ' + port);
  }
});

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(auth(config));

app.get('/', (req, res) => {res.send(req.oidc.isAuthenticated("Login") ? 'Logged in' : 'Logged out');});

app.get('/profile', requiresAuth(), (req, res) =>{res.send(JSON.stringify(req.oidc.user));});

