const mysql = require('mysql');
const conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "1996",
	database: "curriculum"
	
})
conn.connect();
console.log('success')
module.exports = conn;