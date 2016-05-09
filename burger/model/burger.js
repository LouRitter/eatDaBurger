var orm   =   require('../config/orm.js');


module.exports = function(app){
app.post('/', function(req, res) {
	var name= req.body.name;
	orm.addBurgers(name, function (req, res){

	});

	orm.allBurgers(function(req,res){
	res.json
	});
};