function solve() {
  let a = document.getElementById('text').value.split(' '); 
  let b = document.getElementById('naming-convention').value; 
  let result;

  if (b === 'Camel Case') {
    result = a.map(w => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase());
    result[0] = result[0].toLowerCase();
    result  = result.join('');
  }else if (b === 'Pascal Case') {
    result = a.map(w => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase()).join('');
  }else{
    result = 'Error!';
  };
  
  document.getElementById('result').textContent = result; 
};