const express = require('express');

const app = express();

app.use(express.static('public'));

const port = 3000;

// main
app.use('/', (req, res) => {

});

app.use('/cms', (req, res) =>{

});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});