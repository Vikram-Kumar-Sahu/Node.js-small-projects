const express = require('express');
const path = require("path");
const { connectToMongoDB } = require('./connect');

const URL = require('./models/url');

const urlRoute = require('./routes/url');
const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");


const app = express();
const PORT = 8001;

app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({extended : false})); 


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));




app.get('/url/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  if (!entry) {
    return res.status(404).send('Short URL not found');
  }
  res.redirect(entry.redirectURL); // fixed typo
});

// Connect to MongoDB and start server
connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Route
app.use('/url', urlRoute);
app.use('/',staticRouter) ;// All routes prefixed with /url
app.use('/user',userRoute);