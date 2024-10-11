const mongoose = require('mongoose');
const connectDB = async () => {
    
  try {
    const uri=process.env.DB_LOCAL_URI || "mongodb://localhost:27017/pizzaApp";
    console.log(uri);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
