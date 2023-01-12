const clock = document.querySelector("h2#clock");

function getClock()
{
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock(); // 실행하자마자 미리 출력
setInterval(getClock, 1000); // 1초마다 getClock 함수를 실행한다.

//setTimeout(getClock, 5000); // 5초 후에 getClock 함수를 실행한다.