function GCD(a, b){
    let bigger = a;
    let smaller = b;
    let result = 0;

    while (true) {
        
        if (bigger === 0) {
            console.log(smaller);
            break;
        }else if (smaller === 0) {
            console.log(bigger);
            break;
        }

        if (bigger > smaller) {
            bigger %= smaller;
        }else{
            smaller %= bigger;
        }

    }
}

GCD(15, 5);
GCD(2154, 458);