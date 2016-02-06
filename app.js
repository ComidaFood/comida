var template = require ("swig");
var html = template.renderFile ("template.html", {
	recipes: data
});
var http = require ("http");
var server = http.createServer (function (req, res) {
	res.writeHead (2000);
	res.end (html);
});
server.listen (3000);
