const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//create a database connection
mongoose.connect('mongodb+srv://sranjitha779:0Wot01AwvKFVGOrA@cluster0.fvb4a.mongodb.net/').then(()=>console.log('MongoDB connected')).catch((error)=>console.log(error));
const app = express()
const PORT = process.env.PORT || 5000;
app.use(
    cors({
        origin:'http://localhost:5173/',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'cache-control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
);
app.use(cookieParser());
app.use(express.json());
app.listen(PORT,()=>console.log(`server is now running on port ${PORT}`))