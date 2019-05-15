//api-routes.js


let router = require('express').Router();				// Initialize express router


//*** Set default API response ***
router.get('/', function (req, res) {
	res.json({
		status: 'API is working!',
		message: 'API example for online bike insurance oportunitiess.',
	});
});

//*** Import Oportunities Controller ***
var oportunitiesController 		= require('../api/controllers/oportunities_controller');
var bikesController 			= require('../api/controllers/bikes_controller');
var clientsController 			= require('../api/controllers/clients_controller');
var insurancesController 		= require('../api/controllers/insurances_controller');
var insurancesFormsController 	= require('../api/controllers/insurances_forms_controller');

//*** Oportunities Routes ***

router.route('/oportunities')
	.get(oportunitiesController.index);
	
	
router.route('/oportunities/list')
	.get(oportunitiesController.list);
	
router.route('/oportunities/list_pending')
	.get(oportunitiesController.list_pending);

router.route('/oportunities/list_accepted')
	.get(oportunitiesController.list_accepted);

router.route('/oportunities/list_refused')
	.get(oportunitiesController.list_refused);
	
router.route('/oportunities/latest')
	.get(oportunitiesController.latest);
	
router.route('/oportunities/latest/:limit')
	.get(oportunitiesController.latest);
	
router.route('/oportunities/count')
	.get(oportunitiesController.count);
	
router.route('/oportunities/count_pending')
	.get(oportunitiesController.count_pending);
	
router.route('/oportunities/count_accepted')
	.get(oportunitiesController.count_accepted);
	
router.route('/oportunities/count_refused')
	.get(oportunitiesController.count_refused);

router.route('/oportunities/add')
	.post(oportunitiesController.add);
	
router.route('/oportunities/add/insuranceform/:id')
	.post(oportunitiesController.addInsuranceform);
	
router.route('/oportunities/add/insurance/:id')
	.post(oportunitiesController.addInsurance);
	
router.route('/oportunities/view/:id')
	.get(oportunitiesController.view);
	
router.route('/oportunities/update/:id')
	.put(oportunitiesController.update);
	
router.route('/oportunities/pending/:id')
	.put(oportunitiesController.pending);
	
router.route('/oportunities/accepted/:id')
	.put(oportunitiesController.accepted);
	
router.route('/oportunities/refused/:id')
	.put(oportunitiesController.refused);
	
router.route('/oportunities/delete/:id')
	.delete(oportunitiesController.delete);

	
//*** Bikes Routes ***

router.route('/bikes/list')
	.get(bikesController.list);
	
router.route('/bikes/add')
	.post(bikesController.add);

router.route('/bikes/latest')
	.get(bikesController.latest);
	
router.route('/bikes/latest/:limit')
	.get(bikesController.latest);
	
router.route('/bikes/view/:id')
	.get(bikesController.view);
	
router.route('/bikes/delete/:id')
	.delete(bikesController.delete);

	
//*** Clients Routes ***

router.route('/clients/list')
	.get(clientsController.list);
	
router.route('/clients/add')
	.post(clientsController.add);

router.route('/clients/latest')
	.get(clientsController.latest);
	
router.route('/clients/latest/:limit')
	.get(clientsController.latest);

router.route('/clients/view/:id')
	.get(clientsController.view);
	
router.route('/clients/delete/:id')
	.delete(clientsController.delete);
	

	
//*** Insurances Forms Routes ***

router.route('/insurancesforms/list')
	.get(insurancesFormsController.list);
	
router.route('/insurancesforms/add')
	.post(insurancesFormsController.add);

router.route('/insurancesforms/latest')
	.get(insurancesFormsController.latest);
	
router.route('/insurancesforms/latest/:limit')
	.get(insurancesFormsController.latest);

router.route('/insurancesforms/view/:id')
	.get(insurancesFormsController.view);
	
router.route('/insurancesforms/delete/:id')
	.delete(insurancesFormsController.delete);
	
	
		
//*** Insurances Routes ***

router.route('/insurances/list')
	.get(insurancesController.list);
	
router.route('/insurances/add')
	.post(insurancesController.add);

router.route('/insurances/latest')
	.get(insurancesController.latest);
	
router.route('/insurances/latest/:limit')
	.get(insurancesController.latest);

router.route('/insurances/view/:id')
	.get(insurancesController.view);

router.route('/insurances/delete/:id')
	.delete(insurancesController.delete);
	
//*** Export API routes ***
module.exports = router;