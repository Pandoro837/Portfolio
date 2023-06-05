const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

// views set
app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs");

const port = 3000;

// main
app.use('/', (req, res) => {
    res.render('index');
});

app.use('/cms', (req, res) =>{
    res.render('cms');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});