// // script.js
// let time = setInterval(() => {
//     let now = new Date().getTime();

//     console.log(now);

//     let days = Math.floor(now / 1000 / 60 / 60 / 24);


// }, 100);

let today = new Date("Jan 1, 2024 00:00:00");
console.log(today.getDate());  // Sunday=0, Monday=1, ..., Saturday=6

// script.js
function updateClock() {
    const now = new Date();
    // const years = now.getFullYear();
    // document.getElementById("years").innerHTML = years;
    // const months = String(now.getMonth() + 1).padStart(2, '0');
    // document.getElementById("months").innerHTML = months;
    const date = String(now.getDate()).padStart(2, '0');
    document.getElementById("date").innerHTML = date;
    const days = String(now.getDay()).padStart(2, '0');
    document.getElementById("days").innerHTML = days;
    const hours = String(now.getHours()).padStart(2, '0');
    document.getElementById("hours").innerHTML = hours;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes;
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds;
    
}

setInterval(updateClock, 1000);

// Initial call to display the time immediately on load
updateClock();


