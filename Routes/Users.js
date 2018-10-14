const express = require('express');
const ResponseObject = require('../Classes/ResponseObject');
const DBService = require('../Services/DBService');
const AuthService = require('../Services/AuthService');

module.exports = function (dbController, shemas) {
  const router = express.Router();

  router.use((req, res, next) => {
    console.log(`[${req.method}] Request for USERS router: ${req.url}`);
    next();
  });

  router.get('/:id/profile', async (req, res) => {
    const { auth } = req.headers;
    const { id } = req.params;
    let ANSWER = new ResponseObject(403,{},'Forbidden');

    if(auth) {
      const verified = await AuthService.verifyAuth(shemas, auth);
      if (verified) {
        const user = await DBService.findUserById(shemas, id);
        if(user) {
          const roles = await DBService.findRolesById(shemas, user.roles);
          if (roles) {
            user.roles = roles;
            ANSWER = new ResponseObject(200, user, 'OK');
          }
          ANSWER = new ResponseObject(200, user, 'OK');
        }
      }
    }

    res.send(ANSWER);
  });

  return router;
};