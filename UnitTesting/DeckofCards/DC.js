function printDeckOfCards(cards) {
    let deck = [];

    try {
        cards.forEach(card => {
            deck.push(createCard(card));
        });

        console.log(deck.join(' '));
    } catch (error) {
      console.log(error.message);  
    };

    function createCard (card){
        let faces = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'H', 'D', 'C'];
        let a = card.substring(0, card.length -1);
        let b = card.substring(card.length - 1);


        if (!(faces.includes(a) && suits.includes(b))) {
            throw new Error(`Invalid card: ${card}`);
        };
    
        b === 'S' ? b = '\u2660' : b === 'H' ? b = '\u2665' : b === 'D' ? b = '\u2666' : b === 'C' ? b = '\u2663' : '';
    
        return {
            face: a,
            suit: b,
            toString() {return this.face + this.suit}
        };
    }
}

printDeckOfCards(['AS', '10X', 'KH', '2C'] );
printDeckOfCards(['5S', '3D', 'QD', '1C']);