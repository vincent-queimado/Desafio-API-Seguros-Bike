//bikes_controller.js


//*** Import Bikes Model ***
var Bike = require('../models/bikes_model');
var bikes = [];

exports.index = function(req, res) {
	Bike.find({}, function(err, bike) {
		if (err)
			res.send(err);
		res.render('index', {bikes: bike});
  });
};


//*** Start List **************************************************
exports.list = function(req, res) {
  Bike.find({}, function(err, bike) {
    if (err)
      res.send(err);
    res.json(bike);
  });
};
//*** End List ****************************************************


//*** Start Latest **************************************************
exports.latest = function(req, res) {
	var limit = 10;
	
	if (req.params.limit){
		limit = parseInt(req.params.limit);
	}
	
	Bike.find({}, function(err, bike) {
		if (err)
			res.send(err);
		
		res.json(bike);
	}).sort({ field: 'desc', _id: -1 }).limit(limit);
};
//*** End Latest ****************************************************


//*** Start Counts **************************************************
exports.count = function(req, res) {
	Bike.estimatedDocumentCount({}, function(err, bike) {
		if (err)
		  res.send(err);
		
		if(bike.length == 0){
			var count = [{count: 0}];
			res.json(count);
		}else{
			var count = [{count: bike}];
			res.json(count);
		}
		
	});
};
//*** End Counts **************************************************

//*** Start Add **************************************************
exports.add = function(req, res) {
	console.log(req.body);
	var new_bike = new Bike(req.body);

	new_bike.save(function(err, bike) {
		if (err)
			res.send(err);
		res.json(bike);
	});
};
//*** End Add **************************************************

exports.view = function(req, res) {
	console.log('View Bike:' + req.params.id);
	Bike.findById(req.params.id, function(err, bike) {
		if (err)
			res.send(err);
		res.json(bike);
	});
};

//*** Start Updates **************************************************
exports.update = function(req, res) {
	Bike.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, bike) {
		if (err)
			res.send(err);
		res.json(bike);
	});
};
//*** End Updates **************************************************

//*** Deletes
exports.delete = function(req, res) {
	console.log('Remove Bike:' + req.params.id);
	
	Bike.deleteOne({
		_id: req.params.id
	}, function(err, bike) {
		if (err)
			res.send(err);
		res.json({ message: 'Bike successfully deleted' });
  });
};

