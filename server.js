const express = require('express');
const conn = require('./config/db');
const bodyparser = require('body-parser');
const cors = require('cors');
const router = require('./route/route');

var app = express();


app.use(bodyparser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.use('/api', router);
let port = 8400;
app.listen(port, () => {
    console.log(`Server is up and running on port number ${port}`);
});

app.get('/', (req, res) => {
    res.send('This is Home page');
});












