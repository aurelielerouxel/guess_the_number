# Guess the number

##Règles du jeu

Nous avons généré un nombre aléatoire entre 1 et 100, tentez de le deviner en 10 tours maximum. Pour chaque tentative, nous vous dirons si votre estimation est trop ou pas assez élevée.

## Cahier des charges
Je vous demande de créer un jeu simple de devinette de nombre. 
Le jeu choisit aléatoirement un nombre entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi. 
À chaque tour, le joueur doit être informé s'il a deviné ou non le bon nombre, si ce n'est pas le cas, le jeu lui indique si son estimation est trop basse ou trop élevée. 
Le jeu doit également rappeler au joueur les nombres déjà proposés. 
Le jeu se termine quand le joueur a deviné le nombre mystère, ou s'il a épuisé ses 10 chances. 
À la fin du jeu, le joueur a la possibilité de débuter une nouvelle partie.

### Spécifications techniques:
- Générer un nombre aléatoire entre 1 et 100.
- Stocker le nombre de tours déjà joués. Commencer par 1.
- Fournir au joueur le moyen de saisir un nombre.
- Stocker l'ensemble des propositions de nombres pour que le joueur puisse les consulter.
- Vérifier si le nombre saisi par le joueur est correct.

**S'il est correct :**
- Afficher un message de félicitations.
- Empêcher que le joueur saisisse de nouveau un nombre.
- Afficher un contrôle pour que le joueur puisse rejouer.

**S'il est faux et que le joueur a encore des tours à jouer :**
- Informer le joueur que sa proposition de nombre est fausse.
- Lui permettre d'entrer une nouvelle proposition de nombre.
- Incrémenter le nombre de tours de 1.

**S'il est faux et que le joueur n'a plus de tours à jouer :**
- Informer le joueur qu'il a perdu et que la partie est finie.
- Empêcher que le joueur saisisse de nouveau un nombre.
- Afficher un contrôle pour que le joueur puisse rejouer.
- Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.


