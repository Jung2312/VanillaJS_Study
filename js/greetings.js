// HTML을 통해 조건을 주지 않고 글자수, 공백 확인
const loginform2 = document.querySelector("#form");
const loginInput2 = loginform2.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_C = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event)
{
    event.preventDefault(); // 기본적으로 발생하는 이벤트를 막는다.
    const username2 = loginInput2.value;

    loginform2.classList.add(HIDDEN_C);
    paintGreetings(username2);
    localStorage.setItem(USERNAME_KEY, username2);
}

loginform2.addEventListener("submit", onLoginSubmit);

function paintGreetings(username)
{
    greeting.innerText = `${username} 님, 환영합니다.`;
    greeting.classList.remove(HIDDEN_C);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null)
{
    loginform2.classList.remove(HIDDEN_C);
    loginform2.addEventListener("submit", onLoginSubmit);
}
else
{
    paintGreetings(savedUsername);
}