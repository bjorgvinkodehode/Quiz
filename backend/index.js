const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

// SQLite database connection
const db = new sqlite3.Database('./quiz.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the quiz database.');
    }
});

app.use(express.json());

// Import the quizzes router
const quizzesRouter = require('./routes/quizzes');
app.use('/quizzes', quizzesRouter);

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
