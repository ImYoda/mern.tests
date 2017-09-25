ReactDOM.render(
			<h1>Hello, world!</h1>,
			document.getElementById('example')
			);

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
