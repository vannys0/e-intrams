const express = require("express");
const router = express.Router();
const db = require("../db/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret_key";

// SIGNUP
router.post("/signup", (req, res) => {
    const user_exist = "select * from users where email = ?"
    db.query(user_exist, [req.body.email], (err, result) => {
        if(err) {
            console.error("Error checking user:", err)
            return res.status(500).json({ message: "Database error" });
        }
        if(result.length > 0) {
            console.log("User already exists")
            return res.status(400).json({ message: "Email already exists" });
        }
        const sql = "insert into users (`user_id`, `user_name`, `email`, `password`, `department`, `user_type`) values (?)"
        const user_id = `user${Math.floor(100000 + Math.random() * 900000)}`
        const user_type = "client"
        const {user_name, email, password, department} = req.body
        const hash_password = bcrypt.hashSync(password, 10)
        const values = [
            user_id,
            user_name,
            email,
            hash_password,
            department,
            user_type
        ]

        db.query(sql, [values], (err, result) => {
            if(err) {
                console.error("Error during sigup:" + err)
                return res.status(500).json({ message: "Database error" });
            }
            const token = jwt.sign({ user_id, user_name, email }, JWT_SECRET, { expiresIn: "1d" });
            return res.status(201).json({ message: "User created successfully", token });
        })
    })
})

// LOGIN
router.post("/", (req, res) => {
    const check_user = "select * from users where email = ? and user_type = 'client'"
    const {email, password} = req.body
    db.query(check_user, [email], (err, result) => {
        if(err) {
            console.error("Error checking user:", err)
            return res.status(500).json({ message: "Database error"})
        }
        if(result.length === 0) {
            console.log("No user found")
            return res.status(404).json({ message: "User not found"})
        }

        const user = result[0];
        const is_password_valid = bcrypt.compareSync(password, user.password)
        if(!is_password_valid) {
            console.log("Incorrect password")
            return res.status(401).json({ message: "Incorrect password"})
        }
        const token = jwt.sign({ user_id: user.user_id, user_name: user.user_name, email: user.email }, JWT_SECRET, { expiresIn: "1d" });

        return res.status(200).json({ message: "Success", token})
    })
})

module.exports = router;