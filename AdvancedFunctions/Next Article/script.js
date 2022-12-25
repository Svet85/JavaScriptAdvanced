function getArticleGenerator(articles) {
    let area = document.querySelector("#content");
    let counter = 0;
    let art = articles;
    
    return function() {
        if(counter >= art.length){
            return;
        };

        let b = document.createElement('article');
        b.textContent = art[counter];
        area.appendChild(b);
        counter++;
    }
}
