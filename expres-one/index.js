const express = require('express');
const fs = require('fs');
// const users = require('./MOCK_DATA.json');
const {connectMongoDb} = require('./connection');
const User = require('./models/user');
const userRouter = require("./routes/user")
const {logReqRes} = require("./middlewares")

const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("Mongodb connected"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

app.use(logReqRes("log.txt"));

app.use("/api/user",userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});