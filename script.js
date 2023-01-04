const num = 3;
const name = "John";
let name2 = "John";

console.log(num-1);
console.log(num+1);
console.log(num/1);
console.log(num*1);

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

arr.push(11);

arr.forEach((item) => {
    console.log(item);
}); 

// 객체(Object)
let player = {
    name: "John",
    points: 100,
};

console.log(player);
console.log(player.name);

const player2 = {
    name: "John",
    points: 100,
};

// 프로퍼티 추가
player2.age = 2;
player.age = 2;

// const 오류가 안나는 경우
player.name = "jung";

// const 오류가 나는 경우
//player2 = "jung";

// 매개변수에 자료형 필요 없음
function printName(name, age) {
    console.log(name + " " + age);
    return name + " " + age;
}

//alert(printName(player.name, player.age));

const player3 = {
    name: "John",
    points: 100,

    // 함수와 동일
    sayHello: function(otherName) {
        console.log("hello " + otherName + " nice to meet you");
    }
};

player3.sayHello("jung");

// 계산기
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    power: function(a, b) {
        return a ** b;
    },
};

console.log(calculator.add(1, 2));
console.log(calculator.minus(1, 2));
console.log(calculator.divide(1, 2));
console.log(calculator.multiply(1, 2));
console.log(calculator.power(1, 2));

// 한국 나이 계산
const age = 96;

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}


// 조건문
//const number = parseInt(prompt("숫자를 입력하세요")); // 입력

console.log(typeof parseInt(num));

// NaN 판별
if (isNaN(num)) {
    console.log("숫자가 아닙니다.");
}

// document를 통해 html에 접근
document.title = "title";

console.log(document.getElementById("TITLE"));
const title = document.getElementById("TITLE");

// TITLE이란 id를 가진 태그의 내용을 title로 변경
document.getElementById("TITLE").innerText = "title";
title.innerText = "title";

// hi란 classname을 가진 태그의 내용을 class로 변경
const Classn = document.getElementsByClassName("hi");
const Classn2 = document.getElementsByClassName("hello");

// 해당 클래스 네임을 가진 첫번째 객체만 가져옴
let ele = document.querySelector(".hello h1");
ele = document.querySelector(".hello h1:first-child");
console.log(ele.innerText);

// 해당 클래스 네임을 가진 모든 객체 가져옴
ele = document.querySelectorAll(".hello h1");
console.log(ele);

// 해당 id를 가진 객체 가져옴
ele = document.querySelector("#TITLE");
console.log(ele);


// 이벤트

ele.innerText = "Click";

function handleTitleClick() {
    ele.style.color = "blue";
}

function handleMouseEnter() {
    ele.style.color = "red";
}

// 오류 -> ele.addEventListener("click", handleTitleClick());
ele.addEventListener("click", handleTitleClick);
ele.addEventListener("mouseenter", handleMouseEnter);


// 창 사이즈 변경 이벤트
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);


// 창 복사 이벤트(ctrl + c)
function handleWindowCopy() {
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);

// 인터넷 연결 확인 이벤트
function handleOffline() {
    alert("SOS no WIFI");
}

function handleOnline() {
    alert("ALL GOOD");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);