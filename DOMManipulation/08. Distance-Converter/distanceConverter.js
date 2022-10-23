function attachEventsListeners() {
    let input = document.getElementById('inputDistance');
    let result = document.getElementById('outputDistance');
    let inUnits = document.getElementById('inputUnits');
    let outUnits = document.getElementById('outputUnits');
    let btn = document.querySelector('div input#convert');
    btn.addEventListener('click', aa);

    function aa() {

        let distance = Number(input.value);

        
        let unitsFrom = inUnits.selectedIndex;
        let unitsTo = outUnits.selectedIndex;



        unitsFrom === 0?distance *= 1000:unitsFrom === 1?distance *= 1: unitsFrom === 2?distance /= 100:unitsFrom === 3?distance /= 1000:unitsFrom === 4?distance *= 1609.34:unitsFrom === 5?distance *= 0.9144:unitsFrom === 6?distance *= 0.3048:unitsFrom === 7?distance *= 0.0254:'';

        unitsTo === 0?distance /= 1000:unitsTo === 2?distance *= 100:unitsTo === 3?distance *= 1000:unitsTo === 4? distance /= 1609.34:unitsTo === 5?distance /= 0.9144:unitsTo === 6?distance /= 0.3048:unitsTo === 7? distance /= 0.0254 : distance *= 1;

        result.removeAttribute('disabled');
        result.value = distance;
    }
}