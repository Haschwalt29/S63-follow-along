const express =require('express');
const app=express();
const ErrorHandler = require("./utils/ErrorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(express.json());    
app.use(cookieParser());
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
//config
if(process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({path:'backend/config/config.env'});
};
//import routes
const user = require('./controller/user');
app.use('/api/v2/user',user);
//error handler
app.use(ErrorHandler);
module.exports=app;
