//routes.js

let router = require('express').Router();				// Initialize express router

//*** Set defaults API responses ***
router.get('/', function (req, res) {
	res.redirect('/insurance');
});

router.get('/insurance', function (req, res) {
	res.render('home');
});

router.get('/insurance/app/dashboard', function (req, res) {
	res.render('dashboard');
});

router.get('/insurance/app/online_quotes', function (req, res) {
	res.render('online_quotes');
});

router.get('/insurance/app/list_quotes', function (req, res) {
	res.render('list_quotes');
});

router.get('/insurance/app/list_insurances', function (req, res) {
	res.render('list_insurances');
});

router.get('/insurance/app/profile', function (req, res) {
	res.render('profile');
});

router.get('/insurance/app/support', function (req, res) {
	res.render('support');
});

router.get('/insurance/app/apis', function (req, res) {
	res.render('home');
});

router.get('/insurance/app/codes', function (req, res) {
	res.render('home');
});


//*** Export API routes ***
module.exports = router;