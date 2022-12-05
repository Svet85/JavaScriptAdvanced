function func (a){
    if (a.length > 1){
       console.log(Number(a[0]) + Number(a[a.length - 1])); 
    }
    else{
        console.log(Number(a[0]));
    }
}

func(['5'])