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
const privateKey = fs.readFileSync(process.env.JWT_SECRET, 'utf8');
app.post('/api/signin', (req, res) => {
  const SELECT_USER_QUERY = `SELECT * FROM users`;
  db.query(SELECT_USER_QUERY, (err, results) => {
    if (err){
      return res.send(err);
    } else {
      if (results.length > 0) {
        const user = results.find(user => user.email === req.body.email && user.password === req.body.password);
        const token = jwt.sign({ user }, privateKey, { algorithm: 'HS256' });
        if (!user) {
          return res.send({ error: 'User not found' });
        }
        return res.send({ token, user });
      } else {
        return res.send({ error: 'User not found' });
      }
    }
  });
});
// get all users
app.get('/api/users', (req, res) => {
  const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';
  db.query(SELECT_ALL_USERS_QUERY, (err, results) => {
    if (err) {
      console.log('Mysql error : ',err);
      res.status(500).send('Internal server error');
    } else {
      return res.send(results);
    }
  });
});
// update a user
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const { email, password, name, username } = req.body;
  const UPDATE_USER_QUERY = `UPDATE users SET email = '${email}', password = '${password}', name = '${name}', username = '${username}' WHERE id = ${userId}`;
  db.query(UPDATE_USER_QUERY, (err, results) => {
    if (err) {
      console.log('Mysql error : ',err);
      res.status(500).send('Internal server error');
    } else {
      res.json({message: 'User updated successfully'});
      return res.send(results);
    }
  });
});
// listen on port 3001
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});