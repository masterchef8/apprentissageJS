/**
 * Created by Somebody on 27/05/15.
 */

window.addEventListener("hashchange", function() {
    var body = document.getElementsByTagName("body")[0];
    while (body.hasChildNodes()) { /* SUPPRESSION DU BODY */
        body.removeChild(body.lastChild);
    }
    var hash = location.hash.substring(1); /* RECUPERATION DU NUMERO DE LA PAGE*/

    var req = new XMLHttpRequest(); /* REQUETE AJAX */
    req.open("GET", "chapitre" + hash + ".json", true);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if (req.status == 200) {
                handleSuccess(req.responseText);
            }
        }
    };
    req.send(null);
});
