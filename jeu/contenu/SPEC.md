# Cahier des charges : contenu du jeu « Les Salles · CAPES Mayotte 2027 »

## Pour qui
Un adulte (master MEEF premier degré + un second master) qui prépare le **CAPES externe de mathématiques à affectation locale à Mayotte** (écrits les 1er et 2 avril 2027 : deux compositions de 5 h sur le programme **collège + lycée général**, la composition 2 commence toujours par un **Vrai–Faux** d'environ 20 propositions à justifier). Il a su le lycée autrefois mais doit tout réactiver depuis la Seconde (diagnostic : collège solide ; second degré, logique, dérivation, exponentielle, produit scalaire non maîtrisés). Le jeu sert à **retenir** : chaque exercice entre ensuite dans un système de répétition espacée et reviendra plusieurs fois, mélangé aux autres chapitres.

Le jeu est un jeu de plateforme : chaque **stèle de pierre** est un combat en 3 manches (un exercice par manche, sablier ≈ 3 min, 3 min, 5 min) ; la **stèle d'or** (facultative) porte 3 propositions **Vrai–Faux** ; la **stèle d'Hermès** est un problème unique ; le **boss** de fin de chapitre est un problème en 5 questions (≈ 6 min chacune) ; le **sanctuaire** secret porte 3 stèles plus difficiles. Une mauvaise réponse coûte un cœur, puis l'indice s'affiche et on réessaie.

## Ce qui est demandé
Écrire UN fichier JSON par chapitre, `chapitres/<id>.json`, en suivant **exactement** `plan.json` (salles, ordre, ids, cartes, noms, fonds, boss) et les contraintes de `cartes.json` (nombre de stèles T, d'or A, d'Hermès H ; passerelles). Valider avec :

```
node outils/valider.js chapitres/<id>.json
```

jusqu'à **0 erreur** (lire aussi les avertissements).

## Structure du fichier
```json
{
  "id": "ch1",
  "titre": "<titre exact du plan>",
  "introduction": "Athéna présente le chapitre (2 à 4 phrases, tutoiement, ton noble et sobre, une idée qui fait prendre de la hauteur).",
  "conclusion": "Athéna conclut (2 phrases : ce qu'il faut emporter).",
  "salles": [ <4 salles du plan, dans l'ordre>, <la salle du boss> ],
  "sanctuaire": { "sceauxOr": 3, "salle": <salle du sanctuaire> }
}
```
Une salle :
```json
{
  "id": "c1r1", "carte": "stevin", "fond": "temple", "nom": "<nom du plan>",
  "notion": "<notion courte>",
  "athena": "Une phrase d'Athéna en haut de l'écran : le fil de la salle ou un conseil de méthode.",
  "steles":     [ { "exercices": [ex1, ex2, ex3] }, ... ],
  "bonus":      [ { "exercices": [vf1, vf2, vf3] } ],
  "acrobaties": [ exH ]            // seulement si la carte a H = 1 (un exercice, pas de liste)
}
```
Salle du boss : `"steles": [ { "boss": "<nom du boss du plan>", "monstre": "<monstre du plan>", "contexte": "<énoncé commun>", "exercices": [q1, q2, q3, q4, q5] } ]`.

Un exercice :
```json
{
  "titre": "Titre court",
  "enonce": "Énoncé, formules entre $…$.",
  "reponse": 6,                    // nombre ; ou fraction en chaîne "7/12" ; ou, avec choix, le NUMÉRO (1 à n) de la bonne option
  "choix": ["…", "…", "…"],        // facultatif : 2 à 4 options → boutons (QCM)
  "tolerance": 0.01,               // facultatif : seulement si une valeur approchée est demandée
  "unite": "cm",                   // facultatif, texte court
  "indice": "Aide affichée après une erreur : une piste, pas la réponse.",
  "explication": "Correction complète et concise (le raisonnement, pas seulement le résultat).",
  "retenir": "À retenir : la règle ou le réflexe en une ligne.",
  "effet": "passerelle"            // SEULEMENT là où la carte l'exige (voir plus bas)
}
```
Ne mettre **aucun autre champ** (pas de `guides`, pas de `maxime` : une autre étape les ajoutera).

## Réponses
- Le joueur tape un nombre (« 8 », « 2,5 », « −4 », « 7/12 » sont acceptés) ou clique une option. Il n'y a pas d'autre format : **pas de réponse en lettres, ni d'expression**.
- L'énoncé dit **exactement quoi entrer** : « Entrer $b$. », « Entrer le minimum. », « Entrer la valeur exacte, sous forme de fraction ou de décimal. », « Entrer le nombre de solutions. ». Si plusieurs nombres sont naturels, en demander un seul, sans ambiguïté (« Entrer la plus grande racine. »).
- Valeurs exactes de préférence (entiers, décimaux, fractions). Une valeur approchée seulement si c'est naturel (« arrondie au centième »), avec `tolerance` adaptée (0.005 pour le centième).
- Pour une réponse non numérique (une rédaction, une négation, une erreur d'élève, une méthode), utiliser `choix` : 3 ou 4 options plausibles, les distracteurs étant **les erreurs typiques** (confusion réciproque/contraposée, oubli d'un cas, erreur de signe…). Varier la place de la bonne option.
- Rien qui exige une calculatrice graphique ; une calculatrice simple est permise (elle l'est aux écrits), mais la plupart des calculs se font à la main.

## Formules : KaTeX
- Toute notation mathématique entre `$…$` (en JSON : `"$\\frac{1}{2}$"`, antislash doublé). Formule centrée : `$$…$$` (rarement).
- Jamais `\(`, `\)`, `\[`, `\]`. Pas d'environnements `align`, `tabular`, `array` complexes ; `\begin{cases}` est permis.
- Dans le texte, écrire en français : « pour tout réel $x$ », pas « $\forall x \in \mathbb{R}$ » sauf quand le symbolisme est justement l'objet de l'exercice (logique).
- Les virgules décimales : `$2{,}5$` dans une formule ; « 2,5 » dans le texte.

## Les trois manches d'une stèle de pierre
1. **L'attaque** (≈ 3 min) : application directe du cours, niveau lycée (Seconde ou Première).
2. **L'esquive** (≈ 3 min) : application un peu moins directe (deux étapes, un piège classique).
3. **Le coup final** (≈ 5 min) : niveau concours. Un exercice qui demande du recul : plusieurs étapes, un paramètre, une question de logique sur l'énoncé, un raisonnement à identifier, une question extraite d'un problème du style des compositions Mayotte. Il doit rester faisable de tête ou sur une feuille en 5 minutes.

Les deux stèles de pierre d'une salle couvrent deux facettes différentes de la notion de la salle. Au fil du chapitre, couvrir toute la portée indiquée dans `plan.json`, sans doublons.

## Stèle d'or : Vrai–Faux (style composition 2)
Exactement 3 propositions par stèle d'or, chacune :
```json
{ "titre": "Vrai ou faux ?", "enonce": "Proposition : « Pour tout réel $x$, … »", "choix": ["Vrai", "Faux"], "reponse": 2,
  "indice": "…", "explication": "Faux. Contre-exemple : …", "retenir": "…" }
```
- L'explication **commence par « Vrai. » ou « Faux. »**, puis donne la justification attendue au concours : une **preuve** courte si vrai, un **contre-exemple** explicite si faux (le jury rappelle qu'un exemple ne prouve pas une proposition universelle).
- Environ moitié Vrai, moitié Faux sur le chapitre. Propositions subtiles : quantificateurs, réciproques fausses, cas limites, égalités « presque » vraies.
- La stèle d'or de la salle du boss et du sanctuaire suit la même règle.

## Stèle d'Hermès
Un seul exercice (pas de liste), titre au choix, qui fait réfléchir sur la méthode : repérer la faille d'une démonstration, choisir le bon raisonnement, ou un petit problème astucieux. Choix ou nombre. Pas de `temps` (4 min par défaut).

## Boss : un problème en 5 questions
- `contexte` : l'énoncé commun (2 à 6 lignes), comme un problème de concours.
- 5 questions progressives (la dernière la plus fine). **Chaque question doit pouvoir se traiter seule** : si elle utilise un résultat précédent, l'énoncé le redonne (« On admet que $f'(x) = …$. »).
- Inspiration permise : les sujets Mayotte **2021 et 2022** (`/mnt/project-files/ressources_officielles/01_Sujets_composition1/` et `02_…/`, lisibles avec `pdftotext`), en le signalant dans le contexte (« D'après CAPES Mayotte 2022 »). **Interdit** : s'inspirer des sujets 2023 à 2026 (ils sont réservés aux épreuves blanches).

## Sanctuaire (3 stèles, plus difficiles)
- Stèles 1 et 2 : problèmes plus exigeants que le reste du chapitre (niveau Terminale ou concours).
- Stèle 3 : **regard de futur professeur** : erreurs d'élèves à diagnostiquer (« Un élève écrit … Quelle est son erreur ? »), choix d'un contre-exemple pour convaincre une classe, rédaction attendue, lien collège-lycée. Ces questions sont en QCM.

## Passerelles (la réponse règle le monde)
Si `cartes.json` indique `passerelle_stele = k` (≥ 0) pour la carte de la salle, alors dans la stèle de pierre n° k (en comptant à partir de 0), **le 3e exercice** porte `"effet": "passerelle"` et sa `reponse` vaut **exactement** `passerelle_longueur` (6, 7, 9 ou 10), sans `choix`. L'énoncé est un vrai problème dont la réponse est ce nombre ; ne pas mentionner la passerelle. Aucun autre exercice ne porte `effet`.

## Qualité exigée
- **Exactitude absolue.** Vérifier chaque réponse par le calcul (Python/sympy est installé : `python3 -c "import sympy"`). Une seule bonne option par QCM. Pas d'énoncé ambigu (domaine, arrondi, convention).
- Français correct et sobre, vouvoiement interdit (tutoiement dans les textes d'Athéna, impersonnel dans les énoncés). Pas d'anglicismes.
- Conformité au programme et aux notations du lycée français (repère orthonormé, intervalles $[a\,;b]$, etc.).
- `explication` : ce qu'un correcteur de concours attend, en 1 à 5 phrases. `retenir` : la phrase à graver, utile hors de cet exercice (une propriété, un réflexe, un piège).
- `indice` : une piste qui débloque sans donner la réponse.
- Varier les contextes ; quelques situations ancrées à Mayotte (lagon, Petite-Terre, barge, ylang-ylang, collège de Mamoudzou…) sont bienvenues mais pas obligatoires.
- Longueurs : énoncé ≤ 600 caractères (souvent bien moins), explication ≤ 750, retenir ≤ 200.

## Exemple (une salle complète, hors programme des chapitres : à imiter pour la forme, pas à copier)
```json
{
  "id": "exemple", "carte": "stevin", "fond": "temple", "nom": "Le marché de Mamoudzou",
  "notion": "Pourcentages et évolutions",
  "athena": "Une évolution se multiplie, elle ne s'additionne pas : cherche toujours le coefficient multiplicateur.",
  "steles": [
    { "exercices": [
      { "titre": "Une hausse", "enonce": "Un régime de bananes coûte 12 €. Son prix augmente de 15 %. Entrer le nouveau prix, en euros.",
        "reponse": 13.8, "unite": "€", "indice": "Augmenter de 15 %, c'est multiplier par $1{,}15$.",
        "explication": "$12 \\times 1{,}15 = 13{,}8$. Le nouveau prix est 13,80 €.",
        "retenir": "Augmenter de $t\\,\\%$ revient à multiplier par $1 + \\frac{t}{100}$." },
      { "titre": "Hausse puis baisse", "enonce": "Un prix augmente de 20 %, puis baisse de 20 %. Entrer le taux d'évolution global, en pourcentage (négatif pour une baisse).",
        "reponse": -4, "unite": "%", "indice": "Multiplie les deux coefficients multiplicateurs.",
        "explication": "$1{,}2 \\times 0{,}8 = 0{,}96$ : le prix baisse globalement de 4 %.",
        "retenir": "Les taux ne s'additionnent pas : les coefficients multiplicateurs se multiplient." },
      { "titre": "Le taux réciproque", "enonce": "Après une baisse de 20 %, de quel pourcentage faut-il augmenter un prix pour retrouver sa valeur de départ ? Entrer ce pourcentage.",
        "reponse": 25, "unite": "%", "indice": "Cherche le coefficient $c$ tel que $0{,}8 \\times c = 1$.",
        "explication": "$c = \\frac{1}{0{,}8} = 1{,}25$, soit une hausse de 25 %.",
        "retenir": "Le coefficient de l'évolution réciproque est l'inverse du coefficient : $\\frac{1}{1-t}$, pas $1+t$." }
    ] },
    { "exercices": [ "… trois autres exercices …" ] }
  ],
  "bonus": [
    { "exercices": [
      { "titre": "Vrai ou faux ?", "enonce": "Proposition : « Deux hausses successives de 10 % équivalent à une hausse de 20 %. »",
        "choix": ["Vrai", "Faux"], "reponse": 2, "indice": "Calcule $1{,}1^2$.",
        "explication": "Faux. $1{,}1^2 = 1{,}21$ : deux hausses de 10 % font une hausse de 21 %.",
        "retenir": "Évolutions successives : on multiplie les coefficients." },
      "… deux autres Vrai–Faux …"
    ] }
  ]
}
```
