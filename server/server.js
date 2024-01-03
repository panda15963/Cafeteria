// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  const inputData = req.body.input;
  const responseData = {
    message: `Received input: ${inputData}`,
  };
  res.json(responseData);
});

const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'Panda7521ok!',
  database : 'coffeeshop',
});
db.connect((err) => {
  if (err) {
    console.error('error connecting to MySQL: ' + err.message);
  }
  console.log('Connected to database');
});
app.post('/api/signup', (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO users (email, name, username, password) VALUES ('${email}', 'name', 'username', '${password}')`;
  db.query(INSERT_USER_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send('successfully added user');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
