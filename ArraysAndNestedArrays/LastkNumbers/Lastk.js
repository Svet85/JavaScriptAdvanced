function func(a,b){
      
    let seq = [1];
    let sum = 0;

    for (let index = 0; index < Number(a) - 1; index++) {
        for (let index2 = 0; index2 < Number(b); index2++) {
            if (index - index2 >= 0){
                sum += seq[index  - index2];
            }
            
        }

        seq.push(sum);
        sum = 0;
    }

    return seq;
}

func(8,2)