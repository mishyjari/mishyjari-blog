var express = require('express');
var router = express.Router();
var db = require('../db/database.js');

// Get blog index
router.get('/', (req,res,next) => {
	var sql = `SELECT * FROM blog`;
	var params = [];
	db.all(sql,params, (err,rows) => {
		if (err) {
			res.status(400).json({'error':err.message});
			return;
		}
		res.render('blog', { blog_posts: rows })
	});
});

// Get New Post Page
router.get('/new', (req,res,next) => { 
	res.render('blog_new')
});

// Handle POST for new post
router.post('/new', (req,res,next) => {
	res.send(req.body)
});

// GET Edit Page
router.get('/:id/edit', (req,res,next) => {
	// Query DB for :id and populate form with current info
});
module.exports = router; 
