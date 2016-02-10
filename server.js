var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post('/contactlist',function(req,res){
	console.log("I got a GET request");
	db.contactlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.delete('/contactlist/:id', function(req, res){
	var id = req.params.id;
	db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
		console.log("Lets see waht is doc - ", doc);
	})
});

app.post('/add_contact', function(req, res){
	console.log( req.params);
	console.log( req.query);
	console.log(req.body);
	res.send("Yeeeeee");
})

app.get('/contactlist/:id', function(req, res){

})

app.listen(3000);
console.log("Server running on port 3000 __ ;");