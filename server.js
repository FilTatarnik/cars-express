const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const carsController = require('./controllers/cars');

app.use('/assets', express.static('assets'));






app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/cars', carsController);

app.listen(3000, ()=>{
	console.log('servers up bitches');
})