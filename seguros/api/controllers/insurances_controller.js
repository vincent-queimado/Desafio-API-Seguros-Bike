//insurances_controller.js


//*** Import Insurance Model ***
var Insurance = require('../models/insurances_model');
var insurances = [];

exports.index = function(req, res) {
	Insurance.find({}, function(err, insurance) {
		if (err)
			res.send(err);
		res.render('index', {insurances: insurance});
  });
};


//*** Start List **************************************************
exports.list = function(req, res) {
  Insurance.find({}, function(err, insurance) {
    if (err)
      res.send(err);
    res.json(insurance);
  });
};


//*** End List ****************************************************


//*** Start Latest **************************************************
exports.latest = function(req, res) {
	var limit = 10;
	
	if (req.params.limit){
		limit = parseInt(req.params.limit);
	}
	
	Insurance.find({}, function(err, insurance) {
		if (err)
			res.send(err);
		
		res.json(insurance);
	}).sort({ field: 'desc', _id: -1 }).limit(limit);
};
//*** End Latest ****************************************************


//*** Start Counts **************************************************
exports.count = function(req, res) {
	Insurance.estimatedDocumentCount({}, function(err, insurance) {
		if (err)
		  res.send(err);
		
		if(insurance.length == 0){
			var count = [{count: 0}];
			res.json(count);
		}else{
			var count = [{count: insurance}];
			res.json(count);
		}
		
	});
};
//*** End Counts **************************************************

//*** Start Add **************************************************
exports.add = function(req, res) {

	  var new_insurance = new Insurance(req.body);
	  
	  console.log(req.body);
	  
	  new_insurance.save(function(err, insurance) {
			if (err)
				res.send(err);
			res.json(insurance);
	  });
};
//*** End Add **************************************************

exports.view = function(req, res) {
	console.log('View Insurance:' + req.params.id);
  Insurance.findById(req.params.id, function(err, insurance) {
    if (err)
      res.send(err);
    res.json(insurance);
  });
};

//*** Start Updates **************************************************
exports.update = function(req, res) {
  Insurance.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, insurance) {
    if (err)
      res.send(err);
    res.json(insurance);
  });
};
//*** End Updates **************************************************

//*** Deletes
exports.delete = function(req, res) {
	
	console.log('Remove Insurance:' + req.params.id);
	Insurance.deleteOne({
		_id: req.params.id
	}, function(err, insurance) {
		if (err)
			res.send(err);
		res.json({ message: 'Insurance successfully deleted' });
  });
};

