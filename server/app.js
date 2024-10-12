const express=require('express');
const cookieParser=require('cookie-parser');
const cors=require('cors');


const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const auth=require('./routes/auth');

app.use('/api/v1/',auth);

module.exports = app;