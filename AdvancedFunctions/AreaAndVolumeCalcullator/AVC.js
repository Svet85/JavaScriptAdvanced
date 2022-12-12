function solve(area, vol, input) {
    let result = [];
    let coor = JSON.parse(input);
    
    for (let i = 0; i < coor.length; i++) {
        let obj = coor[i];
        let item = {};
        item['area'] = area.call(obj);
        item['volume'] = vol.call(obj);
        result.push(item);
    };
    
    return result;
};

solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`)

    function area() {
        return Math.abs(this.x * this.y);
    };

        function vol() {
            return Math.abs(this.x * this.y * this.z);
    }; 