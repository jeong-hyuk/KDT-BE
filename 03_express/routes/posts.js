const express = require('express');

const router = express.Router();

const POST = [
  {
    title: 'ddddd',
    content: 'aaaaa',
  },
];

router.get('/', (req, res) => {
  res.render('posts', { POST, userCounts: POST.length });
});

router.post('/add', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.content) {
      const newPost = {
        post: req.query.post,
        content: req.query.content,
      };
      POST.push(newPost);

      res.send('포스트 함');
    } else {
      const err = new Error('쿼리 입력이 잘못되었습니다');
      err.statusCode = 404;
      throw err;
    }
  } else if (req.body) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };
      POST.push(newPost);

      res.redirect('/posts');
    } else {
      const err = new Error('폼 태그 입력을 확인하세요');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입려되지 않았습니다');
    err.statusCode = 404;
    throw err;
  }
});

router.put('/modify/:title', (req, res) => {
  if (req.query.content) {
    const postIndex = POST.findIndex((post) => post.title === req.params.title);
    if (userIndex !== -1) {
      POST[postIndex] = {
        title: req.body.title,
        content: req.body.content,
      };
      res.send('타이틀 수정 완료');
    } else {
      const err = new Error('해당 타이틀은 않습니다');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('쿼리 입력이 잘못 되었습니다');
    err.statusCode = 400;
    throw err;
  }
});

router.delete('/delete/:title', (req, res) => {
  const postIndex = USER.findIndex((post) => post.title === req.params.title);
  if (postIndex !== -1) {
    POST.splice(postIndex, 1);
    res.send('타이틀 삭제 완료');
  } else {
    const err = new Error('해당 타이틀은 존재하지 않습니다');
    err.statusCode = 404;
    throw err;
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>title</h1>');

  for (let i = 0; i < POST.length; i++) {
    res.write(`<h2>title : ${POST[i].title}</h2>`);
    res.write(`<h2>content : ${POST[i].content}</h2>`);
  }
  res.end();
});

module.exports = router;
