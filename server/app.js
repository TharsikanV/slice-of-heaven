const express=require('express');
const cookieParser=require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({paath: path.join(__dirname, "config/config.env")});

const app=express();


app.use(express.json());
app.use(cookieParser());

module.exports = app;