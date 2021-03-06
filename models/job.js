var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var jobSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);
