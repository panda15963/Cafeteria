// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.post('/api/signup', (req, res) => {
    console.log(req.body);
    res.send({
      message: `Hello ${req.body.email}! Your user was registered. Have fun!`,
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
