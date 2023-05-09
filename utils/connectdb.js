const mongoose = require("mongoose");

const connectMongo = async () =>
  mongoose.connect("mongodb://127.0.0.1/Continuum");

export default connectMongo;
