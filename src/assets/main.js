let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    setHiddenFields();
}

function setHiddenFields() {
  attempt = 0;
  var answer = Math.floor(Math.random() * 10000).toString();

  while(answer < 4) {
    answer ++;
  }
  return answer;
}

console.log(setHiddenFields());
