// @ts-check

const express = require('express');

const app = express();

const PORT = 4000;

// http://localhost:4000/api
app.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  res.send('response end');
});
app.use((req, res, next) => {
  console.log('미들웨어 2');
  res.send('응답');
  next();
  console.log('next 아래에 있는 콜솔 로그');
});
app.use((req, res, next) => {
  console.log('미들웨어 3');
});
app.listen(PORT, () => {
  console.log(`익스프레스 서버는 ${PORT}번 포트에서 작동중`);
});
