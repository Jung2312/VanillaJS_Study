const loginform = document.querySelector("#login_form");
const loginInput = loginform.querySelector("input");
const loginbtn = loginform.querySelector("button");

function loginbtnClick(event)
{
    const username = loginInput.value;
    if(username == "")
    {
        alert("아이디를 입력해주세요.");
    }
    else if(username.length < 15)
    {
        alert("15자 이내로 입력하세요.");
        
    }
    else
    {
        console.log(username);
        alert("반갑습니다. " + username);
    }
}

loginbtn.addEventListener("click", loginbtnClick);

const link = document.querySelector("a");
function handleLinkClick(event)
{
    event.preventDefault();
    alert("링크를 클릭하셨습니다.");
}

link.addEventListener("click", handleLinkClick);


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