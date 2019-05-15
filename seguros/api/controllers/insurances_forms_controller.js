//insurances_forms_controller.js


//*** Import Insurance_forms Model ***
var Insurance_form = require('../models/insurances_forms_model');
var insurances_forms = [];

exports.index = function(req, res) {
	Insurance_form.find({}, function(err, insurance_form) {
		if (err)
			res.send(err);
		res.render('index', {insurances_forms: insurance_form});
  });
};


//*** Start List **************************************************
exports.list = function(req, res) {
  Insurance_form.find({}, function(err, insurance_form) {
    if (err)
      res.send(err);
    res.json(insurance_form);
  });
};
//*** End List ****************************************************


//*** Start Latest **************************************************
exports.latest = function(req, res) {
	var limit = 10;
	
	if (req.params.limit){
		limit = parseInt(req.params.limit);
	}
	
	Insurance_form.find({}, function(err, insurance_form) {
		if (err)
			res.send(err);
		
		res.json(insurance_form);
	}).sort({ field: 'desc', _id: -1 }).limit(limit);
};
//*** End Latest ****************************************************


//*** Start Counts **************************************************
exports.count = function(req, res) {
	Insurance_form.estimatedDocumentCount({}, function(err, insurance_form) {
		if (err)
		  res.send(err);
		
		if(insurance_form.length == 0){
			var count = [{count: 0}];
			res.json(count);
		}else{
			var count = [{count: insurance_form}];
			res.json(count);
		}
		
	});
};
//*** End Counts **************************************************

//*** Start Add **************************************************
exports.add = function(req, res) {

	  var new_insurance_form = new Insurance_form(req.body);
	  
	  console.log(req.body);
	  
	  new_insurance_form.save(function(err, insurance_form) {
			if (err){
				console.log(err);
				res.send(err);
			}
			res.json(insurance_form);
	  });
};
//*** End Add **************************************************

exports.view = function(req, res) {
	console.log('View Insurance form:' + req.params.id);
  Insurance_form.findById(req.params.id, function(err, insurance_form) {
    if (err)
      res.send(err);
    res.json(insurance_form);
  });
};

//*** Start Updates **************************************************
exports.update = function(req, res) {
  Insurance_form.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, insurance_form) {
    if (err)
      res.send(err);
    res.json(insurance_form);
  });
};
//*** End Updates **************************************************

//*** Deletes
exports.delete = function(req, res) {
	
	console.log('Remove Insurance_form:' + req.params.id);
	Insurance_form.deleteOne({
		_id: req.params.id
	}, function(err, insurance_form) {
		if (err)
			res.send(err);
		res.json({ message: 'Insurance form successfully deleted' });
  });
};

