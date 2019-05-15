//server.js

//************************************ VSales basic API server for tests ********************************************//
//*** File: server.js																							  ***//
//*** 																				  							  ***//
//*** Date:05/01/2019																							  ***//
//*** Author: Vincent Queimado																					  ***//
//*******************************************************************************************************************//


//******************************************* IMPORT LIBRARY PACKAGES ************************************************//

//*** Importing External Library Packages ***
var express 	= require('express');							//Express Framework library
var mongoose 	= require('mongoose');							//ODM library for MangoDB
var bodyParser 	= require('body-parser');						//JSON module parses
var path     	= require('path');								//Path library

//************************************************* IMPORT FILES *****************************************************//

//*** Importing Routes paths ***
var appRoutes 	= require('./routes/app-routes'); 					//Importing routes path
var apiRoutes 	= require('./routes/api-routes'); 					//Importing API routes path

//*** Importing DB models path ***
var dbConfig 	= require('./config/database');						//Importing Database path

//*** Importing DB models path***
var Oportunity 		= require('./api/models/oportunities_model'); 		//Importing and loading oportunities model
var Insurance 		= require('./api/models/insurances_model'); 		//Importing and loading insurances model
var Insurance_form	= require('./api/models/insurances_forms_model'); 	//Importing and loading insurances forms model
var Client 			= require('./api/models/clients_model'); 			//Importing and loading clients model
var Bike 			= require('./api/models/bikes_model'); 				//Importing and loading bikes model
			

//*********************************************** GLOBALS VARIABES  *************************************************//

//*** Application Settings ***
var app 		= express();									//Setting application instance
var port 		= process.env.PORT || 9090;						//Setting application port

var viewEngine  = 'ejs';										//Setting EJS engine view
var pathViews   = '/api/views';                          			//Setting view path folder
var pathPublic  = '/public';                         			//Setting public path folder (css, js, images, etc...)

//*** Labels ***
var appStartLbl	= 'API test server started on: ';
var dbSucLbl	= 'Successfully connected to the database.';						
var dbErrLbl	= 'Could not connect to the MongoDB database. Exiting now... ';

//**************************************************** CORE APP *****************************************************//

//*** Initialize Mongoose instance ***
mongoose.Promise = global.Promise; 								//Initialize the global mangoose promise library
mongoose.connect(dbConfig.url,{ useNewUrlParser: true })		//Initialize mongoose connection
	.then(() => {												//Success Connection
		console.log(dbSucLbl);									//Console success message
		})
	.catch(err => {												//Connexion Error 
		console.log(dbErrLbl, err);								//Console error message
		process.exit();											//Exit App
	});
		

//*** Initialize App ***
app.use(bodyParser.urlencoded({ extended: true }));				//Initialize Extended URL encoded
app.use(bodyParser.json());										//Initialize JSON parses

//*** Initialize Static path folder ***
app.use('/static', express.static(path.resolve(__dirname + pathPublic)));
											
app.use('/', appRoutes);										//Register the basics routes
app.use('/seguros/api', apiRoutes);								//Register the API routes

//*** Initialize View Engine ***
app.set('views', path.resolve(__dirname + pathViews));
app.set('view engine', viewEngine);
app.set('view options', {layout: false});

//*** Redirect Invalid URL ***
// app.get('*', function(req, res){								//Get invalids routes
	// //res.send('URL invalid! Please check your URL syntax.');
	// res.redirect('/');
// });

app.listen(port);												//Starting App and listening on port

console.log( appStartLbl + port);								//