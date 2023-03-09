// @ts-check

const express = require('express');

const app = express();

const PORT = 4000;

const userRouter = require('./routes/users');

app.set('view engine', 'ejs');
// console.log(__dirname);
app.use(express.static('public'));
// app.use(express.static('views'));
// app.use('/css', express.static(__dirname + '/views/css'));
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('hello, express world');
});

// http://localhost:4000/users
// http://127.0.0.1:4000/users

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행`);
});
