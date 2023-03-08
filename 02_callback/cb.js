function func1(callback) {
  console.log('1번 함수');
  callback(func3);
}

function func2(callback) {
  console.log('2번 함수');
  callback();
}
function func3() {
  console.log('3번 함수');
}
// func1(func2);
func1(() => {
  console.log('2번 인척하는 새로운 익명 함수');
});

function multiplication(number, callback) {
  let answer = 0;
  setTimeout(() => {
    answer = number * number;
    callback(answer);
  });
}
function say(result) {
  console.log(result);
}

multiplication(3, say);
