function func(array){
   let result = [];
   
   for (let index = 0; index < array.length; index++) {
        if (array[index] < 0){
            result.unshift(array[index]);
        }
        else {
            result.push(array[index]);
        }
   }

   console.log(result.join('\n'));
}

func([7, -2, 8, 9]);
func([3, -2, 0, -1]);