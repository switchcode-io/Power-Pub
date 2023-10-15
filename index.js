const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    const TINY_KEY = process.env.TINY_KEY;

    res.render('index',{ TINY_KEY });

});