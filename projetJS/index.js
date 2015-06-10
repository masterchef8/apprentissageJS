/**
 * Created by Somebody on 03/06/15.
 *
 *
 * Votre application doit permettre de saisir l’URL d’un podcast,
 * d’afficher le contenu de ce podcast sous une forme ergonomique,
 * avec notamment la liste des entrées par ordre chronologique inverse (plus récents en haut),
 * avec la possibilité de lire (dans la même page) le contenu multimédia d’une entrée (mais pas plusieurs à la fois).
 * Autant que possible, l’état de l’application doit se réfléter dans l’URL, afin de pouvoir revenir rapidement sur un état mémorisé.
 * Vous fournirez également une documentation utilisateur minimale, accessible depuis l’application.
 *
 * TODO:
 *
 */

function addElement(tab, i,title,link,desc,pub,guid ) {
    /*

     [Log] C'est mon boulot 14.05.2015
     [Log] http://www.radiofrance.fr/
     [Log] durée : 00:01:31 - C'est mon boulot - par : Philippe DUPORT
     [Log] Thu, 14 May 2015 06:27:00
     [Log] http://media.radiofrance-podcast.net/ ...

     */
    var table = document.getElementById(tab);
    var row = table.insertRow(i);
    var conca = "<audio controls="+"controls"+" preload="+"none"+" src="+guid+"></<audio>";
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = conca;
    cell2.innerHTML = title;
    cell3.innerHTML = link;
    cell4.innerHTML = desc;
    cell5.innerHTML = pub;

}


window.addEventListener("load", function() {
    document.getElementById("submit")
        .addEventListener("click", function() {
            //console.log("clicked");
            var url = document.getElementById("url").value;
            proxy = "http://cors-anywhere.herokuapp.com";

            var xhr = new XMLHttpRequest();
            xhr.open('GET', proxy+"/"+url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    //console.log(xhr.status);
                    if (xhr.status === 200) {

                        var root = xhr.responseXML;
                        var channel = root.getElementsByTagName('channel');
                        var item = channel[0].getElementsByTagName('item');
                        for(var i = 0; i<item.length;i++){
                            var title = item[i].getElementsByTagName('title')[0].textContent;
                            var link = item[i].getElementsByTagName('link')[0].textContent;
                            var desc = item[i].getElementsByTagName('description')[0].textContent;
                            var pub = item[i].getElementsByTagName('pubDate')[0].textContent;
                            var guid = item[i].getElementsByTagName('guid')[0].textContent;
                            addElement("tab",i+1,title,link,desc,pub,guid);
                        }



                    } else {
                        // Error
                    }
                }
            };
            xhr.send();

        });
});

