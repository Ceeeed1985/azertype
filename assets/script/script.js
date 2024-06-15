

// JEU

// const listeMots = ["Cachalot","Pétunia","Serviette"];
// let score = 0;

// let motUtilisateur = prompt("Tapez le mot : "+ listeMots[0]);

// if (motUtilisateur === listeMots[0]){
//     score ++;
// } else {
//     console.log("Vous avez fait une erreur !");
// }

// motUtilisateur = prompt("Tapez le mot : " + listeMots[1]);
// if (motUtilisateur === listeMots[1]){
//     score ++;
// } else {
//     console.log("Vous avez fait une erreur");
// }

// motUtilisateur = prompt("Entrez le mot : " + listeMots[2]);

// if (motUtilisateur === listeMots[2]){
//     score++;
// } else {
//     console.log("Vous avez fait une erreur");
// }

// alert("Fin du jeu ! Votre score final est de "+ score+ "/3");

const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"];
const listeMots = ["Cachalot","Pétunia","Serviette"];
let score = 0;
let motUtilisateur = null;
let choix = null;
let i = null;

listePhrases.push("La vie est une fête !");
listeMots.push("Gendarme");


while ((choix !== "mots") && (choix !== "phrases")){
    choix = prompt('Voulez-vous une liste de mots ou de phrases ?\n\n- tapez "mots" pour les mots\n- tapez "phrases" pour les phrases');
}

if (choix === "mots") {
    for (i=0;i< listeMots.length;i++){
        motUtilisateur = prompt("Entrez le mot suivant : "+ listeMots[i]);
        if (motUtilisateur === listeMots[i]){
            score++;
        }
    }
    alert("Votre score est de : "+score+"/"+ listeMots.length);

} else {
    for (i=0;i<listePhrases.length;i++){
        motUtilisateur = prompt("Entrez la phrase suivante : "+ listePhrases[i]);
        if (motUtilisateur === listePhrases[i]){
            score++;
        }
    }
    alert("Votre score est de : "+score+"/"+ listePhrases.length);
}






