const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');

const chkLogin = auth({
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
});

router.use(auth(chkLogin));

router.get('/', (req, res) => {res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');});

module.exports = router;
