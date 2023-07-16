const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const connectDB = require("./db/connect");
const Register = require("./model/register");


app.get('/register', async(req, res) => {
  res.send("HEllo");
  const registerUser = await Register.create({email:"harshthakkar@gmail.com"});
});


const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://harsh:root123@cluster0.czmockm.mongodb.net/Viz-Learn?retryWrites=true&w=majority"
    );

    app.listen(port, function () {
      console.log(`Express server listening on port ${port} `);
    });

  } catch (error) {
    console.log(error);
  }
};

start();
