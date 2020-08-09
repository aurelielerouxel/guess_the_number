// Fonctions
function nombreAleatoire(min, max) {
    let nombre = min + (max-min+1)*Math.random();
    return Math.floor(nombre);
}

// Variables
let nombre = nombreAleatoire(1, 100);
let saisieUtilisateur;
let message = "Trouvez le nombre entre 1 et 100.";

// Jeu
do {
    saisieUtilisateur = prompt(message);
    if (saisieUtilisateur > nombre) {
        message = "C'est moins !";
    }
    else {
        message = "C'est plus !";
    }
}
while(saisieUtilisateur != nombre);

alert = ("Bravo, vous avez trouvé le nombre.");