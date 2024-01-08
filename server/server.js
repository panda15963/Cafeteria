// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 3001;
const fs = require('fs');
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// connect to mysql database
const db = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER, 
  password : process.env.DB_PWD,
  database : process.env.DB_NAME,
});
db.connect((err) => {
  if (err) {
    console.error('error connecting to MySQL: ' + err.message);
  }
  console.log('Connected to database');
});
// register a new user
app.post('/api/signup', (req, res) => {
  const { email, password, name, username } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO users (email, password, name, username) VALUES ('${email}', '${password}', '${name}', '${username}')`;
  db.query(INSERT_USER_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});
// login a user
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  const SELECT_USER_QUERY = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
  db.query(SELECT_USER_QUERY, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});
listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
