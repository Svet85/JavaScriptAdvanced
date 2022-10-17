function extractText() {
    const text = Array
    .from(document.querySelectorAll('#items li'))
    .map(el => el.textContent);
    
    document.getElementById('result').textContent = text.join('\n');
}