const playbtn = document.querySelector("#playbtn");
const message = document.querySelector("#message span:first-child");
const result = document.querySelector("#message span:last-child");

function getRandomt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function getResult(userNum, random) {
  if (parseInt(userNum) === random) {
    result.innerHTML = "You won!";
  } else {
    result.innerHTML = "You lost!";
  }
}

function playEventhandler(event) {
  event.preventDefault();
  const maxNum = document.querySelector("#maxNum").value;
  const userNum = document.querySelector("#userNum").value;

  if (userNum === "" || maxNum === "") {
    alert("숫자를 모두 입력하세요.");
  } else if (userNum < 0 || maxNum < 0) {
    alert("정수를 입력하세요.");
  } else if (userNum > maxNum) {
    alert("범위보다 작은 값을 입력하세요.");
  } else {
    const random = getRandomt(0, maxNum);
    message.innerHTML = `You chose: ${userNum}, the machine chose: ${random}`;
    getResult(userNum, random);
  }
}

playbtn.addEventListener("click", playEventhandler);
