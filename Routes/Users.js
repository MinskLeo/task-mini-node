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

  router.get('/:nickname/profile', async (req, res) => {
    const { auth } = req.headers;
    const { nickname } = req.params;
    let ANSWER = new ResponseObject(403,{},'Forbidden');
    if(auth) {
      const verified = await AuthService.verifyAuth(shemas, auth);
      if (verified) {
        const user = await DBService.findUserByNickname(shemas, nickname);
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

  router.get('/:nickname/projects',async (req,res)=>{
    const { auth } = req.headers;    
    let ANSWER = new ResponseObject(403,{},'Forbidden');
    if(auth) {
      const verified = await AuthService.verifyAuth(shemas, auth);
      if (verified) {
        const {_id} = verified;
        const projects = await DBService.findProjectsById(shemas, _id);
        if(projects) {
          
          ANSWER = new ResponseObject(200, projects, 'OK');
        }
      }
    }

    res.send(ANSWER);
  })

  return router;
};