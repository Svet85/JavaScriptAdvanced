function operation(array) {
    let initialNumber = 1;
    let result = [];
    
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        
        if (command === 'add') {
          result.push(initialNumber);  
        }else{
            result.pop();
        };

        initialNumber++;
    };

    if (result.length === 0) {
        console.log('Empty');
    }else{
        console.log(result.join('\n'));
    };

};

operation(['add', 'add', 'remove', 'add', 'add'] );