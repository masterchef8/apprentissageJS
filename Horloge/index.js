/**
 * Created by Somebody on 22/05/15.
 */


var h1 = document.getElementById("h1");

function affiche(){
    var date = new Date();
    var heure = date.getHours();
    var minute = date.getMinutes();
    var seconde = date.getSeconds();


    h1.textContent = ((heure<10)?"0":"")+heure +":"+ ((minute<10)?"0":"")+minute +":"+((seconde<10)?"0":"")+seconde;
    var timeout = setTimeout(affiche, 1000);
}

function initialize(){
    var date = new Date();
    var heureID = document.getElementById("heure");
    var minuteID = document.getElementById("minute");

    heureID.value = ((date.getHours()<10)?"0":"")+date.getHours();
    minuteID.value = ((date.getMinutes()<10)?"0":"")+date.getMinutes();

}

function alarm(heure, minute, message){
    var date = new Date();
    var heureBis = date.getHours();
    var minuteBis = date.getMinutes();
    if (heure == heureBis && minute == minuteBis){
        console.log("alarm");
        alert(message);
    }

    var timeout = setTimeout(function(){
        alarm(heure, minute, message);
    }, 10000);
}

affiche();
initialize();

window.addEventListener("load", function() {
    var boutton = document.getElementById("submit");

    boutton.addEventListener("click", function () {

        var heureID = document.getElementById("heure").value;
        var minuteID = document.getElementById("minute").value;
        var messageID = document.getElementById("message");

        if (heureID < 24 && heureID >= 0) {
            if (minuteID >= 0 && minuteID < 60) {
                if (messageID) {
                    console.log("checked good");
                    alarm(heureID, minuteID, messageID);
                }
            }
        } else {
            console.log("Wrong value !");
        }
    });
});
