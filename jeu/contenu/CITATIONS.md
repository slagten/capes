# Cahier des charges : les textes philosophiques du jeu

Le joueur prépare le CAPES de mathématiques (Mayotte, avril 2027). Il a demandé que les stèles et les bustes du jeu fassent référence à des **philosophes, notamment grecs et stoïciens**, avec des **extraits, des citations ou de courts textes qui font prendre de la hauteur**. Ces textes accompagnent des mois de travail : persévérance, attention, méthode, rapport au temps, à l'erreur, à la vérité, beauté et sens des mathématiques, mémoire et apprentissage.

## Deux sortes de textes
1. **Maximes** (gravées sur les stèles, collectées dans un « Recueil ») : 8 à 35 mots, une idée frappante.
2. **Extraits** (dits par le buste du philosophe dans chaque salle) : 40 à 110 mots, un passage qui se tient seul.

## Exigence n° 1 : l'authenticité
- Chaque texte doit **exister à la référence indiquée** : œuvre, livre/chapitre/paragraphe (Épictète, *Manuel*, 5 ; Sénèque, *Lettres à Lucilius*, 1, 1 ; Marc Aurèle, *Pensées*, IV, 3 ; Platon, *République*, VII, 527b ; Aristote, *Métaphysique*, A, 1, 980a21 ; fragments présocratiques avec la numérotation Diels-Kranz, ex. « Héraclite, fr. B 91 DK (Platon, *Cratyle*, 402a) » ; Pascal avec la numérotation Lafuma ou Brunschvicg, etc.).
- Beaucoup de « citations » qui circulent sont **apocryphes** (fausses attributions à Sénèque, Marc Aurèle, Épictète, Socrate, Platon, Aristote, Confucius…). Ne retenir que ce qui se retrouve dans le texte. En cas de doute, ne pas inclure.
- Une parole **rapportée** par la tradition (anecdote de Diogène Laërce, mot attribué par Proclus, inscription de l'Académie) est permise si elle est **présentée comme telle** : `"statut": "tradition"` et une `note` qui dit qui la rapporte et quand (ex. « Mot rapporté par Proclus, *Commentaire sur Euclide*, 68 »).
- **Traduction** : traduire soi-même en français moderne et sobre à partir du grec ou du latin (ou adapter une traduction ancienne du domaine public), fidèle au sens, et l'indiquer : `"traduction": "trad. adaptée"`. Ne pas recopier une traduction moderne protégée. Les auteurs français (Montaigne, Descartes, Pascal…) sont cités dans leur texte, orthographe modernisée.
- Pour vérifier : Wikisource (fr, la, el, en), Perseus, remacle.org, thelatinlibrary.com, Gallica, éditions savantes connues. Les outils WebSearch / WebFetch sont disponibles (les charger via ToolSearch).

## Exigence n° 2 : la qualité
- Des textes qui élèvent, pas des banalités de développement personnel. Variété des auteurs et des idées. Pas de doublons d'idée.
- Privilégier les Grecs (présocratiques, Socrate/Platon, Aristote, Épicure, sceptiques, néoplatoniciens) et les **stoïciens** (Zénon, Cléanthe, Chrysippe, Sénèque, Musonius Rufus, Épictète, Marc Aurèle), puis quelques Latins (Cicéron, Lucrèce) et quelques modernes (Montaigne, Descartes, Pascal, Spinoza, Leibniz, Kant, Hume, Simone Weil, Poincaré, Laplace).
- Bienvenus : ce que les philosophes ont dit **des mathématiques** (Platon sur la géométrie, Aristote sur le beau en mathématiques, Proclus, Kant sur Thalès et le triangle isocèle, Pascal sur l'esprit de géométrie, Spinoza *more geometrico*, Poincaré…) et **de la mémoire et de l'apprentissage** (Platon, *Ménon* et *Théétète* ; Aristote, *De la mémoire* ; Sénèque, lettre 84 ; Plutarque, *Comment écouter* ; Montaigne, I, 26…).

## Format d'une maxime
```json
{ "id": "seneque-lettres-1-1", "type": "maxime",
  "auteur": "Sénèque", "oeuvre": "Lettres à Lucilius", "ref": "1, 1",
  "texte": "…", "original": "… (court, facultatif)", "traduction": "trad. adaptée",
  "statut": "authentique", "note": "",
  "themes": ["temps", "effort"] }
```
Thèmes possibles : effort, perseverance, temps, methode, attention, verite, erreur, doute, humilite, courage, raison, ordre, beaute, nombre, infini, changement, hasard, preuve, apprendre, memoire, liberte, mesure, lenteur, maitrise_de_soi.

## Format d'un extrait (buste)
```json
{ "salle": "c1r1", "type": "extrait",
  "philosophe": "Chrysippe", "nom_affiche": "Chrysippe de Soles (vers 280 – vers 206 av. J.-C.)",
  "portrait": "grec",
  "auteur_du_texte": "Diogène Laërce", "oeuvre": "Vies et doctrines des philosophes illustres", "ref": "VII, 71-73",
  "texte": "…", "traduction": "trad. adaptée", "statut": "authentique|tradition", "note": "…" }
```
`portrait` parmi : grec (barbe, antique), chignon (femme antique), perruque (XVIIe-XVIIIe), renaissance (fraise, XVIe), xixe (XIXe-XXe), moderne (femme, XXe), eveque (médiéval). Quand le philosophe n'a rien écrit qui nous soit parvenu, l'extrait est un **témoignage** (Diogène Laërce, Aristote, Simplicius…) : `auteur_du_texte` est alors le témoin.
