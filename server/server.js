const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db/db");

app.use(cors());
app.use(express.json());
// app.use("/uploads", express.static("uploads")); Image Uploading

// USER ROUTE
const users = require("./route/users");
app.use("/api", users);

// PROTECTED ROUTE
const verifyToken = require("./middleWare/authMiddleWare");
app.get("/api/protected", verifyToken, (req, res) => {
    const userId = req.user.user_id;
    db.query("SELECT user_id, user_name, email FROM users WHERE user_id = ?", [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database error" });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({ message: "This is a protected route", user: results[0] });
    });
});

// START SERVER
app.listen(8081, () => {
  console.log("Server is running on port 8081");
});