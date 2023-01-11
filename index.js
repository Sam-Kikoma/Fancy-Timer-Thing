const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pause = document.querySelector("#pause");

const timer = new Timer(durationInput, startBtn, pause, {
    onStart(){
        console.log("Timer is live my boy");
    },
    onTick(){
        console.log("Tick Tock");
    },
    onComplete(){
        console.log("Ding ding ding");
    }
});