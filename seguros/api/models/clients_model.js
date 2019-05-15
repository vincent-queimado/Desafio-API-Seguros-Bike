//clients_models.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//*** Quote Schema ****
var ClientSchema = new Schema({
	client: {
		type: {
			type: [{
				type: String,
				enum: ['PF', 'PJ'],
				required: 'Client type'
			}],
			default: ['PF']
		},
		name: {
			type: String,
			uppercase: true,
			required: 'Client name'
		},
		identity: {
			type: String,
			required: 'Client identity'
		},
		
		contact: {
			email: {
				uppercase: true,
				type: String,
				required: 'Email contact'
			},
			phone1: {
				type: String
			},
			phone2: {
				type: String
			},
		},
			
		address: {
			zipcode: {
				type: String,
			},
			streetname: {
				type: String,
				uppercase: true,
			},
			streetnumber: {
				type: String,
				uppercase: true,
			},
			neighborhood: {
				type: String,
				uppercase: true,
			},
			city: {
				type: String,
				uppercase: true,
				required: 'City address'
			},
			state: {
				type: String,
				uppercase: true,
				required: 'State address'
			},
			country: {
				type: String,
				uppercase: true,
				required: 'Country address'
			},
		},

		created_date: {
			type: Date,
			default: Date.now
		}
	}
});


//*** Export Quote model ***
var Client = module.exports = mongoose.model('clients', ClientSchema);

module.exports.get = function (callback, limit) {
    Client.find(callback).limit(limit);
}