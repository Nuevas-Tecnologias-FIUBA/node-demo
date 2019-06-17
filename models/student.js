// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var studentSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true},
    surname: {
    type: String,
    required: true},    
    age: {
    type: Number,
    required: true}
  
});

// Return model
module.exports = restful.model('Student', studentSchema);


