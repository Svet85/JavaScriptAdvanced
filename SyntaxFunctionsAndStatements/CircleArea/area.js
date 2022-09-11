function myFunc(param){
    if (typeof param === 'number')
    {
        const area = Math.pow(param,2) * Math.PI;

        console.log(area.toFixed(2));
    }
    else
    {
        console.log(`We can not calculate the circle area, because we receive a ${typeof param}.`);
    }
}

myFunc('asds');
myFunc(5);