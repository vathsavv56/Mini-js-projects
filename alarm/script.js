const inp = document.getElementById("timeInp");
const btn = document.getElementById("btn");
const alarm = document.getElementById("alarm")

let alarmTime =  "";

btn.addEventListener("click" , function(){
    alarmTime = inp.value;
    console.log(`alarm set at ${alarmTime}`);
    
})


setInterval(()=>{
    const date = new Date();
     const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const currentTime = `${hours}:${minutes}`;

    if (currentTime === alarmTime) {
        alarm.play();
        alarmTime = "";
    }
} , 1000)
