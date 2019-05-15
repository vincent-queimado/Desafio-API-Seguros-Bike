//oportunities_models.js

var mongoose = require('mongoose');
var moment = require('moment-timezone');
moment().tz("America/Recife").format();
mongoose.set('useFindAndModify', false);

var Schema = mongoose.Schema;

//*** Quote Schema ****
var OportunitySchema = new Schema({
	'oportunity': {
		'bike': {
			type: String,
			required: 'Bike ID'
		},
		'client': {
			type: String,
			required: 'Client ID'
		},
		'insuranceform': {
			type: String,
			default: ''
		},
		'insurance': {
			type: String,
			default: '',
		},
		'prime': {
			type: String,
			default: '0.00',
		},
		'payment': {
			type: String,
			default: '0',
		},
		'created_date': {
			type: Date,
			default: Date.now
		},
		'status': {
			type: [{
				type: String,
				enum: ['pending', 'accepted', 'refused']
			}],
			default: ['pending']
		}
	}
});


//*** Export Quote model ***
var Oportunity = module.exports = mongoose.model('oportunities', OportunitySchema);

module.exports.get = function (callback, limit) {
    Oportunity.find(callback).limit(limit);
}