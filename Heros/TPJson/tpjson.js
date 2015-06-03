window.addEventListener("load", function() {
    console.log("load EventListener");
    /*
     Récuperation du numero du chapitre moins le hashtag.

     */
    var hash = location.hash.substring(1);

    var req = new XMLHttpRequest();

    if (hash === "") { hash = 1;}

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

window.addEventListener("hashchange", function() {
    console.log("HashChange EventListener");

    var body = document.getElementsByTagName("body")[0];

    /*
        Suppresion du body après chaque appels
     */
    while (body.hasChildNodes()) {
        body.removeChild(body.lastChild);
        console.log("BodyHashChild");
    }

    /*
        Récuperation du numero du chapitre moins le hashtag.
     */
    var hash = location.hash.substring(1);

    /*
        Requete AJAX dans le cours
        La fonction affectée à onreadystatechange est appelée (de manière asynchrone) chaque fois que l’état
        de la requête (readyState) change, 4 étant la valeur signifiant « terminé ».

        L’attribut status contient le code de retour HTTP indiquant si la requête a réussi ou non.

     */

    var req = new XMLHttpRequest();

    /*
        Envoie d'une requete de récupération du fichier JSON.
        req.open([METHODE], [URL]
        Hashage de l'url avec la variable hash ci dessus.
     */

    req.open("GET", "chapitre" + hash + ".json", true);

    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if (req.status == 200) {
                handleSuccess(req.responseText);
            }
        }
    };
    req.send();
});

/*
    Fonction qui se charge de récupérer un fichier JSON et de le parser.
 */
function handleSuccess(jsonObj) {
    var obj = JSON.parse(jsonObj); // Variable object
    var body = document.getElementsByTagName("body")[0];
    var span = document.createElement("span");
    var spanText = document.createTextNode(obj.txt);
   
    span.appendChild(spanText);
    for (var i = 0; i < obj.links.length; i++) {
        var link = document.createElement("a");
        link.href = obj.links[i].link;
        var linkText = document.createTextNode(obj.links[i].txt);
        link.appendChild(linkText);
        span.appendChild(link);
    }
    body.appendChild(span);
}