function attachGradientEvents() {
    let box = document.getElementById('gradient');
    let result = document.getElementById('result');

    box.addEventListener('mousemove', ShowPercentage);
    box.addEventListener('mouseout', () => result.textContent = '');


    function ShowPercentage(event) {
        let pos = event.offsetX / (event.target.clientWidth - 1);
        pos = Math.trunc(pos * 100);
        console.log(pos);
        result.textContent = `${pos}%`;
    };
};