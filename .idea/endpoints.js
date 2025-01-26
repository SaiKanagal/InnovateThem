const express = require('express');
const mysql = require('mysql2'); // Import the database connection
const app = express();
const cors = require('cors');

app.use(express.json()); // Middleware for parsing JSON
app.use(cors());

// Define a port
const PORT = 3000;

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Rohan@098!",
    database: 'users',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database', err);
        return;
    }
    console.log('Connected to the database');
});

// Test route
app.get('/', (req, res) => {
  res.send('API is running!');
});

app.post('/api/register', (req, res) => {
    const { purdueEmail, purdueId, password } = req.body;
    connection.query(`INSERT INTO user_info (purdueEmail, purdueId, password) VALUES ('${purdueEmail}', '${purdueId}', '${password}')`, (err, result) => {
        if (err) {
            console.log('Error:', err);
            res.sendStatus(500);
            return;
        }
        res.sendStatus(201);
    });
});

app.post('/api/login', (req, res) => {
    const { purdueEmail, password } = req.body;
    connection.query(`SELECT * FROM user_info WHERE purdueEmail='${purdueEmail}' AND password='${password}'`, (err, result) => {
        if (err) {
            console.log('Error:', err);
            res.sendStatus(500);
            return;
        }
        if (result.length === 0) {
            res.status(401).send("Invalid credentials");
            return;
        }
        res.sendStatus(200);
    });
});