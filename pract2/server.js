//tmport http
const http = require('http');
//create server
const server = http.createServer((req,res) => {
    //set response header
    res.writeHead(200, {'Content-Type':'text/plain'});
    //write response body
    res.write('Hello');
    //end the response
    res.end();

});
//server listen on port 3000
server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/')
});