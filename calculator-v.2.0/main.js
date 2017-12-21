var given = "";
var numbers = document.getElementsByClassName('number');

function showGiven() {
    given += this.getAttribute('data-number');
    document.getElementById('answer').innerHTML = given;
}

for (i = 0; i < numbers.length; i++ ) {
    numbers[i].addEventListener('click', showGiven);
}