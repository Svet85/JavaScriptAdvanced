function solve(...params) {
    let obj = {};

    params.forEach(p => {
        let tp = typeof p;
        console.log(`${tp}: ${p}`);
        obj[tp] === undefined ? obj[tp] = 1 : obj[tp]++; 
    });

    let result = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    for (let [type, count] of result) {
        console.log(`${type} = ${count}`)
    };

};


solve(1, 2, 3);