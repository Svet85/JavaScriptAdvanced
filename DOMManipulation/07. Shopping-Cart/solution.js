function solve() {
   let result = document.getElementsByTagName('textarea')[0];
   let cart = document.getElementsByClassName('shopping-cart')[0];
   let checkout = document.getElementsByClassName('checkout')[0];
   let uniqueProducts = [];
   let totalSum = 0;

   cart.addEventListener('click', addItem);
   checkout.addEventListener('click', checkingOut);

   function addItem(event) {
      if (event.target.tagName == 'BUTTON' && event.target.className != 'checkout') {
         let children = event.target.parentElement.parentElement.children;
         let name = '';
         let price = 0;
         
         for (let i = 0; i < children.length; i++) {
           if (children[i].className == 'product-line-price') {
               price = Number(children[i].textContent)
           };

           if (children[i].className == 'product-details') {
               name = children[i].children[0].textContent;
           };
            
         };

         if (uniqueProducts.indexOf(name) === -1) {
            uniqueProducts.push(name);
         };

         totalSum += price;

         result.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      };
   };

   function checkingOut() {
     result.value +=  `You bought ${uniqueProducts.join(', ')} for ${totalSum.toFixed(2)}.`;
     
     let btns = cart.getElementsByTagName('button');

     for (let i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
     };
   };
};