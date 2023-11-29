const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// SQLite database connection
const db = new sqlite3.Database('./quiz.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the quiz database.');
});

// Route to get all quizzes
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM Quizzes';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

module.exports = router;
