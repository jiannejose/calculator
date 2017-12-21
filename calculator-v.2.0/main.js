/* showing numbers */
var given = "";
var numbers = document.getElementsByClassName('number');

function showNum() {

    if (usedOperation == "") {
        given += this.getAttribute('data-number');
        document.getElementById('answer').innerHTML = given;
    } else if (usedOperation != "") {
        document.getElementById('solution').innerHTML = given + usedOperation;
    }

}

for (i = 0; i < numbers.length; i++ ) {
    numbers[i].addEventListener('click', showNum);
}

/* showing operation */
var usedOperation = "";
var operations = document.getElementsByClassName('operation');

function operationUsed() {
    usedOperation = this.getAttribute('data-operation');
    document.getElementById('solution').innerHTML = given + " " + usedOperation + " ";

}

for (j = 0; j < operations.length; j++) {
    operations[j].addEventListener('click', operationUsed);
}