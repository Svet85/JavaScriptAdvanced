function day (y, m, d){
    
   let date = new Date(y, m - 1, d - 1);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

   return `${year}-${month}-${day}`;
}

day(2016, 9, 30);
day(2016, 10, 1);