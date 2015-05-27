// Tableau des différentes valeurs booléenes
var values = {"fname":false, "lname":false, "age":false, "uid":false, "password":false, "repassword":false, "cgu":false} // tableau associatif JSON !

// Le champs est-il rempli ?
function rempli(){
	values[this.id] = document.getElementById(this.id).value.length>0;
	document.getElementById(this.id + "_s").textContent = values[this.id]?"":"Ce champs ne doit pas etre vide !";
	completeCheck();
}

// Age supérieur ou égal à 18
function majeur(){
	values[this.id] = parseInt(document.getElementById(this.id).value)>=18;	
	document.getElementById(this.id + "_s").textContent = values[this.id]?"":"L'age doit etre 18 ans ou plus !";
	completeCheck();
}

// Moins de 12 lettres
function douzelettres(){
	regex = new RegExp("^[a-zA-Z]{1,12}$");
	values[this.id] = regex.test(document.getElementById(this.id).value);
	document.getElementById(this.id + "_s").textContent = values[this.id]?"":"Moins de 12 characteres alphabétiques !"
	completeCheck();
}

// Le mot de passe correspond au pattern
function strongpass(){
	pourcentage = 0;
	// + de 8 char
	pourcentage += (document.getElementById(this.id).value.length > 8) ? 1: 0;
	// 1 lettre minuscule / 1 majuscule / 1 chiffre / 1 autre char
	pourcentage += ((new RegExp("[a-z]+")).test(document.getElementById(this.id).value)) ? 1: 0;
	pourcentage += ((new RegExp("[A-Z]+")).test(document.getElementById(this.id).value)) ? 1: 0;
	pourcentage += ((new RegExp("[0-9]+")).test(document.getElementById(this.id).value)) ? 1: 0;
	pourcentage += ((new RegExp("[^a-zA-Z0-9]+")).test(document.getElementById(this.id).value)) ? 1: 0;
	values[this.id] = pourcentage === 5;
	document.getElementById(this.id + "_s").textContent = pourcentage*20 + "%"
	samepassword();
}

// 2 eme pass égal au premier
function samepassword(){
	values["repassword"] = document.getElementById("repassword").value === document.getElementById("password").value;
	document.getElementById("repassword_s").textContent = !values["repassword"]?"Les mots de passes diffèrent !":"";
	completeCheck();
}

// 2 eme pass égal au premier
function cgu(){
	values[this.id] = document.getElementById(this.id).checked;
	document.getElementById(this.id + "_s").textContent = values[this.id]?"":"Vous devez accepter les CGU !";
	completeCheck();
}

// Verification finale
function completeCheck(){
	// On teste nos valeurs
	if(values.fname && values.lname && values.age && values.uid && values.password && values.repassword && values.cgu){
		document.getElementById("submit").disabled = false;
	}
}

window.addEventListener("load", function(){
	// On attache à chaque input sa fonction de verification
	document.getElementById("fname").addEventListener("keyup", rempli)
	document.getElementById("lname").addEventListener("keyup", rempli)
	document.getElementById("age").addEventListener("keyup", majeur)
	document.getElementById("uid").addEventListener("keyup", douzelettres)
	document.getElementById("password").addEventListener("keyup", strongpass)
	document.getElementById("repassword").addEventListener("keyup", samepassword)
	document.getElementById("cgu").addEventListener("click", cgu)
});