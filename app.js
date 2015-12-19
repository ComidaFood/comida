//app.js
var http = require ("http");

var server = http.createServer (function (req, res) {
  res.writeHead (200);
  res.end (String (data));
});
server.listen (3000);
