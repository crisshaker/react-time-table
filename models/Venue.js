const mongoose = require("mongoose");
const { Schema } = mongoose;

const VenueSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true }
});

module.exports = VenueSchema;
