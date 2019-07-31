import '@babel/polyfill';
import http from 'http';

const requestHandler = (req, res) => {
  res.writeHead(200, 'text/plain');
  res.end('Hello World 4');
};

const server = http.createServer(requestHandler);
server.listen(9099);
