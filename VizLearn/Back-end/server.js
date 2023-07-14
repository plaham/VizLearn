const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

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

app.post('/signup', async (req, res) => {
    try {
        const { username, password,email,firstName,lastName } = req.body;

        const existingUser = await db.collection('users').findOne({ username });
        if (existingUser) {
            return res.status(400).send({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = { username, password: hashedPassword, email, firstName, lastName };
        const result = await db.collection('users').insertOne(user);

        const token = jwt.sign({ id: result.insertedId }, 'your_jwt_secret');

        res.status(201).send({ token });
    } catch (err) {
        res.status(500).send({ error: 'An error has occurred. Please try again.' });
    }
});

app.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await db.collection('users').findOne({ username });
        if (!user) {
            return res.status(400).send({ error: 'User does not exist' });
        }

        // Check if password is correct
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).send({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret');

        res.status(200).send({ token });
    } catch (err) {
        res.status(500).send({ error: 'An error has occurred. Please try again.' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
