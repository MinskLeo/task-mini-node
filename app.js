// Imports
const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// Services
const DBService = require('./Services/DBService');

// Configs
const SERVER_CONFIG = require('./Configs/server.json');

// Routes
const AuthRoutes = require('./Routes/Auth');
const ProjectsRoutes = require('./Routes/Projects');

// Constants
const PORT = process.env.PORT | SERVER_CONFIG.PORT;
const MongoosePack = DBService.connect(mongoose);
const dbController = MongoosePack.mongoose;
const shemas = MongoosePack.schemas;


// ===================
// Setting Up

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Routing
app.use('/auth', AuthRoutes(dbController, shemas));
app.use('/projects', ProjectsRoutes(dbController, shemas));




app.listen(PORT, () => {
  console.log(`Server has been started on: ${PORT}`);
});