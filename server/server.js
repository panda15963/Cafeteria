const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 8080;
const db_info = mysql.createConnection({
    host: "localhost",
    port: "3306",
});
app.get('api/auth/signup', (req, res) =>
    res.send('Hello World!')
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
