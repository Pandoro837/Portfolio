const express = require('express');
const path = require('path');
const router = require('./routes/index.js');
const app = express();
app.use(express.static('public'));

// views set
app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs");

const port = 3000;

app.use('/', router);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});