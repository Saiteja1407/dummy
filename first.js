import http from 'http';
// const http=require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("hello");
}).listen(8000)