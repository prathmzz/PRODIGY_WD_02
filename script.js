// Buttons Selector
const startBTN = document.getElementById('startBTN')
const pauseBTN = document.getElementById('pauseBTN')
const resetBTN = document.getElementById('resetBTN')

const TimerField = document.querySelector('#timer-wrapper .timer')

var timerStart = 0,
    now;
window.addEventListener('load', ()=>{
    startBTN.style.display = `flex`
})

class Timer{
    elapsedTime;
    currentTime;
    started;
    timerInterval;
    constructor(){
        this.elapsedTime = 0
    }
    timerIntervalFunc=()=>{
        console.log(this.currentTime)
        this.currentTime = Date.now() - this.started;
    }
    timerStart (){
        this.started = Date.now() - this.elapsedTime ;
        startBTN.innerHTML = `<span class="material-symbols-outlined">resume</span> Continue`
        startBTN.style.display = `none`
        pauseBTN.style.display = `flex`
        resetBTN.style.display = `flex`
        this.timerInterval = setInterval(()=>{
            this.currentTime = Date.now() - this.started;
            this.displayTimer()
        }, 0)
    } 

    displayTimer(){
        var timerData = this.currentTime
        this.elapsedTime = timerData
        var difMin = timerData / (1000 * 60);
        var min = Math.floor(difMin)
        var difsec = (difMin - min) * 60;
        var sec = Math.floor(difsec)
        var difms = 100 * (difsec - sec);
        var ms = Math.floor(difms)
        min = String(min).padStart(2, 0)
        sec = String(sec).padStart(2, 0)
        ms = String(ms).padStart(2, 0)
        
        TimerField.innerText = `${min}:${sec}:${ms}`
    }
    pauseTimer(){
        clearInterval(this.timerInterval)
        startBTN.style.display = `flex`
        pauseBTN.style.display = `none`
    }
    resetTimer(){
        clearInterval(this.timerInterval)
        startBTN.innerHTML = `<span class="material-symbols-outlined">play_arrow</span> Start`
        startBTN.style.display = `flex`
        pauseBTN.style.display = `none`
        resetBTN.style.display = `none`
        this.elapsedTime = 0
        TimerField.innerText = `00:00:00`
    }
}
let TimerObj = new Timer();
window.addEventListener('load', ()=>{
    startBTN.style.display = `flex`;
})
startBTN.addEventListener('click', ()=>{
    TimerObj.timerStart()
})
pauseBTN.addEventListener('click', ()=>{
    TimerObj.pauseTimer()
})
resetBTN.addEventListener('click', ()=>{
    TimerObj.resetTimer()
})


