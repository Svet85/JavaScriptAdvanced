function search() {
   document.getElementById('result').textContent = '';
   let a = document.getElementById('searchText').value;
   let list = document.getElementsByTagName('li');
   let matches = 0;

   for (let i = 0; i < list.length; i++) {
      if (list[i].textContent.includes(a)) {
         list[i].style.textDecoration = 'underline';
         list[i].style.fontWeight = 'bold';
         matches++;
      }else{
         list[i].style.textDecoration = 'none';
         list[i].style.fontWeight = '';
      };
   };

   document.getElementById('result').textContent =  `${matches} matches found`;
};
