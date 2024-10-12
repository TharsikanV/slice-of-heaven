const express=require('express');
const cookieParser=require('cookie-parser');
const cors=require('cors');


const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const auth=require('./routes/auth');
const menu=require('./routes/menu');

app.use('/api/v1/',auth);
app.use('/api/v1/',menu);

module.exports = app;