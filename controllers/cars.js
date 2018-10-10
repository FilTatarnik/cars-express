const express = require('express');
const router = express.Router();

const Cars = require ('../models/cars')

router.get('/', (req, res)=>{
	res.render('index.ejs', {
		cars : Cars
	})
})

router.delete('/:id', (req, res) => {
  console.log(req.params.id, ' id in delete route');
  Cars.splice(req.params.id, 1);
  res.redirect('/cars');
});

module.exports = router;