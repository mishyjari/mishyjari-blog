var sqlite3 = require('sqlite3').verbose();
var md5 = require('md5');

const DBSOURCE = './blogdb.db';

let db = new sqlite3.Database(DBSOURCE, (err) => {
	if (err) { 
		console.error(err.message);
		throw err;
	} else {
		console.log('Connected to SQLite Database');
		db.run(`SELECT * FROM blog`,
		(err) => {
			if (err) {console.log(err)}
			else {
				console.log('success')
			}
		}); 
	}
});

module.exports = db; 
