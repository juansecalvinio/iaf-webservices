const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const puerto = 3335;

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
})