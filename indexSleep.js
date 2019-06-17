
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World ' + new Date() +'\n');
  sleepFor(5000);
  console.log('Fin sleep' + new Date() +'\n');

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');