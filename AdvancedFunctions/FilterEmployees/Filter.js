function solve(data, criteria) {
      let result = [];
      let emps = JSON.parse(data);

      if (criteria === 'all') {
        result = emps;
      }else{
        let tokens = criteria.split('-');
        for (let i = 0; i < emps.length; i++) {
            if (emps[i][tokens[0]] === tokens[1]) {
                result.push(emps[i]);
            };
        }
      };

      for (let i = 0; i < result.length; i++) {
        let emp = result[i];
        console.log(`${i}. ${emp['first_name']} ${emp['last_name']} - ${emp['email']}`);
      };
};

solve(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`, 'gender-Female' );