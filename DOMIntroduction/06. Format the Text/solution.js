function solve() {
  let out = document.getElementById('output');
  let text = document.getElementById('input').value.split('.').filter(el => el.length > 0);

  while (text.length > 0) {
    let result = text.splice(0,3);
    out.innerHTML += `<p>${result.join('. ')}.</p>`;
  };

};