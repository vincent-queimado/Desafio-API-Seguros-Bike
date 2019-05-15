//insurances_models.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//*** Quote Schema ****
var InsuranceSchema = new Schema({
	insurance: {
		name: {
			type: String,
			uppercase: true,
			required: 'Name of insurance is required'
		},
		
		register_number: {
			type: String,
			uppercase: true,
			required: 'Register number of insurance is required'
		},
		
		geographical_coverage: {
			AC: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			AL: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			AP: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			AM: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			BA: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			CE: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			DF: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			ES: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			GO: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			MA: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			MT: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			MS: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			MG: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			PA: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			PB: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			PR: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			PE: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			PI: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			RJ: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			RN: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			RS: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			RO: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			RR: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			SC: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			SP: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			SE: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			TO: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			}

		},

		risk_coverage: {
			loss: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
			theft: {
				type: [{
					type: String,
					enum: ['no', 'yes']
				}],
				default: ['no']
			},
		},
		
		risk_factor: {
			type: String,
			required: 'Risk factor of insurance is required'
		},
		
		expenses: {
			type: String,
			required: 'Expenses of insurance is required'
		},
		
		taxes: {
			type: String,
			required: 'Taxes of insurance is required'
		},
		
		profit: {
			type: String,
			required: 'Profit of insurance is required'
		},
		
		created_date: {
			type: Date,
			default: Date.now
		}
	}
});


//*** Export Quote model ***
var Insurance = module.exports = mongoose.model('insurances', InsuranceSchema);

module.exports.get = function (callback, limit) {
    Insurance.find(callback).limit(limit);
}