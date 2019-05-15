//quotes_models.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//*** Quote Schema ****
var QuoteSchema = new Schema({
  name: {
    type: String,
    required: 'Digite seu nome'
  },
  lastname: {
    type: String,
    required: 'Digite seu sobrenome'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});


//*** Export Quote model ***
var Quote = module.exports = mongoose.model('quotes', QuoteSchema);

module.exports.get = function (callback, limit) {
    Quote.find(callback).limit(limit);
}