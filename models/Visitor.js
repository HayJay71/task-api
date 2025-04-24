const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 1
  }
});

const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports = Visitor;
