const http= require('http');
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ message: 'Hello from server', success: true }));

    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end('About Us');
    }else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Page Not Found');
    }
});
server.listen(3000,()=> {
    console.log(`Server running on http://localhost:3000`);
});