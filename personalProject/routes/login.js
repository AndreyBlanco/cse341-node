const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
};

router.use(auth(config));

router.get('/', (req, res) => {res.send(req.oidc.isAuthenticated("Login") ? 'Logged in' : 'Logged out');});

router.get('/profile', requiresAuth(), (req, res) =>{res.send(JSON.stringify(req.oidc.user));});

module.exports = router;
