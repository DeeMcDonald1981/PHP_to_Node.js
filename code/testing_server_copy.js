const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    if(req.method === 'GET'){
      let filePath = path.join(__dirname, 'public2', req.url === '/' ? 'testing_server.html': req.url);
      let contentType = 'text/html';
  
      const extname = path.extname(filePath);
      if(extname === '.css') contentType = 'text/css';
      if(extname === '.js') contentType = 'text/javascript';
      
  
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('Not Found');
        } else {
          res.writeHead(200, {'Content-Type': contentType});
          res.end(content, 'utf8');
        }
      });
    }
})


server.listen(3000, ()=>{
  console.log('Sever running on http://locahost:3000');
})