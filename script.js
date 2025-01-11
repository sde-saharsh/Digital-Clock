const hour = document.getElementById("hours");
const min = document.getElementById("mins");
const sec = document.getElementById("secs");
const btn = document.getElementById("btn");
const btnTag = document.getElementById("btn_tag");
const dateElem = document.getElementById("date");
const dayElem = document.getElementById("day");

let clockFormat24 = true;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => {
    const currentTime = new Date();
    
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    
    let period = "";
    if (!clockFormat24) {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12; 
    }
    hours = hours.toString().padStart(2, "0");
    
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    dateElem.innerHTML = `${months[currentTime.getMonth()]} ${currentTime.getDate()}, ${currentTime.getFullYear()}`;
    dayElem.innerHTML = days[currentTime.getDay()] + period;
}, 1000);

btn.addEventListener("click", function () {
    clockFormat24 = !clockFormat24;
    btnTag.textContent = clockFormat24 ? "12 Hours Clock" : "24 Hours Clock";
});
