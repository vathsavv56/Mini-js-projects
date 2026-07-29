
const clock = document.getElementById("clock")

function updateClock(){
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    clock.textContent = `${hrs}:${mins}:${secs}`;
}

updateClock();

setInterval(updateClock , 1000)