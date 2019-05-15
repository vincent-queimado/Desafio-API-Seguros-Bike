//clients_controller.js


//*** Import Client Model ***
var Client = require('../models/clients_model');
var clients = [];

exports.index = function(req, res) {
	Client.find({}, function(err, client) {
		if (err)
			res.send(err);
		res.render('index', {clients: client});
  });
};


//*** Start List **************************************************
exports.list = function(req, res) {
  Client.find({}, function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};

//*** End List ****************************************************


//*** Start Latest **************************************************
exports.latest = function(req, res) {
	var limit = 10;
	
	if (req.params.limit){
		limit = parseInt(req.params.limit);
	}
	
	Client.find({}, function(err, client) {
		if (err)
			res.send(err);
		
		res.json(client);
	}).sort({ field: 'desc', _id: -1 }).limit(limit);
};
//*** End Latest ****************************************************


//*** Start Counts **************************************************
exports.count = function(req, res) {
	Client.estimatedDocumentCount({}, function(err, client) {
		if (err)
		  res.send(err);
		
		if(client.length == 0){
			var count = [{count: 0}];
			res.json(count);
		}else{
			var count = [{count: client}];
			res.json(count);
		}
		
	});
};
//*** End Counts **************************************************

//*** Start Add **************************************************
exports.add = function(req, res) {

	  var new_client = new Client(req.body);
	  
	  console.log(req.body);
	  
	  new_client.save(function(err, client) {
			if (err)
				res.send(err);
			res.json(client);
	  });
};
//*** End Add **************************************************

exports.view = function(req, res) {
	console.log('View Client:' + req.params.id);
  Client.findById(req.params.id, function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};

//*** Start Updates **************************************************
exports.update = function(req, res) {
  Client.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};
//*** End Updates **************************************************

//*** Deletes
exports.delete = function(req, res) {
	
	console.log('Remove Client:' + req.params.id);
	Client.deleteOne({
		_id: req.params.id
	}, function(err, client) {
		if (err)
			res.send(err);
		res.json({ message: 'Client successfully deleted' });
  });
};

