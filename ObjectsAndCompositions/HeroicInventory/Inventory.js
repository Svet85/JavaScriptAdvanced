function solve(array) {
    let heroes = [];

    for (const iterator of array) {
        
        let info = iterator.split(' / ');
        let [name, lvl, items] = info;
        level = Number(lvl);
        
        items = items ? items.split(', ') : [];

        heroes.push({name, level, items});
    }

    let  result = JSON.stringify(heroes);
    return result;
};


