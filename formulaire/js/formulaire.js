/**
 * Created by Somebody on 13/05/15.
 */

var age = document.getElementById('age').value;
document.getElementById('age')
    .addEventListener('focus', checkAge('age'));

var nom = document.getElementById('lastName').value;
document.getElementById('lastName')
    .addEventListener('focus', checkNom(nom));



function checkRadio() {
    var inputs = document.getElementsByClassName('radioSexe');
    var inputsLength = inputs.length;

    for (var i = 0 ; i < inputsLength ; i++) {
        if (inputs[i].type == 'radio' && inputs[i].checked) {
            alert('La case cochée est la n°'+ inputs[i].value);
        }
    }
}

function checkAge(age){
    if (age >= 18){
        console.log("ok");
        return true;
    }else{
        return false;
    }
}

function checkBox(state){
    if (state){
        console.log("box checked");
        return true;
    }else {
        return false;
    }
}

function checkIdentifiant(identifiant){
    if (identifiant.length >=12){
        console.log("iden.length >= 12");
        return true;
    }else {
        return false;
    }
}

function checkPassword(password){

}