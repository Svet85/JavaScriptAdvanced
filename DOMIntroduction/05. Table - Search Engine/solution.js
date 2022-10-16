function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   let rows = document.querySelectorAll('tbody tr');
   let text = document.getElementById('searchField');
   
   function onClick() {
      for (let row of rows) {
         row.classList.remove('select');
         if (row.textContent.includes(text.value)) {
               row.className = 'select';
            };
      };
      document.getElementById('searchField').value = '';
   };

};