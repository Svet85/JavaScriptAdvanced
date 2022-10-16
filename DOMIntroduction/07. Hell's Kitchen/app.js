function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let a = document.querySelector('#bestRestaurant p');
      let b = document.querySelector('#workers p');

      let text = document.querySelector('#inputs textarea').value;
      let obj = JSON.parse(text);
      let roaster = [];
      
      for (let str of obj) {
         let [name, emps] = str.split(' - ').filter(Boolean);

         let restaurant = roaster.find(r => r.name === name);

         if (restaurant === undefined) {
            restaurant = {name, employees: []};
            restaurant.average = function () {
               let sum = 0;
               for (let emp of this.employees) {
                 sum += emp.salary; 
               };

               return sum / this.employees.length;
            };
            
            roaster.push(restaurant);
         };
         
         let empInfo = emps.split(', ');

         for (let i = 0; i < empInfo.length; i++) {
            
            let emps = empInfo[i].split(' ');
            let name = emps[0];
            let salary = Number(emps[1]);
            let employee = {name, salary};
            restaurant['employees'].push(employee);
         };

      };

      roaster.sort((a, b) => b.average() - a.average());

      let winner = roaster[0];

      winner['employees'].sort((a, b) => b.salary - a.salary);

      let bestRest = `Name: ${winner.name} Average Salary: ${winner.average().toFixed(2)} Best Salary: ${winner['employees'][0].salary.toFixed(2)}`;
      
      let emplList = '';

      winner['employees'].forEach(emp => {
         emplList += `Name: ${emp.name} With Salary: ${emp.salary} `;
      });
      
      emplList = emplList.trimEnd();
      a.textContent = bestRest;
      b.textContent = emplList;
   };
};