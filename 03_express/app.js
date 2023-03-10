// @ts-nocheck

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 4000;

const mainRouter = require('./routes/index');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('views'));
// app.use('/css', express.static(__dirname + '/views/css'));
app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
  res.send('hello, express world');
});

// http://localhost:4000/users
// http://127.0.0.1:4000/users

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + `</br><a href="/">홈으로</a>`);
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행`);
});
