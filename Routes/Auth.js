const express = require('express');
const ResponseObject = require('../Classes/ResponseObject');
const DBService = require('../Services/DBService');
const AuthService = require('../Services/AuthService');

module.exports = function (dbController, shemas) {
  const router = express.Router();

  router.use( (req, res, next) => {
    console.log('Request for AUTH router');
    next();
  });

  router.post('/login', async (req, res) => {
    const { login, password } = req.body;
    console.log(`login: ${login}, pass: ${password}`);
    const hashedPassword = AuthService.hashPassword(password);
    console.log(`hashedPass: ${hashedPassword}`);
    const user = await DBService.findUserLoginPass(shemas, login, hashedPassword);
    console.log('user: ', user);

    let ANSWER = null;
    if(user) {
      const token = AuthService.generateKey({login, hashedPassword});
      ANSWER = new ResponseObject(200,{token},'OK');
    } else {
      ANSWER = new ResponseObject(403,{},'Forbidden');
    }

    console.log('ANSWER: ', ANSWER)

    res.send(ANSWER);
  });

  return router;
};