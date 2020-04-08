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

module.exports = router; 
