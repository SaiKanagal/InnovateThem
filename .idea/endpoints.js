const express = require('express');
const mysql = require('mysql'); // Import the database connection
const app = express();

app.use(express.json()); // Middleware for parsing JSON

// Define a port
const PORT = 3000;

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Grandcanyon1!",
    database: 'users'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database');
        return;
    }
    console.log('Connected to the database');
});

// Test route
app.get('/', (req, res) => {
  res.send('API is running!');
});