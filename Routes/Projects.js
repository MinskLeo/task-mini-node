const express = require('express');
const ResponseObject = require('../Classes/ResponseObject');
const DBService = require('../Services/DBService');

module.exports = function (dbController) {
  const router = express.Router();

  router.use((req, res, next) => {
    console.log('Request for PROJECTS router');
    next();
  })

  router.get('/projects', (req, res) => {
    console.log('PROJECTS LIST!');
    res.send('projects!');
  });

  return router;
};