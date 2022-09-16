function cooking(num, ...params) {
    let result = Number(num);
    let operations = [...params];

    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];
        
        switch (operation) {
            case 'chop': result /= 2;break;
            case 'dice': result = Math.sqrt(result);break;
            case 'spice': result++;break;
            case 'bake': result *= 3;break;
            case 'fillet': result -= (result * 0.2);break;
        }

        console.log(result);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake','fillet');