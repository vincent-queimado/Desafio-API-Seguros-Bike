//routes.js

let router = require('express').Router();				// Initialize express router

//*** Set defaults API responses ***
router.get('/', function (req, res) {
	res.redirect('/seguros');
});

router.get('/seguros', function (req, res) {
	res.render('home');
});

router.get('/seguros/apis', function (req, res) {
	res.render('apis');
});

router.get('/seguros/codes', function (req, res) {
	res.render('codes');
});

//*** APP Routes

router.get('/seguros/app/', function (req, res) {
	res.render('dashboard');
});

router.get('/seguros/app/dashboard', function (req, res) {
	res.render('dashboard');
});

router.get('/seguros/app/oportunities_new', function (req, res) {
	res.render('oportunities_new');
});

router.get('/seguros/app/oportunities_list', function (req, res) {
	res.render('oportunities_list');
});

router.get('/seguros/app/insured_list', function (req, res) {
	res.render('insured_list');
});

router.get('/seguros/app/view_quotes', function (req, res) {
	res.render('view_quotes');
});

router.get('/seguros/app/insurances_list', function (req, res) {
	res.render('insurances_list');
});

router.get('/seguros/app/profile', function (req, res) {
	res.render('profile');
});

router.get('/seguros/app/support', function (req, res) {
	res.render('support');
});



//*** Export API routes ***
module.exports = router;