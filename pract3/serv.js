const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Welcome to Home Page</h1></body></html>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about page');
  } else if (req.url === '/json') {
    const data = { name: 'Vikram', age: 22 };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}]`);
    res.end(`<html><body><span>Vikram: this is contact</span><h2>${time}</h2></body></html>`);
  } else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found');
  }
});

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
