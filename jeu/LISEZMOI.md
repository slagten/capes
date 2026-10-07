# Les Salles · CAPES Mayotte 2027

Jeu de révision du CAPES externe de mathématiques à affectation locale à Mayotte (écrits des 1er et 2 avril 2027).

Jouer : https://slagten.github.io/capes/jeu/

## Ce qu'il contient

- **Un prologue et 8 chapitres**, un par semaine de la phase 1 du planning : calcul et logique, second degré, arithmétique, suites, dérivation, exponentielle, géométrie et produit scalaire, probabilités et statistiques.
- **Chaque chapitre** a 4 salles, une salle de boss et un sanctuaire secret.
  - Les stèles de pierre posent trois exercices. Les deux premiers sont de niveau lycée, le troisième de niveau concours.
  - Les stèles d'or posent des Vrai–Faux, comme ceux qui ouvrent la composition 2.
  - Le boss pose un problème en cinq questions.
  - Le sanctuaire réunit les exercices les plus difficiles, et des QCM « regard de futur professeur ».
- **Les philosophes.** Chaque salle a son buste. On y lit un court texte d'un philosophe, surtout grec ou stoïcien, avec sa référence et une glose. Chaque stèle porte une maxime. Une stèle vaincue grave sa maxime dans le recueil.
- **La mémoire.**
  - Chaque exercice entre dans des boîtes de Leitner. La première réponse du jour à un exercice le classe : réussi, il revient plus tard ; raté, il revient le lendemain. Les délais sont de 1, 3, 7, 16 puis 35 jours.
  - Le temple de Mnémosyne mélange les exercices dus de tous les chapitres. On y entre depuis l'écran de titre, la liste des salles ou le bouton « Mémoire ».
  - Le panneau « Mémoire » affiche :
    - la maîtrise par chapitre ;
    - le recueil des maximes ;
    - les tablettes « À retenir », qui forment une fiche de révision construite en jouant.
- **Les réponses.** On peut taper :
  - un nombre (`2,5`) ou une fraction (`7/12`) ;
  - une valeur exacte : `3√2` ou `3rac2`, `2π` ou `2pi`, `e^2`, `(1+√5)/4`.

  Les QCM se jouent à la souris ou avec les touches 1 à 4. Le sablier se coupe avec le bouton « Sablier ».

La progression est enregistrée dans le navigateur (localStorage). Elle ne quitte jamais l'ordinateur.

## Organisation des fichiers

- `index.html`, `style.css`, `js/` : le moteur du jeu (canvas, sans dépendance). `js/memoire.js` gère la répétition espacée.
- `vendor/katex/` : KaTeX 0.16.22 (licence MIT), pour afficher les formules. Il fonctionne sans Internet.
- `niveaux/niveaux.js` : les chapitres et les salles. Ce fichier est **fabriqué** à partir de `contenu/`.
- `contenu/` : les sources du contenu.
  - `plan.json` : le plan des chapitres.
  - `cartes.json` : la géométrie des salles.
  - `prologue.json`, `chapitres/chN.json`, `mnemosyne.json`.
  - `SPEC.md` et `CITATIONS.md` : les règles d'écriture.
  - `outils/` : le validateur et le programme de construction.

## Modifier un exercice

1. Éditer `contenu/chapitres/chN.json`.
2. Vérifier le fichier : `node contenu/outils/valider.js contenu/chapitres/chN.json --final`.
3. Reconstruire les niveaux : `python3 contenu/outils/construire.py`.

Un exercice garde son identifiant (salle, stèle, rang) tant qu'on ne déplace pas les stèles. Son historique de révision est donc conservé.

## Crédits

Ce jeu est adapté du jeu « Les Salles », conçu pour des élèves de Seconde. Les textes des philosophes sont des traductions adaptées, avec leurs références. Les sujets officiels de Mayotte 2021 et 2022 ont inspiré certains problèmes, signalés « D'après CAPES Mayotte ». Les sujets 2023 à 2026 sont réservés aux épreuves blanches.
