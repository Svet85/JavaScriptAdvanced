function speed(km, area) {
    let limit = area === 'motorway'? 130 : area === 'interstate'? 90 : area ==='city'? 50 : area === 'residential'? 20 : 'error';

    let diff = km - limit;


    if (diff <= 0) {
        console.log(`Driving ${km} km/h in a ${limit} zone`);
    }else{
        let driving = diff > 0 && diff <= 20? 'speeding' : diff > 20 && diff <= 40 ? 'excessive speeding' : 'reckless driving';

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${driving}`);
    }
}

speed(40, 'city');
speed(21, 'residential');
speed(120, 'interstate');
speed(200, 'motorway');