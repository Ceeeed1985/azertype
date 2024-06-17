//MA FONCTION POUR AFFICHER LE RESULTAT / SCORE

function afficherResultat (score, nombreDeMots){
    let spanScore = document.querySelector(".zoneScore span");
    let affichageScore = `${score} / ${nombreDeMots}`;
    spanScore.innerText = affichageScore;
}


//MA FONCTION POUR CHOISIR ENTRE MOTS OU PHRASES


function afficherProposition (proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}


function lancerLeJeu () {
    let score = 0;
    let i = 0;
    let listePropositions = listeMots;

    let btnValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    afficherProposition(listePropositions[i])
    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value);
        if (inputEcriture.value === listePropositions[i]){
            score++;
        }
        i++;
        afficherResultat (score, i);
        inputEcriture.value = '';
        if (listePropositions[i] === undefined) {
            afficherProposition("Le jeu est terminé !");
            btnValiderMot.disabled = true;
        } else {
            afficherProposition(listePropositions[i]);
        }
    })

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {
            console.log(event.target.value);
            if (event.target.value === "1"){
                listePropositions = listeMots;
            } else {
                listePropositions = listePhrases;
            }
            afficherProposition(listePropositions[i])
        })
    }

    afficherResultat (score, i);
}



