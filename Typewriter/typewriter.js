const texts = ['Andreas', 'Lasse', 'Anders'];
let count = 0; // räknar varje ord
let index = 0; // räknar varje bokstav
let currentText = '';
let letter = '';

(function type() {
    
    if(count === texts.length){
        count = 0;
    } 

    currentText= texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 450);

}());