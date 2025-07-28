const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e_intrams"
})

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    return console.log("Connected to the database");
});

module.exports = db;