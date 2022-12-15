function solve(params) {
    let array =[];

    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(' ');
        if (tokens[0] === 'print') {
            console.log(array.join(','));            
        }else if (tokens[0] === 'add') {
            array.push(tokens[1]);
        }else{
            while (array.indexOf(tokens[1]) > -1) {
                array.splice(array.indexOf(tokens[1]), 1);
            }
        };
    };
};

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);