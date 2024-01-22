const express = require('express');
const app = express();
const {Sequelize} = require('sequelize');
const path = require('path');
const cors = require('cors');

//configuaracion middlewares
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//controllers
const netflixController = require('./controllers/netflixcontroller');
app.use('/api/netflix',netflixController)

//listen
app.listen(4005,()=>{
    console.log('Servidor montado en el puerto 4005')
})