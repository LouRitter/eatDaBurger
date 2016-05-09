var express   =   require('express');
var router    =   require('router');
var burger    =   require('../model/burger.js');

var path = require('path');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
	
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.handlebars'));
	});
	
	app.get('/api/burgers', function(req, res){
		res.json(burgerData);
	});

	app.post('/api/burgers',function(req,res){
		var burger = req.body;
		orm.addBurgers(burger,function(data){
		});
	
	});

};