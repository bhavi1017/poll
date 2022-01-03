const mongoose = require("mongoose");
const Poll = new mongoose.Schema({
  pollTitle: {
    type: String,
    required: true,
    unique: true,
  },
  //  options:{  type : Array , "default" : [] ,required:true}
  options: [
    {
      optionTitle: { type: String }, // to do: change to a list
      count: { type: Number },
    },
  ],
});
module.exports = mongoose.model("Poll", Poll);
