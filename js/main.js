// Fonctions
function nombreAleatoire(min, max) {
    let nombre = min + (max-min+1)*Math.random();
    return Math.floor(nombre);
}

// Variables
let nombre = nombreAleatoire(1, 100);