let [hours,minutes,seconds] = [0,0,0]

let displayTime = document.getElementById("displayTime")

let timer = null

function watchStart(){
    if (timer !== null) 
    {
        clearInterval(timer)    
    } else if(timer == null) {
        timer = setInterval(stopwatch,1000)
    }
}

function stopwatch(){
    seconds++
    if (seconds == 60) 
    {
      seconds = 0
      minutes++

     
      if(minutes == 60)
      {
        minutes =0
        hours++
      }
  


    }
   
    displayTime.innerHTML = hours + ":" + minutes + ":" + seconds
}

function watchStop(){
    clearInterval(timer)
    timer = null
}

function watchReset(){
    [hours,minutes,seconds] = [0,0,0]
    displayTime.innerHTML = "00:00:00"
}





























// let [seconds,minutes,hours] = [0,0,0];
// let displayTime = document.getElementById("displayTime");

// let timer =null

// function watchStart(){
//     if(timer!==null){
//        clearInterval(timer)
//     }
//     else{
//         timer = setInterval(stopwatch,1000)
//     }
// }

// function stopwatch(){
//     seconds++;
//     if(seconds == 60){
//         seconds = 0;
//         minutes++;

//         if(minutes == 60)
//         {
//               minutes = 0;
//               hours++;
//         }
//     }


//     let h = hours <10 ? "0" + hours : hours;
//     let m = minutes <10 ? "0" + minutes:minutes
//     let s = seconds <10 ? "0" + seconds:seconds


//     displayTime.innerHTML = h+ ":" + m + ":" + s
// }

// function watchStop(){
//    clearInterval(timer)
// }

// function watchReset(){
//     clearInterval(timer)
//     [seconds,minutes,hours] = [0,0,0];
//     displayTime.innerHTML = "00:00:00";
// }