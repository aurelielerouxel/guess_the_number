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
saisieUtilisateur = prompt(message);