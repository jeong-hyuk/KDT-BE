// @ts-check

const express = require('express');

const app = express();
const userRouter = express.Router();

const PORT = 4000;

const USER = {
  1: {
    id: 'jack',
    name: '김정혁',
  },
  2: {
    id: 'aaaa',
    name: 'bbbb',
  },
};

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('hello, express world');
});

// http://localhost:4000/users
// http://127.0.0.1:4000/users
userRouter.get('/', (req, res) => {
  res.send(USER);
});

userRouter.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});

userRouter.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name)
    return res.end('쿼리 입력이 잘못 되었습니다.');
  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };
  USER[Object.keys(USER).length + 1] = newUser;

  res.send('회원 등록 완료');
});

userRouter.put('/modify/:id', (req, res) => {
  if (req.query.id && req.query.name) {
    if (req.params.id in USER) {
      USER[req.params.id] = {
        id: req.query.id,
        name: req.query.name,
      };
      res.send('회원 정보 수정 완료');
    } else {
      res.send('해당 id를 가진 회원이 없습니다.');
    }
  } else {
    res.send('쿼리 입력이 잘못 되었습니다.');
  }
});

userRouter.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send('회원 삭제 완료');
  } else {
    res.send('해당 id를 가진 회원이 없습니다.');
  }
});
app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행`);
});
