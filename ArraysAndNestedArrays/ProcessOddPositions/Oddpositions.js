function func (array){
    let result =[];

    for (let i = 1; i < array.length; i += 2) {
        result.unshift(array[i] * 2);
        
    }

    console.log(result.join(' '));
}

func([10, 15, 20, 25]);