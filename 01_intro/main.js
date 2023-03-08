// @ts-check
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // 잘 되었다는 뜻
  res.end('hello');
});
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`서버는 ${PORT}번으로 작동중`);
});
