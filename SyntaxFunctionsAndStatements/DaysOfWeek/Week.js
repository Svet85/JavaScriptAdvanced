function myFunc(a){
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 
    let result;
    
    if (days.includes(a)){
        switch (a){
            case 'Monday': result = 1; break;
            case 'Tuesday': result = 2; break;
            case 'Wednesday': result = 3; break;
            case 'Thursday': result = 4; break;
            case 'Friday': result = 5; break;
            case 'Saturday': result = 6; break;
            case 'Sunday' : result = 7; break;
        }
    }
    else {
        result = 'error';
    }

    console.log(result);
}

myFunc('Monday');
myFunc('asdsad');