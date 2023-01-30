const playbtn = document.querySelector("#playbtn");
const message = document.querySelector("#message span:first-child");
const result = document.querySelector("#message span:last-child");

function getRandomt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function playEventhandler(event) {
  event.preventDefault();
  const maxNum = document.querySelector("#maxNum").value;
  const userNum = document.querySelector("#userNum").value;
  const random = getRandomt(0, maxNum);

  message.innerHTML = `You chose: ${userNum}, the machine chose: ${random}`;
  if (parseInt(userNum) === random) {
    result.innerHTML = "You won!";
  } else {
    result.innerHTML = "You lost!";
  }
}

playbtn.addEventListener("click", playEventhandler);
