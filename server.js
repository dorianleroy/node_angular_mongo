var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);

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
	console.log("Contact has to be inserted", req.params)
})

app.get('/contactlist/:id', function(req, res){

})

app.listen(3000);
console.log("Server running on port 3000 __ ;");