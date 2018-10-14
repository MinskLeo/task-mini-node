const express = require('express');
const ResponseObject = require('../Classes/ResponseObject');
const DBService = require('../Services/DBService');
const AuthService = require('../Services/AuthService');

module.exports = function (dbController, shemas) {
  const router = express.Router();

  router.use( (req, res, next) => {
    console.log(`[${req.method}] Request for AUTH router: ${req.url}`);
    next();
  });

  router.post('/login', async (req, res) => {
    const { login, password } = req.body;
    const hashedPassword = AuthService.hashPassword(password);
    const user = await DBService.findUserLoginPass(shemas, login, hashedPassword);

    let ANSWER = null;
    if(user) {
      const token = AuthService.generateKey({login, password: hashedPassword});
      ANSWER = new ResponseObject(200,{token},'OK');
    } else {
      ANSWER = new ResponseObject(403,{},'Forbidden');
    }

    res.send(ANSWER);
  });

  return router;
};