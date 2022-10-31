function solve(params) {
    let result = {};

    params.forEach(element => {
        let info = element.split(' | ');
        let [cityName, product, price] = info;
        
        if (result[product] === undefined) {
            result[product] = [];
        };
        price = Number(price);
        let city = {cityName, price};
        result[product].push(city);
    });

    for (const key in result) {
        let info  = result[key].sort((a, b) => a.price - b.price)[0];
        console.log(`${key} -> ${info.price} (${info.cityName})`);
    };

};

solve(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10']);