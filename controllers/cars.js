const express = require('express');
const router = express.Router();

const Cars = require ('../models/cars')

router.get('/', (req, res)=>{
	res.render('index.ejs', {
		cars : Cars
	})
})

router.get('/new', (req, res)=>{
	res.render('new.ejs');
})

router.get('/:index', (req, res)=>{
	res.render('show.ejs', {
		cars: Cars[req.params.index],
	})
})

router.post('/', (req, res)=>{
	Cars.push(req.body);
	res.redirect('/cars')
})

router.delete('/:id', (req, res) => {
  console.log(req.params.id, ' id in delete route');
  Cars.splice(req.params.id, 1);
  res.redirect('/cars');
});

module.exports = router;