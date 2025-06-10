const mongoose = require('mongoose');
mongoose.set("strictQuery",true);
async function connectToMongoDB(url) {
  try {
    return await mongoose.connect(url);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err;
  }
}

module.exports = {
  connectToMongoDB,
};
