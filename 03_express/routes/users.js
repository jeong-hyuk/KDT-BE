// @ts-check

const express = require('express');

const router = express.Router();

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

const USER_ARR = [
  {
    id: 'jack',
    name: '김정혁',
    email: 'asasasasas@naver.com',
  },
  {
    id: 'aaaa',
    name: '1111',
    email: 'mkmkmkmkmkmkm@naver.com',
  },
];

//http://localhost:4000/users
router.get('/', (req, res) => {
  res.render('users', { USER_ARR, userCounts: USER_ARR.length });
});

router.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});

router.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name)
    return res.end('쿼리 입력이 잘못 되었습니다.');
  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };
  USER[Object.keys(USER).length + 1] = newUser;

  res.send('회원 등록 완료');
});

router.put('/modify/:id', (req, res) => {
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

router.delete('/delete/:id', (req, res) => {
  if (req.params.id in USER) {
    delete USER[req.params.id];
    res.send('회원 삭제 완료');
  } else {
    res.send('해당 id를 가진 회원이 없습니다.');
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, dynamic web page</h1>');

  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
  }
  res.end();
});

// router.get('/ejs', (req, res) => {
//   const userCounts = USER_ARR.length;
//   res.render('index', { USER_ARR, userCounts });
// });

module.exports = router;
