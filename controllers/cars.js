const express = require('express');
const router = express.Router();

const Cars = require ('../models/cars')

router.get('/', (req, res)=>{
	res.render('index.ejs', {
		cars : Cars
	})
})

module.exports = router;