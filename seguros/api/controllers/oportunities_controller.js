//oportunities_controller.js


//*** Import Oportunities Model ***
var Oportunity = require('../models/oportunities_model');
var oportunities = [];

exports.index = function(req, res) {
	Oportunity.find({}, function(err, quote) {
		if (err)
			res.send(err);
		res.render('index', {oportunities: oportunity});
  });
};


//*** Start List **************************************************
exports.list = function(req, res) {
	Oportunity.find({}, function(err, oportunity) {
		if (err)
			res.send(err);
		res.json(oportunity);
	});
};

exports.list_pending = function(req, res) {
  Oportunity.find({'oportunity.status':['pending']}, function(err, oportunity) {
    if (err)
      res.send(err);
    res.json(oportunity);
  });
};

exports.list_accepted = function(req, res) {
  Oportunity.find({'oportunity.status':['accepted']}, function(err, oportunity) {
    if (err)
      res.send(err);
    res.json(oportunity);
  });
};

exports.list_refused = function(req, res) {
  Oportunity.find({'oportunity.status':['refused']}, function(err, oportunity) {
    if (err)
      res.send(err);
    res.json(oportunity);
  });
};

//*** End List ****************************************************


//*** Start Latest **************************************************
exports.latest = function(req, res) {
	var limit = 10;
	
	if (req.params.limit){
		limit = parseInt(req.params.limit);
	}
	
	Oportunity.find({}, function(err, oportunity) {
		if (err)
			res.send(err);
		
		res.json(oportunity);
	}).sort({ field: 'desc', _id: -1 }).limit(limit);
};
//*** End Latest ****************************************************


//*** Start Counts **************************************************
exports.count = function(req, res) {
	Oportunity.estimatedDocumentCount({}, function(err, oportunity) {
		if (err)
		  res.send(err);
		
		if(oportunity.length == 0){
			var count = [{count: 0}];
			res.json(count);
		}else{
			var count = [{count: oportunity}];
			res.json(count);
		}
		
	});
};

exports.count_pending = function(req, res) {
	Oportunity.aggregate([
		{ $match: { 'oportunity.status': ['pending'] }},
		{ $count: "count"}
	],
	function(err, oportunity) {
			if (err)
				res.send(err);
			
			if(oportunity.length == 0){
				var count = [{count: 0}];
				res.json(count);
			}else{
				res.json(oportunity);
			}
	});
};

exports.count_accepted = function(req, res) {
	Oportunity.aggregate([
		{ $match: { 'oportunity.status': ['accepted'] }},
		{ $count: "count"}
	],
	function(err, oportunity) {
			if (err)
				res.send(err);
			
			if(oportunity.length == 0){
				var count = [{count: 0}];
				res.json(count);
			}else{
				res.json(oportunity);
			}
	});
};

exports.count_refused = function(req, res) {
	Oportunity.aggregate([
		{ $match: { 'oportunity.status': ['refused'] }},
		{ $count: "count"}
	],
	function(err, oportunity) {
			if (err)
				res.send(err);
			
			if(oportunity.length == 0){
				var count = [{count: 0}];
				res.json(count);
			}else{
				res.json(oportunity);
			}
	});
};

//*** End Counts **************************************************

//*** Start Add **************************************************
exports.add = function(req, res) {

	  var new_oportunity = new Oportunity(req.body);
	  
	  console.log('Add new oportunity.');
	  console.log(req.body);
	  
	  new_oportunity.save(function(err, oportunity) {
			if (err){
				console.log(err);
				res.send(err);
			}
			res.json(oportunity);
	  });
};
//*** End Add **************************************************

exports.view = function(req, res) {
	console.log('View oportunity:' + req.params.id);
  Oportunity.findById(req.params.id, function(err, oportunity) {
    if (err)
      res.send(err);
    res.json(oportunity);
  });
};

//*** Start Updates **************************************************
exports.update = function(req, res) {
  Oportunity.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, oportunity) {
    if (err)
      res.send(err);
    res.json(oportunity);
  });
};

exports.pending = function(req, res) {
	console.log("Change oportunity to pending: " + req.params.id);
	Oportunity.findOneAndUpdate({_id: req.params.id}, {'oportunity.status':['pending']}, {new: true}, function(err, oportunity) {
		if (err)
			res.send(err);
    
		res.json(oportunity);
	});
};

exports.accepted = function(req, res) {
	console.log("Change oportunity to accepted: " + req.params.id);
  Oportunity.findOneAndUpdate({_id: req.params.id}, {'oportunity.status':['accepted']}, {new: true}, function(err, oportunity) {
    if (err)
      res.send(err);
    res.json(oportunity);
  });
};

exports.refused = function(req, res) {
	console.log("Change oportunity to refused: " + req.params.id);
  Oportunity.findOneAndUpdate({_id: req.params.id}, {'oportunity.status':['refused']}, {new: true}, function(err, oportunity) {
    if (err)
      res.send(err);
    res.json(oportunity);
  });
};



exports.addInsuranceform = function(req, res) {
	console.log("Updating oportunity: " + req.params.id);
	console.log("Adding insurance form to oportunity: " + req.body.insuranceform);

	Oportunity.findOneAndUpdate({'_id': req.params.id}, { $set: { 'oportunity.insuranceform': req.body.insuranceform }},{new: true}, function(err, oportunity) {
		if (err){
			console.log(err);
			res.send(err);
		}
		console.log(oportunity);
		res.json(oportunity);
  });
};

exports.addInsurance = function(req, res) {
	console.log("Updating oportunity: " + req.params.id);
	console.log("Adding insurance to oportunity: " + req.body.insurance);
	console.log(req.body);
	
	Oportunity.findOneAndUpdate({_id: req.params.id}, { $set: { 'oportunity.insurance': req.body.insurance,  'oportunity.prime': req.body.prime, 'oportunity.payment': req.body.payment } }, {new: true}, function(err, oportunity) {
		if (err){
			console.log(err);
			res.send(err);
		}
		res.json(oportunity);
  });
};

//*** End Updates **************************************************

//*** Deletes
exports.delete = function(req, res) {
	
	console.log('Remove Quotation:' + req.params.id);
	Oportunity.deleteOne({
		_id: req.params.id
	}, function(err, oportunity) {
		if (err)
			res.send(err);
		res.json({ message: 'Oportunity successfully deleted' });
  });
};

