/**
 * Created by Somebody on 22/05/15.
 */

window.addEventListener("load", function() {
    var b1 = document.getElementById('b1');

    b1.addEventListener("click", function() {
        b1.textContent = "(en attente)";
        b1.disabled = true;
        setTimeout(function() {
            alert("message");
            b1.disabled = false;
            b1.textContent = "Afficher un message dans 2s";
        }, 2000);
    });
});