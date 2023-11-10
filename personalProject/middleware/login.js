const { auth } = require('express-openid-connect');

const chkLogin = auth({
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.MONGODB_URI,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
});

module.exports = {
    chkLogin
};