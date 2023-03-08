const promise = new Promise((resolve, reject) => {
  const jack = 'old';
  if (jack === 'old') {
    setTimeout(() => {
      resolve('jack is old');
    }, 3000);
  } else {
    reject('jack is getting old');
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
