//bikes_models.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//*** Bike Schema ****
var BikeSchema = new Schema({
	bike: {
		used: {
			type: [{
				type: String,
				enum: ['yes', 'no'],
				required: 'Bike is used?'
			}],
			default: ['yes']
		},
		type: {
			type: String,
			uppercase: true,
			required: 'Bike type'
		},
		brand: {
			type: String,
			uppercase: true,
			required: 'Bike brand'
		},
		model: {
			type: String,
			uppercase: true,
			required: 'Bike model'
		},
		year: {
			type: String,
			required: 'Bike fabrication year'
		},
		value: {
			type: String,
			required: 'Bike estimated value'
		},
		serial: {
			type: String,
			uppercase: true
		},
		created_date: {
			type: Date,
			default: Date.now
		}
	}
});


//*** Export Bike model ***
var Bike = module.exports = mongoose.model('bikes', BikeSchema);

module.exports.get = function (callback, limit) {
    Bike.find(callback).limit(limit);
}