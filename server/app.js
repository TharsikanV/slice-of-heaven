const express=require('express');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, "config/config.env")});


const app=express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

const auth=require('./routes/auth');
const menu=require('./routes/menu');
const reservation=require('./routes/reservation');

app.use('/api/v1/',auth);
app.use('/api/v1/',menu);
app.use('/api/v1/',reservation);

module.exports = app;