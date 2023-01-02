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

alert(printName(player.name, player.age));

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
const number = parseInt(prompt("숫자를 입력하세요")); // 입력

console.log(typeof parseInt(number));

// NaN 판별
if (isNaN(number)) {
    console.log("숫자가 아닙니다.");
}