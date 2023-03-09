// @ts-check

const express = require('express');

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  res.send('get method');
});

app.post('/', (req, res) => {
  res.send('post method');
});

app.put('/', (req, res) => {
  res.send('put method');
});

app.delete('/', (req, res) => {
  res.send('delete method');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 실행 중`);
});
