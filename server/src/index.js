// Shout-out to https://developer.okta.com/blog/2019/08/16/angular-mysql-express

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const events = require('./events');
const credentials = require('../credentials.json');

const connection = mysql.createConnection({
  host: credentials.host,
  user: credentials.user,
  password: credentials.password,
  database: credentials.database
});

connection.connect();

const port = process.env.PORT || 8080;

// create an Express server and configure a router (located in events.js)
const app = express()
  .use(cors())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});