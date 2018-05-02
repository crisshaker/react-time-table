const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  code: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  period: {
    type: {
      venue: { type: Schema.Types.ObjectId, ref: "Venue" },
      time: { type: String }
    },
    default: null
  }
});

module.exports = CourseSchema;
