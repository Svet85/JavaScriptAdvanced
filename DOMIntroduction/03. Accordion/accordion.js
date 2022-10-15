function toggle() {
    let a = document.getElementsByClassName('button')[0];

    if (a.textContent === 'More') {
        a.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }else {
        a.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    };
}