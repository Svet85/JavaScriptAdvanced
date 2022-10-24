function solve(car) {
    let {model, power, color, carriage, wheelsize} = car;
    let result = {};
    result.model = model;
    result.engine = engine(power);
    result.carriage = carriageSet(color, carriage);
    result.wheels = wheelsDiam(wheelsize);

    return result;
    
    function engine(power){
        let engine;
        if (power <= 90) {
            engine = { power: 90, volume: 1800 };
        }else if (power <= 120) {
            engine = { power: 120, volume: 2400 };
        }else {
            engine = { power: 200, volume: 3500 };
        };

        return engine;
    };
    
    function carriageSet(color, carriage) {
        let body = {};
        
        body.type = carriage;
        body.color = color;

        return body;
    };

    function wheelsDiam(size) {
        let array = [0, 0, 0, 0];

        if (size % 2 === 0) {
            size--;
        }

        array.fill(size);

        return array;
    };

};

solve({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 } );
solve({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 });