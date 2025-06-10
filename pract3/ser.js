const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home page');
  } else if (req.url === '/name') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Vikram Kumar Sahu');
  } else if (req.url === '/json') {
    const data = { name: 'Node.js', type: 'Runtime' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
