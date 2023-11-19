const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001; // Different from your React app's port

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

// Setup SQLite database
const dbPath = path.resolve(__dirname, 'your-database-name.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initializeDatabase();
    }
});

app.get('/', (req, res) => {
    res.send('Jeopardy Word Search Game Server is running!');
});
// Initialize database with tables
function initializeDatabase() {
    db.run(`CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS words (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        word TEXT NOT NULL,
        category_id INTEGER,
        FOREIGN KEY (category_id) REFERENCES categories (id)
    )`);
}

// Routes
app.get('/api/words', (req, res) => {
    db.all("SELECT * FROM words", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: rows
        });
    });
});

// Additional route example for adding a new word
app.post('/api/words', (req, res) => {
    const { word, categoryId } = req.body;
    db.run('INSERT INTO words (word, category_id) VALUES (?, ?)', [word, categoryId], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'success', id: this.lastID });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Handle closing the database connection when the server stops
process.on('SIGINT', () => {
    db.close(() => {
        console.log('SQLite database connection closed.');
        process.exit(0);
    });
});
