const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.json());

mongoose
  .connect('mongodb://127.0.0.1:27017/uwindsor', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
    // Continue with your code or perform any operations on the database
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });


app.get('/', (req, res) => {
    res.send("Hello Niharika");
});

app.listen(3000, () => console.log('Server running on port 3000'));
