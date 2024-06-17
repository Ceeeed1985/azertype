//MES FONCTIONS

function afficherResultat (score, nombreDeMots){
    alert("Votre score est de : "+score+"/"+ nombreDeMots);
}


function choisirPhrasesOuMots (){
let choix = prompt('Voulez-vous une liste de mots ou de phrases ?\n\n- tapez "mots" pour les mots\n- tapez "phrases" pour les phrases');
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt('Vous devez choisir entre "mots" ou "phrases"');
    }
    return choix;
}


function lancerBoucleDeJeu (listePropositions){
    let score = 0;
    for (let i = 0; i < listePropositions.length; i++) {
        motUtilisateur = prompt("Entrez le mot suivant : "+ listePropositions[i]);
        if (motUtilisateur === listePropositions[i]){
            score++;
        }
    }
    return score;
}


function lancerLeJeu () {
    let choix = choisirPhrasesOuMots ();
    let score = 0;
    let nombreDeMots = 0;

        if (choix === "mots") {
            score = lancerBoucleDeJeu (listeMots);
            nombreDeMots = listeMots.length;
        
        } else {
            score = lancerBoucleDeJeu (listePhrases);
            nombreDeMots = listePhrases.length;
        }
    afficherResultat (score, nombreDeMots);
}

