//insurances_forms_models.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//*** Insurance_form Schema ****
var Insurance_formSchema = new Schema({
	insurance_form: {
		accessory: {
			type: String,
			lowercase: true,
			required: 'Question1 is required'
		},
		
		frequency: {
			type: String,
			lowercase: true,
			required: 'Question2 is required'
		},

		competition: {
			type: String,
			lowercase: true,
			required: 'Question3 is required'
		},
		
		options: {
			road: {
				type: String,
				lowercase: true
			},
			city: {
				type: String,
				lowercase: true
			},
			field: {
				type: String,
				lowercase: true
			},
			track: {
				type: String,
				lowercase: true
			}
		},
		
		created_date: {
			type: Date,
			default: Date.now
		}
	}
});


//*** Export Quote model ***
var Insurance_form = module.exports = mongoose.model('insurances_forms', Insurance_formSchema);

module.exports.get = function (callback, limit) {
    Insurance_form.find(callback).limit(limit);
}