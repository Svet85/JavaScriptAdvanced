function solve(params) {
    let [header, ...coordinates] = params;
    let result = [];
    
    
    for (const iterator of coordinates) {
        let [Town, Latitude, Longitude] = iterator.split('|').map( el => el.trim()).filter(Boolean);
        Latitude = Number(Number(Latitude).toFixed(2).replace(/0+$/, ""));
        Longitude = Number(Number(Longitude).toFixed(2).replace(/0+$/, ""));

        let obj = {Town, Latitude, Longitude};

        result.push(obj);
    };

    console.log(JSON.stringify(result));
};

solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']);

solve(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |'] );