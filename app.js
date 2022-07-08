const express =  require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const dotenv = require('dotenv').config();
const app =  express();
app.use(bodyParser.json());


//coneccion a db
require('./db/connection');

const vacaRouter = require('./routes/vacaRouter');
const toroRouter = require('./routes/toroRouter');
const becerroRouter = require('./routes/becerroRouter');

app.use('/vaca',vacaRouter);
app.use('/toro',toroRouter);
app.use('/becerro',becerroRouter);


app.listen(3000,()=>{
    console.log('servidor corriendo')
})