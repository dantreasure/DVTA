var Mongoose = require('mongoose');

exports.TaskSchema = new Mongoose.Schema({
  name: String,
  count: Number
});