function func(array){
    const result = {};

    array.forEach(element => {
        let a = element.split(' <-> ');
        let name = a[0];
        let population = Number(a[1]);

        if (result[name] == undefined) {
            result[name] = population;
        }
        else{
            result[name] += population;
        }
            
    });

    for (const key in result) {
        console.log(key + ' : ' + result[key])
    }
}

func(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])