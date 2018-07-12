var express = require("express");
console.log("What is express? ", express);

var app = express();
console.log("What's app", app);

app.get('/', function(req, res){
	console.log("req". req);
	console.log("res", res);

	res.send("<h1>Hello Express</h1>")
})

app.listen(6789. function(){
	console.log("listening on port 6789")
})