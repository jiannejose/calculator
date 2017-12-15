var given1String = "";
var given2String = "";
var chosenOperation = "";
var answer = 0;
var numbers = document.getElementsByClassName('number');
var operations = document.getElementsByClassName('operation');
var fields = document.getElementsByClassName('field');

/* given numbers */
function showGiven() {

    if (answer !== "") {
        clear();  
    } 
    
    if (chosenOperation == "") {
        given1String += this.getAttribute('data-number');
        document.getElementById('solution').innerHTML = given1String;
    } else {
        given2String += this.getAttribute('data-number');
        document.getElementById('solution').innerHTML = given1String + chosenOperation + given2String; 
    }
}

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', showGiven);
}


/* operation */

function usedOperation() {
    chosenOperation = this.getAttribute('data-operation');
    document.getElementById('solution').innerHTML = (given1String + chosenOperation);
}

for (j = 0; j < operations.length; j++) {
    operations[j].addEventListener('click', usedOperation);
}

/* result */

function result() {
 
    if (chosenOperation == "+") {
        answer = parseFloat(given1String) + parseFloat(given2String);
    } else if (chosenOperation == "-") {
        answer = parseFloat(given1String) - parseFloat(given2String);
    } else if (chosenOperation == "x") {
        answer = parseFloat(given1String) * parseFloat(given2String);
    } else if (chosenOperation == "÷") {
        answer = parseFloat(given1String) / parseFloat(given2String);
    }

    document.getElementById('answer').innerHTML = answer;
}

document.getElementById('equals').addEventListener('click', result);

/* clear */

function clear() {

    given1String = "";
    given2String = "";
    chosenOperation = "";
    answer = "";

    for (l = 0; l < fields.length; l++) {
    fields[l].innerHTML = "";
    }

}

document.getElementById('clear').addEventListener('click', clear);
