// Dans ce fichier, créez une fonction infosLiens qui doit afficher :
// le nombre total de liens dans la page web ;
// la cible du premier et du dernier lien.


function infoLiens () {
    let LiensElts = document.getElementsByTagName("a");
    let nombreLiens = LiensElts.length;
    console.log(nombreLiens);

    if (nombreLiens > 0) {
        console.log(LiensElts[0]);
        console.log(LiensElts[nombreLiens-1]);
    }
    
}

// vérifie qu'un élément possède une classe
function possede (id, nature) {
    const instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(nature));
    } else {
        console.log(`Aucun élément ne possède l'identifiant ${id}`);
    }
}

infoLiens(); 

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur