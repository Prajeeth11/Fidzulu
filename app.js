const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();


app.use(cors());
app.use(morgan('dev'));

const classBController = require('./src/controllers/class-b-controller');

app.get('/classB/laptop/all/:location',  classBController.fetchLaptops);
app.get('/classB/book/all/:location',  classBController.fetchBook);
app.get('/classB/dvd/all/:location',  classBController.fetchDVD);
app.get('/classB/laptop/team',  classBController.fetchLaptopsTeam);
app.get('/classB/book/team',  classBController.fetchBookTeam);
app.get('/classB/dvd/team', classBController.fetchDVDTeam);

app.use(classBController.get404);

module.exports=app;