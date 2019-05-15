//quotes_controller.js


//*** Import Quote Model ***
var Quote = require('../models/quotes_model');
var quotes = [];

exports.index = function(req, res) {
	Quote.find({}, function(err, quote) {
		if (err)
			res.send(err);
		res.render('index', {quotes: quote});
  });
};

exports.list = function(req, res) {
  Quote.find({}, function(err, quote) {
    if (err)
      res.send(err);
    res.json(quote);
  });
};

exports.latest = function(req, res) {
  Quote.find({}, function(err, quote) {
    if (err)
      res.send(err);
    res.json(quote);
  }).sort({ field: 'desc', _id: -1 }).limit(3);
};

exports.count = function(req, res) {
  Quote.estimatedDocumentCount({}, function(err, quote) {
    if (err)
      res.send(err);
    res.json(quote);
  });
};


exports.add = function(req, res) {
  var new_task = new Quote(req.body);
  console.log(req.body);
  new_task.save(function(err, quote) {
    if (err)
      res.send(err);
    res.json(quote);
  });
};


exports.view = function(req, res) {
  Quote.findById(req.params.id, function(err, quote) {
    if (err)
      res.send(err);
    res.json(quote);
  });
};


exports.update = function(req, res) {
  Quote.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, quote) {
    if (err)
      res.send(err);
    res.json(quote);
  });
};


exports.delete = function(req, res) {
  Quote.remove({
    _id: req.params.taskId
  }, function(err, quote) {
    if (err)
      res.send(err);
    res.json({ message: 'Quote successfully deleted' });
  });
};

