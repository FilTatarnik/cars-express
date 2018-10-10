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
		i: req.params.index
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

router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		car: Cars[req.params.id],
		id: req.params.id
	})
})

router.put('/:id', (req, res) => {
	res.redirect('/cars');
	Cars[req.params.id] = req.body
})
module.exports = router;

