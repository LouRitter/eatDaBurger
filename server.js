var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var method = require('method-override')
var exphbs = require('express-handlebars');
var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 80; // Sets an initial port. We'll use this later in our listener
var orm   =   require('./burger/config/orm.js');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({
    extended: false
}));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// --------------------------------------------------------

// -------------------------------------------
app.get('/', function(req, res) {

  orm.allBurgers(function(x){
  	  res.render('index', {x});
  })
});
app.post('/burgers', function(req, res) {
	var name= req.body.name;
	console.log(req.body.name);

	orm.addBurgers(req.body.name, function (x){
		console.log(x);
		res.redirect('/');

	});
});
app.post('/eaten', function(req,res){
	orm.eatBurgers(req.body.name, function(x){
		console.log(x);
	});
});
// ----------------------------------------------
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
