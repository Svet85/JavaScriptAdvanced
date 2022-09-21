function walk(steps, foot, speed) {
    let len = Math.round(steps * foot);
    let breaksMinutes = Math.floor(len / 500);
    let time = Math.round((len / (speed * 1000)) * 3600);
    
    let hours = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let seconds = time - ((hours * 3600) + (mins * 60));

    if (mins + breaksMinutes > 59) {
        hours++;
        mins = (mins + breaksMinutes) - 60; 
    }else{
        mins += breaksMinutes;
    }

    console.log(`${String(hours).padStart(2, 0)}:${String(mins).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`);
}

walk(4000, 0.60, 5);
walk(2564, 0.70, 5.5);