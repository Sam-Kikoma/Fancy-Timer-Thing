class Timer{
    constructor(durationInput, startBtn, pauseBtn,callBacks){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.startBtn.addEventListener("click", this.start);
        this.pauseBtn.addEventListener("click", this.pause);
        if(callBacks){
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 30);
   };

   pause = () => {
        clearInterval(this.interval);
   };

   tick = () => {
    if(this.timeRemaining <= 0){
        if(this.onComplete){
            this.onComplete();
        }
        this.pause();
    }else{
        this.timeRemaining = this.timeRemaining - 0.03;
        if(this.onTick){
            this.onTick(this.timeRemaining);
        }
    }
   };

   get timeRemaining(){
        return parseFloat(this.durationInput.value);
   };

   set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
   };
}