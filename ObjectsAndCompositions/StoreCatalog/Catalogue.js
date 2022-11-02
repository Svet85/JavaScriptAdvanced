function solve(params) {
    let products = [];
    for (const iterator of params) {
        let info = iterator.split(' : ');
        let [name, price] = info;
        price = Number(price);
        products.push({name, price});
    }

    products.sort((a , b) => a.name > b.name ?  1 : a.name < b.name ? - 1 : 0);

    let catalog = {};

    for (const iterator of products) {
        let char = iterator.name[0];
        if (catalog[char] === undefined) {
            catalog[char] = [];
        };

        catalog[char].push(iterator);
    };

    for (const key in catalog) {
        console.log(key);
        for (const iterator of catalog[key]) {
            console.log(`  ${iterator.name}: ${iterator.price}`);
        }
    }
};

solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);