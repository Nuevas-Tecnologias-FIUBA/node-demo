// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var catSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true},
    size: {
    type: Number,
    min: [0, 'Too little'],
    max: [100, 'Too big']
  }
});

// Return model
module.exports = restful.model('Cat', catSchema);


