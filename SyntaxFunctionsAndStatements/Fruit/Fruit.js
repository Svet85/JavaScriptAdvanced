function price(name, weight, price){
    let weightKG = weight / 1000;
    let totalprice = weightKG * price;

    console.log(`I need $${totalprice.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${name}.`)
}

price('orange', 2500, 1.80);
price('apple', 1563, 2.35);