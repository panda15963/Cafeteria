const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const con = mysql.createConnection({
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'register'
});
app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const sqlInsert = "INSERT INTO register (name, email, password) VALUES (?,?,?)";
  con.query(sqlInsert, [name, email, password], (err, result) => {
    console.log(err);
  });
});
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM register WHERE email = ? AND password = ?";
  con.query(sqlSelect, [email, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong email/password combination!" });
    }
  });
});
app.listen(3000, () => {
  console.log('running on port 3000');
});