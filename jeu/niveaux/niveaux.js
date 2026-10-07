// =====================================================================
//  LES CHAPITRES ET LES SALLES DU JEU (édition CAPES Mayotte 2027)
// =====================================================================
//  Ce fichier est FABRIQUÉ par contenu/outils/construire.py à partir des
//  fichiers JSON du contenu (un par chapitre). Pour changer un exercice,
//  modifier le JSON puis relancer le programme.
//  Format : voir le début du fichier niveaux.js d'origine (jeu « Les
//  Salles ») ; ajouts : « choix » (QCM, réponse = numéro de l'option),
//  « retenir » (la règle affichée avec la correction), « maxime » (sur
//  une stèle), « id » (répétition espacée), bustes avec « source » et
//  « glose », formules LaTeX entre $…$ (KaTeX).
// =====================================================================
var CHAPITRES = [
 {
  "prologue": true,
  "titre": "L'éveil de Talos",
  "introduction": "Éveille-toi, Talos, automate de bronze. Je suis Athéna. Ce temple garde ce que les mathématiques ont de plus solide, et ce que les philosophes ont dit de plus haut sur l'art d'apprendre. Avant d'y entrer, apprends à te déplacer, à lire les stèles et à vaincre leurs gardiens.",
  "conclusion": "Tu es prêt. Les galeries du temple suivent ton plan de préparation, une semaine par galerie, jusqu'aux écrits du 1er avril. La première est celle du calcul et de la logique.",
  "salles": [
   {
    "nom": "L'éveil",
    "fond": "jardin",
    "athena": "Avance vers la droite et lis les inscriptions sur ton chemin.",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#...........D..............#",
     "#.........####.............#",
     "#..........................S",
     "#JI....##I.....I.........I.S",
     "################...#########"
    ],
    "guides": [],
    "steles": [],
    "bonus": [],
    "inscriptions": [
     {
      "titre": "Se déplacer",
      "texte": "Bienvenue, Talos. Avance avec les flèches ← → (ou Q et D). Saute avec Espace, ↑ ou Z. Approche-toi des inscriptions pour les lire."
     },
     {
      "titre": "Les dalles d'or",
      "texte": "Les dalles d'or s'allument quand Talos marche dessus. Quand toutes les dalles sont allumées, la porte s'ouvre. Celle-ci est sur l'estrade : monte par la marche."
     },
     {
      "titre": "Le précipice",
      "texte": "Attention au précipice ! Si Talos tombe, il revient au point de départ, sans rien perdre : les dalles allumées et les stèles résolues restent acquises."
     },
     {
      "titre": "La porte de bronze",
      "texte": "Voici la porte de bronze. Elle s'ouvre seulement quand la salle est résolue. Franchis-la pour passer à la salle suivante. La touche R recommence la salle si tu es coincé."
     }
    ]
   },
   {
    "nom": "La première stèle",
    "fond": "temple",
    "athena": "Le Minotaure garde la stèle de pierre : bats-le en trois manches pour l'allumer et ouvrir la porte. Là-haut, une stèle d'or t'attend, si tu le veux.",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....................A....#",
     "#....................###...#",
     "#..................I.......#",
     "#.................###......#",
     "#..........................#",
     "#..............###.........S",
     "#J.G.I.I...T.............I.S",
     "############################"
    ],
    "guides": [
     {
      "nom": "Athéna",
      "portrait": "casque",
      "texte": "Je suis Athéna, déesse de la sagesse. Dans chaque salle, le buste d'un philosophe te parlera : écoute-le en passant. Les stèles portent les exercices de ta préparation, et chacune garde une maxime. Ici, on ne se contente pas de trouver la réponse : on cherche pourquoi elle est juste."
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Pour se mettre en route",
        "enonce": "Calculer $6 \\times 9$. Entrer le résultat.",
        "reponse": 54,
        "indice": "$6 \\times 9 = 6 \\times 10 - 6$.",
        "explication": "$6 \\times 9 = 60 - 6 = 54$.",
        "retenir": "Pour multiplier par 9, multiplier par 10 puis retrancher le nombre."
       },
       {
        "titre": "Une fraction",
        "enonce": "Calculer $\\dfrac{1}{3} + \\dfrac{1}{4}$. Entrer le résultat sous forme de fraction irréductible, par exemple 5/6.",
        "reponse": 0.5833333333333334,
        "indice": "Mets les deux fractions au même dénominateur, 12.",
        "explication": "$\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.",
        "retenir": "On additionne des fractions après les avoir mises au même dénominateur."
       },
       {
        "titre": "Un choix",
        "enonce": "Laquelle de ces égalités est vraie pour tout réel $x$ ? Cliquer la bonne option (ou taper son numéro).",
        "reponse": 2,
        "choix": [
         "$(x+1)^2 = x^2 + 1$",
         "$(x+1)^2 = x^2 + 2x + 1$",
         "$(x+1)^2 = 2x + 2$"
        ],
        "indice": "Développe $(x+1)(x+1)$.",
        "explication": "$(x+1)^2 = (x+1)(x+1) = x^2 + x + x + 1 = x^2 + 2x + 1$. La première égalité oublie le double produit $2x$ : elle est fausse dès $x = 1$ ($4 \\neq 2$).",
        "retenir": "$(a+b)^2 = a^2 + 2ab + b^2$ : ne jamais oublier le double produit."
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « $\\sqrt{9 + 16} = \\sqrt{9} + \\sqrt{16}$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule chaque membre.",
        "explication": "Faux. $\\sqrt{9+16} = \\sqrt{25} = 5$, alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$.",
        "retenir": "La racine carrée d'une somme n'est pas la somme des racines carrées."
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, $x^2 \\geq 0$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pense au signe d'un produit de deux facteurs de même signe.",
        "explication": "Vrai. $x^2 = x \\times x$ est le produit de deux réels de même signe, donc positif ou nul (nul seulement pour $x = 0$).",
        "retenir": "Un carré de réel est toujours positif ou nul."
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Tout entier divisible par 6 est divisible par 3. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris un multiple de 6 sous la forme $6k$.",
        "explication": "Vrai. Si $n = 6k$ avec $k$ entier, alors $n = 3 \\times (2k)$ et $2k$ est entier : $n$ est divisible par 3. (La réciproque est fausse : 3 n'est pas divisible par 6.)",
        "retenir": "Pour prouver « pour tout », on raisonne sur un élément quelconque, pas sur des exemples."
       }
      ]
     }
    ],
    "inscriptions": [
     {
      "titre": "Les stèles d'or",
      "texte": "Là-haut brille une stèle d'or, gardée par les oiseaux du lac Stymphale. Elle porte trois propositions Vrai–Faux, comme celles qui ouvrent la composition 2 du concours : avant de cliquer, formule ta justification (une preuve si c'est vrai, un contre-exemple si c'est faux). Elle est facultative, mais chaque sceau d'or fait gagner des parures à Talos et ouvre, à la fin de chaque chapitre, un sanctuaire secret aux problèmes plus difficiles."
     },
     {
      "titre": "Les gardiens",
      "texte": "Chaque stèle de pierre est gardée par un monstre qui rôde tout près. Approche-toi et il fonce sur toi : le combat commence ! (Tu peux aussi appuyer sur E devant la stèle.) Le combat se joue en trois manches, un exercice par manche : l'attaque, l'esquive, puis le coup final, le plus difficile. Le monstre est alors changé en pierre et la stèle s'allume."
     },
     {
      "titre": "Répondre",
      "texte": "Tape un nombre (8 ; 2,5 ; −4 ; 7/12), ou une valeur exacte (3√2 s'écrit aussi 3rac2, 2π s'écrit 2pi, e^2), puis Entrée, ou clique une option (touches 1 à 4). Chaque manche se joue contre un sablier : 3 minutes, 5 pour le coup final. Le bouton « Sablier » le coupe si tu préfères prendre ton temps. Une erreur : le monstre frappe, Talos perd un cœur et un indice apparaît. Une victoire rend un cœur et rapporte un sceau ; la correction s'affiche avec la règle « À retenir »."
     },
     {
      "titre": "La mémoire",
      "texte": "Chaque exercice rencontré est retenu. Le temple de Mnémosyne (en tête de la liste des salles, ou par le bouton « Mémoire ») te le reproposera au moment où tu commences à l'oublier : le lendemain si tu l'as raté, puis après 3, 7, 16 et 35 jours. Chaque stèle vaincue grave aussi sa maxime dans ton recueil. Quelques minutes de révision chaque jour valent mieux qu'une longue séance par semaine."
     }
    ]
   },
   {
    "nom": "Les sandales d'Hermès",
    "fond": "crepuscule",
    "athena": "Ce gouffre est bien trop large pour un saut. Résous la stèle d'Hermès : Talos le franchira d'un salto.",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................S",
     "#J..I.....H.........R.I....S",
     "###########.........########"
    ],
    "guides": [],
    "steles": [],
    "bonus": [],
    "acrobaties": [
     {
      "titre": "Le salto d'Hermès",
      "enonce": "Combien de minutes y a-t-il dans les trois quarts d'une heure ? Entrer ce nombre.",
      "reponse": 45,
      "indice": "Un quart d'heure dure 15 minutes.",
      "explication": "$\\dfrac{3}{4} \\times 60 = 45$ minutes.",
      "retenir": "Prendre une fraction d'une quantité, c'est la multiplier par cette fraction.",
      "figure": "salto"
     }
    ],
    "inscriptions": [
     {
      "titre": "Les stèles d'Hermès",
      "texte": "Certaines stèles d'argent portent les sandales ailées d'Hermès, le messager des dieux. Aucun monstre ne les garde et une erreur n'y coûte rien. Résous leur problème, et Talos exécute une figure acrobatique : un salto par-dessus un gouffre, un double salto jusqu'à une corniche… Elles mènent à des endroits impossibles à atteindre autrement."
     },
     {
      "titre": "Dans les deux sens",
      "texte": "Te voici posé sur le cercle ailé. Une fois la stèle résolue, appuie sur E ici, ou devant la stèle, pour refaire la figure dans un sens ou dans l'autre. La porte de bronze est juste là."
     }
    ]
   }
  ]
 },
 {
  "niveau": "Semaine 1",
  "titre": "Calcul et logique",
  "introduction": "Te voici au seuil des Salles. Avant les fonctions et les figures vient la langue même des mathématiques : « si… alors », « pour tout », « il existe », et le calcul exact, qui ne tolère aucun à-peu-près. Les stoïciens comparaient la philosophie à un champ fertile dont la logique est la clôture : sans elle, rien de ce que tu sèmeras ne sera protégé. Avance sans hâte ; chaque flèche a un sens, et chaque mot compte.",
  "conclusion": "Emporte trois réflexes : une implication n'est pas sa réciproque, une négation échange « pour tout » et « il existe » sans changer leur ordre, et un seul contre-exemple renverse ce que mille exemples ne prouveront jamais. Le reste, calcul exact et inégalités justifiées pas à pas, est affaire de patience : c'est elle qui fait les copies sans faute.",
  "salles": [
   {
    "nom": "Le portique de Chrysippe",
    "fond": "temple",
    "athena": "Une implication ne promet rien quand son hypothèse est fausse. Avant de conclure, regarde toujours dans quel sens va la flèche.",
    "notion": "Implication, réciproque, contraposée, équivalence",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#........................A.#",
     "#.......................####",
     "#..........................#",
     "#....................###...#",
     "#................T.........#",
     "#..............####........#",
     "#..........................S",
     "#J.G..T......##............S",
     "##########...###############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "La contraposée",
        "enonce": "On considère l'implication : « S'il pleut à Mamoudzou, alors les rues de Mamoudzou sont mouillées. » Quelle est sa contraposée ?",
        "reponse": 3,
        "choix": [
         "« Si les rues de Mamoudzou sont mouillées, alors il pleut à Mamoudzou. »",
         "« S'il ne pleut pas à Mamoudzou, alors les rues de Mamoudzou ne sont pas mouillées. »",
         "« Si les rues de Mamoudzou ne sont pas mouillées, alors il ne pleut pas à Mamoudzou. »",
         "« Il pleut à Mamoudzou et les rues de Mamoudzou ne sont pas mouillées. »"
        ],
        "indice": "La contraposée de « si $P$, alors $Q$ » part de la négation de la conclusion : « si non $Q$, alors… ».",
        "explication": "La contraposée de $P \\Rightarrow Q$ est $\\text{non}\\,Q \\Rightarrow \\text{non}\\,P$ : « si les rues ne sont pas mouillées, alors il ne pleut pas ». Elle est équivalente à l'implication de départ. La première option est la réciproque $Q \\Rightarrow P$, qui peut être fausse (un camion-citerne peut mouiller les rues) ; la deuxième est la contraposée de la réciproque ; la dernière est la négation de l'implication.",
        "retenir": "Contraposée de $P \\Rightarrow Q$ : $\\text{non}\\,Q \\Rightarrow \\text{non}\\,P$, toujours équivalente. Réciproque : $Q \\Rightarrow P$, qui peut être fausse même si l'implication est vraie.",
        "id": "c1r1-s0-0"
       },
       {
        "titre": "Trois flèches",
        "enonce": "Soit $x$ un réel. On considère l'implication $\\mathcal{I}$ : « si $x^2 < 4$, alors $x < 2$ ». Parmi les trois propositions $\\mathcal{I}$, sa réciproque et sa contraposée, combien sont vraies pour tout réel $x$ ? Entrer ce nombre.",
        "reponse": 2,
        "indice": "Écris la réciproque (« si $x < 2$, alors… ») et teste-la avec un nombre négatif. Une implication et sa contraposée ont toujours la même valeur de vérité.",
        "explication": "$\\mathcal{I}$ est vraie : si $x^2 < 4$, alors $-2 < x < 2$, donc $x < 2$. Sa contraposée « si $x \\geqslant 2$, alors $x^2 \\geqslant 4$ » est vraie aussi : elle lui est équivalente (directement : $x \\geqslant 2 > 0$ et la fonction carré est croissante sur $[0\\,;+\\infty[$). La réciproque « si $x < 2$, alors $x^2 < 4$ » est fausse : $x = -3$ donne $x^2 = 9$. Deux propositions sont vraies.",
        "retenir": "Une implication et sa contraposée sont vraies ou fausses ensemble ; la réciproque s'étudie à part (penser aux nombres négatifs).",
        "id": "c1r1-s0-1"
       },
       {
        "titre": "Le seuil de l'implication",
        "enonce": "Soit $a$ un réel. On considère la proposition : « pour tout réel $x$, si $x > a$, alors $x^2 > 9$ ». Selon la valeur de $a$, elle est vraie ou fausse. Entrer la plus petite valeur de $a$ pour laquelle elle est vraie.",
        "reponse": 3,
        "indice": "Elle est fausse dès qu'il existe un réel $x > a$ tel que $x^2 \\leqslant 9$, c'est-à-dire $-3 \\leqslant x \\leqslant 3$. Pour quelles valeurs de $a$ un tel $x$ existe-t-il ?",
        "explication": "Pour $a = 3$ : si $x > 3$, alors $x > 0$ et, la fonction carré étant strictement croissante sur $[0\\,;+\\infty[$, $x^2 > 9$. La proposition est vraie, et elle l'est a fortiori pour tout $a \\geqslant 3$. Pour $a < 3$, $x = 3$ est un contre-exemple : $3 > a$, mais $3^2 = 9$ n'est pas strictement supérieur à $9$. La plus petite valeur est donc $a = 3$.",
        "retenir": "Pour réfuter « pour tout $x$, si $A(x)$, alors $B(x)$ », il suffit d'un $x$ qui vérifie l'hypothèse $A(x)$ sans vérifier la conclusion $B(x)$.",
        "id": "c1r1-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Nécessaire ou suffisante ?",
        "enonce": "Soit $n$ un entier naturel. Pour que $n$ soit divisible par 5, la condition « $n$ est divisible par 10 » est une condition :",
        "reponse": 2,
        "choix": [
         "nécessaire mais pas suffisante",
         "suffisante mais pas nécessaire",
         "nécessaire et suffisante",
         "ni nécessaire ni suffisante"
        ],
        "indice": "« $P$ est suffisante pour $Q$ » signifie $P \\Rightarrow Q$ ; « $P$ est nécessaire pour $Q$ » signifie $Q \\Rightarrow P$. Teste les deux implications.",
        "explication": "Si $n$ est divisible par 10, alors $n = 10k = 5 \\times (2k)$ avec $k$ entier : $n$ est divisible par 5. La condition est donc suffisante. Elle n'est pas nécessaire : $n = 5$ est divisible par 5 sans être divisible par 10.",
        "retenir": "« Il suffit que $P$ » : $P \\Rightarrow Q$. « Il faut que $P$ » : $Q \\Rightarrow P$. Nécessaire et suffisante : $P \\Leftrightarrow Q$.",
        "id": "c1r1-s1-0"
       },
       {
        "titre": "Une seule équivalence",
        "enonce": "Laquelle de ces équivalences est vraie pour tout réel $x$ (non nul dans la dernière) ?",
        "reponse": 1,
        "choix": [
         "$|x - 1| \\leqslant 2 \\Leftrightarrow -1 \\leqslant x \\leqslant 3$",
         "$x^2 = 9 \\Leftrightarrow x = 3$",
         "$x^2 > x \\Leftrightarrow x > 1$",
         "$\\frac{1}{x} < 1 \\Leftrightarrow x > 1$"
        ],
        "indice": "Une équivalence est fausse dès qu'un de ses deux sens l'est. Pour chaque ligne, teste un nombre négatif.",
        "explication": "$|x - 1| \\leqslant 2$ signifie que la distance de $x$ à $1$ est au plus $2$, soit $-2 \\leqslant x - 1 \\leqslant 2$, c'est-à-dire $-1 \\leqslant x \\leqslant 3$ : l'équivalence est vraie. Les autres ont un sens faux : $x = -3$ vérifie $x^2 = 9$ ; $x = -1$ vérifie $x^2 > x$ et $\\frac{1}{x} < 1$ ; aucun de ces nombres ne vérifie le membre de droite.",
        "retenir": "Prouver $P \\Leftrightarrow Q$ demande les deux implications ; un seul contre-exemple sur l'une d'elles réfute l'équivalence.",
        "id": "c1r1-s1-1"
       },
       {
        "titre": "Élever au carré",
        "enonce": "On veut résoudre dans $\\mathbb{R}$ l'équation $\\sqrt{x + 2} = x$. En élevant au carré, on obtient $x + 2 = x^2$. Entrer le nombre de solutions réelles de l'équation de départ.",
        "reponse": 1,
        "indice": "Élever au carré ne donne qu'une implication. Résous $x^2 - x - 2 = 0$, puis vérifie chaque candidat dans l'équation de départ.",
        "explication": "Si $\\sqrt{x+2} = x$, alors $x + 2 = x^2$, soit $(x - 2)(x + 1) = 0$ : $x = 2$ ou $x = -1$. Ce n'est qu'une implication, il faut vérifier. $\\sqrt{4} = 2$ : $2$ convient. $\\sqrt{1} = 1 \\neq -1$ : $-1$ ne convient pas (une racine carrée est positive). Il y a une seule solution.",
        "retenir": "$A = B \\Rightarrow A^2 = B^2$, mais la réciproque est fausse : après avoir élevé au carré, on vérifie les solutions trouvées.",
        "id": "c1r1-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si une implication est vraie, alors sa réciproque est fausse. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Cherche une implication vraie dont la réciproque est vraie aussi.",
        "explication": "Faux. Contre-exemple : pour un réel $x$, « si $x = 2$, alors $2x = 4$ » est vraie, et sa réciproque « si $2x = 4$, alors $x = 2$ » est vraie aussi. La réciproque d'une implication vraie peut donc être vraie, comme ici, ou fausse : « si $x = -2$, alors $x^2 = 4$ » est vraie, mais sa réciproque ne l'est pas ($x = 2$).",
        "retenir": "Qu'une implication soit vraie ne dit rien de sa réciproque : il faut étudier celle-ci à part.",
        "id": "c1r1-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soient $a$ et $b$ deux réels. Pour que $a + b > 0$, il faut que $a > 0$ et $b > 0$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "« Pour que $Q$, il faut $P$ » se traduit par $Q \\Rightarrow P$. Une somme strictement positive impose-t-elle le signe de chacun de ses termes ?",
        "explication": "Faux. « Il faut que $a > 0$ et $b > 0$ » signifie : si $a + b > 0$, alors $a > 0$ et $b > 0$. Contre-exemple : $a = 3$ et $b = -1$. On a $a + b = 2 > 0$, mais $b > 0$ est faux. La condition est suffisante (si $a > 0$ et $b > 0$, alors $a + b > 0$ : c'est la réciproque, qui est vraie), mais elle n'est pas nécessaire.",
        "retenir": "Réfuter « pour que $Q$, il faut $P$ », c'est-à-dire $Q \\Rightarrow P$, c'est exhiber un cas où $Q$ est vraie et $P$ fausse.",
        "id": "c1r1-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « L'implication “si $3 < 2$, alors $5 < 4$” est vraie. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Une implication n'est fausse que dans un seul cas : hypothèse vraie et conclusion fausse. Ici, l'hypothèse est-elle vraie ?",
        "explication": "Vrai. L'implication $P \\Rightarrow Q$ n'est fausse que si $P$ est vraie et $Q$ fausse. Ici $P$ : « $3 < 2$ » est fausse, donc l'implication est vraie, quelle que soit la conclusion.",
        "retenir": "Une implication dont l'hypothèse est fausse est vraie : elle ne promet rien dans ce cas.",
        "id": "c1r1-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "L'infini d'Anaxagore",
    "fond": "mer",
    "athena": "Décompose en facteurs premiers, fais sortir les carrés parfaits : le calcul exact récompense la patience, pas la vitesse.",
    "notion": "Fractions, puissances, racines carrées",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.......................A..#",
     "#......................###.#",
     "#..........................#",
     "#..................###.....S",
     "#J.G..T..........T.........S",
     "#########PPPPPP#############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Priorités",
        "enonce": "Calculer $A = \\frac{5}{6} - \\frac{2}{3} \\div \\frac{4}{9}$. Entrer $A$ sous forme de fraction irréductible.",
        "reponse": -0.6666666666666666,
        "indice": "La division est prioritaire sur la soustraction. Diviser par $\\frac{4}{9}$, c'est multiplier par $\\frac{9}{4}$.",
        "explication": "D'abord la division : $\\frac{2}{3} \\div \\frac{4}{9} = \\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$. Puis $A = \\frac{5}{6} - \\frac{9}{6} = -\\frac{4}{6} = -\\frac{2}{3}$. Calculer de gauche à droite donnerait à tort $\\frac{1}{6} \\times \\frac{9}{4} = \\frac{3}{8}$.",
        "retenir": "Multiplications et divisions avant additions et soustractions ; diviser par une fraction, c'est multiplier par son inverse.",
        "id": "c1r2-s0-0"
       },
       {
        "titre": "Puissances en facteurs premiers",
        "enonce": "Calculer $B = \\frac{(-3)^{4} \\times 4^{3}}{6^{5} \\times 2^{-1}}$. Entrer $B$ sous forme de fraction irréductible.",
        "reponse": 1.3333333333333333,
        "indice": "Écris tout avec des puissances de 2 et de 3 : $(-3)^4 = 3^4$, $4^3 = 2^6$, $6^5 = 2^5 \\times 3^5$.",
        "explication": "$(-3)^4 = 3^4$ (exposant pair), $4^3 = 2^6$ et $6^5 = 2^5 \\times 3^5$. Le dénominateur vaut $2^5 \\times 3^5 \\times 2^{-1} = 2^4 \\times 3^5$. Donc $B = 2^{6-4} \\times 3^{4-5} = 2^2 \\times 3^{-1} = \\frac{4}{3}$.",
        "retenir": "Quotient de puissances : tout décomposer en nombres premiers, puis soustraire les exposants. $(-a)^n = a^n$ si $n$ est pair.",
        "id": "c1r2-s0-1"
       },
       {
        "titre": "Les zéros d'un grand nombre",
        "enonce": "On considère l'entier $N = 8^{3} \\times 125^{2} \\times 6$. Son écriture décimale se termine par un certain nombre de chiffres 0 consécutifs. Entrer ce nombre de zéros finaux.",
        "reponse": 6,
        "indice": "Décompose en facteurs premiers, puis regroupe les facteurs $2 \\times 5 = 10$.",
        "explication": "$8^3 = 2^9$, $125^2 = 5^6$ et $6 = 2 \\times 3$, donc $N = 2^{10} \\times 3 \\times 5^6 = 2^4 \\times 3 \\times (2 \\times 5)^6 = 48 \\times 10^6 = 48\\,000\\,000$. Comme $48$ ne se termine pas par 0, $N$ se termine par exactement 6 zéros.",
        "retenir": "Le nombre de zéros finaux d'un entier naturel non nul est le plus petit des exposants de 2 et de 5 dans sa décomposition en facteurs premiers.",
        "effet": "passerelle",
        "id": "c1r2-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Réduire une somme de racines",
        "enonce": "On pose $C = \\sqrt{75} - 3\\sqrt{12} + \\sqrt{48}$. On peut écrire $C = a\\sqrt{3}$ avec $a$ entier. Entrer $a$.",
        "reponse": 3,
        "indice": "Fais apparaître un carré parfait sous chaque racine : $75 = 25 \\times 3$, $12 = 4 \\times 3$, $48 = 16 \\times 3$.",
        "explication": "$\\sqrt{75} = 5\\sqrt{3}$, $\\sqrt{12} = 2\\sqrt{3}$ et $\\sqrt{48} = 4\\sqrt{3}$. Donc $C = 5\\sqrt{3} - 6\\sqrt{3} + 4\\sqrt{3} = 3\\sqrt{3}$ et $a = 3$.",
        "retenir": "Pour $k \\geqslant 0$ et $m \\geqslant 0$, $\\sqrt{k^2 m} = k\\sqrt{m}$ : on fait sortir le plus grand carré parfait.",
        "id": "c1r2-s1-0"
       },
       {
        "titre": "L'expression conjuguée",
        "enonce": "On écrit $\\frac{6}{3 - \\sqrt{7}}$ sans racine carrée au dénominateur, sous la forme $a + b\\sqrt{7}$ avec $a$ et $b$ entiers. Entrer $a$.",
        "reponse": 9,
        "indice": "Multiplie le numérateur et le dénominateur par $3 + \\sqrt{7}$.",
        "explication": "$(3 - \\sqrt{7})(3 + \\sqrt{7}) = 9 - 7 = 2$. Donc $\\frac{6}{3 - \\sqrt{7}} = \\frac{6(3 + \\sqrt{7})}{2} = 3(3 + \\sqrt{7}) = 9 + 3\\sqrt{7}$, et $a = 9$.",
        "retenir": "$(a - \\sqrt{b})(a + \\sqrt{b}) = a^2 - b$ : l'expression conjuguée fait disparaître la racine du dénominateur.",
        "id": "c1r2-s1-1"
       },
       {
        "titre": "Racines emboîtées",
        "enonce": "Le nombre $E = \\sqrt{7 + 4\\sqrt{3}} + \\sqrt{7 - 4\\sqrt{3}}$ est un entier. Entrer $E$.",
        "reponse": 4,
        "indice": "Développe $(2 + \\sqrt{3})^2$ et $(2 - \\sqrt{3})^2$. Attention : $\\sqrt{u^2} = |u|$.",
        "explication": "$(2 + \\sqrt{3})^2 = 4 + 4\\sqrt{3} + 3 = 7 + 4\\sqrt{3}$ et $(2 - \\sqrt{3})^2 = 7 - 4\\sqrt{3}$. Donc $\\sqrt{7 + 4\\sqrt{3}} = 2 + \\sqrt{3}$ et $\\sqrt{7 - 4\\sqrt{3}} = |2 - \\sqrt{3}| = 2 - \\sqrt{3}$, car $\\sqrt{3} < 2$. Ainsi $E = 4$.",
        "retenir": "Pour simplifier $\\sqrt{p + q\\sqrt{r}}$, chercher un carré $(a + b\\sqrt{r})^2$ ; et ne jamais oublier que $\\sqrt{u^2} = |u|$.",
        "id": "c1r2-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous réels positifs $a$ et $b$, $\\sqrt{a + b} \\leqslant \\sqrt{a} + \\sqrt{b}$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Les deux membres sont positifs : compare leurs carrés.",
        "explication": "Vrai. Les deux membres sont positifs et $(\\sqrt{a} + \\sqrt{b})^2 = a + b + 2\\sqrt{ab} \\geqslant a + b = (\\sqrt{a + b})^2$. Or deux réels positifs sont rangés dans le même ordre que leurs carrés (la racine carrée est croissante sur $[0\\,;+\\infty[$). Donc $\\sqrt{a + b} \\leqslant \\sqrt{a} + \\sqrt{b}$, avec égalité seulement si $a = 0$ ou $b = 0$.",
        "retenir": "$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ en général, mais $\\sqrt{a + b} \\leqslant \\sqrt{a} + \\sqrt{b}$ pour tous $a, b \\geqslant 0$.",
        "id": "c1r2-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier naturel $n$, $2^{n} + 2^{n} = 4^{n}$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Factorise : $2^n + 2^n = 2 \\times 2^n$. Puis teste $n = 2$.",
        "explication": "Faux. Contre-exemple : $n = 2$ donne $2^2 + 2^2 = 8$, alors que $4^2 = 16$. En réalité $2^n + 2^n = 2 \\times 2^n = 2^{n+1}$, et $2^{n+1} = 4^n = 2^{2n}$ seulement pour $n = 1$ : un cas où l'égalité est vraie ne suffit pas.",
        "retenir": "$a^n + a^n = 2a^n$ : on factorise une somme de puissances égales, on ne multiplie pas les bases.",
        "id": "c1r2-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous réels $a$ et $b$ tels que $0 < a < b$, $\\frac{a + 1}{b + 1} > \\frac{a}{b}$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Étudie le signe de la différence $\\frac{a+1}{b+1} - \\frac{a}{b}$, mise au même dénominateur.",
        "explication": "Vrai. $\\frac{a+1}{b+1} - \\frac{a}{b} = \\frac{b(a+1) - a(b+1)}{b(b+1)} = \\frac{b - a}{b(b+1)}$. Comme $b > a$ et $b > 0$, le numérateur et le dénominateur sont strictement positifs : la différence est strictement positive.",
        "retenir": "Pour comparer deux nombres, étudier le signe de leur différence, écrite sous forme de quotient ou de produit.",
        "id": "c1r2-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "La leçon de Théodore",
    "fond": "crepuscule",
    "athena": "Choisis ton arme avant d'écrire : un seul contre-exemple renverse un « pour tout », mais seul un raisonnement général peut l'établir.",
    "notion": "Raisonnements : absurde, contre-exemple, disjonction de cas",
    "plan": [
     "############################",
     "#..........................#",
     "#.A...R....................#",
     "#######....................#",
     "#..........................#",
     "#..........................#",
     "#......................T...#",
     "#....................####..#",
     "#..........................#",
     "#................###.......#",
     "#..........................#",
     "#.............###..........S",
     "#JG.T...H..................S",
     "##########...###############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le bon contre-exemple",
        "enonce": "On considère la proposition : « pour tout réel $x$, $x^2 \\geqslant x$ ». Quel réel est un contre-exemple ?",
        "reponse": 4,
        "choix": [
         "$x = -1$",
         "$x = 0$",
         "$x = 2$",
         "$x = \\frac{1}{2}$"
        ],
        "indice": "Un contre-exemple est un réel tel que $x^2 < x$. Que devient un nombre compris entre 0 et 1 quand on l'élève au carré ?",
        "explication": "Pour $x = \\frac{1}{2}$ : $x^2 = \\frac{1}{4} < \\frac{1}{2}$, donc la proposition est fausse. Les autres valeurs vérifient l'inégalité ($1 \\geqslant -1$, $0 \\geqslant 0$, $4 \\geqslant 2$) : ce sont des exemples, et des exemples ne prouvent rien sur un « pour tout ».",
        "retenir": "Pour $0 < x < 1$, on a $x^2 < x$ : c'est là qu'il faut chercher les contre-exemples.",
        "id": "c1r3-s0-0"
       },
       {
        "titre": "Une série trompeuse",
        "enonce": "Proposition : « pour tout entier naturel $n$, le nombre $n^2 + n + 11$ est premier ». Elle est vraie pour $n = 0$, $1$, $2$… et pourtant elle est fausse. Entrer le plus petit entier naturel $n$ qui est un contre-exemple.",
        "reponse": 10,
        "indice": "Cherche une valeur de $n$ pour laquelle $n^2 + n + 11$ est visiblement divisible par 11, puis vérifie qu'aucune valeur plus petite ne convient.",
        "explication": "Pour $n = 0, 1, \\dots, 9$, on obtient $11, 13, 17, 23, 31, 41, 53, 67, 83, 101$, tous premiers. Pour $n = 10$ : $100 + 10 + 11 = 121 = 11^2$, qui n'est pas premier. Le plus petit contre-exemple est $10$ : dix vérifications réussies ne prouvaient rien.",
        "retenir": "Vérifier une propriété sur des exemples, même nombreux, ne la démontre pas ; un seul contre-exemple la réfute.",
        "id": "c1r3-s0-1"
       },
       {
        "titre": "Contre-exemple d'une implication",
        "enonce": "Proposition : « pour tous réels $a$ et $b$ non nuls, si $a < b$, alors $\\frac{1}{a} > \\frac{1}{b}$ ». Quel couple est un contre-exemple ?",
        "reponse": 2,
        "choix": [
         "$a = 1$ et $b = 2$",
         "$a = -1$ et $b = 2$",
         "$a = 2$ et $b = 1$",
         "$a = -2$ et $b = -1$"
        ],
        "indice": "Un contre-exemple doit vérifier l'hypothèse $a < b$ et contredire la conclusion. Pense aux signes de $a$ et $b$.",
        "explication": "Pour $a = -1$ et $b = 2$ : $a < b$, mais $\\frac{1}{a} = -1 < \\frac{1}{2} = \\frac{1}{b}$. Le couple $a = 2$, $b = 1$ ne vérifie pas l'hypothèse $a < b$ : il ne contredit rien. Les couples $(1\\,;2)$ et $(-2\\,;-1)$ vérifient la conclusion, car la fonction inverse est décroissante sur $]0\\,;+\\infty[$ et sur $]-\\infty\\,;0[$ ; elle ne l'est pas sur la réunion de ces intervalles. L'implication est vraie quand $a$ et $b$ sont de même signe, fausse quand $a < 0 < b$.",
        "retenir": "Un contre-exemple de « si $P$, alors $Q$ » vérifie $P$ et ne vérifie pas $Q$ : c'est exactement la négation de l'implication.",
        "id": "c1r3-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Supposer le contraire",
        "enonce": "Selon le Théétète de Platon, Théodore de Cyrène montrait l'irrationalité de $\\sqrt{3}$, $\\sqrt{5}$… Pour démontrer par l'absurde que $\\sqrt{5}$ est irrationnel, par quelle supposition commence-t-on ?",
        "reponse": 2,
        "choix": [
         "« $\\sqrt{5}$ est irrationnel. »",
         "« $\\sqrt{5} = \\frac{p}{q}$, avec $p$ et $q$ entiers naturels non nuls et la fraction $\\frac{p}{q}$ irréductible. »",
         "« $5$ n'est pas le carré d'un entier. »"
        ],
        "indice": "Le raisonnement par l'absurde suppose la négation de ce que l'on veut démontrer. Quelle est la négation de « irrationnel » ?",
        "explication": "On suppose le contraire de la conclusion : $\\sqrt{5}$ est rationnel, donc s'écrit $\\frac{p}{q}$, et l'on peut choisir la fraction irréductible. On en tire $p^2 = 5q^2$, puis que $p$ et $q$ sont tous deux multiples de 5, ce qui contredit l'irréductibilité. Supposer ce que l'on veut démontrer serait un cercle vicieux ; « 5 n'est pas le carré d'un entier » est un fait vrai, pas l'hypothèse d'un raisonnement par l'absurde.",
        "retenir": "Raisonnement par l'absurde : on suppose la négation de la conclusion et on aboutit à une contradiction. On l'annonce : « Raisonnons par l'absurde ».",
        "id": "c1r3-s1-0"
       },
       {
        "titre": "Deux cas, deux sorts",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'équation $|x - 5| = 2x + 1$ en distinguant les cas $x \\geqslant 5$ et $x < 5$. Elle admet une unique solution. Entrer cette solution, sous forme de fraction.",
        "reponse": 1.3333333333333333,
        "indice": "Dans chaque cas, remplace $|x - 5|$ par $x - 5$ ou par $5 - x$, résous, puis ne garde la solution que si elle appartient au cas étudié.",
        "explication": "Si $x \\geqslant 5$ : $x - 5 = 2x + 1$ donne $x = -6$, qui n'est pas supérieur ou égal à 5 : rejeté. Si $x < 5$ : $5 - x = 2x + 1$ donne $x = \\frac{4}{3}$, qui est bien inférieur à 5. Vérification : $\\left|\\frac{4}{3} - 5\\right| = \\frac{11}{3}$ et $2 \\times \\frac{4}{3} + 1 = \\frac{11}{3}$. L'unique solution est $\\frac{4}{3}$.",
        "retenir": "Dans une disjonction de cas, une solution trouvée n'est valable que si elle appartient au cas étudié.",
        "id": "c1r3-s1-1"
       },
       {
        "titre": "Le sens de la flèche",
        "enonce": "Pour démontrer que $\\sqrt{3}$ est irrationnel, on suppose $\\sqrt{3} = \\frac{p}{q}$ avec $p$, $q$ entiers naturels non nuls et $\\frac{p}{q}$ irréductible. On obtient $p^2 = 3q^2$, donc $3$ divise $p^2$. Quelle propriété permet d'en déduire que $3$ divise $p$ ?",
        "reponse": 3,
        "choix": [
         "« Si $3$ divise $p$, alors $3$ divise $p^2$. »",
         "« Si $p^2$ est pair, alors $p$ est pair. »",
         "« Si $3$ divise $p^2$, alors $3$ divise $p$. »"
        ],
        "indice": "On sait que 3 divise $p^2$ et l'on veut que 3 divise $p$. Quelle implication va dans ce sens ?",
        "explication": "On dispose de « 3 divise $p^2$ » et l'on veut conclure « 3 divise $p$ » : il faut l'implication dans ce sens. La première est sa réciproque : vraie, mais inutile ici. La deuxième concerne la parité, pas la divisibilité par 3. La bonne propriété se démontre par contraposée : si $p = 3k + 1$ ou $p = 3k + 2$, alors $p^2 = 3(3k^2 + 2k) + 1$ ou $p^2 = 3(3k^2 + 4k + 1) + 1$, qui n'est pas divisible par 3.",
        "retenir": "Avant d'invoquer une propriété, vérifier son sens : on part de ce que l'on sait pour aller vers ce que l'on veut.",
        "id": "c1r3-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La somme de deux nombres irrationnels est toujours irrationnelle. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Cherche deux irrationnels dont les parties irrationnelles se compensent.",
        "explication": "Faux. Contre-exemple : $\\sqrt{2}$ et $1 - \\sqrt{2}$ sont irrationnels (si $1 - \\sqrt{2}$ était rationnel, $\\sqrt{2} = 1 - (1 - \\sqrt{2})$ le serait aussi), mais leur somme vaut $1$, qui est rationnel.",
        "retenir": "Les irrationnels ne sont stables ni par addition ni par multiplication : $\\sqrt{2} + (1 - \\sqrt{2}) = 1$ et $\\sqrt{2} \\times \\sqrt{2} = 2$.",
        "id": "c1r3-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La somme d'un nombre rationnel et d'un nombre irrationnel est irrationnelle. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Raisonne par l'absurde : suppose la somme rationnelle et isole le nombre irrationnel.",
        "explication": "Vrai. Soit $r$ rationnel et $x$ irrationnel. Supposons par l'absurde que $s = r + x$ soit rationnel. Alors $x = s - r$ est la différence de deux rationnels, donc rationnel : contradiction. Donc $r + x$ est irrationnel.",
        "retenir": "La différence de deux rationnels est rationnelle : c'est l'argument clé de nombreuses preuves d'irrationalité par l'absurde.",
        "id": "c1r3-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, si $x^2$ est irrationnel, alors $x$ est irrationnel. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris la contraposée de cette implication.",
        "explication": "Vrai. Montrons la contraposée : « si $x$ est rationnel, alors $x^2$ est rationnel ». Si $x = \\frac{p}{q}$ avec $p$, $q$ entiers et $q \\neq 0$, alors $x^2 = \\frac{p^2}{q^2}$ est un quotient d'entiers avec $q^2 \\neq 0$ : il est rationnel. (La réciproque est fausse : $\\sqrt{2}$ est irrationnel, mais $(\\sqrt{2})^2 = 2$ ne l'est pas.)",
        "retenir": "Quand la conclusion est négative (« irrationnel »), la contraposée la rend positive et souvent facile à établir.",
        "id": "c1r3-b0-2"
       }
      ]
     }
    ],
    "acrobaties": [
     {
      "titre": "La faille de la preuve",
      "enonce": "Un élève « démontre » que $\\sqrt{4}$ est irrationnel. Supposons $\\sqrt{4} = \\frac{p}{q}$, fraction irréductible d'entiers naturels non nuls. (a) Alors $p^2 = 4q^2$, donc $4$ divise $p^2$. (b) Donc $4$ divise $p$ : $p = 4k$ avec $k$ entier. (c) Alors $16k^2 = 4q^2$, d'où $q^2 = 4k^2$ et $q = 2k$. (d) Ainsi $p$ et $q$ sont pairs, ce qui contredit l'irréductibilité. Quelle étape est fausse ?",
      "reponse": 2,
      "choix": [
       "L'étape (a)",
       "L'étape (b)",
       "L'étape (c)",
       "L'étape (d)"
      ],
      "indice": "Comme $\\sqrt{4} = 2$, la conclusion est fausse : une étape l'est aussi. Teste chaque implication avec $p = 2$ et $q = 1$.",
      "explication": "L'étape (b) utilise « si 4 divise $p^2$, alors 4 divise $p$ », qui est fausse : $p = 2$ donne $p^2 = 4$, divisible par 4, alors que 4 ne divise pas 2. La propriété analogue est vraie pour un nombre premier comme 2 ou 3, pas pour 4. Les étapes (a), (c) et (d) sont correctes.",
      "retenir": "« Si $d$ divise $p^2$, alors $d$ divise $p$ » est vrai pour $d$ premier, faux en général ($d = 4$, $p = 2$). Une preuve qui démontre une absurdité contient une faille.",
      "id": "c1r3-h0",
      "figure": "double"
     }
    ]
   },
   {
    "nom": "Le carré d'Aristote",
    "fond": "bibliotheque",
    "athena": "Pour nier, change chaque « pour tout » en « il existe » et inversement, garde l'ordre, puis ne nie que la propriété finale.",
    "notion": "Quantificateurs et négation",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#...................A......#",
     "#..................##......#",
     "#...............T..........#",
     "#..............##..........#",
     "#..........................#",
     "#...........##.............#",
     "#..........................#",
     "#........##................S",
     "#JG...T....................S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Nier un encadrement",
        "enonce": "Soit $x$ un réel. Quelle est la négation de « $-1 \\leqslant x \\leqslant 4$ » ?",
        "reponse": 3,
        "choix": [
         "« $x < -1$ et $x > 4$ »",
         "« $x \\leqslant -1$ ou $x \\geqslant 4$ »",
         "« $x < -1$ ou $x > 4$ »",
         "« $-1 > x > 4$ »"
        ],
        "indice": "« $-1 \\leqslant x \\leqslant 4$ » signifie « $x \\geqslant -1$ et $x \\leqslant 4$ ». La négation de « $P$ et $Q$ » est « non $P$ ou non $Q$ ».",
        "explication": "« $-1 \\leqslant x \\leqslant 4$ » est la conjonction « $x \\geqslant -1$ et $x \\leqslant 4$ ». Sa négation est « $x < -1$ ou $x > 4$ » : le « et » devient « ou », et chaque inégalité large devient une inégalité stricte dans l'autre sens. La version avec « et », comme « $-1 > x > 4$ » qui lui équivaut, n'est vérifiée par aucun réel ; celle avec des inégalités larges contient à tort $-1$ et $4$, qui vérifient la proposition de départ.",
        "retenir": "non($P$ et $Q$) équivaut à (non $P$) ou (non $Q$). La négation de $x \\leqslant b$ est $x > b$.",
        "id": "c1r4-s0-0"
       },
       {
        "titre": "Nier « pour tout… il existe… »",
        "enonce": "Quelle est la négation de la phrase : « Pour tout élève du collège, il existe un professeur qui le connaît » ?",
        "reponse": 1,
        "choix": [
         "« Il existe un élève du collège qu'aucun professeur ne connaît. »",
         "« Pour tout élève du collège, il existe un professeur qui ne le connaît pas. »",
         "« Il existe un professeur qui ne connaît aucun élève du collège. »",
         "« Aucun élève du collège n'est connu d'un professeur. »"
        ],
        "indice": "Échange « pour tout » et « il existe » sans changer l'ordre (l'élève d'abord, le professeur ensuite), puis nie la fin « le connaît ».",
        "explication": "En symboles : « $\\forall e$, $\\exists p$, $p$ connaît $e$ ». Négation : « $\\exists e$, $\\forall p$, $p$ ne connaît pas $e$ », soit « il existe un élève qu'aucun professeur ne connaît ». La deuxième option n'échange pas les quantificateurs ; la troisième inverse leur ordre (elle parle d'un professeur) ; la quatrième est bien trop forte : elle exige que tous les élèves soient inconnus.",
        "retenir": "Négation de « $\\forall x$, $\\exists y$, $P(x, y)$ » : « $\\exists x$, $\\forall y$, non $P(x, y)$ ». Même ordre, quantificateurs échangés.",
        "id": "c1r4-s0-1"
       },
       {
        "titre": "Nier une implication, puis trancher",
        "enonce": "On considère la proposition $P$ : « pour tout réel $x$, si $x^2 > 4$, alors $x > 2$ ». Quelle affirmation est exacte ?",
        "reponse": 4,
        "choix": [
         "La négation de $P$ est « pour tout réel $x$, si $x^2 > 4$, alors $x \\leqslant 2$ », et c'est elle qui est vraie.",
         "La négation de $P$ est « il existe un réel $x$ tel que $x^2 \\leqslant 4$ et $x > 2$ », et c'est $P$ qui est vraie.",
         "La négation de $P$ est « il existe un réel $x$ tel que $x^2 > 4$ et $x \\leqslant 2$ », et c'est $P$ qui est vraie.",
         "La négation de $P$ est « il existe un réel $x$ tel que $x^2 > 4$ et $x \\leqslant 2$ », et c'est elle qui est vraie."
        ],
        "indice": "La négation de « si $A$, alors $B$ » est « $A$ et non $B$ ». Ensuite, teste un réel négatif.",
        "explication": "La négation de « pour tout $x$, si $A(x)$, alors $B(x)$ » est « il existe $x$ tel que $A(x)$ et non $B(x)$ » : ici « il existe un réel $x$ tel que $x^2 > 4$ et $x \\leqslant 2$ ». Elle est vraie : $x = -3$ donne $x^2 = 9 > 4$ et $-3 \\leqslant 2$. Donc $P$ est fausse. La négation de « si $A$, alors $B$ » n'est pas « si $A$, alors non $B$ » : c'est « $A$ et non $B$ ».",
        "retenir": "La négation de « si $A$, alors $B$ » est « $A$ et non $B$ » : c'est l'existence d'un contre-exemple, pas une autre implication.",
        "id": "c1r4-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Vérifier sur un ensemble fini",
        "enonce": "Soit $E = \\{1, 2, 3, 4\\}$. Combien des propositions suivantes sont vraies ? (a) $\\forall x \\in E,\\ x^2 \\geqslant x$ ; (b) $\\exists x \\in E,\\ x^2 = 2x$ ; (c) « $\\forall x \\in E$, $x$ est pair » ; (d) $\\exists x \\in E,\\ \\forall y \\in E,\\ y \\leqslant x$. Entrer ce nombre.",
        "reponse": 3,
        "indice": "Un « pour tout » doit être vérifié pour chaque élément de $E$ ; un « il existe » demande un seul élément qui convient.",
        "explication": "(a) vraie : pour $x \\geqslant 1$, $x^2 = x \\times x \\geqslant x$. (b) vraie : $x = 2$ donne $4 = 4$. (c) fausse : $1$ n'est pas pair. (d) vraie : $x = 4$ est supérieur ou égal à tous les éléments de $E$. Trois propositions sont vraies.",
        "retenir": "Un « il existe » se prouve par un exemple ; un « pour tout » se réfute par un contre-exemple.",
        "id": "c1r4-s1-0"
       },
       {
        "titre": "L'ordre des quantificateurs",
        "enonce": "Combien des propositions suivantes sont vraies ? (a) $\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ x + y = 0$ ; (b) $\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x + y = 0$ ; (c) $\\exists x \\in \\mathbb{R},\\ \\forall y \\in \\mathbb{R},\\ xy = 0$ ; (d) $\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ xy = 1$. Entrer ce nombre.",
        "reponse": 2,
        "indice": "Dans « $\\forall x$, $\\exists y$ », $y$ peut dépendre de $x$ ; dans « $\\exists y$, $\\forall x$ », le même $y$ doit convenir pour tous les $x$. Pense aussi au cas $x = 0$.",
        "explication": "(a) vraie : pour $x$ donné, $y = -x$ convient. (b) fausse : un même $y$ devrait vérifier $y = -x$ pour tout $x$ ; $x = 0$ et $x = 1$ imposent $y = 0$ et $y = -1$. (c) vraie : $x = 0$ convient pour tout $y$. (d) fausse : pour $x = 0$, $xy = 0 \\neq 1$ quel que soit $y$. Deux propositions sont vraies.",
        "retenir": "« $\\forall x$, $\\exists y$ » : $y$ peut dépendre de $x$. « $\\exists y$, $\\forall x$ » : un seul $y$ pour tous les $x$. Échanger l'ordre change le sens.",
        "id": "c1r4-s1-1"
       },
       {
        "titre": "Nier avec epsilon",
        "enonce": "Quelle est la négation de la proposition « $\\forall \\varepsilon > 0,\\ \\exists n \\in \\mathbb{N},\\ \\frac{1}{n+1} < \\varepsilon$ » ?",
        "reponse": 3,
        "choix": [
         "$\\exists \\varepsilon \\leqslant 0,\\ \\forall n \\in \\mathbb{N},\\ \\frac{1}{n+1} \\geqslant \\varepsilon$",
         "$\\forall \\varepsilon > 0,\\ \\exists n \\in \\mathbb{N},\\ \\frac{1}{n+1} \\geqslant \\varepsilon$",
         "$\\exists \\varepsilon > 0,\\ \\forall n \\in \\mathbb{N},\\ \\frac{1}{n+1} \\geqslant \\varepsilon$",
         "$\\exists n \\in \\mathbb{N},\\ \\forall \\varepsilon > 0,\\ \\frac{1}{n+1} \\geqslant \\varepsilon$"
        ],
        "indice": "« $\\varepsilon > 0$ » indique seulement où l'on choisit $\\varepsilon$ : on ne le nie pas. On échange les quantificateurs, on garde l'ordre, on nie l'inégalité finale.",
        "explication": "On échange $\\forall$ et $\\exists$ sans changer ni l'ordre ni le domaine : « $\\exists \\varepsilon > 0,\\ \\forall n \\in \\mathbb{N},\\ \\frac{1}{n+1} \\geqslant \\varepsilon$ ». Nier « $\\varepsilon > 0$ » est l'erreur classique : c'est le domaine, pas la propriété. Une autre option n'échange pas les quantificateurs, une autre inverse leur ordre. Ici, la proposition de départ est vraie (pour $\\varepsilon$ donné, un entier $n > \\frac{1}{\\varepsilon}$ convient), donc sa négation est fausse.",
        "retenir": "« $\\forall \\varepsilon > 0$ » se nie en « $\\exists \\varepsilon > 0$ » : la condition sur $\\varepsilon$ reste, seule la propriété finale est niée.",
        "id": "c1r4-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, $x^2 + 1 > 2x$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Fais tout passer dans un même membre et reconnais une identité remarquable. Que se passe-t-il quand ce carré est nul ?",
        "explication": "Faux. $x^2 + 1 - 2x = (x - 1)^2$, qui est nul pour $x = 1$. Contre-exemple : $x = 1$ donne $x^2 + 1 = 2 = 2x$, donc l'inégalité stricte est fausse. En revanche, pour tout réel $x$, $x^2 + 1 \\geqslant 2x$.",
        "retenir": "Un carré est positif ou nul : le cas d'égalité fait tomber les inégalités strictes.",
        "id": "c1r4-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Il existe un réel $x$ tel que, pour tout réel $y$, $y^2 \\geqslant x$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Il suffit d'exhiber un seul $x$ qui convienne pour tous les $y$. Que sait-on du signe de $y^2$ ?",
        "explication": "Vrai. Prenons $x = 0$ : pour tout réel $y$, $y^2 \\geqslant 0 = x$. Le même $x$ convient pour tous les $y$, comme l'exige l'ordre « il existe… pour tout… ». (Tout réel $x \\leqslant 0$ conviendrait aussi.)",
        "retenir": "Pour prouver « $\\exists x$, $\\forall y$ », on fixe un $x$ précis, puis on démontre la propriété pour tous les $y$.",
        "id": "c1r4-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier $n \\geqslant 1$, il existe un entier $m$ tel que $n < m < 2n$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste la plus petite valeur de $n$ autorisée.",
        "explication": "Faux. Contre-exemple : $n = 1$. Il faudrait un entier $m$ tel que $1 < m < 2$, et il n'en existe pas. (Pour $n \\geqslant 2$, $m = n + 1$ convient car $n + 1 < 2n$, mais un seul cas suffit à rendre la proposition fausse.)",
        "retenir": "Pour tester un « pour tout », essayer d'abord les cas limites : la plus petite valeur, 0, 1, les cas d'égalité.",
        "id": "c1r4-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le procès d'Euathle",
    "fond": "nuit",
    "athena": "Chaque inégalité se justifie : signe du multiplicateur, sens de variation, carré positif. L'Hydre ne pardonne aucune étape sautée.",
    "notion": "Inégalités, valeur absolue, encadrements",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..A.......................#",
     "#.###......................#",
     "#..........................#",
     "#....###...................#",
     "#..........................#",
     "#........###...............#",
     "#..........................#",
     "#.....###..................S",
     "#J.G................T......S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "L'aller-retour de la vedette",
        "enonce": "Une vedette va de Mamoudzou à Dzaoudzi à la vitesse moyenne de 12 km/h, puis revient par le même trajet à 24 km/h. Entrer sa vitesse moyenne sur l'aller-retour, en km/h.",
        "reponse": 16,
        "unite": "km/h",
        "indice": "La vitesse moyenne est la distance totale divisée par la durée totale. Appelle $d$ la longueur du trajet.",
        "explication": "Avec $d$ la longueur du trajet, la durée totale est $\\frac{d}{12} + \\frac{d}{24} = \\frac{3d}{24} = \\frac{d}{8}$ pour une distance $2d$. La vitesse moyenne vaut $2d \\div \\frac{d}{8} = 16$ km/h. C'est la moyenne harmonique $h = \\frac{2 \\times 12 \\times 24}{12 + 24} = 16$, et non la moyenne arithmétique $18$.",
        "retenir": "Sur deux trajets de même longueur, la vitesse moyenne est la moyenne harmonique des deux vitesses, pas leur moyenne arithmétique.",
        "id": "c1b-s0-0"
       },
       {
        "titre": "L'écart des carrés",
        "enonce": "Pour tous réels $x$ et $y$ tels que $0 < x < y$, on a $a^2 - g^2 = k\\,(x - y)^2$, où $a = \\frac{x+y}{2}$, $g = \\sqrt{xy}$ et $k$ est une constante. Entrer $k$, sous forme de fraction ou de décimal.",
        "reponse": 0.25,
        "indice": "Développe $\\left(\\frac{x+y}{2}\\right)^2 - xy$ et réduis au même dénominateur.",
        "explication": "$a^2 - g^2 = \\frac{(x+y)^2}{4} - xy = \\frac{x^2 + 2xy + y^2 - 4xy}{4} = \\frac{(x - y)^2}{4}$. Donc $k = \\frac{1}{4}$, et $a^2 - g^2 > 0$ puisque $x \\neq y$.",
        "retenir": "$\\left(\\frac{x+y}{2}\\right)^2 - xy = \\left(\\frac{x-y}{2}\\right)^2$ : l'inégalité entre moyennes arithmétique et géométrique vient d'un carré positif.",
        "id": "c1b-s0-1"
       },
       {
        "titre": "Justifier un passage",
        "enonce": "On sait que $a^2 - g^2 > 0$, où $a = \\frac{x+y}{2}$ et $g = \\sqrt{xy}$ avec $0 < x < y$. Quelle justification permet de conclure rigoureusement que $g < a$ ?",
        "reponse": 4,
        "choix": [
         "La fonction carré est croissante sur $\\mathbb{R}$, donc $a^2 > g^2$ entraîne $a > g$.",
         "Pour tous réels $u$ et $v$, $u^2 > v^2$ entraîne $u > v$.",
         "On peut toujours « simplifier les carrés » des deux côtés d'une inégalité.",
         "$a$ et $g$ sont positifs, et deux réels positifs sont rangés dans le même ordre que leurs carrés."
        ],
        "indice": "Une seule de ces justifications est un énoncé vrai. Teste les autres avec $u = -3$ et $v = 1$.",
        "explication": "$a > 0$ et $g > 0$ car $x$ et $y$ sont strictement positifs. Pour $u, v \\geqslant 0$, $u^2 > v^2$ entraîne $\\sqrt{u^2} > \\sqrt{v^2}$, c'est-à-dire $u > v$, car la fonction racine carrée est strictement croissante sur $[0\\,;+\\infty[$. Donc $g < a$. La fonction carré n'est pas croissante sur $\\mathbb{R}$, et $u = -3$, $v = 1$ vérifient $u^2 > v^2$ sans vérifier $u > v$ : les autres justifications sont fausses.",
        "retenir": "Passer des carrés aux nombres exige des nombres positifs : écrire « $a$ et $g$ sont positifs » avant de conclure.",
        "id": "c1b-s0-2"
       },
       {
        "titre": "Un premier encadrement",
        "enonce": "On prend $x = 2$ et $y = 3$, de sorte que $g = \\sqrt{6}$. On admet que $h < g < a$. Cet encadrement de $\\sqrt{6}$ s'écrit $|\\sqrt{6} - c| < r$, où $c$ est le centre de l'intervalle $]h\\,;a[$ et $r$ la moitié de sa longueur. Entrer $r$.",
        "reponse": 0.05,
        "indice": "Calcule $a = \\frac{x+y}{2}$ et $h = \\frac{2xy}{x+y}$. L'intervalle $]h\\,;a[$ est formé des réels dont la distance à son centre est strictement inférieure à $\\frac{a - h}{2}$.",
        "explication": "$a = \\frac{5}{2} = 2{,}5$ et $h = \\frac{12}{5} = 2{,}4$, donc $2{,}4 < \\sqrt{6} < 2{,}5$. Le centre est $c = 2{,}45$ et $r = \\frac{2{,}5 - 2{,}4}{2} = 0{,}05$ : $|\\sqrt{6} - 2{,}45| < 0{,}05$.",
        "retenir": "$|t - c| < r \\Leftrightarrow c - r < t < c + r$ : la valeur absolue d'une différence est une distance.",
        "id": "c1b-s0-3"
       },
       {
        "titre": "Recommencer pour gagner en précision",
        "enonce": "On pose $a = \\frac{5}{2}$ et $h = \\frac{12}{5}$, de sorte que $ah = 6$. On recommence avec ces deux nombres : $a' = \\frac{a + h}{2}$ et $h' = \\frac{2ah}{a + h}$. On admet que $h' < \\sqrt{ah} < a'$, c'est-à-dire $h' < \\sqrt{6} < a'$. Entrer la longueur $a' - h'$ de ce nouvel encadrement, sous forme de fraction.",
        "reponse": 0.0010204081632653062,
        "indice": "$a + h = \\frac{49}{10}$. Calcule $a'$ et $h'$ sous forme de fractions, puis leur différence au même dénominateur.",
        "explication": "$a + h = \\frac{25}{10} + \\frac{24}{10} = \\frac{49}{10}$, donc $a' = \\frac{49}{20}$ et $h' = \\frac{2 \\times 6}{49/10} = \\frac{120}{49}$. Alors $a' - h' = \\frac{49 \\times 49 - 120 \\times 20}{980} = \\frac{2401 - 2400}{980} = \\frac{1}{980}$. On obtient $\\frac{120}{49} < \\sqrt{6} < \\frac{49}{20}$, encadrement de longueur environ $0{,}001$, contre $0{,}1$ au départ.",
        "retenir": "Remplacer $a$ et $h$ par leurs moyennes arithmétique et harmonique conserve le produit $ah$ et resserre très vite l'encadrement de $\\sqrt{ah}$.",
        "id": "c1b-s0-4"
       }
      ],
      "boss": "L'Hydre de Lerne",
      "monstre": "hydre",
      "contexte": "D'après CAPES Mayotte 2022, composition 2 (problème « moyennes »). Soient $x$ et $y$ deux réels tels que $0 < x < y$. On note $a = \\frac{x + y}{2}$ leur moyenne arithmétique, $g = \\sqrt{xy}$ leur moyenne géométrique et $h = \\frac{2xy}{x + y}$ leur moyenne harmonique. On a $g^2 = ah$. On veut établir l'encadrement $h < g < a$, puis s'en servir pour encadrer $\\sqrt{6}$."
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous réels $a$, $b$, $c$, $d$, si $a < b$ et $c < d$, alors $a - c < b - d$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "On peut additionner deux inégalités de même sens. Peut-on les soustraire ? Essaie avec $d$ très grand.",
        "explication": "Faux. Contre-exemple : $a = 0$, $b = 1$, $c = 0$, $d = 5$. On a bien $a < b$ et $c < d$, mais $a - c = 0$ et $b - d = -4$, donc $a - c > b - d$. On peut additionner des inégalités de même sens, pas les soustraire.",
        "retenir": "On additionne deux inégalités de même sens ; pour une différence, on passe à l'opposé : $c < d \\Rightarrow -d < -c$.",
        "id": "c1b-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, si $|x - 3| < 1$, alors $|x^2 - 9| < 7$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Factorise $x^2 - 9$ et majore chaque facteur lorsque $2 < x < 4$.",
        "explication": "Vrai. Si $|x - 3| < 1$, alors $2 < x < 4$, donc $5 < x + 3 < 7$ et $|x + 3| < 7$. Ainsi $|x^2 - 9| = |x - 3| \\times |x + 3| \\leqslant 7\\,|x - 3| < 7$.",
        "retenir": "$|ab| = |a| \\times |b|$ : pour majorer une valeur absolue, factoriser, puis majorer chaque facteur.",
        "id": "c1b-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, si $|x| < 2$, alors $x^2 < 2|x|$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste le cas limite le plus simple.",
        "explication": "Faux. Contre-exemple : $x = 0$. On a $|0| < 2$, mais $x^2 = 0$ et $2|x| = 0$ : l'inégalité stricte $0 < 0$ est fausse. (Pour $x \\neq 0$, elle est vraie : $x^2 = |x| \\times |x| < 2|x|$ car $|x| > 0$.)",
        "retenir": "Multiplier une inégalité stricte par $|x|$ exige $|x| > 0$ : toujours penser au cas $x = 0$.",
        "id": "c1b-b0-2"
       }
      ]
     }
    ]
   }
  ],
  "sanctuaire": {
   "sceauxOr": 3,
   "salle": {
    "nom": "Le sanctuaire de Parménide",
    "fond": "sanctuaire",
    "athena": "Ici, deviner ne suffit plus : chaque réponse doit pouvoir se démontrer, et chaque erreur d'élève se comprendre.",
    "notion": "Problèmes difficiles et regard de futur professeur",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#....................A.....#",
     "#...................###....#",
     "#........................T.#",
     "#.......................##.#",
     "#..........................#",
     "#....................##....S",
     "#J.G.T.............T.......S",
     "########PPPPPPPPPP##########",
     "########..........##########",
     "########..........##########",
     "########..........##########"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Somme de distances",
        "enonce": "On cherche les réels $x$ tels que $|x - 1| + |x - 5| = 4$. Entrer le nombre d'entiers relatifs qui sont solutions.",
        "reponse": 5,
        "indice": "$|x - 1|$ est la distance de $x$ à $1$ et $|x - 5|$ celle de $x$ à $5$. Ou bien : distingue les cas $x < 1$, $1 \\leqslant x \\leqslant 5$ et $x > 5$.",
        "explication": "Si $x < 1$ : $(1 - x) + (5 - x) = 6 - 2x > 4$. Si $x > 5$ : $(x - 1) + (x - 5) = 2x - 6 > 4$. Si $1 \\leqslant x \\leqslant 5$ : $(x - 1) + (5 - x) = 4$. L'ensemble des solutions est donc l'intervalle $[1\\,;5]$, qui contient 5 entiers : 1, 2, 3, 4 et 5. Géométriquement, la somme des distances à 1 et à 5 vaut 4 exactement entre 1 et 5.",
        "retenir": "$|x - a|$ est la distance de $x$ à $a$ : une équation avec des valeurs absolues peut avoir une infinité de solutions.",
        "id": "c1s-s0-0"
       },
       {
        "titre": "Éliminer les radicaux",
        "enonce": "On pose $r = \\sqrt{2} + \\sqrt{3}$. Il existe un entier $c$ tel que $r^4 - 10r^2 + c = 0$. Entrer $c$.",
        "reponse": 1,
        "indice": "Calcule $r^2$, isole le terme en $\\sqrt{6}$, puis élève de nouveau au carré.",
        "explication": "$r^2 = 2 + 2\\sqrt{6} + 3 = 5 + 2\\sqrt{6}$, donc $r^2 - 5 = 2\\sqrt{6}$ et $(r^2 - 5)^2 = 24$, soit $r^4 - 10r^2 + 1 = 0$ : $c = 1$. Le calcul de $r^2$ prouve aussi, par l'absurde, que $r$ est irrationnel : si $r$ était rationnel, $\\sqrt{6} = \\frac{r^2 - 5}{2}$ le serait, ce qui est faux.",
        "retenir": "Pour montrer qu'une expression avec des racines est irrationnelle : la supposer rationnelle, élever au carré, isoler un irrationnel connu.",
        "id": "c1s-s0-1"
       },
       {
        "titre": "Analyse, puis synthèse",
        "enonce": "On cherche toutes les fonctions affines $f$, de la forme $f(x) = mx + p$ avec $m$ et $p$ réels, telles que, pour tout réel $x$, $f(f(x)) = 4x + 9$. Entrer le nombre de fonctions solutions.",
        "reponse": 2,
        "indice": "Analyse : calcule $f(f(x))$ et identifie les coefficients, sans oublier de solution de $m^2 = 4$. Synthèse : vérifie chaque candidate.",
        "explication": "Analyse : $f(f(x)) = m(mx + p) + p = m^2 x + (m + 1)p$. Par identification, $m^2 = 4$ et $(m + 1)p = 9$. Si $m = 2$, $p = 3$ ; si $m = -2$, $-p = 9$, soit $p = -9$. Synthèse : $f(x) = 2x + 3$ donne $2(2x + 3) + 3 = 4x + 9$, et $f(x) = -2x - 9$ donne $-2(-2x - 9) - 9 = 4x + 9$. Il y a deux solutions.",
        "retenir": "Analyse-synthèse : l'analyse fournit des conditions nécessaires (des candidats), la synthèse vérifie qu'ils conviennent vraiment.",
        "id": "c1s-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Comparer sans calculatrice",
        "enonce": "Comparer les nombres $A = \\sqrt{2} + \\sqrt{6}$ et $B = \\sqrt{3} + \\sqrt{5}$, sans utiliser de valeur approchée.",
        "reponse": 1,
        "choix": [
         "$A < B$",
         "$A = B$",
         "$A > B$"
        ],
        "indice": "$A$ et $B$ sont positifs : compare leurs carrés.",
        "explication": "$A^2 = 2 + 6 + 2\\sqrt{12} = 8 + 2\\sqrt{12}$ et $B^2 = 3 + 5 + 2\\sqrt{15} = 8 + 2\\sqrt{15}$. Comme $12 < 15$ et que la racine carrée est strictement croissante, $A^2 < B^2$. Les nombres $A$ et $B$ étant positifs, $A < B$.",
        "retenir": "Deux réels positifs se comparent comme leurs carrés : c'est l'outil pour comparer des sommes de racines.",
        "id": "c1s-s1-0"
       },
       {
        "titre": "La meilleure constante",
        "enonce": "On cherche le plus grand réel $k$ tel que, pour tous réels $a$ et $b$, $a^2 + ab + b^2 \\geqslant k\\,(a + b)^2$. Entrer $k$, sous forme de fraction ou de décimal.",
        "reponse": 0.75,
        "indice": "Un cas particulier bien choisi ($a = b$) majore $k$ ; vérifie ensuite que cette valeur convient pour tous $a$ et $b$ en faisant apparaître un carré.",
        "explication": "Avec $a = b = 1$ : $3 \\geqslant 4k$, donc nécessairement $k \\leqslant \\frac{3}{4}$. Réciproquement, $a^2 + ab + b^2 - \\frac{3}{4}(a + b)^2 = \\frac{4a^2 + 4ab + 4b^2 - 3a^2 - 6ab - 3b^2}{4} = \\frac{(a - b)^2}{4} \\geqslant 0$. Donc $k = \\frac{3}{4}$ convient, et c'est le plus grand.",
        "retenir": "Une « meilleure constante » s'établit en deux temps : un exemple qui empêche de faire mieux, puis une preuve générale pour cette valeur.",
        "id": "c1s-s1-1"
       },
       {
        "titre": "Des racines de plus en plus proches",
        "enonce": "Entrer le plus petit entier naturel $n$ tel que $\\sqrt{n+1} - \\sqrt{n} < 0{,}16$.",
        "reponse": 10,
        "indice": "Multiplie par l'expression conjuguée : $\\sqrt{n+1} - \\sqrt{n} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$. Que devient l'inégalité ?",
        "explication": "$\\sqrt{n+1} - \\sqrt{n} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$, et pour $u > 0$, $\\frac{1}{u} < 0{,}16 \\Leftrightarrow u > 6{,}25$. Or $\\sqrt{n+1} + \\sqrt{n}$ augmente avec $n$. Pour $n = 9$ : $\\sqrt{10} + 3 < 3{,}17 + 3 < 6{,}25$, car $3{,}17^2 > 10$. Pour $n = 10$ : $\\sqrt{11} + \\sqrt{10} > 3{,}31 + 3{,}16 > 6{,}25$, car $3{,}31^2 < 11$ et $3{,}16^2 < 10$. Le plus petit entier est $n = 10$.",
        "retenir": "$\\sqrt{n+1} - \\sqrt{n} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$ : l'expression conjuguée change une différence délicate en un quotient facile à encadrer.",
        "effet": "passerelle",
        "id": "c1s-s1-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Le théorème ou sa réciproque ?",
        "enonce": "Dans un triangle $ABC$, on a $AB = 3$, $AC = 4$ et $BC = 5$. Un élève écrit : « $AB^2 + AC^2 = 9 + 16 = 25 = BC^2$, donc, d'après le théorème de Pythagore, le triangle $ABC$ est rectangle en $A$. » Que lui répondre ?",
        "reponse": 2,
        "choix": [
         "« Ta preuve est juste : tu as utilisé la contraposée du théorème de Pythagore. »",
         "« Ta conclusion est juste, mais il faut citer la réciproque du théorème de Pythagore : le théorème suppose le triangle déjà rectangle. »",
         "« Ta conclusion est fausse : une égalité entre carrés de longueurs ne prouve pas qu'un triangle est rectangle. »",
         "« Il faut d'abord démontrer que l'angle en $A$ est droit, puis appliquer le théorème de Pythagore. »"
        ],
        "indice": "Écris le théorème de Pythagore sous la forme « si …, alors … », puis compare avec ce que l'élève sait et ce qu'il conclut.",
        "explication": "Le théorème de Pythagore affirme : si $ABC$ est rectangle en $A$, alors $AB^2 + AC^2 = BC^2$. L'élève part de l'égalité pour conclure que le triangle est rectangle : il utilise la réciproque, un autre théorème (vrai lui aussi), qu'il doit citer. Sa conclusion est juste ; seule la justification est à corriger. La contraposée (si $AB^2 + AC^2 \\neq BC^2$, alors $ABC$ n'est pas rectangle en $A$) sert à prouver qu'un triangle n'est pas rectangle en $A$, et supposer l'angle droit pour le démontrer serait un cercle vicieux.",
        "retenir": "Le théorème de Pythagore calcule une longueur dans un triangle rectangle ; sa réciproque prouve qu'un triangle est rectangle ; sa contraposée, appliquée au plus grand côté, qu'il ne l'est pas.",
        "id": "c1s-s2-0"
       },
       {
        "titre": "Une inéquation mal résolue",
        "enonce": "Pour résoudre dans $\\mathbb{R}^*$ l'inéquation $\\frac{1}{x} < 2$, un élève écrit : « Je multiplie par $x$ : $1 < 2x$, donc $x > \\frac{1}{2}$. L'ensemble des solutions est $]\\frac{1}{2}\\,;+\\infty[$. » Quel est le bon diagnostic ?",
        "reponse": 1,
        "choix": [
         "Il a multiplié par $x$ sans connaître son signe : il oublie toutes les solutions strictement négatives.",
         "Sa réponse est juste ; il a seulement oublié de préciser que $x \\neq 0$.",
         "Il fallait inverser les deux membres et obtenir $x > 2$.",
         "Il fallait changer le sens de l'inégalité et obtenir $x < \\frac{1}{2}$."
        ],
        "indice": "Teste $x = -1$ dans l'inéquation de départ.",
        "explication": "Multiplier par $x$ ne conserve le sens que si $x > 0$. Pour $x > 0$, on obtient bien $x > \\frac{1}{2}$. Pour $x < 0$, $\\frac{1}{x} < 0 < 2$ : tout réel strictement négatif est solution. L'ensemble des solutions est $]-\\infty\\,;0[ \\cup ]\\frac{1}{2}\\,;+\\infty[$. La méthode sûre : étudier le signe de $\\frac{1}{x} - 2 = \\frac{1 - 2x}{x}$ dans un tableau de signes.",
        "retenir": "On ne multiplie une inéquation par une expression que si l'on connaît son signe ; sinon, on étudie le signe d'une différence.",
        "id": "c1s-s2-1"
       },
       {
        "titre": "Un exemple qui ne prouve rien",
        "enonce": "Une élève de Seconde affirme : « $(a + b)^2 = a^2 + b^2$, je l'ai vérifié avec $a = 0$ et $b = 5$. » Quelle réponse est la plus juste ?",
        "reponse": 4,
        "choix": [
         "« C'est faux : $(a + b)^2 = a^2 + 2ab + b^2$, donc ce n'est jamais égal à $a^2 + b^2$. »",
         "« Ton exemple est correct, donc l'égalité est vraie. »",
         "« C'est vrai seulement pour des nombres positifs. »",
         "« Un exemple ne suffit pas pour tous les nombres : avec $a = b = 1$, on trouve $4$ d'un côté et $2$ de l'autre. »"
        ],
        "indice": "La réponse doit être mathématiquement exacte : l'égalité est-elle vraiment fausse pour toutes les valeurs de $a$ et $b$ ?",
        "explication": "L'égalité « pour tous $a$ et $b$ » est fausse, et un contre-exemple le prouve : $(1 + 1)^2 = 4$ alors que $1^2 + 1^2 = 2$. Mais elle est vraie lorsque $ab = 0$, comme dans l'exemple de l'élève : dire « jamais égal » est donc faux. Quant à « vrai pour les nombres positifs », $a = b = 1$ le réfute.",
        "retenir": "Une égalité vérifiée sur un exemple n'est pas une identité, et une égalité fausse en général peut être vraie pour certaines valeurs : les quantificateurs font la différence.",
        "id": "c1s-s2-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soient $a$ et $b$ deux réels. Si, pour tout réel $\\varepsilon > 0$, $|a - b| < \\varepsilon$, alors $a = b$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Raisonne par l'absurde : si $a \\neq b$, quel $\\varepsilon$ choisir ?",
        "explication": "Vrai. Supposons par l'absurde $a \\neq b$. Alors $\\varepsilon = |a - b|$ est strictement positif, et l'hypothèse appliquée à cet $\\varepsilon$ donne $|a - b| < |a - b|$ : contradiction. Donc $a = b$.",
        "retenir": "Un réel positif ou nul qui est inférieur à tout $\\varepsilon > 0$ est nul : c'est la base des raisonnements d'analyse.",
        "id": "c1s-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soient $P$ et $Q$ deux propositions. Si l'implication $P \\Rightarrow Q$ est vraie et si $Q$ est vraie, alors $P$ est vraie. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Relis la table de vérité de l'implication : que se passe-t-il quand $P$ est fausse et $Q$ vraie ?",
        "explication": "Faux. Contre-exemple : pour le réel $x = 3$, prenons $P$ : « $x > 5$ » et $Q$ : « $x > 2$ ». L'implication $P \\Rightarrow Q$ est vraie, $Q$ est vraie, mais $P$ est fausse. Conclure $P$ à partir de $P \\Rightarrow Q$ et de $Q$, c'est confondre l'implication avec sa réciproque.",
        "retenir": "De $P \\Rightarrow Q$ et $Q$, on ne déduit rien sur $P$. De $P \\Rightarrow Q$ et non $Q$, on déduit non $P$ (contraposée).",
        "id": "c1s-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous réels $x$ et $y$, $\\big||x| - |y|\\big| \\leqslant |x - y|$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $x = (x - y) + y$ et utilise l'inégalité triangulaire $|u + v| \\leqslant |u| + |v|$.",
        "explication": "Vrai. Par l'inégalité triangulaire, $|x| = |(x - y) + y| \\leqslant |x - y| + |y|$, donc $|x| - |y| \\leqslant |x - y|$. En échangeant $x$ et $y$ : $|y| - |x| \\leqslant |y - x| = |x - y|$. Un réel $t$ tel que $t \\leqslant m$ et $-t \\leqslant m$ vérifie $|t| \\leqslant m$ : d'où le résultat.",
        "retenir": "Inégalité triangulaire et sa forme renversée : $\\big||x| - |y|\\big| \\leqslant |x - y| \\leqslant |x| + |y|$.",
        "id": "c1s-b0-2"
       }
      ]
     }
    ]
   }
  }
 },
 {
  "niveau": "Semaine 2",
  "titre": "Second degré et fonctions de référence",
  "introduction": "Cette semaine, tu entres dans le royaume de la parabole. Les scribes de Babylone résolvaient déjà ces équations en complétant un carré : derrière chaque formule se cache une figure. Un même trinôme s'écrit sous trois formes, développée, canonique, factorisée, et tout l'art consiste à choisir celle qui répond à la question posée. Les inéquations seront ton épreuve : le signe se voit sur la courbe avant de s'écrire.",
  "conclusion": "Emporte trois réflexes : la forme canonique donne le sommet, la forme factorisée donne les racines et le signe, et le signe de $a$ gouverne le reste. Devant une inéquation ou un paramètre, ramène tout à zéro, factorise, distingue les cas et vérifie tes solutions.",
  "salles": [
   {
    "nom": "La leçon du Ménon",
    "fond": "jardin",
    "athena": "Le carré d'aire double n'a pas un côté double : avant de calculer, demande-toi quelle fonction agit et comment elle range les nombres.",
    "notion": "Fonctions de référence, équations x² = a, comparaisons",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.........................A#",
     "#........................###",
     "#...........D..............#",
     "#.........####........###..S",
     "#J.G...T............T......S",
     "###############...##########"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Un carré égal à 25",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'équation $(2x-1)^2 = 25$. Entrer la plus petite solution.",
        "reponse": -2,
        "indice": "Un nombre a pour carré $25$ lorsqu'il vaut $5$ ou $-5$.",
        "explication": "$(2x-1)^2 = 25 \\iff 2x-1 = 5$ ou $2x-1 = -5$, soit $x = 3$ ou $x = -2$. La plus petite solution est $-2$. Oublier le cas $-5$ ferait perdre une solution.",
        "retenir": "Pour $a > 0$ : $X^2 = a \\iff X = \\sqrt{a}$ ou $X = -\\sqrt{a}$. Ne jamais oublier la solution négative.",
        "id": "c2r1-s0-0"
       },
       {
        "titre": "Plus grand que 5",
        "enonce": "Déterminer l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $x^2 \\geqslant 5$.",
        "reponse": 2,
        "choix": [
         "$[\\sqrt{5}\\,;+\\infty[$",
         "$]-\\infty\\,;-\\sqrt{5}]\\cup[\\sqrt{5}\\,;+\\infty[$",
         "$[-\\sqrt{5}\\,;\\sqrt{5}]$"
        ],
        "indice": "Les solutions de $x^2 = 5$ sont $-\\sqrt{5}$ et $\\sqrt{5}$. Où la parabole $y = x^2$ est-elle au-dessus de la droite $y = 5$ ?",
        "explication": "$x^2 \\geqslant 5 \\iff (x-\\sqrt{5})(x+\\sqrt{5}) \\geqslant 0$. Ce produit est strictement positif à l'extérieur des racines et nul en elles : $x \\leqslant -\\sqrt{5}$ ou $x \\geqslant \\sqrt{5}$. Par exemple $-3$ est solution, car $9 \\geqslant 5$ : la réponse $[\\sqrt{5}\\,;+\\infty[$ oublie les négatifs.",
        "retenir": "Pour $a > 0$ : $x^2 \\geqslant a \\iff x \\leqslant -\\sqrt{a}$ ou $x \\geqslant \\sqrt{a}$ ; $x^2 \\leqslant a \\iff -\\sqrt{a} \\leqslant x \\leqslant \\sqrt{a}$.",
        "id": "c2r1-s0-1"
       },
       {
        "titre": "Encadrer un inverse",
        "enonce": "Soit $x$ un réel tel que $-3 \\leqslant x \\leqslant 2$. Entrer la plus grande valeur que peut prendre $\\dfrac{1}{x^2+1}$.",
        "reponse": 1,
        "indice": "L'intervalle $[-3\\,;2]$ contient $0$ : la fonction carré n'y est pas monotone. Encadre d'abord $x^2$, puis $x^2 + 1$.",
        "explication": "Comme $0 \\in [-3\\,;2]$, on a $0 \\leqslant x^2 \\leqslant 9$ (et non $4 \\leqslant x^2 \\leqslant 9$), donc $1 \\leqslant x^2 + 1 \\leqslant 10$. La fonction inverse étant décroissante sur $]0\\,;+\\infty[$ : $\\frac{1}{10} \\leqslant \\frac{1}{x^2+1} \\leqslant 1$. La valeur $1$ est atteinte pour $x = 0$.",
        "retenir": "On ne « met pas au carré » un encadrement qui contient $0$ : on s'appuie sur les variations de la fonction carré, de part et d'autre de $0$.",
        "id": "c2r1-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Le cube",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'équation $2x^3 + 54 = 0$. Entrer la solution.",
        "reponse": -3,
        "indice": "Isole $x^3$. La fonction cube est strictement croissante sur $\\mathbb{R}$.",
        "explication": "$2x^3 + 54 = 0 \\iff x^3 = -27$. La fonction cube est strictement croissante sur $\\mathbb{R}$ et prend toutes les valeurs réelles : $-27$ a un unique antécédent, et $(-3)^3 = -27$. Donc $x = -3$.",
        "retenir": "Pour tout réel $a$, l'équation $x^3 = a$ a exactement une solution ; l'équation $x^2 = a$ en a $0$, $1$ ou $2$ selon le signe de $a$.",
        "id": "c2r1-s1-0"
       },
       {
        "titre": "Un inverse minoré",
        "enonce": "Déterminer l'ensemble des solutions de l'inéquation $\\dfrac{1}{x} > -2$, d'inconnue $x$ réelle non nulle.",
        "reponse": 3,
        "choix": [
         "$]-\\frac{1}{2}\\,;0[\\,\\cup\\,]0\\,;+\\infty[$",
         "$]-\\infty\\,;-\\frac{1}{2}[$",
         "$]-\\infty\\,;-\\frac{1}{2}[\\,\\cup\\,]0\\,;+\\infty[$"
        ],
        "indice": "Distingue $x < 0$ et $x > 0$ : multiplier par $x$ change le sens de l'inégalité quand $x$ est négatif.",
        "explication": "Si $x > 0$, alors $\\frac{1}{x} > 0 > -2$ : tout réel strictement positif est solution. Si $x < 0$, multiplier par $x$ change le sens : $\\frac{1}{x} > -2 \\iff 1 < -2x \\iff x < -\\frac{1}{2}$. Donc $S = ]-\\infty\\,;-\\frac{1}{2}[\\,\\cup\\,]0\\,;+\\infty[$. Sans changer le sens, on trouverait $x > -\\frac{1}{2}$ : faux pour $x = -\\frac{1}{4}$, car $\\frac{1}{x} = -4$. Autre voie : $\\frac{1}{x} + 2 = \\frac{2x+1}{x}$ et un tableau de signes.",
        "retenir": "On ne multiplie pas une inéquation par une expression de signe inconnu : on passe tout d'un côté et on étudie le signe d'un quotient.",
        "id": "c2r1-s1-1"
       },
       {
        "titre": "Le rang des puissances",
        "enonce": "Soit $x$ un réel tel que $0 < x < 1$. Quel est le bon rangement ?",
        "reponse": 1,
        "choix": [
         "$x^3 < x^2 < x < \\sqrt{x} < \\frac{1}{x}$",
         "$\\frac{1}{x} < \\sqrt{x} < x < x^2 < x^3$",
         "$x^3 < x^2 < \\sqrt{x} < x < \\frac{1}{x}$",
         "$x < x^2 < x^3 < \\sqrt{x} < \\frac{1}{x}$"
        ],
        "indice": "Multiplie l'inégalité $x < 1$ par le réel positif $x$, puis par $x^2$. Pour $\\sqrt{x}$, applique le même argument au nombre $\\sqrt{x}$, lui aussi dans $]0\\,;1[$.",
        "explication": "En multipliant $x < 1$ par $x > 0$ : $x^2 < x$ ; par $x^2 > 0$ : $x^3 < x^2$. Comme $0 < \\sqrt{x} < 1$, le même argument donne $(\\sqrt{x})^2 < \\sqrt{x}$, soit $x < \\sqrt{x}$. Enfin $\\sqrt{x} < 1 < \\frac{1}{x}$. Contrôle avec $x = \\frac{1}{4}$ : $\\frac{1}{64} < \\frac{1}{16} < \\frac{1}{4} < \\frac{1}{2} < 4$.",
        "retenir": "Sur $]0\\,;1[$, une puissance plus grande diminue le nombre et la racine carrée l'augmente ; sur $]1\\,;+\\infty[$, c'est l'inverse.",
        "id": "c2r1-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La fonction inverse est décroissante sur $]-\\infty\\,;0[\\,\\cup\\,]0\\,;+\\infty[$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare les images de $-1$ et de $1$.",
        "explication": "Faux. $-1 < 1$ et pourtant $\\frac{1}{-1} = -1 < 1 = \\frac{1}{1}$ : l'ordre est conservé, ce qui contredit la décroissance sur la réunion. La fonction inverse est décroissante sur $]-\\infty\\,;0[$ et sur $]0\\,;+\\infty[$ séparément, pas sur leur réunion.",
        "retenir": "Un sens de variation se donne sur un intervalle : « décroissante sur chacun des deux intervalles » ne signifie pas « décroissante sur leur réunion ».",
        "id": "c2r1-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, si $-3 < x < -1$, alors $1 < x^2 < 9$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Dans quel intervalle se trouve $x$, et quel y est le sens de variation de la fonction carré ?",
        "explication": "Vrai. La fonction carré est strictement décroissante sur $]-\\infty\\,;0]$ : elle y renverse l'ordre. Si $-3 < x < -1$, les nombres $-3$, $x$ et $-1$ sont dans $]-\\infty\\,;0]$, donc $(-3)^2 > x^2 > (-1)^2$, soit $1 < x^2 < 9$. La réciproque est fausse : $x = 2$ vérifie $1 < x^2 < 9$, mais pas $-3 < x < -1$.",
        "retenir": "Sur un intervalle où elle est croissante, une fonction conserve l'ordre ; là où elle est décroissante, elle le renverse : la fonction carré renverse l'ordre sur $]-\\infty\\,;0]$.",
        "id": "c2r1-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « L'équation $x^3 = x$ admet une unique solution réelle. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Essaie $x = 1$ et $x = -1$.",
        "explication": "Faux. $1$ et $-1$ sont deux solutions distinctes. Plus précisément $x^3 - x = x(x-1)(x+1)$ : il y a trois solutions, $-1$, $0$ et $1$. La stricte croissance du cube assure l'unicité pour $x^3 = a$ avec $a$ fixé, pas pour $x^3 = x$.",
        "retenir": "Pour résoudre $x^3 = x$, on ne divise pas par $x$ : on factorise $x(x-1)(x+1) = 0$.",
        "id": "c2r1-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le jardin d'Épicure",
    "fond": "orient",
    "athena": "Compléter le carré, c'est révéler le sommet : la forme canonique dit d'un regard où la parabole tourne et jusqu'où elle va.",
    "notion": "Forme canonique, sommet de la parabole",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....................A....#",
     "#....................###...S",
     "#J.G..T...........T........S",
     "#########PPPPPP#############",
     "#########......#############",
     "#########......#############",
     "#########......#############",
     "#########......#############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Compléter le carré",
        "enonce": "Pour tout réel $x$, on écrit $x^2 - 6x + 11$ sous la forme $(x - \\alpha)^2 + \\beta$. Entrer $\\beta$.",
        "reponse": 2,
        "indice": "$x^2 - 6x$ est le début du développement de $(x-3)^2$.",
        "explication": "$(x-3)^2 = x^2 - 6x + 9$, donc $x^2 - 6x + 11 = (x-3)^2 - 9 + 11 = (x-3)^2 + 2$. Ainsi $\\alpha = 3$ et $\\beta = 2$.",
        "retenir": "$x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$ : on complète le carré avec la moitié du coefficient de $x$.",
        "id": "c2r2-s0-0"
       },
       {
        "titre": "Avec un coefficient",
        "enonce": "Pour tout réel $x$, on écrit $2x^2 + 12x + 7$ sous la forme $2(x - \\alpha)^2 + \\beta$. Entrer $\\beta$.",
        "reponse": -11,
        "indice": "Factorise d'abord par $2$ les deux premiers termes : $2(x^2 + 6x) + 7$.",
        "explication": "$2x^2 + 12x + 7 = 2(x^2 + 6x) + 7 = 2\\left[(x+3)^2 - 9\\right] + 7 = 2(x+3)^2 - 11$. Donc $\\alpha = -3$ et $\\beta = -11$. Piège : oublier de multiplier le $-9$ par $2$ (on trouverait $-2$). Contrôle : $\\beta = f(-3) = 18 - 36 + 7 = -11$.",
        "retenir": "Forme canonique $a(x-\\alpha)^2 + \\beta$ : $\\alpha = -\\frac{b}{2a}$ et $\\beta = f(\\alpha)$, ce qui permet toujours de contrôler $\\beta$.",
        "id": "c2r2-s0-1"
       },
       {
        "titre": "Un minimum imposé",
        "enonce": "Soit $m$ un réel strictement positif et $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2 - mx + 10$. On sait que le minimum de $f$ sur $\\mathbb{R}$ vaut $1$. Entrer $m$.",
        "reponse": 6,
        "indice": "Écris la forme canonique de $f$ : le minimum s'y lit directement, en fonction de $m$.",
        "explication": "$f(x) = \\left(x - \\frac{m}{2}\\right)^2 + 10 - \\frac{m^2}{4}$. Le minimum, atteint en $x = \\frac{m}{2}$, vaut $10 - \\frac{m^2}{4}$. Donc $10 - \\frac{m^2}{4} = 1 \\iff m^2 = 36 \\iff m = 6$ ou $m = -6$. Comme $m > 0$, $m = 6$.",
        "retenir": "Pour $a > 0$, le minimum de $x \\mapsto ax^2 + bx + c$ est $f\\left(-\\frac{b}{2a}\\right)$, l'ordonnée du sommet.",
        "effet": "passerelle",
        "id": "c2r2-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Le sommet",
        "enonce": "Dans un repère, on considère la parabole d'équation $y = -x^2 + 4x + 1$. Entrer l'ordonnée de son sommet.",
        "reponse": 5,
        "indice": "L'abscisse du sommet est $-\\frac{b}{2a}$.",
        "explication": "$\\alpha = -\\frac{4}{2 \\times (-1)} = 2$ et $\\beta = -4 + 8 + 1 = 5$. Le sommet est $S(2\\,;5)$ ; comme $a = -1 < 0$, c'est le point le plus haut de la parabole.",
        "retenir": "Sommet de la parabole $y = ax^2 + bx + c$ : abscisse $-\\frac{b}{2a}$, ordonnée obtenue en remplaçant $x$ par cette abscisse.",
        "id": "c2r2-s1-0"
       },
       {
        "titre": "Lire la forme factorisée",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = -2(x+1)(x-5)$. Entrer le maximum de $f$ sur $\\mathbb{R}$.",
        "reponse": 18,
        "indice": "La parabole est symétrique par rapport à la droite verticale qui passe par le milieu de ses deux racines.",
        "explication": "Les racines sont $-1$ et $5$ ; l'axe de symétrie est la droite d'équation $x = \\frac{-1+5}{2} = 2$. Comme $a = -2 < 0$, $f$ admet un maximum en $2$ : $f(2) = -2 \\times 3 \\times (-3) = 18$.",
        "retenir": "L'abscisse du sommet est la moyenne des racines : $\\alpha = \\frac{x_1 + x_2}{2}$.",
        "id": "c2r2-s1-1"
       },
       {
        "titre": "Au plus près de trois mesures",
        "enonce": "D'après CAPES Mayotte 2022. Trois mesures valent $2$, $5$ et $11$. Pour tout réel $x$, on pose $S(x) = (x-2)^2 + (x-5)^2 + (x-11)^2$. Entrer le minimum de $S$ sur $\\mathbb{R}$.",
        "reponse": 42,
        "indice": "Développe : $S$ est un trinôme $3x^2 + bx + c$. Cherche l'abscisse de son sommet.",
        "explication": "$S(x) = 3x^2 - 36x + 150 = 3(x-6)^2 + 42$. Le minimum vaut $42$ ; il est atteint en $x = 6$, qui est exactement la moyenne de $2$, $5$ et $11$.",
        "retenir": "La somme des carrés des écarts $\\sum (x - x_i)^2$ est minimale lorsque $x$ est la moyenne des $x_i$ : un trinôme se cache derrière la moyenne.",
        "id": "c2r2-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = ax^2 + bx + c$, avec $a \\neq 0$, vérifie $f(1) = f(5)$, alors sa courbe admet pour axe de symétrie la droite d'équation $x = 3$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Traduis $f(1) = f(5)$ par une relation entre $a$ et $b$.",
        "explication": "Vrai. $f(1) = f(5) \\iff a + b + c = 25a + 5b + c \\iff 24a + 4b = 0 \\iff b = -6a$. Alors $-\\frac{b}{2a} = \\frac{6a}{2a} = 3$ : l'axe de symétrie de la parabole est la droite d'équation $x = 3$.",
        "retenir": "Deux points de même ordonnée sur une parabole sont symétriques par rapport à son axe : l'abscisse du sommet est le milieu de leurs abscisses.",
        "id": "c2r2-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $a$, $\\alpha$, $\\beta$ trois réels avec $a \\neq 0$ et $\\beta > 0$. La fonction $x \\mapsto a(x - \\alpha)^2 + \\beta$ ne s'annule jamais sur $\\mathbb{R}$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Que se passe-t-il lorsque $a$ est négatif ?",
        "explication": "Faux. Contre-exemple : $a = -1$, $\\alpha = 0$, $\\beta = 1$ ; la fonction $x \\mapsto -x^2 + 1$ s'annule en $1$ (et en $-1$). La forme canonique montre que $f$ ne s'annule pas lorsque $a$ et $\\beta$ sont de même signe ; s'ils sont de signes contraires, $f(x) = 0 \\iff (x - \\alpha)^2 = -\\frac{\\beta}{a}$, nombre strictement positif : deux solutions.",
        "retenir": "Sur $a(x - \\alpha)^2 + \\beta$ : deux racines si $a$ et $\\beta$ sont de signes contraires, aucune s'ils sont de même signe, une seule si $\\beta = 0$.",
        "id": "c2r2-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un repère orthonormé, les paraboles d'équations $y = x^2 + 2x$ et $y = x^2 - 2x$ sont symétriques l'une de l'autre par rapport à l'axe des ordonnées. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Le symétrique du point $M(x\\,;y)$ par rapport à l'axe des ordonnées est $M'(-x\\,;y)$.",
        "explication": "Vrai. Posons $f(x) = x^2 + 2x$ et $g(x) = x^2 - 2x$. Pour tout réel $x$, $f(-x) = x^2 - 2x = g(x)$. Donc $M(x\\,;y)$ est sur la courbe de $g$ si et seulement si $M'(-x\\,;y)$ est sur celle de $f$. Contrôle : les sommets $(-1\\,;-1)$ et $(1\\,;-1)$ sont bien symétriques.",
        "retenir": "Les courbes de $x \\mapsto f(x)$ et de $x \\mapsto f(-x)$ sont symétriques par rapport à l'axe des ordonnées.",
        "id": "c2r2-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le Portique peint",
    "fond": "temple",
    "athena": "Avant de calculer $\\Delta$, écris l'équation sous la forme $ax^2 + bx + c = 0$ ; si une racine saute aux yeux, le produit des racines livre l'autre.",
    "notion": "Discriminant, racines, factorisation",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................S",
     "#J.G.T......T..H.......R.A.S",
     "########...#####.......#####"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le discriminant",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'équation $2x^2 - 3x - 2 = 0$. Entrer la plus petite solution.",
        "reponse": -0.5,
        "indice": "Calcule $\\Delta = b^2 - 4ac$, puis $\\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.",
        "explication": "$\\Delta = (-3)^2 - 4 \\times 2 \\times (-2) = 9 + 16 = 25 > 0$ : deux solutions, $\\frac{3 - 5}{4} = -\\frac{1}{2}$ et $\\frac{3 + 5}{4} = 2$. La plus petite est $-\\frac{1}{2}$.",
        "retenir": "Si $\\Delta > 0$, les racines sont $\\frac{-b \\pm \\sqrt{\\Delta}}{2a}$ : on divise par $2a$, pas par $2$.",
        "id": "c2r3-s0-0"
       },
       {
        "titre": "D'abord réordonner",
        "enonce": "Entrer le nombre de solutions réelles de l'équation $x(x+3) = 5x - 4$.",
        "reponse": 0,
        "indice": "Ramène tout dans un seul membre avant de penser au discriminant.",
        "explication": "$x(x+3) = 5x - 4 \\iff x^2 - 2x + 4 = 0$. $\\Delta = 4 - 16 = -12 < 0$ : aucune solution réelle. Autre voie : $x^2 - 2x + 4 = (x-1)^2 + 3 \\geqslant 3 > 0$.",
        "retenir": "Le discriminant se calcule sur l'équation écrite $ax^2 + bx + c = 0$, jamais avant d'avoir tout ramené dans un membre.",
        "id": "c2r3-s0-1"
       },
       {
        "titre": "Le cas oublié",
        "enonce": "Pour tout réel $m$, on note $(E_m)$ l'équation $(m-1)x^2 + 4x + 1 = 0$, d'inconnue réelle $x$. Entrer la somme de toutes les valeurs de $m$ pour lesquelles $(E_m)$ admet exactement une solution.",
        "reponse": 6,
        "indice": "Ne suppose pas trop vite que l'équation est du second degré : que se passe-t-il si $m = 1$ ?",
        "explication": "Si $m = 1$ : l'équation devient $4x + 1 = 0$, qui a exactement une solution, $-\\frac{1}{4}$. Si $m \\neq 1$ : c'est une équation du second degré, de discriminant $\\Delta = 16 - 4(m-1) = 20 - 4m$ ; elle a une seule solution si et seulement si $\\Delta = 0$, soit $m = 5$. Les valeurs cherchées sont $1$ et $5$, de somme $6$.",
        "retenir": "Équation à paramètre : traiter toujours à part le cas où le coefficient de $x^2$ s'annule.",
        "id": "c2r3-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Factoriser",
        "enonce": "Pour tout réel $x$, on écrit $-2x^2 + 2x + 12 = a(x - x_1)(x - x_2)$ avec $x_1 < x_2$. Entrer $x_1$.",
        "reponse": -2,
        "indice": "Factorise d'abord par $-2$, puis cherche les racines de $x^2 - x - 6$.",
        "explication": "$-2x^2 + 2x + 12 = -2(x^2 - x - 6)$. Pour $x^2 - x - 6$ : $\\Delta = 1 + 24 = 25$, racines $\\frac{1 \\pm 5}{2}$, soit $-2$ et $3$. Donc $-2x^2 + 2x + 12 = -2(x+2)(x-3)$ et $x_1 = -2$.",
        "retenir": "Si $\\Delta \\geqslant 0$ : $ax^2 + bx + c = a(x - x_1)(x - x_2)$. Ne pas oublier le facteur $a$.",
        "id": "c2r3-s1-0"
       },
       {
        "titre": "Une racine évidente",
        "enonce": "Le nombre $1$ est solution de l'équation $5x^2 + 2x - 7 = 0$. Entrer l'autre solution.",
        "reponse": -1.4,
        "indice": "Le produit des deux solutions de $ax^2 + bx + c = 0$ vaut $\\frac{c}{a}$.",
        "explication": "$5 + 2 - 7 = 0$ confirme que $1$ est solution. Le produit des solutions vaut $\\frac{c}{a} = -\\frac{7}{5}$, donc l'autre solution est $-\\frac{7}{5}$. Contrôle par la somme : $1 - \\frac{7}{5} = -\\frac{2}{5} = -\\frac{b}{a}$.",
        "retenir": "Si $a + b + c = 0$, alors $1$ est racine de $ax^2 + bx + c$ et l'autre racine est $\\frac{c}{a}$.",
        "id": "c2r3-s1-1"
       },
       {
        "titre": "Changer de variable",
        "enonce": "Entrer le nombre de solutions réelles de l'équation $(x^2 - 2x)^2 - 2(x^2 - 2x) - 3 = 0$.",
        "reponse": 3,
        "indice": "Pose $X = x^2 - 2x$. Résous d'abord en $X$, puis reviens à $x$ pour chaque valeur trouvée.",
        "explication": "Avec $X = x^2 - 2x$ : $X^2 - 2X - 3 = 0 \\iff X = 3$ ou $X = -1$. Puis $x^2 - 2x = 3 \\iff (x-3)(x+1) = 0 \\iff x = 3$ ou $x = -1$ ; et $x^2 - 2x = -1 \\iff (x-1)^2 = 0 \\iff x = 1$. Trois solutions : $-1$, $1$ et $3$ (et non quatre : la racine double ne donne qu'une solution).",
        "retenir": "Après un changement de variable, revenir à l'inconnue de départ et résoudre chaque équation obtenue, en comptant ses solutions.",
        "id": "c2r3-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $a$, $b$, $c$ trois réels avec $a \\neq 0$. Si $ac < 0$, alors l'équation $ax^2 + bx + c = 0$ admet deux solutions réelles distinctes. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Quel est le signe de $-4ac$ ?",
        "explication": "Vrai. $\\Delta = b^2 - 4ac$ avec $b^2 \\geqslant 0$ et $-4ac > 0$, donc $\\Delta > 0$ : deux solutions distinctes. Leur produit $\\frac{c}{a}$ est négatif : elles sont même de signes contraires. La réciproque est fausse : $x^2 - 3x + 2 = 0$ a deux solutions ($1$ et $2$) alors que $ac = 2 > 0$.",
        "retenir": "Si $a$ et $c$ sont de signes contraires, $\\Delta > 0$ sans calcul et les deux racines sont de signes contraires.",
        "id": "c2r3-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « L'équation $x^2 - 2\\sqrt{3}\\,x + 3 = 0$ admet deux solutions réelles distinctes. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule $\\Delta$ avec soin, ou reconnais une identité remarquable.",
        "explication": "Faux. $\\Delta = (2\\sqrt{3})^2 - 4 \\times 3 = 12 - 12 = 0$ : une seule solution. En effet $x^2 - 2\\sqrt{3}\\,x + 3 = (x - \\sqrt{3})^2$, qui ne s'annule qu'en $\\sqrt{3}$.",
        "retenir": "Un trinôme $x^2 - 2kx + k^2$ est le carré $(x - k)^2$ : $\\Delta = 0$ et une racine double $k$.",
        "id": "c2r3-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, $2x^2 + 5x - 3 = (x+3)\\left(x - \\frac{1}{2}\\right)$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare les deux membres pour une valeur simple de $x$.",
        "explication": "Faux. Pour $x = 0$, le membre de gauche vaut $-3$ et celui de droite $-\\frac{3}{2}$. Les racines $-3$ et $\\frac{1}{2}$ sont justes, mais il manque le coefficient $a = 2$ : $2x^2 + 5x - 3 = 2(x+3)\\left(x - \\frac{1}{2}\\right) = (x+3)(2x-1)$.",
        "retenir": "Deux trinômes de mêmes racines peuvent différer d'un facteur : la forme factorisée est $a(x - x_1)(x - x_2)$.",
        "id": "c2r3-b0-2"
       }
      ]
     }
    ],
    "acrobaties": [
     {
      "titre": "La faille du carré",
      "enonce": "Pour résoudre $\\sqrt{2x+3} = x$, un élève écrit : « J'élève au carré : $2x + 3 = x^2$, soit $x^2 - 2x - 3 = 0$. Comme $\\Delta = 16$, on trouve $S = \\{-1\\,;3\\}$. » Que penser de sa réponse ?",
      "reponse": 3,
      "choix": [
       "Elle est juste : les deux valeurs vérifient l'équation de départ.",
       "Elle est fausse : le discriminant vaut $-8$, il n'y a aucune solution.",
       "Elle est fausse : élever au carré donne seulement une implication ; $-1$ ne vérifie pas l'équation, donc $S = \\{3\\}$.",
       "Elle est fausse : on n'a jamais le droit d'élever au carré une équation."
      ],
      "indice": "Remplace $x$ par chacune des deux valeurs dans l'équation de départ.",
      "explication": "Si $\\sqrt{2x+3} = x$, alors $2x + 3 = x^2$ ; mais la réciproque est fausse, car $A^2 = B^2$ n'entraîne pas $A = B$. Vérification : pour $x = -1$, $\\sqrt{1} = 1 \\neq -1$ ; pour $x = 3$, $\\sqrt{9} = 3$. Donc $S = \\{3\\}$. Rédaction correcte : $\\sqrt{2x+3} = x \\iff \\left(x \\geqslant 0 \\text{ et } 2x + 3 = x^2\\right)$.",
      "retenir": "Élever au carré n'est une équivalence qu'entre deux nombres de même signe : imposer la condition de signe ou vérifier chaque solution.",
      "id": "c2r3-h0",
      "figure": "salto"
     }
    ]
   },
   {
    "nom": "Le gnomon d'Anaximandre",
    "fond": "nuit",
    "athena": "Une inéquation ne se divise pas à l'aveugle : tout d'un côté, factorise, puis lis le signe, celui de $a$ à l'extérieur des racines, l'opposé entre elles.",
    "notion": "Signe du trinôme, inéquations",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#............T........A....#",
     "#...........###......###...#",
     "#..........................#",
     "#...............###........#",
     "#..........................#",
     "#...........###............#",
     "#..........................#",
     "#.......###................S",
     "#J.G..T....................S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Entre les racines",
        "enonce": "Déterminer l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $x^2 - x - 6 \\leqslant 0$.",
        "reponse": 4,
        "choix": [
         "$]-\\infty\\,;-2]\\cup[3\\,;+\\infty[$",
         "$[-3\\,;2]$",
         "$]-2\\,;3[$",
         "$[-2\\,;3]$"
        ],
        "indice": "Cherche les racines, puis rappelle-toi que le trinôme a le signe de $a$ à l'extérieur des racines.",
        "explication": "$\\Delta = 1 + 24 = 25$, racines $-2$ et $3$ : $x^2 - x - 6 = (x+2)(x-3)$. Comme $a = 1 > 0$, le trinôme est négatif entre les racines et nul en elles ; l'inégalité étant large, les bornes sont incluses : $S = [-2\\,;3]$.",
        "retenir": "Si $\\Delta > 0$ : $ax^2 + bx + c$ est du signe de $a$ à l'extérieur des racines, du signe opposé entre elles.",
        "id": "c2r4-s0-0"
       },
       {
        "titre": "Quand a est négatif",
        "enonce": "Entrer le nombre d'entiers relatifs $n$ tels que $-2n^2 + 3n + 2 > 0$.",
        "reponse": 2,
        "indice": "Trouve les racines du trinôme $-2x^2 + 3x + 2$, puis tiens compte du signe de $a = -2$.",
        "explication": "$\\Delta = 9 + 16 = 25$, racines $\\frac{-3 \\pm 5}{-4}$, soit $-\\frac{1}{2}$ et $2$. Comme $a = -2 < 0$, le trinôme est strictement positif entre ses racines : $-\\frac{1}{2} < n < 2$. Les entiers solutions sont $0$ et $1$ ($2$ est exclu car l'inégalité est stricte).",
        "retenir": "Avec $a < 0$, le trinôme est positif entre les racines : esquisser la parabole tournée vers le bas évite l'erreur.",
        "id": "c2r4-s0-1"
       },
       {
        "titre": "Un nombre et son inverse",
        "enonce": "Déterminer l'ensemble des réels $x$ non nuls tels que $x + \\dfrac{1}{x} \\geqslant 2$.",
        "reponse": 1,
        "choix": [
         "$]0\\,;+\\infty[$",
         "$]-\\infty\\,;0[\\,\\cup\\,]0\\,;+\\infty[$",
         "$[1\\,;+\\infty[$",
         "$\\{1\\}$"
        ],
        "indice": "Écris $x + \\frac{1}{x} - 2$ comme un seul quotient et reconnais une identité remarquable au numérateur.",
        "explication": "$x + \\frac{1}{x} - 2 = \\frac{x^2 - 2x + 1}{x} = \\frac{(x-1)^2}{x}$. Le numérateur est positif ou nul ; le quotient est donc positif ou nul exactement lorsque $x > 0$. Ainsi $S = ]0\\,;+\\infty[$. Pour $x < 0$, on a même $x + \\frac{1}{x} < 0$.",
        "retenir": "Inéquation avec une fraction : tout d'un côté, même dénominateur, puis signe du quotient ; jamais de multiplication par une quantité de signe inconnu.",
        "id": "c2r4-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Un carré parfait",
        "enonce": "Déterminer l'ensemble des solutions dans $\\mathbb{R}$ de l'inéquation $x^2 + 9 > 6x$.",
        "reponse": 2,
        "choix": [
         "$\\mathbb{R}$",
         "$\\mathbb{R} \\setminus \\{3\\}$",
         "$\\varnothing$",
         "$]3\\,;+\\infty[$"
        ],
        "indice": "Passe $6x$ dans le membre de gauche et reconnais une identité remarquable.",
        "explication": "$x^2 + 9 > 6x \\iff x^2 - 6x + 9 > 0 \\iff (x-3)^2 > 0$. Un carré est strictement positif sauf là où il s'annule, c'est-à-dire en $3$. Donc $S = \\mathbb{R} \\setminus \\{3\\}$. Ici $\\Delta = 0$ : le trinôme a le signe de $a$ partout, sauf en sa racine double où il est nul.",
        "retenir": "Si $\\Delta = 0$, le trinôme s'annule en $-\\frac{b}{2a}$ et a le signe de $a$ ailleurs : inclure ou exclure ce point selon l'inégalité.",
        "id": "c2r4-s1-0"
       },
       {
        "titre": "Un produit qui ne vaut pas zéro",
        "enonce": "Entrer la plus grande solution réelle de l'inéquation $(x-1)(x+2) \\leqslant 4$.",
        "reponse": 2,
        "indice": "La règle du produit nul ne vaut que pour $0$ : développe, passe $4$ dans le membre de gauche, puis factorise.",
        "explication": "$(x-1)(x+2) \\leqslant 4 \\iff x^2 + x - 6 \\leqslant 0 \\iff (x+3)(x-2) \\leqslant 0 \\iff -3 \\leqslant x \\leqslant 2$. La plus grande solution est $2$. Le raisonnement fautif « $x - 1 \\leqslant 4$ » donnerait $5$ ; or $(5-1)(5+2) = 28 > 4$.",
        "retenir": "« $AB \\leqslant 4$ » ne se traite pas facteur par facteur : on se ramène à comparer à $0$ une expression factorisée.",
        "id": "c2r4-s1-1"
       },
       {
        "titre": "Positif partout",
        "enonce": "Déterminer l'ensemble des réels $m$ tels que, pour tout réel $x$, $mx^2 + 4x + m > 0$.",
        "reponse": 3,
        "choix": [
         "$]-\\infty\\,;-2[\\,\\cup\\,]2\\,;+\\infty[$",
         "$]-2\\,;2[$",
         "$]2\\,;+\\infty[$",
         "$[2\\,;+\\infty[$"
        ],
        "indice": "Traite à part $m = 0$. Sinon, un trinôme est strictement positif sur $\\mathbb{R}$ si et seulement si $a > 0$ et $\\Delta < 0$.",
        "explication": "Si $m = 0$ : $4x > 0$ est faux pour $x = -1$. Si $m \\neq 0$ : il faut $m > 0$ et $\\Delta = 16 - 4m^2 < 0$, soit $m^2 > 4$ ; avec $m > 0$, cela donne $m > 2$. Pour $m < -2$, on a bien $\\Delta < 0$, mais le trinôme est alors négatif partout. Pour $m = 2$, $2(x+1)^2$ s'annule en $-1$. Donc $m \\in ]2\\,;+\\infty[$.",
        "retenir": "Pour $a \\neq 0$ : $ax^2 + bx + c > 0$ pour tout réel $x$ si et seulement si $a > 0$ et $\\Delta < 0$. Les deux conditions sont indispensables.",
        "id": "c2r4-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Les inéquations $\\dfrac{x+1}{x-2} \\geqslant 0$ et $(x+1)(x-2) \\geqslant 0$ ont le même ensemble de solutions. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Regarde ce qui se passe pour $x = 2$.",
        "explication": "Faux. $x = 2$ est solution de $(x+1)(x-2) \\geqslant 0$ (le produit vaut $0$), mais $\\frac{x+1}{x-2}$ n'est pas défini en $2$. Les ensembles sont $]-\\infty\\,;-1]\\cup]2\\,;+\\infty[$ pour le quotient et $]-\\infty\\,;-1]\\cup[2\\,;+\\infty[$ pour le produit : même signe, mais la valeur interdite fait la différence.",
        "retenir": "Dans le tableau de signes d'un quotient, la valeur qui annule le dénominateur est toujours exclue (double barre).",
        "id": "c2r4-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $m$, l'ensemble des solutions de l'inéquation $x^2 - 2mx + m^2 - 1 \\leqslant 0$ est un intervalle de longueur $2$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Reconnais $(x - m)^2$ dans le trinôme.",
        "explication": "Vrai. Pour tout réel $m$, $x^2 - 2mx + m^2 - 1 = (x-m)^2 - 1 = (x - m - 1)(x - m + 1)$. Ce trinôme, de coefficient $a = 1 > 0$, est négatif ou nul exactement entre ses racines $m - 1$ et $m + 1$ : $S = [m-1\\,;m+1]$, de longueur $2$, quel que soit $m$.",
        "retenir": "Un paramètre se manipule comme un nombre : la forme canonique $(x - m)^2 - 1$ donne les racines sans calculer $\\Delta$.",
        "id": "c2r4-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, $x^2 \\leqslant 2x \\iff x \\leqslant 2$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste un réel négatif.",
        "explication": "Faux. Pour $x = -1$ : $x \\leqslant 2$, mais $x^2 = 1 > -2 = 2x$. En réalité $x^2 \\leqslant 2x \\iff x(x-2) \\leqslant 0 \\iff 0 \\leqslant x \\leqslant 2$. L'erreur vient d'une division par $x$, dont le signe est inconnu.",
        "retenir": "On ne simplifie pas une inéquation par $x$ : on factorise, ici $x(x-2)$, et on étudie le signe.",
        "id": "c2r4-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le cratère d'Empédocle",
    "fond": "bibliotheque",
    "athena": "Le paramètre est un curseur : exprime le discriminant en fonction de lui, puis laisse la somme et le produit parler des racines sans les calculer.",
    "notion": "Problème : trinôme à paramètre, somme et produit des racines",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....A....................#",
     "#....###...................#",
     "#..........................#",
     "#.##.......................S",
     "#..................T.......S",
     "#....##...##################",
     "#J.G......##################",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Un cas particulier",
        "enonce": "On prend $m = 7$. Entrer la plus grande solution de $(E_7)$.",
        "reponse": 13,
        "indice": "Écris $(E_7)$ et cherche une racine évidente, ou calcule le discriminant.",
        "explication": "$(E_7)$ s'écrit $x^2 - 14x + 13 = 0$. Comme $1 - 14 + 13 = 0$, $1$ est solution, et l'autre vaut $\\frac{c}{a} = 13$. Les solutions sont $1$ et $13$ ; la plus grande est $13$.",
        "retenir": "Penser aux racines évidentes avant de calculer $\\Delta$ : $1$ si $a + b + c = 0$, $-1$ si $a - b + c = 0$.",
        "id": "c2b-s0-0"
       },
       {
        "titre": "Aucune solution",
        "enonce": "Le discriminant de $(E_m)$ vaut $\\Delta = 4(m^2 - m - 6)$. Déterminer l'ensemble des réels $m$ pour lesquels $(E_m)$ n'admet aucune solution réelle.",
        "reponse": 2,
        "choix": [
         "$]-\\infty\\,;-2[\\,\\cup\\,]3\\,;+\\infty[$",
         "$]-2\\,;3[$",
         "$[-2\\,;3]$",
         "$]-3\\,;2[$"
        ],
        "indice": "Il faut $\\Delta < 0$ : c'est une inéquation du second degré d'inconnue $m$. Cherche les racines de $m^2 - m - 6$.",
        "explication": "$m^2 - m - 6 = (m+2)(m-3)$, de racines $-2$ et $3$. Ce trinôme en $m$, de coefficient dominant $1 > 0$, est strictement négatif entre ses racines. Donc $\\Delta < 0 \\iff -2 < m < 3$ : $(E_m)$ n'a aucune solution pour $m \\in ]-2\\,;3[$. Pour $m = -2$ ou $m = 3$, elle a une solution double.",
        "retenir": "Étudier une équation à paramètre revient souvent à résoudre une inéquation du second degré dont l'inconnue est le paramètre.",
        "id": "c2b-s0-1"
       },
       {
        "titre": "Deux solutions positives",
        "enonce": "On admet que $(E_m)$ a deux solutions distinctes si et seulement si $m < -2$ ou $m > 3$, et qu'alors $x_1 + x_2 = 2m$ et $x_1 x_2 = m + 6$. Déterminer l'ensemble des réels $m$ pour lesquels $(E_m)$ a deux solutions distinctes strictement positives.",
        "reponse": 4,
        "choix": [
         "$]-6\\,;-2[\\,\\cup\\,]3\\,;+\\infty[$",
         "$]0\\,;+\\infty[$",
         "$]-\\infty\\,;-2[\\,\\cup\\,]3\\,;+\\infty[$",
         "$]3\\,;+\\infty[$"
        ],
        "indice": "Deux réels sont tous deux strictement positifs si et seulement si leur produit et leur somme sont strictement positifs.",
        "explication": "Il faut $\\Delta > 0$ ($m < -2$ ou $m > 3$), un produit positif ($m + 6 > 0$, soit $m > -6$) et une somme positive ($2m > 0$, soit $m > 0$). L'intersection est $]3\\,;+\\infty[$. Oublier la somme donnerait $]-6\\,;-2[\\,\\cup\\,]3\\,;+\\infty[$ ; or pour $m = -3$, les deux solutions sont négatives (somme $-6$, produit $3$).",
        "retenir": "Signe des racines, quand $\\Delta > 0$ : $P < 0$, signes contraires ; $P > 0$ et $S > 0$, deux positives ; $P > 0$ et $S < 0$, deux négatives.",
        "id": "c2b-s0-2"
       },
       {
        "titre": "Une solution imposée",
        "enonce": "On suppose que $2$ est solution de $(E_m)$. On rappelle que, lorsque $(E_m)$ a deux solutions, leur somme vaut $2m$. Entrer l'autre solution, sous forme de fraction.",
        "reponse": 4.666666666666667,
        "indice": "Remplace $x$ par $2$ dans $(E_m)$ pour trouver $m$, puis utilise la somme des solutions.",
        "explication": "$4 - 4m + m + 6 = 0 \\iff 3m = 10 \\iff m = \\frac{10}{3}$. La somme des solutions vaut alors $2m = \\frac{20}{3}$, donc l'autre solution est $\\frac{20}{3} - 2 = \\frac{14}{3}$. Contrôle par le produit : $2 \\times \\frac{14}{3} = \\frac{28}{3} = \\frac{10}{3} + 6$.",
        "retenir": "Une solution connue et la somme (ou le produit) des racines donnent l'autre solution, sans discriminant.",
        "id": "c2b-s0-3"
       },
       {
        "titre": "Le minimum caché",
        "enonce": "On admet que $(E_m)$ a des solutions si et seulement si $m \\leqslant -2$ ou $m \\geqslant 3$, et qu'alors $x_1 + x_2 = 2m$ et $x_1 x_2 = m + 6$. Entrer la plus petite valeur possible de $x_1^2 + x_2^2$ lorsque $m$ varie.",
        "reponse": 8,
        "indice": "Exprime $x_1^2 + x_2^2$ à l'aide de $x_1 + x_2$ et $x_1 x_2$, puis étudie ce trinôme en $m$ seulement pour les valeurs permises de $m$.",
        "explication": "$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 4m^2 - 2m - 12 = g(m)$. Le sommet de $g$ est en $m = \\frac{1}{4}$, valeur interdite (on y trouverait $-12{,}25$, absurde pour une somme de carrés). $g$ est décroissante sur $]-\\infty\\,;-2]$ et croissante sur $[3\\,;+\\infty[$ : minimum $g(-2) = 8$ sur le premier intervalle, $g(3) = 18$ sur le second. Réponse : $8$, obtenu pour $m = -2$ (solution double $-2$ : $4 + 4 = 8$).",
        "retenir": "Sous contrainte, le sommet ne donne l'extremum que s'il est dans le domaine permis ; sinon, l'extremum est atteint en une borne.",
        "id": "c2b-s0-4"
       }
      ],
      "boss": "Polyphème le Cyclope",
      "monstre": "cyclope",
      "contexte": "Pour tout réel $m$, on considère l'équation $(E_m)$ : $x^2 - 2mx + m + 6 = 0$, d'inconnue réelle $x$. Lorsqu'elle admet des solutions, on les note $x_1$ et $x_2$ (avec $x_1 = x_2$ en cas de solution double). On étudie comment le nombre et le signe des solutions dépendent de $m$, puis on cherche la plus petite valeur de $x_1^2 + x_2^2$."
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Il existe deux réels dont la somme vaut $4$ et le produit vaut $5$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Deux réels de somme $S$ et de produit $P$ sont les solutions de $X^2 - SX + P = 0$.",
        "explication": "Faux. Si $u + v = 4$ et $uv = 5$, alors $(X - u)(X - v) = X^2 - 4X + 5$ pour tout réel $X$, donc $u$ et $v$ sont solutions de $X^2 - 4X + 5 = 0$. Or $\\Delta = 16 - 20 = -4 < 0$ : cette équation n'a aucune solution réelle. De tels réels n'existent donc pas.",
        "retenir": "Il existe deux réels de somme $S$ et de produit $P$ si et seulement si $S^2 - 4P \\geqslant 0$.",
        "id": "c2b-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $m$, l'équation $x^2 + mx - m^2 - 1 = 0$ admet deux solutions réelles de signes contraires. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Regarde le signe de $ac$, puis celui du produit des solutions.",
        "explication": "Vrai. Soit $m$ un réel. Ici $a = 1$ et $c = -m^2 - 1 < 0$, donc $ac < 0$ et $\\Delta = m^2 + 4(m^2 + 1) = 5m^2 + 4 > 0$ : deux solutions distinctes. Leur produit $\\frac{c}{a} = -m^2 - 1$ est strictement négatif : elles sont de signes contraires.",
        "retenir": "Produit des racines $\\frac{c}{a} < 0$ : deux racines réelles de signes contraires, sans même calculer $\\Delta$.",
        "id": "c2b-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $x_1$ et $x_2$ sont les deux solutions de $3x^2 - 7x - 2 = 0$, alors $\\dfrac{1}{x_1} + \\dfrac{1}{x_2} = -\\dfrac{7}{2}$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Réduis au même dénominateur : la somme et le produit des solutions suffisent.",
        "explication": "Vrai. Comme $ac < 0$, l'équation a deux solutions, non nulles puisque $c \\neq 0$. On a $x_1 + x_2 = \\frac{7}{3}$ et $x_1 x_2 = -\\frac{2}{3}$. Donc $\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2} = \\frac{7}{3} \\times \\left(-\\frac{3}{2}\\right) = -\\frac{7}{2}$.",
        "retenir": "Toute expression symétrique des racines s'exprime avec $S = -\\frac{b}{a}$ et $P = \\frac{c}{a}$, sans calculer les racines.",
        "id": "c2b-b0-2"
       }
      ]
     }
    ]
   }
  ],
  "sanctuaire": {
   "sceauxOr": 3,
   "salle": {
    "nom": "Le sanctuaire d'Hypatie",
    "fond": "sanctuaire",
    "athena": "Ici, chaque réponse se défend comme devant une classe : la justification compte autant que le résultat.",
    "notion": "Problèmes plus difficiles et regard de futur professeur",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................S",
     "#..........T...............S",
     "#.........##PPPPPPPPP#######",
     "#..A.....T##.........#######",
     "#.###...####.........#######",
     "#......T####.........#######",
     "#.....######.........#######",
     "#J.G..######.........#######",
     "############.........#######"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le pentagone et le nombre d'or",
        "enonce": "D'après CAPES Mayotte 2022. On admet que les réels $\\alpha = 2\\cos\\left(\\frac{2\\pi}{5}\\right)$ et $\\beta = 2\\cos\\left(\\frac{4\\pi}{5}\\right)$ vérifient $\\alpha + \\beta = -1$ et $\\alpha\\beta = -1$. Entrer la valeur de $\\cos\\left(\\frac{2\\pi}{5}\\right)$ arrondie au millième.",
        "reponse": 0.309,
        "tolerance": 0.0005,
        "indice": "$\\alpha$ et $\\beta$ sont les solutions d'une équation $X^2 - SX + P = 0$. Pour identifier $\\alpha$ parmi elles : comme $0 < \\frac{2\\pi}{5} < \\frac{\\pi}{2}$, le réel $\\cos\\left(\\frac{2\\pi}{5}\\right)$ est strictement positif.",
        "explication": "$\\alpha$ et $\\beta$ sont les solutions de $X^2 + X - 1 = 0$, soit $\\frac{-1 \\pm \\sqrt{5}}{2}$. Comme $0 < \\frac{2\\pi}{5} < \\frac{\\pi}{2}$, on a $\\alpha > 0$, donc $\\alpha = \\frac{\\sqrt{5} - 1}{2}$ et $\\cos\\left(\\frac{2\\pi}{5}\\right) = \\frac{\\sqrt{5} - 1}{4} \\approx 0{,}309$.",
        "retenir": "Deux nombres de somme $S$ et de produit $P$ sont les solutions de $X^2 - SX + P = 0$ : c'est ainsi qu'on les calcule.",
        "id": "c2s-s0-0"
       },
       {
        "titre": "Une corde de la parabole",
        "enonce": "D'après CAPES Mayotte 2021. Dans un repère, la droite passant par $A(3\\,;9)$ et $C(0\\,;12)$ recoupe la parabole d'équation $y = x^2$ en un second point $B$. Entrer l'abscisse de $B$.",
        "reponse": -4,
        "indice": "La droite a une équation $y = px + 12$ ; les abscisses des points communs sont les solutions d'une équation du second degré dont tu connais déjà une solution.",
        "explication": "La droite $(AC)$ a pour coefficient directeur $\\frac{9 - 12}{3 - 0} = -1$ et pour équation $y = -x + 12$. Les abscisses des points communs vérifient $x^2 = -x + 12$, soit $x^2 + x - 12 = 0$. Le produit des solutions vaut $-12$ ; l'une est $3$, l'autre est donc $-4$, d'où $B(-4\\,;16)$. Plus généralement, la droite passant par $(a\\,;a^2)$ et $(-b\\,;b^2)$ coupe l'axe des ordonnées au point d'ordonnée $ab$.",
        "retenir": "Intersection d'une droite et d'une parabole : une équation du second degré dont on connaît souvent une solution ; le produit donne l'autre.",
        "id": "c2s-s0-1"
       },
       {
        "titre": "L'une double de l'autre",
        "enonce": "Soit $m$ un réel strictement positif. On sait que l'équation $x^2 - mx + 18 = 0$ admet deux solutions réelles, dont l'une est le double de l'autre. Entrer $m$.",
        "reponse": 9,
        "indice": "Note les solutions $t$ et $2t$, puis écris leur produit et leur somme.",
        "explication": "Les solutions $t$ et $2t$ vérifient $t \\times 2t = 18$, donc $t^2 = 9$, et $t + 2t = m$, donc $m = 3t$. Comme $m > 0$, $t > 0$ : $t = 3$ et $m = 9$. Vérification : $x^2 - 9x + 18 = (x-3)(x-6)$, de solutions $3$ et $6 = 2 \\times 3$.",
        "retenir": "Une condition sur les racines ($x_2 = 2x_1$, $x_2 = -x_1$…) se traduit par la somme et le produit : deux équations, sans discriminant.",
        "effet": "passerelle",
        "id": "c2s-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Périmètre et diagonale",
        "enonce": "Un terrain rectangulaire à Mamoudzou a un périmètre de $34$ m et une diagonale de $13$ m. Entrer sa longueur (le plus grand côté), en mètres.",
        "reponse": 12,
        "unite": "m",
        "indice": "Avec $x + y = 17$ et $x^2 + y^2 = 169$, calcule $xy$ grâce au développement de $(x+y)^2$.",
        "explication": "Notons $x$ et $y$ les côtés : $x + y = 17$ et, d'après le théorème de Pythagore, $x^2 + y^2 = 169$. Alors $2xy = (x+y)^2 - (x^2 + y^2) = 289 - 169 = 120$, donc $xy = 60$. Les côtés sont les solutions de $X^2 - 17X + 60 = 0$ : $\\Delta = 289 - 240 = 49$, $X = \\frac{17 \\pm 7}{2}$, soit $12$ et $5$. La longueur est $12$ m.",
        "retenir": "Connaître la somme $S$ et le produit $P$ de deux nombres, c'est connaître l'équation $X^2 - SX + P = 0$ dont ils sont les solutions.",
        "id": "c2s-s1-0"
       },
       {
        "titre": "Une équation réciproque",
        "enonce": "Entrer le nombre de solutions réelles de l'équation $x^4 - 5x^3 + 8x^2 - 5x + 1 = 0$. On pourra diviser par $x^2$ et poser $X = x + \\dfrac{1}{x}$.",
        "reponse": 3,
        "indice": "Vérifie que $0$ n'est pas solution, puis utilise $x^2 + \\frac{1}{x^2} = X^2 - 2$.",
        "explication": "$0$ n'est pas solution. En divisant par $x^2$ : $x^2 + \\frac{1}{x^2} - 5\\left(x + \\frac{1}{x}\\right) + 8 = 0$, soit $X^2 - 2 - 5X + 8 = 0$, c'est-à-dire $X^2 - 5X + 6 = 0$ : $X = 2$ ou $X = 3$. Or $x + \\frac{1}{x} = 2 \\iff (x-1)^2 = 0 \\iff x = 1$, et $x + \\frac{1}{x} = 3 \\iff x^2 - 3x + 1 = 0$, de discriminant $5$ : deux solutions $\\frac{3 \\pm \\sqrt{5}}{2}$. Au total, trois solutions réelles.",
        "retenir": "Équation à coefficients symétriques : diviser par $x^2$ et poser $X = x + \\frac{1}{x}$ ramène au second degré.",
        "id": "c2s-s1-1"
       },
       {
        "titre": "Un maximum par le discriminant",
        "enonce": "Soit $x$ et $y$ deux réels tels que $x^2 + y^2 = 1$. Pour tout réel $t$, on pose $P(t) = (xt - 3)^2 + (yt - 4)^2$. En utilisant le signe de $P$, entrer la plus grande valeur possible de $3x + 4y$.",
        "reponse": 5,
        "indice": "Développe $P(t)$ : c'est un trinôme en $t$, positif ou nul pour tout $t$. Que peut-on en déduire sur son discriminant ?",
        "explication": "$P(t) = (x^2 + y^2)t^2 - 2(3x + 4y)t + 25 = t^2 - 2(3x + 4y)t + 25$. Comme $P(t) \\geqslant 0$ pour tout réel $t$, ce trinôme n'a pas deux racines distinctes : $\\Delta = 4(3x + 4y)^2 - 100 \\leqslant 0$, d'où $(3x + 4y)^2 \\leqslant 25$ et $3x + 4y \\leqslant 5$. La valeur $5$ est atteinte pour $x = \\frac{3}{5}$ et $y = \\frac{4}{5}$.",
        "retenir": "Un trinôme positif ou nul sur $\\mathbb{R}$ a un discriminant négatif ou nul : c'est la preuve classique de l'inégalité de Cauchy-Schwarz.",
        "id": "c2s-s1-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Une justification incomplète",
        "enonce": "Pour prouver que $-x^2 + 2x - 5 < 0$ pour tout réel $x$, un élève écrit : « $\\Delta = 4 - 20 = -16 < 0$, donc le trinôme est négatif. » Quelle appréciation porter ?",
        "reponse": 2,
        "choix": [
         "La conclusion est fausse : le trinôme prend aussi des valeurs positives.",
         "La conclusion est juste mais la justification est incomplète : $\\Delta < 0$ donne un signe constant, celui de $a$, ici $a = -1 < 0$.",
         "Tout est correct et complet : $\\Delta < 0$ suffit à conclure.",
         "Le discriminant est faux : il vaut $4 + 20 = 24$."
        ],
        "indice": "Le trinôme $x^2 + 1$ a lui aussi un discriminant négatif : quel est son signe ?",
        "explication": "$\\Delta < 0$ signifie que le trinôme ne s'annule pas et garde un signe constant, celui de $a$. L'élève conclut juste, mais sans citer le signe de $a$ ; avec le même argument, il « prouverait » que $x^2 + 1$ est négatif. On attend : « $\\Delta = -16 < 0$ et $a = -1 < 0$, donc le trinôme est strictement négatif sur $\\mathbb{R}$ », ou la forme canonique $-(x-1)^2 - 4$.",
        "retenir": "Le signe d'un trinôme se lit avec deux informations : le signe de $\\Delta$ (racines ou non) et le signe de $a$.",
        "id": "c2s-s2-0"
       },
       {
        "titre": "Choisir le bon contre-exemple",
        "enonce": "Une élève affirme : « Si $\\Delta > 0$, alors le trinôme $x^2 + bx + c$ a deux racines strictement positives. » Quel trinôme fournit un contre-exemple à présenter à la classe ?",
        "reponse": 4,
        "choix": [
         "$x^2 - 5x + 6$",
         "$x^2 - 4x + 4$",
         "$x^2 + 1$",
         "$x^2 + x - 6$"
        ],
        "indice": "Un contre-exemple doit vérifier l'hypothèse ($\\Delta > 0$) et contredire la conclusion.",
        "explication": "$x^2 + x - 6$ a pour discriminant $25 > 0$ et pour racines $2$ et $-3$ : l'hypothèse est vérifiée, la conclusion non. $x^2 - 4x + 4$ ($\\Delta = 0$) et $x^2 + 1$ ($\\Delta < 0$) ne vérifient pas l'hypothèse : ils ne prouvent rien. $x^2 - 5x + 6$ a deux racines positives, $2$ et $3$ : c'est un exemple, pas un contre-exemple.",
        "retenir": "Un contre-exemple à « si $H$, alors $C$ » vérifie $H$ sans vérifier $C$ ; un cas qui ne vérifie pas $H$ ne prouve rien.",
        "id": "c2s-s2-1"
       },
       {
        "titre": "Du collège au lycée",
        "enonce": "En classe de Seconde, pour factoriser $x^2 - 6x + 5$ sans utiliser le discriminant, quelle démarche réinvestit le mieux les acquis du collège ?",
        "reponse": 1,
        "choix": [
         "Écrire $x^2 - 6x + 5 = (x-3)^2 - 4$, puis utiliser $A^2 - B^2 = (A-B)(A+B)$ pour obtenir $(x-5)(x-1)$.",
         "Mettre $x$ en facteur : $x(x-6) + 5$ est la forme factorisée cherchée.",
         "Utiliser $(a-b)^2 = a^2 - 2ab + b^2$ pour écrire directement $(x - \\sqrt{5})^2$.",
         "Essayer des valeurs au tableur jusqu'à voir apparaître la factorisation."
        ],
        "indice": "Quelle identité remarquable du collège transforme une différence de deux carrés en produit ?",
        "explication": "On complète le carré : $x^2 - 6x + 5 = (x-3)^2 - 9 + 5 = (x-3)^2 - 2^2$, puis l'identité $A^2 - B^2 = (A - B)(A + B)$ donne $(x - 3 - 2)(x - 3 + 2) = (x-5)(x-1)$. C'est la démonstration de la formule des racines, faite sur un exemple. $x(x-6) + 5$ est une somme, pas un produit ; et $(x - \\sqrt{5})^2 = x^2 - 2\\sqrt{5}\\,x + 5$.",
        "retenir": "Forme canonique puis $A^2 - B^2 = (A-B)(A+B)$ : c'est la preuve des formules du discriminant, à faire refaire sur des exemples.",
        "id": "c2s-s2-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous réels $x$ et $y$, $x^2 + xy + y^2 \\geqslant 0$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Fixe $y$ et regarde l'expression comme un trinôme en $x$.",
        "explication": "Vrai. Soit $y$ un réel fixé. Le trinôme en $x$, $x^2 + yx + y^2$, a pour coefficient dominant $1 > 0$ et pour discriminant $y^2 - 4y^2 = -3y^2 \\leqslant 0$ : il est positif ou nul pour tout réel $x$. Autre preuve : $x^2 + xy + y^2 = \\left(x + \\frac{y}{2}\\right)^2 + \\frac{3y^2}{4}$, somme de deux carrés.",
        "retenir": "Pour étudier le signe d'une expression à deux variables, fixer l'une et voir un trinôme en l'autre.",
        "id": "c2s-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ax^2 + bx + c$, avec $a \\neq 0$. Si $f(0) \\times f(1) < 0$, alors $f$ a deux racines réelles distinctes. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Raisonne par l'absurde : que dire du signe de $f$ si $\\Delta \\leqslant 0$ ?",
        "explication": "Vrai. Supposons $\\Delta \\leqslant 0$. Alors $f(x) = a\\left[\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{\\Delta}{4a^2}\\right]$, où le crochet est positif ou nul : $a f(x) \\geqslant 0$ pour tout réel $x$. Donc $a^2 f(0) f(1) = (af(0))(af(1)) \\geqslant 0$, d'où $f(0) f(1) \\geqslant 0$, ce qui contredit l'hypothèse. Ainsi $\\Delta > 0$.",
        "retenir": "Un trinôme qui change de signe a forcément deux racines distinctes : si $\\Delta \\leqslant 0$, il garde le signe de $a$.",
        "id": "c2s-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $m$, l'équation $x^2 - (m+1)x + m = 0$ admet deux solutions réelles distinctes. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Cherche une racine évidente, puis l'autre racine en fonction de $m$.",
        "explication": "Faux. $1$ est racine évidente ($1 - m - 1 + m = 0$) et le produit des racines vaut $m$ : $x^2 - (m+1)x + m = (x-1)(x-m)$. Les solutions sont $1$ et $m$, distinctes sauf si $m = 1$. Contre-exemple : $m = 1$ donne $x^2 - 2x + 1 = (x-1)^2$, une seule solution. D'ailleurs $\\Delta = (m-1)^2$ s'annule en $m = 1$.",
        "retenir": "Un « pour tout $m$ » tombe sur une seule valeur : chercher les valeurs du paramètre qui annulent $\\Delta$.",
        "id": "c2s-b0-2"
       }
      ]
     }
    ]
   }
  }
 },
 {
  "niveau": "Semaine 3",
  "titre": "Arithmétique",
  "introduction": "Les nombres entiers paraissent simples ; pourtant, depuis Pythagore, ils portent les démonstrations les plus pures. Cette semaine, tu apprends à écrire $n = 2k + 1$, à raisonner selon les restes, à décomposer un nombre en facteurs premiers et à conduire l'algorithme d'Euclide. Au concours, une preuve d'arithmétique tient en trois lignes : chacune doit être juste.",
  "conclusion": "Emporte trois gestes : écrire la division euclidienne avec son reste encadré, raisonner par cas selon les restes, lire les diviseurs sur la décomposition en facteurs premiers. Et souviens-toi qu'un exemple illustre, mais que seule une preuve générale démontre.",
  "salles": [
   {
    "nom": "Le nombre de Philolaos",
    "fond": "jardin",
    "athena": "Dire que $a$ divise $b$, c'est écrire $b = ka$ avec $k$ entier : pose cet entier avant tout calcul, et la preuve s'écrit presque seule.",
    "notion": "Divisibilité, multiples, parité",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#....T........D............#",
     "#...###.....#####..........#",
     "#........................A.#",
     "#.......###.............####",
     "#..........................#",
     "#....##...............##...S",
     "#JG................T.......S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Les multiples de 7",
        "enonce": "Entrer le nombre de multiples de 7 compris entre 100 et 300.",
        "reponse": 28,
        "indice": "Encadre : quel est le plus petit multiple de 7 supérieur à 100, et le plus grand inférieur à 300 ?",
        "explication": "$7 \\times 14 = 98 < 100 < 105 = 7 \\times 15$ et $7 \\times 42 = 294 \\leq 300 < 301 = 7 \\times 43$. Les multiples cherchés sont les $7k$ pour $k$ entier de 15 à 42 : il y en a $42 - 15 + 1 = 28$.",
        "retenir": "Compter des multiples, c'est compter les entiers $k$ ; de $p$ à $q$ inclus, il y en a $q - p + 1$.",
        "id": "c3r1-s0-0"
       },
       {
        "titre": "Le chiffre manquant",
        "enonce": "Le nombre à quatre chiffres $\\overline{52x4}$ (5 milliers, 2 centaines, $x$ dizaines, 4 unités) est divisible par 12. Entrer le chiffre $x$.",
        "reponse": 4,
        "indice": "Un multiple de 12 est multiple de 3 et de 4 : utilise le critère de divisibilité par 3 (somme des chiffres) et celui par 4 (nombre formé par les deux derniers chiffres).",
        "explication": "Si 12 divise ce nombre, 3 et 4 le divisent. Par 3 : $5 + 2 + x + 4 = 11 + x$ est multiple de 3, donc $x \\in \\{1, 4, 7\\}$. Par 4 : $\\overline{x4}$ est multiple de 4, donc $x$ est pair. Seul $x = 4$ convient et, réciproquement, $5\\,244 = 12 \\times 437$.",
        "retenir": "Si 12 divise un entier, alors 3 et 4 le divisent. Attention : la divisibilité par 2 et par 6 n'entraîne pas celle par 12 (6 n'est pas multiple de 12).",
        "id": "c3r1-s0-1"
       },
       {
        "titre": "Un diviseur à trouver",
        "enonce": "Entrer le nombre d'entiers relatifs $n$, avec $n \\neq -3$, tels que $n + 3$ divise $2n + 13$.",
        "reponse": 4,
        "indice": "Écris $2n + 13$ sous la forme $2(n + 3) + c$, avec $c$ entier.",
        "explication": "$2n + 13 = 2(n + 3) + 7$. Si $n + 3$ divise $2n + 13$, il divise $(2n + 13) - 2(n + 3) = 7$ ; réciproquement, s'il divise 7, il divise $2(n + 3) + 7$. Donc $n + 3 \\in \\{-7, -1, 1, 7\\}$, soit $n \\in \\{-10, -4, -2, 4\\}$ : 4 entiers. Oublier les diviseurs négatifs en fait perdre deux.",
        "retenir": "Si $d$ divise $a$ et $b$, il divise toute combinaison $ua + vb$ ($u$, $v$ entiers). Dans $\\mathbb{Z}$, 7 a quatre diviseurs : $1$, $-1$, $7$, $-7$.",
        "id": "c3r1-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "La bonne rédaction",
        "enonce": "Quelle rédaction démontre que, pour tout entier $n$, le produit $n(n+1)$ est pair ?",
        "reponse": 3,
        "choix": [
         "$1 \\times 2 = 2$, $4 \\times 5 = 20$ et $9 \\times 10 = 90$ sont pairs, donc $n(n+1)$ est toujours pair.",
         "Si $n$ est pair, $n = 2k$ avec $k$ entier, donc $n(n+1) = 2k(2k+1)$ est pair.",
         "Si $n = 2k$, $n(n+1) = 2\\,[k(2k+1)]$ ; si $n = 2k+1$, $n(n+1) = 2\\,[(2k+1)(k+1)]$ ($k$ entier). Dans les deux cas, $n(n+1)$ est pair.",
         "$n(n+1) = n^2 + n$ et $n^2$ est pair, donc $n^2 + n$ est pair."
        ],
        "indice": "Une preuve doit couvrir tous les entiers : un entier est soit pair, soit impair.",
        "explication": "La troisième rédaction traite les deux cas possibles (disjonction de cas) et exhibe chaque fois le double d'un entier. La première ne donne que des exemples, la deuxième oublie le cas $n$ impair, la quatrième affirme à tort que $n^2$ est toujours pair. On peut aussi dire : de deux entiers consécutifs, l'un est pair.",
        "retenir": "Pour une propriété universelle sur les entiers : écrire $n = 2k$ ou $n = 2k + 1$, traiter chaque cas, conclure « dans tous les cas ».",
        "id": "c3r1-s1-0"
       },
       {
        "titre": "Pair ou impair ?",
        "enonce": "Pour tout entier $n$, on pose $A = n^2 + 5n + 7$. Quelle affirmation est exacte ?",
        "reponse": 2,
        "choix": [
         "$A$ est pair si et seulement si $n$ est pair.",
         "$A$ est toujours impair.",
         "$A$ est pair si et seulement si $n$ est impair.",
         "$A$ est toujours pair."
        ],
        "indice": "Factorise $n^2 + 5n$ et compare la parité de $n$ et celle de $n + 5$.",
        "explication": "$A = n(n + 5) + 7$. Les entiers $n$ et $n + 5$ n'ont pas la même parité (leur différence, 5, est impaire), donc l'un des deux est pair et $n(n + 5)$ est pair. Ainsi $A$, somme d'un nombre pair et de 7, est impair pour tout $n$. Contrôle : $n = 0$ donne 7, $n = 1$ donne 13.",
        "retenir": "Si $a - b$ est impair, $a$ et $b$ sont de parités différentes, donc le produit $ab$ est pair.",
        "id": "c3r1-s1-1"
       },
       {
        "titre": "Le carré d'un impair",
        "enonce": "Entrer le plus grand entier naturel $d$ qui divise $n^2 - 1$ pour tout entier impair $n$.",
        "reponse": 8,
        "indice": "Écris $n = 2k + 1$, factorise $n^2 - 1$, puis regarde le cas $n = 3$.",
        "explication": "Avec $n = 2k + 1$ : $n^2 - 1 = 4k^2 + 4k = 4k(k + 1)$. Or $k(k + 1)$, produit de deux entiers consécutifs, est pair : $k(k + 1) = 2m$, d'où $n^2 - 1 = 8m$. Donc 8 convient. Et pour $n = 3$, $n^2 - 1 = 8$ : aucun entier plus grand que 8 ne divise tous ces nombres. Donc $d = 8$.",
        "retenir": "Le carré d'un entier impair s'écrit $8m + 1$ : réflexe $n = 2k + 1$, puis « $k(k + 1)$ est pair ».",
        "id": "c3r1-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous entiers $a$, $b$, $c$, si $a$ divise $bc$, alors $a$ divise $b$ ou $a$ divise $c$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Cherche un diviseur $a$ dont les facteurs se répartissent entre $b$ et $c$.",
        "explication": "Faux. Contre-exemple : $a = 6$, $b = 2$, $c = 3$. 6 divise $2 \\times 3 = 6$, mais 6 ne divise ni 2 ni 3.",
        "retenir": "Un diviseur d'un produit peut se partager entre les facteurs ; la propriété devient vraie lorsque $a$ est premier (on le démontrera plus tard).",
        "id": "c3r1-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier $n$, si 2 divise $n$ et 3 divise $n$, alors 6 divise $n$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $n = 3n - 2n$ et regarde chacun des deux termes.",
        "explication": "Vrai. Si $n = 2k$ et $n = 3m$ ($k$, $m$ entiers), alors $3n = 6k$ et $2n = 6m$, donc $n = 3n - 2n = 6(k - m)$, avec $k - m$ entier : 6 divise $n$.",
        "retenir": "De « 2 divise $n$ et 3 divise $n$ » on tire « 6 divise $n$ » en écrivant $n = 3n - 2n$. Le produit de deux diviseurs ne divise pas toujours $n$ : penser au PPCM.",
        "id": "c3r1-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La somme de quatre entiers consécutifs est toujours divisible par 4. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris les quatre entiers $n$, $n + 1$, $n + 2$, $n + 3$ et additionne-les.",
        "explication": "Faux. Contre-exemple : $1 + 2 + 3 + 4 = 10$ n'est pas divisible par 4. En général, $n + (n + 1) + (n + 2) + (n + 3) = 4n + 6 = 4(n + 1) + 2$ : le reste dans la division par 4 vaut toujours 2.",
        "retenir": "La somme de trois entiers consécutifs est multiple de 3, celle de quatre ne l'est jamais de 4 : vérifier avant de généraliser.",
        "id": "c3r1-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Les nombres parfaits de Nicomaque",
    "fond": "brumes",
    "athena": "Diviser $a$ par $b$, c'est écrire $a = bq + r$ avec $0 \\leq r < b$ : sans cette inégalité sur le reste, il n'y a pas de division euclidienne.",
    "notion": "Division euclidienne, restes",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....................A....#",
     "#....................###...S",
     "#J.G.T............T........S",
     "########PPPPPPP#############",
     "########.......#############",
     "########.......#############",
     "########.......#############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le reste de 2027",
        "enonce": "Entrer le reste de la division euclidienne de 2027 par 13.",
        "reponse": 12,
        "indice": "Cherche le plus grand multiple de 13 inférieur ou égal à 2027.",
        "explication": "$13 \\times 155 = 2\\,015$ et $13 \\times 156 = 2\\,028 > 2\\,027$. Donc $2\\,027 = 13 \\times 155 + 12$ avec $0 \\leq 12 < 13$ : le quotient est 155 et le reste 12.",
        "retenir": "Le quotient est le plus grand entier $q$ tel que $bq \\leq a$ ; le reste $r = a - bq$ vérifie alors $0 \\leq r < b$.",
        "id": "c3r2-s0-0"
       },
       {
        "titre": "Un dividende négatif",
        "enonce": "Entrer le reste de la division euclidienne de $-17$ par 5.",
        "reponse": 3,
        "indice": "Le reste doit vérifier $0 \\leq r < 5$ : le quotient sera donc négatif.",
        "explication": "$-17 = 5 \\times (-4) + 3$ avec $0 \\leq 3 < 5$ : le quotient est $-4$ et le reste 3. L'égalité $-17 = 5 \\times (-3) - 2$ est exacte, mais $-2$ n'est pas un reste, car il est négatif.",
        "retenir": "Le reste d'une division euclidienne est toujours positif ou nul, même pour un dividende négatif : le quotient est le plus grand entier $q$ tel que $bq \\leq a$.",
        "id": "c3r2-s0-1"
       },
       {
        "titre": "Dividende 79, reste 7",
        "enonce": "D'après CAPES Mayotte 2021. Dans une division euclidienne d'entiers naturels, le dividende est 79 et le reste est 7. Entrer le nombre de valeurs possibles du diviseur.",
        "reponse": 7,
        "indice": "Si $79 = bq + 7$, que vaut $bq$ ? Et n'oublie pas la condition imposée au reste.",
        "explication": "$79 = bq + 7$ avec $0 \\leq 7 < b$ équivaut à $bq = 72$ et $b > 7$. Les diviseurs de 72 sont 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72 ; ceux qui dépassent 7 sont 8, 9, 12, 18, 24, 36 et 72. Il y a donc 7 diviseurs possibles (de quotients respectifs 9, 8, 6, 4, 3, 2, 1).",
        "retenir": "Dans $a = bq + r$, la condition $0 \\leq r < b$ fait partie de la définition : ici, elle élimine les diviseurs 1, 2, 3, 4 et 6.",
        "effet": "passerelle",
        "id": "c3r2-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Le reste d'un carré",
        "enonce": "Un entier $n$ a pour reste 3 dans la division euclidienne par 7. Entrer le reste de la division euclidienne de $n^2$ par 7.",
        "reponse": 2,
        "indice": "Écris $n = 7q + 3$ et développe $n^2$ en isolant un multiple de 7.",
        "explication": "$n = 7q + 3$ donne $n^2 = 49q^2 + 42q + 9 = 7(7q^2 + 6q + 1) + 2$, avec $0 \\leq 2 < 7$. Le reste est 2, et non 9, qui dépasse 7.",
        "retenir": "Le reste de $n^2$ ne dépend que du reste de $n$ : on élève ce reste au carré, puis on divise à nouveau le résultat.",
        "id": "c3r2-s1-0"
       },
       {
        "titre": "Même reste",
        "enonce": "Deux entiers $a$ et $b$ ont le même reste dans la division euclidienne par 11. Quelle affirmation est toujours vraie ?",
        "reponse": 4,
        "choix": [
         "$a = b$.",
         "$a$ et $b$ ont le même quotient dans la division euclidienne par 11.",
         "$a + b$ est divisible par 11.",
         "$a - b$ est divisible par 11."
        ],
        "indice": "Écris les deux divisions euclidiennes avec le même reste $r$ : quelle opération sur $a$ et $b$ fait disparaître $r$ ?",
        "explication": "Si $a = 11q + r$ et $b = 11q' + r$, alors $a - b = 11(q - q')$, avec $q - q'$ entier : 11 divise $a - b$. Les trois autres affirmations tombent avec $a = 1$ et $b = 12 = 11 \\times 1 + 1$, qui ont tous deux pour reste 1 : $a \\neq b$, les quotients 0 et 1 diffèrent, et $a + b = 13$ n'est pas divisible par 11. Réciproquement, si 11 divise $a - b$, alors $a$ et $b$ ont le même reste.",
        "retenir": "Deux entiers ont le même reste dans la division euclidienne par $b$ si et seulement si leur différence est un multiple de $b$.",
        "id": "c3r2-s1-1"
       },
       {
        "titre": "Entre 1 et 100",
        "enonce": "Entrer le nombre d'entiers $n$ compris entre 1 et 100 (inclus) tels que $n^2 + 2n$ soit divisible par 5.",
        "reponse": 40,
        "indice": "Raisonne selon le reste $r$ de $n$ dans la division par 5 : seul $r$ compte pour le reste de $n^2 + 2n$.",
        "explication": "Si $n = 5q + r$, alors $n^2 + 2n = 5(5q^2 + 2qr + 2q) + r^2 + 2r$. Pour $r = 0, 1, 2, 3, 4$, $r^2 + 2r$ vaut $0, 3, 8, 15, 24$, de restes $0, 3, 3, 0, 4$. Donc 5 divise $n^2 + 2n$ si et seulement si $n$ a pour reste 0 ou 3. Entre 1 et 100, il y a 20 entiers de chaque sorte : 40 au total.",
        "retenir": "Pour une question « pour quels $n$ ce nombre est-il divisible par $m$ ? », dresser le tableau des restes de $n$, de 0 à $m - 1$.",
        "id": "c3r2-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si le reste de la division euclidienne de $a$ par 6 est 4, alors le reste de la division euclidienne de $a$ par 3 est 1. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $a = 6q + 4$ et fais apparaître un multiple de 3.",
        "explication": "Vrai. Si $a = 6q + 4$, alors $a = 3(2q + 1) + 1$ avec $2q + 1$ entier et $0 \\leq 1 < 3$ : par unicité de la division euclidienne, le reste de $a$ par 3 est 1.",
        "retenir": "Pour passer d'un reste par $b$ à un reste par un diviseur de $b$, réécrire $a = bq + r$ et redécouper $r$.",
        "id": "c3r2-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $a$ et $b$ ont pour restes respectifs 5 et 4 dans la division euclidienne par 7, alors $a + b$ a pour reste 9 dans la division euclidienne par 7. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Un reste dans la division par 7 peut-il valoir 9 ?",
        "explication": "Faux. Contre-exemple : $a = 5$, $b = 4$ ; $a + b = 9 = 7 \\times 1 + 2$ a pour reste 2. En général $a + b = 7(q + q') + 9 = 7(q + q' + 1) + 2$ : le reste vaut 2, car un reste est strictement inférieur à 7.",
        "retenir": "On additionne ou on multiplie les restes, puis on reprend le reste du résultat, qui doit être compris entre 0 et $b - 1$.",
        "id": "c3r2-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Aucun entier naturel dont le reste dans la division euclidienne par 4 est 3 n'est la somme de deux carrés d'entiers. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Quels restes un carré peut-il avoir dans la division par 4 ? Traite $n$ pair et $n$ impair.",
        "explication": "Vrai. Si $n = 2k$, $n^2 = 4k^2$ (reste 0) ; si $n = 2k + 1$, $n^2 = 4(k^2 + k) + 1$ (reste 1). La somme de deux carrés s'écrit donc $4m$, $4m + 1$ ou $4m + 2$ : son reste par 4 vaut 0, 1 ou 2, jamais 3. Par exemple, $2\\,027 = 4 \\times 506 + 3$ n'est pas somme de deux carrés.",
        "retenir": "Un carré a pour reste 0 ou 1 dans la division par 4 : un outil rapide pour prouver une impossibilité.",
        "id": "c3r2-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "La tétractys de Pythagore",
    "fond": "temple",
    "athena": "Tout entier au moins égal à 2 se décompose de façon unique en facteurs premiers : c'est là que se lisent ses diviseurs.",
    "notion": "Nombres premiers, décomposition, diviseurs",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#...................R...A..#",
     "#...................######.#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........T...............#",
     "#.........###..............#",
     "#..........................#",
     "S.............###..........#",
     "S.................H..T..G.J#",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le crible",
        "enonce": "Avec le crible d'Ératosthène, déterminer les nombres premiers inférieurs à 50. Entrer leur nombre.",
        "reponse": 15,
        "indice": "Barre les multiples de 2, 3, 5 et 7 autres qu'eux-mêmes ; demande-toi pourquoi on peut s'arrêter à 7.",
        "explication": "Il reste 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 : 15 nombres. Barrer les multiples de 2, 3, 5 et 7 suffit, car un entier non premier $n \\leq 50$ a un diviseur premier $p$ tel que $p^2 \\leq n$, donc $p \\leq 7$.",
        "retenir": "Un nombre premier a exactement deux diviseurs positifs : 1 et lui-même. 1 n'est pas premier ; 2 est le seul nombre premier pair.",
        "id": "c3r3-s0-0"
       },
       {
        "titre": "401 est-il premier ?",
        "enonce": "Pour prouver que 401 est premier, on teste sa divisibilité par les nombres premiers successifs 2, 3, 5, … Entrer le plus grand nombre premier qu'il est nécessaire de tester.",
        "reponse": 19,
        "indice": "Si $n$ n'est pas premier, il possède un diviseur premier $p$ tel que $p^2 \\leq n$.",
        "explication": "Comme $19^2 = 361 \\leq 401 < 529 = 23^2$, il suffit de tester les premiers $p$ tels que $p^2 \\leq 401$ : 2, 3, 5, 7, 11, 13, 17 et 19. Aucun ne divise 401, qui est donc premier. Le dernier test porte sur 19.",
        "retenir": "Pour tester si $n$ est premier, il suffit d'essayer les diviseurs premiers $p$ tels que $p \\leq \\sqrt{n}$.",
        "id": "c3r3-s0-1"
       },
       {
        "titre": "Un trinôme premier",
        "enonce": "Entrer la somme des entiers naturels $n$ pour lesquels $n^2 - 6n + 8$ est un nombre premier.",
        "reponse": 6,
        "indice": "Factorise le trinôme. Si un produit de deux entiers relatifs est premier, que vaut nécessairement l'un des facteurs ?",
        "explication": "$n^2 - 6n + 8 = (n - 2)(n - 4)$. Un nombre premier ne s'écrit comme produit de deux entiers relatifs que si l'un des facteurs vaut $1$ ou $-1$. $n - 4 = 1$ donne $n = 5$ et le produit $3$, premier ; $n - 2 = -1$ donne $n = 1$ et $(-1) \\times (-3) = 3$, premier ; $n - 2 = 1$ et $n - 4 = -1$ donnent $n = 3$ et le produit $-1$. Les solutions sont 1 et 5 : leur somme vaut 6.",
        "retenir": "Si un produit d'entiers $ab$ est premier, l'un des facteurs vaut $1$ ou $-1$ : ne pas oublier les facteurs négatifs.",
        "id": "c3r3-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Les diviseurs de 200",
        "enonce": "Dresser la liste des diviseurs positifs de $200 = 2^3 \\times 5^2$, puis entrer leur nombre.",
        "reponse": 12,
        "indice": "Tout diviseur positif de 200 s'écrit $2^a \\times 5^b$ avec $a \\leq 3$ et $b \\leq 2$ : range-les dans un tableau à double entrée.",
        "explication": "Un diviseur positif de $200 = 2^3 \\times 5^2$ s'écrit $2^a \\times 5^b$ avec $0 \\leq a \\leq 3$ et $0 \\leq b \\leq 2$. Le tableau qui croise 1, 2, 4, 8 et 1, 5, 25 donne : 1, 2, 4, 8 ; 5, 10, 20, 40 ; 25, 50, 100, 200. Il y a $4 \\times 3 = 12$ diviseurs positifs.",
        "retenir": "Les diviseurs positifs de $p^a \\times q^b$ ($p$, $q$ premiers distincts) sont les $p^i \\times q^j$ avec $0 \\leq i \\leq a$ et $0 \\leq j \\leq b$ : un tableau à double entrée les donne tous.",
        "id": "c3r3-s1-0"
       },
       {
        "titre": "Compléter en carré",
        "enonce": "Entrer le plus petit entier naturel non nul $k$ tel que $360k$ soit le carré d'un entier.",
        "reponse": 10,
        "indice": "Décompose 360 en facteurs premiers ; un entier est un carré si et seulement si tous les exposants de sa décomposition sont pairs.",
        "explication": "$360 = 2^3 \\times 3^2 \\times 5$ : les exposants de 2 et de 5 sont impairs. Il faut donc que $k$ soit multiple de $2 \\times 5 = 10$, et $k = 10$ convient : $360 \\times 10 = 3\\,600 = 60^2$.",
        "retenir": "Un entier est un carré parfait si et seulement si tous les exposants de sa décomposition en facteurs premiers sont pairs.",
        "id": "c3r3-s1-1"
       },
       {
        "titre": "Dix diviseurs",
        "enonce": "Si $n = p_1^{a_1} \\times \\dots \\times p_k^{a_k}$ est la décomposition de $n$ en facteurs premiers, ses diviseurs positifs sont les $p_1^{b_1} \\times \\dots \\times p_k^{b_k}$ avec $0 \\leq b_i \\leq a_i$ pour chaque $i$ : il y en a donc $(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$. Entrer le plus petit entier naturel ayant exactement 10 diviseurs positifs.",
        "reponse": 48,
        "indice": "Écris 10 comme produit de facteurs $(a_1 + 1)(a_2 + 1) \\cdots$ : $10 = 10$ ou $10 = 5 \\times 2$.",
        "explication": "Si $n = p_1^{a_1} \\times \\dots \\times p_k^{a_k}$ a 10 diviseurs, alors $(a_1 + 1) \\cdots (a_k + 1) = 10$, d'où $n = p^9$ ou $n = p^4 q$ ($p$, $q$ premiers distincts). Le plus petit $p^9$ est $2^9 = 512$ ; le plus petit $p^4 q$ est $2^4 \\times 3 = 48$. Donc 48, dont les diviseurs sont 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.",
        "retenir": "$p_1^{a_1} \\times \\dots \\times p_k^{a_k}$ a $(a_1 + 1) \\cdots (a_k + 1)$ diviseurs positifs ; pour un $n$ minimal, placer les plus grands exposants sur les plus petits nombres premiers.",
        "id": "c3r3-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier naturel $n$, le nombre $n^2 + n + 41$ est premier. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Cherche une valeur de $n$ qui fait apparaître 41 en facteur.",
        "explication": "Faux. Pour $n = 40$ : $40^2 + 40 + 41 = 40 \\times 41 + 41 = 41^2 = 1\\,681$, qui n'est pas premier. La propriété est pourtant vraie pour $n = 0, 1, \\dots, 39$ : quarante exemples ne font pas une preuve.",
        "retenir": "Une propriété universelle ne se prouve pas par des exemples, aussi nombreux soient-ils ; un seul contre-exemple suffit à la réfuter.",
        "id": "c3r3-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Tout entier $n \\geq 2$ qui n'est pas premier admet un diviseur premier $p$ tel que $p^2 \\leq n$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Considère le plus petit diviseur $p > 1$ de $n$ : pourquoi est-il premier, et comment se compare-t-il à $\\frac{n}{p}$ ?",
        "explication": "Vrai. Soit $p$ le plus petit diviseur de $n$ strictement supérieur à 1. Il est premier : un diviseur de $p$ strictement compris entre 1 et $p$ diviserait $n$ et serait plus petit. Comme $n$ n'est pas premier, $n = pm$ avec $1 < m < n$ ; $m$ divise $n$, donc $m \\geq p$, et $n = pm \\geq p^2$.",
        "retenir": "Un entier non premier $n \\geq 2$ a un diviseur premier au plus égal à $\\sqrt{n}$ : c'est ce qui justifie le crible et les tests de primalité.",
        "id": "c3r3-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $n$ est un nombre premier, alors $2^n - 1$ est un nombre premier. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste les nombres premiers jusqu'à 11 ; $2^{11} = 2\\,048$.",
        "explication": "Faux. Pour $n = 11$, premier, $2^{11} - 1 = 2\\,047 = 23 \\times 89$ n'est pas premier. La propriété est vraie pour $n = 2, 3, 5, 7$ (on obtient 3, 7, 31, 127), d'où l'illusion. C'est la réciproque qui est vraie : si $2^n - 1$ est premier, alors $n$ est premier.",
        "retenir": "Ne pas confondre une implication et sa réciproque : « $2^n - 1$ premier $\\Rightarrow$ $n$ premier » est vraie, l'implication inverse est fausse.",
        "id": "c3r3-b0-2"
       }
      ]
     }
    ],
    "acrobaties": [
     {
      "titre": "Les cent casiers",
      "enonce": "Dans un couloir du collège, 100 casiers numérotés de 1 à 100 sont fermés. Cent élèves passent l'un après l'autre : l'élève numéro $k$ change l'état (il ouvre s'il est fermé, il ferme s'il est ouvert) de chaque casier dont le numéro est un multiple de $k$. Entrer le nombre de casiers ouverts après le passage des cent élèves.",
      "reponse": 10,
      "indice": "Le casier $n$ change d'état autant de fois que $n$ a de diviseurs. Quand ce nombre est-il impair ?",
      "explication": "Le casier $n$ est manipulé par chaque élève $k$ qui divise $n$ ; il finit ouvert si $n$ a un nombre impair de diviseurs. Les diviseurs vont par paires $(d, \\frac{n}{d})$, distinctes sauf si $d = \\frac{n}{d}$, c'est-à-dire $n = d^2$. Seuls les carrés ont donc un nombre impair de diviseurs : 1, 4, 9, …, 100, soit 10 casiers.",
      "retenir": "Un entier $n \\geq 1$ a un nombre impair de diviseurs positifs si et seulement si c'est un carré parfait.",
      "id": "c3r3-h0",
      "figure": "double"
     }
    ]
   },
   {
    "nom": "L'hymne de Cléanthe",
    "fond": "bibliotheque",
    "athena": "Les diviseurs communs à $a$ et $b$ sont ceux de $b$ et du reste $r$ : l'algorithme d'Euclide n'est que cette phrase, répétée jusqu'au reste nul.",
    "notion": "PGCD, PPCM, algorithme d'Euclide",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....................T....#",
     "#....................###...#",
     "#..........................#",
     "#................###.......#",
     "#......A...................#",
     "#.....###....###...........#",
     "#..........................#",
     "#........###...............S",
     "#J.G.T.....................S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "L'algorithme d'Euclide",
        "enonce": "À l'aide de l'algorithme d'Euclide, déterminer $\\mathrm{PGCD}(1\\,078\\,;\\,322)$. Entrer ce PGCD.",
        "reponse": 14,
        "indice": "Divise 1 078 par 322, puis 322 par le reste obtenu, et ainsi de suite : le PGCD est le dernier reste non nul.",
        "explication": "$1\\,078 = 322 \\times 3 + 112$ ; $322 = 112 \\times 2 + 98$ ; $112 = 98 \\times 1 + 14$ ; $98 = 14 \\times 7 + 0$. Le dernier reste non nul est 14, donc $\\mathrm{PGCD}(1\\,078\\,;\\,322) = 14$.",
        "retenir": "Si $a = bq + r$, alors $\\mathrm{PGCD}(a\\,;b) = \\mathrm{PGCD}(b\\,;r)$ : le PGCD est le dernier reste non nul de l'algorithme d'Euclide.",
        "id": "c3r4-s0-0"
       },
       {
        "titre": "Les assiettes de la fête",
        "enonce": "Pour la fête du collège, on dispose de 252 samoussas et de 180 beignets. On veut préparer le plus grand nombre possible d'assiettes identiques (même nombre de samoussas et même nombre de beignets sur chacune) en utilisant tout. Entrer le nombre total de samoussas et de beignets sur chaque assiette.",
        "reponse": 12,
        "indice": "Le nombre d'assiettes divise 252 et 180, et on le veut le plus grand possible.",
        "explication": "Le nombre d'assiettes est le plus grand diviseur commun de 252 et 180 : $252 = 180 + 72$, $180 = 2 \\times 72 + 36$, $72 = 2 \\times 36$, donc $\\mathrm{PGCD}(252\\,;180) = 36$. Chaque assiette porte $252 \\div 36 = 7$ samoussas et $180 \\div 36 = 5$ beignets, soit 12 en tout.",
        "retenir": "« Le plus grand nombre de parts identiques » : PGCD ; « la première coïncidence de deux cycles » : PPCM.",
        "id": "c3r4-s0-1"
       },
       {
        "titre": "Un PGCD qui dépend de n",
        "enonce": "Pour tout entier naturel $n$, on note $d_n = \\mathrm{PGCD}(3n + 4\\,;\\,5n + 1)$. Entrer la plus grande valeur que peut prendre $d_n$.",
        "reponse": 17,
        "indice": "Un diviseur commun de $3n + 4$ et $5n + 1$ divise toute combinaison de ces deux nombres : élimine $n$.",
        "explication": "$d_n$ divise $5(3n + 4) - 3(5n + 1) = 17$, et 17 est premier, donc $d_n = 1$ ou $d_n = 17$. La valeur 17 est atteinte : pour $n = 10$, $3n + 4 = 34 = 2 \\times 17$ et $5n + 1 = 51 = 3 \\times 17$. La plus grande valeur est 17.",
        "retenir": "Pour un PGCD qui dépend de $n$ : éliminer $n$ par une combinaison, puis vérifier sur un exemple que la valeur maximale est atteinte.",
        "id": "c3r4-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Deux barges",
        "enonce": "Deux barges quittent ensemble le quai de Mamoudzou à 6 h. La première y repart toutes les 40 minutes, la seconde toutes les 25 minutes. Entrer le nombre de minutes écoulées avant leur prochain départ simultané.",
        "reponse": 200,
        "unite": "min",
        "indice": "Les départs de la première ont lieu aux multiples de 40 minutes, ceux de la seconde aux multiples de 25 minutes.",
        "explication": "Les départs simultanés ont lieu aux multiples communs de 40 et de 25. Comme $40 = 2^3 \\times 5$ et $25 = 5^2$, $\\mathrm{PPCM}(40\\,;25) = 2^3 \\times 5^2 = 200$. Les barges repartent ensemble 200 minutes plus tard, à 9 h 20.",
        "retenir": "Sur les décompositions en facteurs premiers : le PPCM prend chaque premier avec le plus grand exposant, le PGCD avec le plus petit.",
        "id": "c3r4-s1-0"
       },
       {
        "titre": "PGCD et PPCM",
        "enonce": "Deux entiers naturels $a$ et $b$ vérifient $\\mathrm{PGCD}(a\\,;b) = 6$ et $\\mathrm{PPCM}(a\\,;b) = 180$. On sait que $a = 36$. Entrer $b$.",
        "reponse": 30,
        "indice": "Pour des entiers naturels non nuls, le produit du PGCD et du PPCM est égal à $ab$.",
        "explication": "$36 \\times b = 6 \\times 180 = 1\\,080$, donc $b = 30$. Vérification : $36 = 2^2 \\times 3^2$ et $30 = 2 \\times 3 \\times 5$ ont pour PGCD $2 \\times 3 = 6$ et pour PPCM $2^2 \\times 3^2 \\times 5 = 180$.",
        "retenir": "$\\mathrm{PGCD}(a\\,;b) \\times \\mathrm{PPCM}(a\\,;b) = ab$ pour $a$ et $b$ entiers naturels non nuls ; vérifier ensuite le couple trouvé.",
        "id": "c3r4-s1-1"
       },
       {
        "titre": "Somme 84, PGCD 6",
        "enonce": "Entrer le nombre de couples $(a\\,;b)$ d'entiers naturels tels que $a \\leq b$, $a + b = 84$ et $\\mathrm{PGCD}(a\\,;b) = 6$.",
        "reponse": 3,
        "indice": "Écris $a = 6a'$ et $b = 6b'$ : que vaut $a' + b'$, et que doit valoir $\\mathrm{PGCD}(a'\\,;b')$ ?",
        "explication": "On pose $a = 6a'$ et $b = 6b'$ ; alors $a' + b' = 14$ et $\\mathrm{PGCD}(a'\\,;b') = 1$ (sinon le PGCD de $a$ et $b$ dépasserait 6). Avec $a' \\leq b'$ : $(1\\,;13)$, $(3\\,;11)$ et $(5\\,;9)$ conviennent ; $(0\\,;14)$, $(2\\,;12)$, $(4\\,;10)$, $(6\\,;8)$ et $(7\\,;7)$ non. D'où 3 couples : $(6\\,;78)$, $(18\\,;66)$, $(30\\,;54)$.",
        "retenir": "Si $\\mathrm{PGCD}(a\\,;b) = d$, alors $a = da'$ et $b = db'$ avec $\\mathrm{PGCD}(a'\\,;b') = 1$ : c'est le premier réflexe dans un problème de PGCD.",
        "id": "c3r4-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous entiers naturels non nuls $a$, $b$ et $c$, si $\\mathrm{PGCD}(a\\,;b) = 1$ et $\\mathrm{PGCD}(b\\,;c) = 1$, alors $\\mathrm{PGCD}(a\\,;c) = 1$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Rien n'empêche $a$ et $c$ d'avoir un facteur premier commun que $b$ ne possède pas.",
        "explication": "Faux. Contre-exemple : $a = 2$, $b = 3$, $c = 4$. On a $\\mathrm{PGCD}(2\\,;3) = 1$ et $\\mathrm{PGCD}(3\\,;4) = 1$, mais $\\mathrm{PGCD}(2\\,;4) = 2$. Les hypothèses ne disent rien des facteurs communs à $a$ et à $c$.",
        "retenir": "« Avoir un PGCD égal à 1 » n'est pas une relation transitive : $a$ et $c$ peuvent partager un facteur premier absent de $b$.",
        "id": "c3r4-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous entiers naturels non nuls $a$ et $b$, $\\mathrm{PGCD}(a\\,;b) \\times \\mathrm{PPCM}(a\\,;b) = ab$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare, pour chaque nombre premier $p$, l'exposant de $p$ dans les deux membres.",
        "explication": "Vrai. Pour chaque nombre premier $p$, notons $\\alpha$ et $\\beta$ ses exposants dans $a$ et dans $b$. Son exposant est $\\min(\\alpha, \\beta)$ dans le PGCD et $\\max(\\alpha, \\beta)$ dans le PPCM, donc $\\min(\\alpha, \\beta) + \\max(\\alpha, \\beta) = \\alpha + \\beta$ dans le produit, comme dans $ab$. Les deux membres ont la même décomposition en facteurs premiers : ils sont égaux.",
        "retenir": "PGCD : les plus petits exposants ; PPCM : les plus grands ; leur produit redonne $ab$.",
        "id": "c3r4-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier naturel $n$, $\\mathrm{PGCD}(n\\,;n + 2)$ vaut 1 ou 2. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Un diviseur commun de $n$ et de $n + 2$ divise leur différence.",
        "explication": "Vrai. Si $d$ divise $n$ et $n + 2$, il divise $(n + 2) - n = 2$ ; le PGCD est donc un diviseur positif de 2 : 1 ou 2. Plus précisément, il vaut 2 si $n$ est pair (y compris $n = 0$) et 1 si $n$ est impair.",
        "retenir": "Le PGCD de deux entiers divise leur différence : $\\mathrm{PGCD}(a\\,;b) = \\mathrm{PGCD}(a\\,;b - a)$.",
        "id": "c3r4-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le commentaire de Proclus",
    "fond": "nuit",
    "athena": "La preuve par neuf compare des restes : elle peut révéler une erreur, jamais garantir une exactitude.",
    "notion": "Restes dans la division par 9, critères de divisibilité, preuve par neuf",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.......................A..#",
     "#......................###.#",
     "#..........................#",
     "#...................###....#",
     "#..........................#",
     "#................###.......#",
     "#..........................#",
     "S...................###....#",
     "S.......T...............G.J#",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Un premier reste",
        "enonce": "Entrer $r(2027)$, le reste de la division euclidienne de 2027 par 9.",
        "reponse": 2,
        "indice": "Cherche le plus grand multiple de 9 inférieur ou égal à 2027.",
        "explication": "$9 \\times 225 = 2\\,025$, donc $2\\,027 = 9 \\times 225 + 2$ avec $0 \\leq 2 < 9$ : $r(2\\,027) = 2$. On remarque que $s(2\\,027) = 2 + 0 + 2 + 7 = 11$ et que $r(11) = 2$ : même reste.",
        "retenir": "Le reste par 9 d'un entier est celui de la somme de ses chiffres (démonstration à la question suivante).",
        "id": "c3b-s0-0"
       },
       {
        "titre": "Le cœur de la méthode",
        "enonce": "On admet que, pour tout entier $k \\geq 1$, $10^k - 1$ est divisible par 9 (il s'écrit avec $k$ chiffres 9). Quelle conclusion est correctement justifiée ?",
        "reponse": 1,
        "choix": [
         "$A - s(A) = a_1(10 - 1) + a_2(10^2 - 1) + \\dots + a_n(10^n - 1)$ est divisible par 9, donc $A$ et $s(A)$ ont le même reste dans la division par 9.",
         "$A - s(A)$ est divisible par 9, donc $r(A) = s(A)$.",
         "$A$ est divisible par 9 dès qu'il a au moins deux chiffres.",
         "$s(A)$ divise $A$."
        ],
        "indice": "Calcule $A - s(A)$ en regroupant les termes chiffre par chiffre.",
        "explication": "$A - s(A) = a_1(10 - 1) + \\dots + a_n(10^n - 1)$ est une somme de multiples de 9 : $A = 9m + s(A)$. En écrivant $s(A) = 9q + r$ avec $0 \\leq r < 9$, on obtient $A = 9(m + q) + r$ : $A$ et $s(A)$ ont le même reste. En revanche, $r(A) = s(A)$ est faux en général : pour $A = 99$, $s(A) = 18$ mais $r(A) = 0$.",
        "retenir": "Si $A - B$ est un multiple de $b$, alors $A$ et $B$ ont le même reste dans la division euclidienne par $b$.",
        "id": "c3b-s0-1"
       },
       {
        "titre": "39 fois 47",
        "enonce": "On admet que $r(A \\times B) = r\\big(r(A) \\times r(B)\\big)$ pour tous entiers naturels $A$ et $B$. Un élève écrit $39 \\times 47 = 1\\,823$. Entrer $r\\big(r(39) \\times r(47)\\big)$.",
        "reponse": 6,
        "indice": "Calcule $r(39)$ et $r(47)$ (par exemple avec la somme des chiffres), multiplie-les, puis reprends le reste.",
        "explication": "$r(39) = 3$ (car $39 = 9 \\times 4 + 3$) et $r(47) = 2$ ; $3 \\times 2 = 6$, donc $r\\big(r(39) \\times r(47)\\big) = 6$. Or $r(1\\,823) = r(1 + 8 + 2 + 3) = r(14) = 5 \\neq 6$ : le résultat de l'élève est faux (en fait, $39 \\times 47 = 1\\,833$).",
        "retenir": "Si les deux restes diffèrent, la multiplication est certainement fausse.",
        "id": "c3b-s0-2"
       },
       {
        "titre": "36 fois 124",
        "enonce": "On admet que $r(A \\times B) = r\\big(r(A) \\times r(B)\\big)$ pour tous entiers naturels $A$ et $B$. Un élève écrit $36 \\times 124 = 4\\,644$. Que permet de conclure la preuve par neuf ?",
        "reponse": 4,
        "choix": [
         "Le résultat est exact, puisque les restes concordent.",
         "Le résultat est faux, puisque $r(36) = 0$.",
         "La preuve par neuf ne s'applique pas lorsqu'un facteur est multiple de 9.",
         "Rien : les deux restes sont nuls, ce qui n'assure pas l'exactitude ; d'ailleurs $36 \\times 124 = 4\\,464$."
        ],
        "indice": "Une égalité de restes est une condition nécessaire d'exactitude ; est-elle suffisante ?",
        "explication": "$r(36) = 0$, donc $r\\big(r(36) \\times r(124)\\big) = 0$ ; et $r(4\\,644) = r(18) = 0$. Les restes concordent, mais cela ne prouve rien : $36 \\times 124 = 4\\,464$. L'élève a permuté deux chiffres, ce qui ne change pas leur somme, donc pas le reste par 9.",
        "retenir": "La preuve par neuf détecte certaines erreurs mais ne prouve jamais un résultat : elle ne voit pas une permutation de chiffres.",
        "id": "c3b-s0-3"
       },
       {
        "titre": "Une grande puissance",
        "enonce": "On admet que $r(A \\times B) = r\\big(r(A) \\times r(B)\\big)$ pour tous entiers naturels $A$ et $B$. Entrer le reste de la division euclidienne de $2027^{2027}$ par 9.",
        "reponse": 5,
        "indice": "$r(2027) = 2$ ; cherche une puissance de 2 dont le reste par 9 vaut 1.",
        "explication": "La propriété donne $r(2\\,027^{k+1}) = r\\big(r(2\\,027^k) \\times 2\\big)$ et $r(2^{k+1}) = r\\big(r(2^k) \\times 2\\big)$, car $r(2\\,027) = r(2) = 2$ : de proche en proche, $r(2\\,027^k) = r(2^k)$ pour tout $k \\geq 1$. Or $2^6 = 64 = 9 \\times 7 + 1$, donc $r(2^6) = 1$, puis $r(2^{6(m+1)}) = r\\big(r(2^{6m}) \\times r(2^6)\\big) = 1$ : $r(2^{6m}) = 1$ pour tout $m \\geq 1$. Comme $2\\,027 = 6 \\times 337 + 5$, $r(2^{2\\,027}) = r\\big(r(2^{6 \\times 337}) \\times r(2^5)\\big) = r(1 \\times 5) = 5$.",
        "retenir": "Pour le reste d'une grande puissance : chercher un exposant qui donne le reste 1, puis effectuer la division euclidienne de l'exposant.",
        "id": "c3b-s0-4"
       }
      ],
      "boss": "La Chimère de Lycie",
      "monstre": "chimere",
      "contexte": "D'après CAPES Mayotte 2022. Tout entier naturel $A$ s'écrit en base dix $A = a_0 + 10\\,a_1 + 10^2 a_2 + \\dots + 10^n a_n$, où $a_0, a_1, \\dots, a_n$ sont ses chiffres. On note $s(A) = a_0 + a_1 + \\dots + a_n$ la somme de ses chiffres et $r(A)$ le reste de la division euclidienne de $A$ par 9. La « preuve par neuf » d'une multiplication $A \\times B = C$ consiste à comparer $r(C)$ et $r\\big(r(A) \\times r(B)\\big)$."
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si la somme des chiffres d'un entier naturel est divisible par 3, alors cet entier est divisible par 3. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Utilise l'écriture $A - s(A) = a_1(10 - 1) + \\dots + a_n(10^n - 1)$.",
        "explication": "Vrai. $A - s(A) = a_1(10 - 1) + \\dots + a_n(10^n - 1)$, et chaque $10^k - 1$, qui s'écrit avec $k$ chiffres 9, est multiple de 9, donc de 3. Ainsi $A = \\big(A - s(A)\\big) + s(A)$ est la somme de deux multiples de 3 : il est divisible par 3.",
        "retenir": "Les critères de divisibilité par 3 et par 9 ont la même preuve : $10^k - 1$ est multiple de 9.",
        "id": "c3b-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Un entier naturel dont la somme des chiffres vaut 18 est divisible par 18. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "$18 = 2 \\times 9$ : la somme des chiffres renseigne-t-elle sur la parité ?",
        "explication": "Faux. Contre-exemple : la somme des chiffres de 99 vaut 18, mais 99 est impair, donc pas divisible par 18 ($99 = 18 \\times 5 + 9$). Une somme des chiffres égale à 18 assure seulement la divisibilité par 9.",
        "retenir": "Le critère de la somme des chiffres ne vaut que pour 3 et 9, pas pour leurs multiples comme 18 ou 27.",
        "id": "c3b-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Un entier naturel est divisible par 4 si et seulement si le nombre formé par ses deux derniers chiffres est divisible par 4. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $A = 100q + u$, où $u$ est le nombre formé par les deux derniers chiffres de $A$.",
        "explication": "Vrai. Tout entier naturel s'écrit $A = 100q + u$ avec $0 \\leq u \\leq 99$, où $u$ est le nombre formé par ses deux derniers chiffres. Comme $100 = 4 \\times 25$ : si 4 divise $u$, il divise $A = 100q + u$ ; si 4 divise $A$, il divise $u = A - 100q$.",
        "retenir": "$A$ et ses deux derniers chiffres diffèrent d'un multiple de 100, donc de 4 et de 25 : d'où les critères de divisibilité par 4 et par 25.",
        "id": "c3b-b0-2"
       }
      ]
     }
    ]
   }
  ],
  "sanctuaire": {
   "sceauxOr": 3,
   "salle": {
    "nom": "Le sanctuaire de Boèce",
    "fond": "sanctuaire",
    "athena": "Ici, les nombres parfaits d'Euclide et les erreurs d'élèves : on n'enseigne bien que ce que l'on a soi-même démontré.",
    "notion": "Nombres parfaits, diviseurs, restes ; regard de futur professeur",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#....................A.....#",
     "#...................###....#",
     "#........................T.#",
     "#.......................##.#",
     "#..........................#",
     "#....................##....S",
     "#J.G.T.............T.......S",
     "########PPPPPPPPPP##########",
     "########..........##########",
     "########..........##########",
     "########..........##########"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "La somme des diviseurs",
        "enonce": "Entrer la somme de tous les diviseurs positifs de $496 = 2^4 \\times 31$, y compris 496.",
        "reponse": 992,
        "indice": "Les diviseurs positifs sont les $2^a \\times 31^b$ ; factorise leur somme.",
        "explication": "Les diviseurs sont les $2^a$ et les $31 \\times 2^a$ pour $0 \\leq a \\leq 4$. Leur somme vaut $(1 + 2 + 4 + 8 + 16)(1 + 31) = 31 \\times 32 = 992 = 2 \\times 496$. La somme des diviseurs de 496 autres que lui-même vaut donc 496 : c'est un nombre parfait.",
        "retenir": "Si $n = p^a q^b$ ($p$, $q$ premiers distincts), la somme de ses diviseurs positifs vaut $(1 + p + \\dots + p^a)(1 + q + \\dots + q^b)$.",
        "id": "c3s-s0-0"
       },
       {
        "titre": "Un nombre de Mersenne",
        "enonce": "On remarque que $2^{15} - 1 = (2^3)^5 - 1$. Entrer le plus petit diviseur premier de $2^{15} - 1 = 32\\,767$.",
        "reponse": 7,
        "indice": "Pour tout réel $x$, $x^5 - 1 = (x - 1)(x^4 + x^3 + x^2 + x + 1)$. Vérifie aussi 2, 3 et 5.",
        "explication": "Avec $x = 2^3 = 8$ : $2^{15} - 1 = 8^5 - 1 = (8 - 1)(8^4 + 8^3 + 8^2 + 8 + 1)$, donc 7 divise $2^{15} - 1$. Par ailleurs, 32 767 est impair, la somme de ses chiffres (25) n'est pas multiple de 3, et il ne se termine ni par 0 ni par 5 : 2, 3 et 5 ne le divisent pas. Le plus petit diviseur premier est 7.",
        "retenir": "Si $m = ab$, alors $2^a - 1$ divise $2^m - 1$ : pour que $2^m - 1$ soit premier, il faut que $m$ soit premier.",
        "id": "c3s-s0-1"
       },
       {
        "titre": "Le théorème d'Euclide",
        "enonce": "Euclide a démontré : si $2^{k+1} - 1$ est premier, alors $2^k(2^{k+1} - 1)$ est un nombre parfait. Pour $k = 1$ et $k = 2$, on obtient 6 et 28. En poursuivant avec $k = 3, 4, 5, \\dots$ et en ne retenant que les $k$ pour lesquels $2^{k+1} - 1$ est premier, entrer le quatrième nombre parfait ainsi obtenu.",
        "reponse": 8128,
        "indice": "Examine $2^{k+1} - 1$ pour $k = 3, 4, 5, 6$ : lesquels de ces nombres sont premiers ?",
        "explication": "$k = 3$ : $2^4 - 1 = 15 = 3 \\times 5$, rejeté. $k = 4$ : 31 est premier, d'où $16 \\times 31 = 496$, le troisième. $k = 5$ : $63 = 7 \\times 9$, rejeté. $k = 6$ : 127 est premier (ni 2, ni 3, ni 5, ni 7, ni 11 ne le divisent, et $13^2 > 127$), d'où $2^6 \\times 127 = 64 \\times 127 = 8\\,128$, le quatrième.",
        "retenir": "Les nombres parfaits pairs sont exactement les $2^k(2^{k+1} - 1)$ avec $2^{k+1} - 1$ premier (Euclide, puis Euler pour la réciproque).",
        "id": "c3s-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Un diviseur universel",
        "enonce": "Entrer le plus grand entier naturel $d$ tel que, pour tout entier naturel $n$, $d$ divise $n^5 - n$.",
        "reponse": 30,
        "indice": "Calcule $2^5 - 2$ pour borner $d$, puis montre que 2, 3 et 5 divisent toujours $n^5 - n$.",
        "explication": "Pour $n = 2$, $n^5 - n = 30$, donc $d$ divise 30. Réciproquement, $n^5 - n = (n - 1)n(n + 1)(n^2 + 1)$ : parmi $n - 1$, $n$, $n + 1$, l'un est pair et l'un est multiple de 3. Pour 5, selon le reste $r$ de $n$ : si $r \\in \\{0, 1, 4\\}$, 5 divise $n$, $n - 1$ ou $n + 1$ ; si $r \\in \\{2, 3\\}$, 5 divise $n^2 + 1$. Ainsi 2, 3 et 5 figurent dans la décomposition de $n^5 - n$ (s'il est non nul), et 30 le divise. Donc $d = 30$.",
        "retenir": "Pour le plus grand diviseur commun à toute une famille : borner par un exemple, puis démontrer la divisibilité dans le cas général.",
        "id": "c3s-s1-0"
       },
       {
        "titre": "Les zéros de 100!",
        "enonce": "Entrer le nombre de zéros qui terminent l'écriture décimale de $100! = 1 \\times 2 \\times 3 \\times \\dots \\times 100$.",
        "reponse": 24,
        "indice": "Chaque zéro final provient d'un facteur $10 = 2 \\times 5$ ; lequel des deux facteurs premiers est le plus rare ?",
        "explication": "Le nombre de zéros finaux est l'exposant de 10, c'est-à-dire le plus petit des exposants de 2 et de 5 dans la décomposition de $100!$ : celui de 5. Les 20 multiples de 5 jusqu'à 100 apportent chacun un facteur 5, et les multiples de 25 (25, 50, 75, 100) en apportent un second : $20 + 4 = 24$.",
        "retenir": "L'exposant d'un nombre premier $p$ dans $n!$ est le nombre de multiples de $p$, plus celui des multiples de $p^2$, de $p^3$, etc., jusqu'à $n$.",
        "id": "c3s-s1-1"
       },
       {
        "titre": "Diviseurs d'un carré",
        "enonce": "Soit $n = 2^5 \\times 3^2 = 288$. On rappelle qu'un entier $2^a \\times 3^b$ a $(a + 1)(b + 1)$ diviseurs positifs. Entrer le nombre de diviseurs positifs de $n^2$ qui sont strictement inférieurs à $n$ et qui ne divisent pas $n$.",
        "reponse": 10,
        "indice": "Associe chaque diviseur $d$ de $n^2$ au diviseur $\\frac{n^2}{d}$ : l'un des deux est inférieur à $n$, sauf si $d = n$.",
        "explication": "$n^2 = 2^{10} \\times 3^4$ a $11 \\times 5 = 55$ diviseurs. Ils s'associent par paires $(d, \\frac{n^2}{d})$ avec $d < n < \\frac{n^2}{d}$, sauf $d = n$ : il y a donc $\\frac{55 - 1}{2} = 27$ diviseurs de $n^2$ inférieurs à $n$. Parmi eux, ceux qui divisent $n$ sont les diviseurs de $n$ autres que $n$ : $6 \\times 3 - 1 = 17$. Réponse : $27 - 17 = 10$.",
        "retenir": "Les diviseurs de $N$ vont par paires $(d, \\frac{N}{d})$ de part et d'autre de $\\sqrt{N}$ : ce regroupement simplifie bien des dénombrements.",
        "effet": "passerelle",
        "id": "c3s-s1-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Le même k",
        "enonce": "Pour prouver que la somme de deux entiers impairs est paire, un élève écrit : « $a = 2k + 1$ et $b = 2k + 1$, donc $a + b = 4k + 2 = 2(2k + 1)$ est pair. » Quelle est son erreur ?",
        "reponse": 1,
        "choix": [
         "En utilisant le même $k$, il ne traite que le cas $a = b$ ; il faut écrire $b = 2m + 1$ avec $m$ entier.",
         "Il aurait dû écrire $a = 2k - 1$.",
         "Il aurait dû conclure que $a + b$ est multiple de 4.",
         "Aucune : la preuve est correcte."
        ],
        "indice": "Avec l'écriture de l'élève, que vaut $a - b$ ?",
        "explication": "Avec la même lettre $k$, l'élève impose $a = b$ : il n'a démontré que « le double d'un impair est pair ». Rédaction attendue : $a = 2k + 1$ et $b = 2m + 1$ ($k$, $m$ entiers), donc $a + b = 2(k + m + 1)$, avec $k + m + 1$ entier.",
        "retenir": "Deux objets quelconques reçoivent deux lettres différentes : un même $k$ crée un lien que l'énoncé ne donne pas.",
        "id": "c3s-s2-0"
       },
       {
        "titre": "Le bon contre-exemple",
        "enonce": "Pour convaincre une classe que la proposition « si $n^2$ est multiple de 4, alors $n$ est multiple de 4 » est fausse, quel entier $n$ faut-il proposer ?",
        "reponse": 3,
        "choix": [
         "$n = 4$",
         "$n = 3$",
         "$n = 6$",
         "$n = 8$"
        ],
        "indice": "Un contre-exemple vérifie l'hypothèse mais pas la conclusion.",
        "explication": "$n = 6$ : $n^2 = 36 = 4 \\times 9$ est multiple de 4, mais 6 ne l'est pas. Avec $n = 4$ ou $n = 8$, la conclusion est vraie ; avec $n = 3$, l'hypothèse est fausse (9 n'est pas multiple de 4) : ce ne sont pas des contre-exemples.",
        "retenir": "Un contre-exemple à « si P, alors Q » doit vérifier P et ne pas vérifier Q.",
        "id": "c3s-s2-1"
       },
       {
        "titre": "Diviseurs d'un produit",
        "enonce": "Un élève affirme : « 12 a 6 diviseurs positifs et 18 aussi, donc $12 \\times 18 = 216$ en a $6 \\times 6 = 36$. » Quelle est son erreur ?",
        "reponse": 2,
        "choix": [
         "Aucune : le nombre de diviseurs d'un produit est le produit des nombres de diviseurs.",
         "La règle ne vaut que si les deux facteurs n'ont aucun facteur premier commun ; ici $216 = 2^3 \\times 3^3$ a 16 diviseurs.",
         "12 n'a que 5 diviseurs positifs.",
         "Il fallait additionner : 216 a $6 + 6 = 12$ diviseurs."
        ],
        "indice": "Décompose 216 en facteurs premiers : ses diviseurs positifs sont les $2^a \\times 3^b$, avec quels exposants ?",
        "explication": "$12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$ ont les facteurs premiers 2 et 3 en commun. $216 = 2^3 \\times 3^3$ a $(3 + 1)(3 + 1) = 16$ diviseurs. Le nombre de diviseurs d'un produit est le produit des nombres de diviseurs seulement si les facteurs n'ont aucun premier commun (exemple : $36 = 4 \\times 9$ a $3 \\times 3 = 9$ diviseurs).",
        "retenir": "Le nombre de diviseurs se calcule sur la décomposition en facteurs premiers du produit, jamais en multipliant à l'aveugle.",
        "id": "c3s-s2-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier naturel $n$, le nombre $n^2 + n + 1$ n'est pas divisible par 5. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Raisonne selon le reste de $n$ dans la division par 5.",
        "explication": "Vrai. Si $n = 5q + r$, alors $n^2 + n + 1 = 5(5q^2 + 2qr + q) + r^2 + r + 1$. Pour $r = 0, 1, 2, 3, 4$, $r^2 + r + 1$ vaut $1, 3, 7, 13, 21$, de restes $1, 3, 2, 3, 1$ : jamais 0. Donc 5 ne divise jamais $n^2 + n + 1$.",
        "retenir": "Pour montrer qu'une expression n'est jamais divisible par $m$, examiner les $m$ restes possibles de $n$.",
        "id": "c3s-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout nombre premier $p$, le nombre $p^2 + 2$ n'est pas premier. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste les plus petits nombres premiers.",
        "explication": "Faux. Pour $p = 3$, $p^2 + 2 = 11$ est premier. En revanche, pour tout premier $p \\neq 3$, $p$ a pour reste 1 ou 2 dans la division par 3, $p^2$ a pour reste 1, donc $p^2 + 2$ est un multiple de 3 supérieur à 3 : il n'est pas premier. Le seul cas $p = 3$ rend la proposition fausse.",
        "retenir": "Avant de démontrer une propriété des nombres premiers, tester 2 et 3 : ce sont les cas limites.",
        "id": "c3s-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Il existe une infinité d'entiers naturels $n$ tels que $n$, $n + 2$ et $n + 4$ soient tous trois premiers. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Regarde les restes de $n$, $n + 2$ et $n + 4$ dans la division par 3.",
        "explication": "Faux. Si $n$ a pour reste 0, 1 ou 2 dans la division par 3, alors respectivement $n$, $n + 2$ ou $n + 4$ est multiple de 3. Pour que les trois soient premiers, ce multiple de 3 doit valoir 3 : $n = 3$, ou $n + 2 = 3$ (alors $n = 1$, non premier), ou $n + 4 = 3$ (impossible). Seul le triplet $(3, 5, 7)$ convient.",
        "retenir": "Pour nier « il existe une infinité de… », il faut une preuve générale (ici par les restes) : un exemple ne suffit pas.",
        "id": "c3s-b0-2"
       }
      ]
     }
    ]
   }
  }
 },
 {
  "niveau": "Semaine 4",
  "titre": "Suites (1)",
  "introduction": "Zénon soutenait qu'Achille ne rattraperait jamais la tortue ; une suite bien posée dit à quelle seconde il la dépasse. Une suite, c'est le temps découpé en pas : regarde d'abord comment l'on passe d'un terme au suivant. Ajouter toujours le même nombre, c'est la marche arithmétique ; multiplier toujours par le même nombre, c'est la croissance géométrique ; bien des suites plus rebelles se ramènent à l'une ou à l'autre.",
  "conclusion": "Emporte trois réflexes : reconnaître $u_{n+1} = u_n + r$ ou $u_{n+1} = q\\,u_n$, compter les termes avant de sommer, lire une boucle de seuil tour par tour. Une suite définie par récurrence n'est pas encore une démonstration par récurrence : ce raisonnement-là t'attend plus loin sur le chemin.",
  "salles": [
   {
    "nom": "La course d'Achille",
    "fond": "crepuscule",
    "athena": "Une suite arithmétique avance d'un pas constant : repère ce pas $r$, et le terme général s'écrit tout seul, $u_n = u_0 + nr$.",
    "notion": "Suites arithmétiques",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.............D............#",
     "#............###...........#",
     "#........................A.#",
     "#................###....####",
     "#..........................#",
     "#............###.....##....S",
     "#J.G..T...............T....S",
     "#########...################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "De la récurrence à la formule",
        "enonce": "La suite $(u_n)$ est définie par $u_0 = -4$ et, pour tout entier naturel $n$, $u_{n+1} = u_n + 3$. Entrer $u_{100}$.",
        "reponse": 296,
        "indice": "On ajoute toujours le même nombre : la suite est arithmétique. Inutile de calculer les cent termes un par un.",
        "explication": "Pour tout $n$, $u_{n+1} - u_n = 3$ : la suite est arithmétique de raison $3$ et de premier terme $u_0 = -4$. Donc $u_n = -4 + 3n$ pour tout $n$, et $u_{100} = -4 + 300 = 296$.",
        "retenir": "$u_{n+1} = u_n + r$ pour tout $n$ : suite arithmétique, et alors $u_n = u_0 + nr$ (forme explicite).",
        "id": "c4r1-s0-0"
       },
       {
        "titre": "Deux termes connus",
        "enonce": "La suite $(u_n)$ est arithmétique, avec $u_4 = 11$ et $u_{10} = 32$. Entrer $u_0$.",
        "reponse": -3,
        "indice": "Entre $u_4$ et $u_{10}$, il y a $10 - 4 = 6$ pas de raison $r$.",
        "explication": "$u_{10} - u_4 = 6r$, donc $6r = 21$ et $r = 3{,}5$. Puis $u_0 = u_4 - 4r = 11 - 14 = -3$.",
        "retenir": "Pour une suite arithmétique, $u_n - u_p = (n - p)\\,r$ : deux termes quelconques suffisent pour trouver la raison.",
        "id": "c4r1-s0-1"
       },
       {
        "titre": "Compter les termes",
        "enonce": "La suite $(u_n)_{n \\geqslant 1}$ est arithmétique, de premier terme $u_1 = 5$ et de raison $4$. Entrer le nombre de termes de cette suite compris, au sens large, entre 100 et 2027.",
        "reponse": 482,
        "indice": "Écris $u_n$ en fonction de $n$ (attention : le premier terme est $u_1$), puis encadre $n$.",
        "explication": "$u_n = 5 + 4(n - 1) = 4n + 1$. On veut $100 \\leqslant 4n + 1 \\leqslant 2027$, soit $24{,}75 \\leqslant n \\leqslant 506{,}5$, c'est-à-dire $25 \\leqslant n \\leqslant 506$ pour $n$ entier. Cela fait $506 - 25 + 1 = 482$ termes, de $u_{25} = 101$ à $u_{506} = 2025$.",
        "retenir": "Il y a $q - p + 1$ entiers de $p$ à $q$ inclus : le « $+1$ » des piquets et des intervalles.",
        "id": "c4r1-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Reconnaître une suite arithmétique",
        "enonce": "Laquelle de ces suites, définies pour tout entier naturel $n$, est arithmétique ?",
        "reponse": 3,
        "choix": [
         "$u_n = n^2 + 3$",
         "$u_0 = 1$ et $u_{n+1} = u_n + n$",
         "$u_n = 7 - 4n$",
         "$u_0 = 1$ et $u_{n+1} = 3u_n$"
        ],
        "indice": "Calcule $u_{n+1} - u_n$ dans chaque cas : il doit être un nombre qui ne dépend pas de $n$.",
        "explication": "Pour $u_n = 7 - 4n$, $u_{n+1} - u_n = -4$ pour tout $n$ : suite arithmétique de raison $-4$. Pour $u_n = n^2 + 3$, l'écart vaut $2n + 1$ ; pour $u_{n+1} = u_n + n$, il vaut $n$ : ces écarts dépendent de $n$. La suite $u_{n+1} = 3u_n$ est géométrique.",
        "retenir": "Arithmétique : il existe un réel $r$ tel que, pour tout $n$, $u_{n+1} = u_n + r$. La raison ne dépend pas de $n$ : « ajouter $n$ » n'est pas « ajouter une constante ».",
        "id": "c4r1-s1-0"
       },
       {
        "titre": "Le prix du forage",
        "enonce": "Pour creuser un puits à Petite-Terre, le premier mètre coûte 50 € et chaque mètre coûte 8 € de plus que le précédent. Entrer le prix du 20e mètre, en euros.",
        "reponse": 202,
        "unite": "€",
        "indice": "Note $p_1 = 50$ le prix du premier mètre. Combien de hausses de 8 € y a-t-il entre le 1er et le 20e mètre ?",
        "explication": "Les prix forment une suite arithmétique de premier terme $p_1 = 50$ et de raison $8$, donc $p_n = 50 + 8(n - 1)$. Ainsi $p_{20} = 50 + 19 \\times 8 = 202$ €. Le piège : $50 + 20 \\times 8 = 210$ compte une hausse de trop.",
        "retenir": "Si le premier terme est $u_1$, alors $u_n = u_1 + (n - 1)\\,r$ : il y a $n - 1$ pas entre le premier et le $n$-ième terme.",
        "id": "c4r1-s1-1"
       },
       {
        "titre": "La course d'Achille",
        "enonce": "Achille court à 10 m/s ; la tortue avance à 1 m/s, mais part avec 100 m d'avance. Le programme Python suivant suit leurs positions seconde après seconde. Entrer la valeur affichée.\n\n```\na = 0\nt = 100\nn = 0\nwhile a < t:\n    a = a + 10\n    t = t + 1\n    n = n + 1\nprint(n)\n```",
        "reponse": 12,
        "indice": "Après $n$ tours de boucle, $a = 10n$ et $t = 100 + n$. La boucle s'arrête dès que $a \\geqslant t$.",
        "explication": "Les positions forment deux suites arithmétiques : $a_n = 10n$ et $t_n = 100 + n$. La boucle tourne tant que $10n < 100 + n$, c'est-à-dire $n < \\frac{100}{9} \\approx 11{,}1$. Elle s'arrête au premier $n$ tel que $10n \\geqslant 100 + n$, soit $n = 12$ (alors $a = 120$ et $t = 112$) : le programme affiche 12.",
        "retenir": "Une boucle « while » s'arrête au premier rang où sa condition devient fausse : le programme affiche ce rang, le plus petit qui convient.",
        "id": "c4r1-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $(u_n)$ et $(v_n)$ sont deux suites arithmétiques, alors la suite $(u_n v_n)$ est arithmétique. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Essaie avec $u_n = v_n = n$.",
        "explication": "Faux. Contre-exemple : $u_n = v_n = n$ définissent deux suites arithmétiques (de raison 1), mais $u_n v_n = n^2$ donne $0, 1, 4$ : les écarts $1$ et $3$ ne sont pas égaux.",
        "retenir": "La somme de deux suites arithmétiques est arithmétique (raison $r + r'$) ; leur produit, en général, ne l'est pas.",
        "id": "c4r1-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Trois réels $a$, $b$, $c$ sont, dans cet ordre, trois termes consécutifs d'une suite arithmétique si et seulement si $2b = a + c$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Traduis « consécutifs » : $b - a = c - b$.",
        "explication": "Vrai. S'ils sont consécutifs, $b - a = c - b = r$, d'où $2b = a + c$. Réciproquement, si $2b = a + c$, alors $b - a = c - b$ ; avec $r = b - a$, la suite définie par $u_n = a + nr$ est arithmétique et $u_0 = a$, $u_1 = b$, $u_2 = c$.",
        "retenir": "Dans une suite arithmétique, chaque terme est la moyenne de ses deux voisins : $u_n = \\frac{u_{n-1} + u_{n+1}}{2}$.",
        "id": "c4r1-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $(u_n)$ est une suite arithmétique, alors la suite $(u_{2n})$, formée de ses termes de rang pair, est arithmétique. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $u_{2n}$ à l'aide de $u_0$, de la raison $r$ et de $n$.",
        "explication": "Vrai. Si $u_n = u_0 + nr$ pour tout $n$, alors $u_{2n} = u_0 + 2nr = u_0 + n(2r)$ : la suite $(u_{2n})$ est arithmétique, de premier terme $u_0$ et de raison $2r$.",
        "retenir": "Les termes de rang pair d'une suite arithmétique de raison $r$ forment une suite arithmétique de raison $2r$.",
        "id": "c4r1-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le fleuve d'Héraclite",
    "fond": "nuit",
    "athena": "Une suite géométrique se multiplie à chaque pas par le même facteur $q$ : cherche le quotient de deux termes consécutifs, pas leur différence.",
    "notion": "Suites géométriques",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.......................A..#",
     "#......................###.#",
     "#..........................#",
     "#..................###.....S",
     "#J.G..T..........T.........S",
     "#########PPPPPP#############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Doubler à chaque pas",
        "enonce": "La suite $(v_n)$ est définie par $v_0 = 3$ et, pour tout entier naturel $n$, $v_{n+1} = 2v_n$. Entrer $v_6$.",
        "reponse": 192,
        "indice": "On multiplie toujours par le même nombre : la suite est géométrique, et $v_n = v_0 \\times q^n$.",
        "explication": "Pour tout $n$, $v_{n+1} = 2v_n$ : la suite $(v_n)$ est géométrique de raison $2$ et de premier terme $3$. Donc $v_n = 3 \\times 2^n$ et $v_6 = 3 \\times 64 = 192$.",
        "retenir": "$v_{n+1} = q\\,v_n$ pour tout $n$ : suite géométrique, et alors $v_n = v_0\\,q^n$.",
        "id": "c4r2-s0-0"
       },
       {
        "titre": "Retrouver le premier terme",
        "enonce": "La suite $(w_n)$ est géométrique, à termes strictement positifs, avec $w_3 = 5$ et $w_5 = 45$. Entrer $w_0$, sous forme de fraction.",
        "reponse": 0.18518518518518517,
        "indice": "$w_5 = w_3 \\times q^2$. Quelle valeur de $q$ faut-il garder ?",
        "explication": "$q^2 = \\frac{45}{5} = 9$, donc $q = 3$ ou $q = -3$. Les termes étant positifs, $q = 3$ (avec $q = -3$, on aurait $w_4 = -15$). Puis $w_0 = \\frac{w_3}{q^3} = \\frac{5}{27}$.",
        "retenir": "Pour une suite géométrique, $w_n = w_p\\,q^{n-p}$. Si l'on obtient $q^2$, les hypothèses servent à choisir le signe de $q$.",
        "id": "c4r2-s0-1"
       },
       {
        "titre": "Trois termes en progression",
        "enonce": "Trois réels $a$, $b$, $c$ sont, dans cet ordre, trois termes consécutifs d'une suite géométrique. Leur produit vaut 216 et leur somme vaut 21. Entrer $b$.",
        "reponse": 6,
        "indice": "Avec la raison $q$, on a $a = \\frac{b}{q}$ et $c = bq$. Que vaut le produit $abc$ ?",
        "explication": "Comme $a = \\frac{b}{q}$ et $c = bq$, on a $ac = b^2$, donc $abc = b^3 = 216$ et $b = 6$. La somme n'est pas utile pour $b$ : elle donne $a + c = 15$ et $ac = 36$, d'où les nombres $3, 6, 12$ (ou $12, 6, 3$).",
        "retenir": "Trois termes consécutifs d'une suite géométrique vérifient $b^2 = ac$ : le terme du milieu est, au signe près, la moyenne géométrique de ses voisins.",
        "effet": "passerelle",
        "id": "c4r2-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Intérêts composés",
        "enonce": "On place 1 000 € à intérêts composés au taux annuel de 3 %. On note $C_n$ le capital, en euros, au bout de $n$ années. Entrer $C_2$.",
        "reponse": 1060.9,
        "unite": "€",
        "indice": "Chaque année, le capital est multiplié par $1{,}03$.",
        "explication": "$C_{n+1} = 1{,}03\\,C_n$ : la suite $(C_n)$ est géométrique de raison $1{,}03$, et $C_n = 1000 \\times 1{,}03^n$. Donc $C_2 = 1000 \\times 1{,}0609 = 1060{,}90$ €.",
        "retenir": "Une évolution de $t\\,\\%$ par période se modélise par une suite géométrique de raison $1 + \\frac{t}{100}$.",
        "id": "c4r2-s1-0"
       },
       {
        "titre": "Le taux annuel",
        "enonce": "La population d'un village de Petite-Terre a augmenté de 21 % en deux ans, avec le même taux d'évolution chaque année. Entrer ce taux annuel, en pourcentage.",
        "reponse": 10,
        "unite": "%",
        "indice": "Cherche le coefficient multiplicateur annuel $q$ tel que $q^2 = 1{,}21$.",
        "explication": "Si $q$ est le coefficient multiplicateur annuel, $q^2 = 1{,}21$, donc $q = 1{,}1$ (car $q > 0$). Le taux annuel est de 10 %, et non de 10,5 % : les taux ne se partagent pas, les coefficients se multiplient.",
        "retenir": "Taux moyen sur $n$ périodes : le coefficient $q$ vérifie $q^n = 1 + t$ ; ce n'est pas le taux $\\frac{t}{n}$.",
        "id": "c4r2-s1-1"
       },
       {
        "titre": "Le capital double",
        "enonce": "Le programme Python suivant modélise un capital placé à 5 % par an. Entrer la valeur affichée.\n\n```\nu = 1000\nn = 0\nwhile u < 2000:\n    u = u * 1.05\n    n = n + 1\nprint(n)\n```",
        "reponse": 15,
        "indice": "Le programme cherche le plus petit entier $n$ tel que $1000 \\times 1{,}05^n \\geqslant 2000$. Teste $n = 14$ et $n = 15$ à la calculatrice.",
        "explication": "Après $n$ tours de boucle, $u = 1000 \\times 1{,}05^n$. La boucle s'arrête au premier $n$ tel que $1{,}05^n \\geqslant 2$. Or $1{,}05^{14} \\approx 1{,}980 < 2$ et $1{,}05^{15} \\approx 2{,}079 \\geqslant 2$ : le programme affiche 15. Le capital double en 15 ans.",
        "retenir": "Algorithme de seuil : $n$ compte les tours de boucle ; à la sortie, $n$ est le premier rang où la condition du « while » est fausse.",
        "id": "c4r2-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $(u_n)$ est une suite géométrique de raison $q > 1$, alors $(u_n)$ est croissante. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Le signe du premier terme compte.",
        "explication": "Faux. Contre-exemple : $u_0 = -1$ et $q = 2$ donnent $-1, -2, -4, \\dots$ : la suite est décroissante. En effet, $u_{n+1} - u_n = u_0\\,q^n(q - 1)$ a le signe de $u_0$ lorsque $q > 1$.",
        "retenir": "Sens de variation d'une suite géométrique de raison $q > 0$ : c'est le signe de $u_0(q - 1)$. Ne pas oublier le signe du premier terme.",
        "id": "c4r2-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $(u_n)$ et $(v_n)$ sont deux suites géométriques, alors la suite $(u_n v_n)$ est géométrique. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $u_{n+1}v_{n+1}$ en fonction de $u_n v_n$.",
        "explication": "Vrai. Si $u_{n+1} = q\\,u_n$ et $v_{n+1} = q'\\,v_n$ pour tout $n$, alors $u_{n+1}v_{n+1} = (qq')\\,u_n v_n$ pour tout $n$ : la suite produit est géométrique de raison $qq'$.",
        "retenir": "Le produit de deux suites géométriques est géométrique (raison $qq'$) ; leur somme, en général, ne l'est pas.",
        "id": "c4r2-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $(u_n)$ est une suite géométrique, alors la suite des écarts $(u_{n+1} - u_n)$ est géométrique. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Factorise $u_{n+1} - u_n$ en écrivant $u_n = u_0\\,q^n$.",
        "explication": "Vrai. Si $u_n = u_0\\,q^n$ pour tout $n$, alors $w_n = u_{n+1} - u_n = u_0(q - 1)\\,q^n$, donc $w_{n+1} = q\\,w_n$ pour tout $n$ : la suite des écarts est géométrique de raison $q$ et de premier terme $u_0(q - 1)$ (c'est la suite nulle si $q = 1$, qui est bien géométrique).",
        "retenir": "Les écarts d'une suite géométrique de raison $q$ forment une suite géométrique de même raison $q$.",
        "id": "c4r2-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Les atomes de Démocrite",
    "fond": "temple",
    "athena": "Pour savoir si une suite monte ou descend, étudie le signe de $u_{n+1} - u_n$ ; si ses termes sont positifs, tu peux aussi comparer $\\frac{u_{n+1}}{u_n}$ à 1.",
    "notion": "Sens de variation d'une suite",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#............A.............#",
     "#...........###............#",
     "#..........................#",
     "#........###...............S",
     "#J.G.T........H........R...S",
     "###############........#####"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Une suite définie par récurrence",
        "enonce": "La suite $(u_n)$ est définie par $u_0 = 5$ et, pour tout entier naturel $n$, $u_{n+1} = u_n - n^2 - 1$. Quel est son sens de variation ?",
        "reponse": 2,
        "choix": [
         "Elle est strictement croissante.",
         "Elle est strictement décroissante.",
         "Elle n'est ni croissante ni décroissante.",
         "On ne peut pas conclure sans exprimer $u_n$ en fonction de $n$."
        ],
        "indice": "Calcule $u_{n+1} - u_n$ : son signe suffit, nul besoin d'une formule explicite.",
        "explication": "Pour tout $n$, $u_{n+1} - u_n = -(n^2 + 1) < 0$. La suite est donc strictement décroissante, sans qu'il soit nécessaire de connaître $u_n$ en fonction de $n$.",
        "retenir": "Sens de variation : étudier le signe de $u_{n+1} - u_n$ pour tout $n$. Une relation de récurrence le donne souvent directement.",
        "id": "c4r3-s0-0"
       },
       {
        "titre": "Le plus petit terme",
        "enonce": "Pour tout entier naturel $n$, on pose $u_n = n^2 - 9n$. Entrer le plus petit terme de la suite $(u_n)$.",
        "reponse": -20,
        "indice": "Étudie le signe de $u_{n+1} - u_n$. Attention : le minimum de la fonction $x \\mapsto x^2 - 9x$ n'est pas atteint en un entier.",
        "explication": "$u_{n+1} - u_n = (n+1)^2 - 9(n+1) - n^2 + 9n = 2n - 8$ : négatif pour $n < 4$, nul pour $n = 4$, positif ensuite. La suite décroît jusqu'à $u_4 = u_5 = -20$, puis croît. Le plus petit terme est $-20$, et non $-20{,}25$, minimum de $x^2 - 9x$ atteint en $4{,}5$, qui n'est pas un entier.",
        "retenir": "Les termes $u_n = f(n)$ ne « voient » $f$ qu'aux entiers : le minimum de $f$ sur $\\mathbb{R}$ n'est pas forcément un terme de la suite.",
        "id": "c4r3-s0-1"
       },
       {
        "titre": "Le plus grand terme",
        "enonce": "Pour tout entier naturel $n$, on pose $u_n = \\frac{3^n}{n!}$, où $n! = 1 \\times 2 \\times \\cdots \\times n$ et $0! = 1$. Ces termes sont strictement positifs. Entrer le plus grand terme de la suite, sous forme de fraction ou de décimal.",
        "reponse": 4.5,
        "indice": "Les termes sont positifs : compare $\\frac{u_{n+1}}{u_n}$ à 1.",
        "explication": "$\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}}{(n+1)!} \\times \\frac{n!}{3^n} = \\frac{3}{n+1}$. Ce quotient est supérieur à 1 pour $n \\leqslant 1$, égal à 1 pour $n = 2$, inférieur à 1 pour $n \\geqslant 3$. La suite croît jusqu'à $u_2 = u_3 = \\frac{9}{2}$, puis décroît : le plus grand terme est $\\frac{9}{2}$.",
        "retenir": "Suite à termes strictement positifs : $u_{n+1} \\geqslant u_n$ si et seulement si $\\frac{u_{n+1}}{u_n} \\geqslant 1$. Le quotient est plus commode avec des puissances ou des factorielles.",
        "id": "c4r3-s0-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Une suite qui n'est pas croissante est décroissante. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Une suite peut monter puis descendre, ou osciller.",
        "explication": "Faux. Contre-exemple : $u_n = (-1)^n$ donne $1, -1, 1, \\dots$ ; elle n'est ni croissante ($u_1 < u_0$) ni décroissante ($u_2 > u_1$). La négation de « croissante » est « il existe $n$ tel que $u_{n+1} < u_n$ », et non « décroissante ».",
        "retenir": "« Non croissante » ne veut pas dire « décroissante » : une suite peut n'être ni l'une ni l'autre.",
        "id": "c4r3-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $f$ une fonction définie sur $[0\\,;+\\infty[$. Si la suite définie par $u_n = f(n)$ est croissante, alors $f$ est croissante sur $[0\\,;+\\infty[$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "La suite ne voit $f$ qu'aux entiers. Entre $0$ et $1$, $f$ peut descendre.",
        "explication": "Faux. Contre-exemple : $f(x) = \\left(x - \\frac{1}{3}\\right)^2$. La suite $u_n = f(n)$ est croissante, car $f(0) = \\frac{1}{9} < f(1) = \\frac{4}{9}$ et $f$ est croissante sur $\\left[\\frac{1}{3}\\,;+\\infty\\right[$ ; pourtant $f$ est décroissante sur $\\left[0\\,;\\frac{1}{3}\\right]$.",
        "retenir": "Si $f$ est croissante sur $[0\\,;+\\infty[$, alors la suite $(f(n))$ est croissante ; la réciproque est fausse.",
        "id": "c4r3-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Une suite géométrique de raison $q$, avec $0 < q < 1$, et de premier terme $u_0 < 0$ est croissante. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Factorise $u_{n+1} - u_n$ et étudie le signe de chaque facteur.",
        "explication": "Vrai. Pour tout $n$, $u_{n+1} - u_n = u_0\\,q^n\\,(q - 1)$. Or $u_0 < 0$, $q^n > 0$ et $q - 1 < 0$ : ce produit est strictement positif. La suite est même strictement croissante, par exemple $-8, -4, -2, -1, \\dots$ pour $u_0 = -8$ et $q = \\frac{1}{2}$.",
        "retenir": "Une suite géométrique de raison $q$ entre 0 et 1 se rapproche de 0 : elle décroît si $u_0 > 0$, elle croît si $u_0 < 0$.",
        "id": "c4r3-b0-2"
       }
      ]
     }
    ],
    "acrobaties": [
     {
      "titre": "Une démonstration trop rapide",
      "enonce": "La suite $(u_n)$ est définie par $u_0 = 2$ et, pour tout entier naturel $n$, $u_{n+1} = f(u_n)$, où $f(x) = \\frac{1}{2}x + 3$. Un élève écrit : « La fonction $f$ est croissante, donc la suite $(u_n)$ est croissante. » Que penser de sa réponse ?",
      "reponse": 4,
      "choix": [
       "Le raisonnement et la conclusion sont corrects.",
       "La conclusion est fausse : la suite est décroissante.",
       "La conclusion est fausse : la suite n'est pas monotone.",
       "La conclusion est vraie, mais l'argument ne suffit pas : avec la même fonction $f$ et $u_0 = 8$, la suite décroît."
      ],
      "indice": "Calcule quelques termes avec $u_0 = 2$, puis avec $u_0 = 8$.",
      "explication": "Avec $u_0 = 2$ : $u_1 = 4$, $u_2 = 5$, $u_3 = 5{,}5$. La conclusion est vraie : $v_n = u_n - 6$ définit une suite géométrique de raison $\\frac{1}{2}$, d'où $u_n = 6 - 4 \\times 0{,}5^n$ et $u_{n+1} - u_n = 2 \\times 0{,}5^n > 0$. Mais l'argument ne suffit pas : avec la même fonction $f$ et $u_0 = 8$, on obtient $8, 7, 6{,}5, \\dots$, qui décroît. Pour une suite définie par récurrence, $u_{n+1} = f(u_n)$ avec $f$ croissante, le sens de variation se lit en comparant $u_0$ et $u_1$ ; ce résultat général se démontre par un raisonnement par récurrence, vu en Terminale.",
      "retenir": "Pour $u_{n+1} = f(u_n)$, « $f$ croissante » ne donne pas, à lui seul, le sens de variation : il faut aussi comparer $u_0$ et $u_1$.",
      "id": "c4r3-h0",
      "figure": "salto"
     }
    ]
   },
   {
    "nom": "Les Pensées de Marc Aurèle",
    "fond": "jardin",
    "athena": "Avant de sommer, compte les termes. Une somme arithmétique vaut le nombre de termes fois la moyenne du premier et du dernier.",
    "notion": "Sommes de termes",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#............A.............#",
     "#...........###............#",
     "#........T.................#",
     "#.......###................#",
     "#..........................#",
     "#.....##...................S",
     "#J.G.T.....................S",
     "################...#########"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "La somme de Gauss",
        "enonce": "On pose $S = 1 + 2 + 3 + \\cdots + 200$. Entrer $S$.",
        "reponse": 20100,
        "indice": "Écris la somme à l'endroit puis à l'envers, et additionne terme à terme.",
        "explication": "$1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$, donc $S = \\frac{200 \\times 201}{2} = 20\\,100$. On le voit en écrivant $2S = (1 + 200) + (2 + 199) + \\cdots + (200 + 1) = 200 \\times 201$.",
        "retenir": "$1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$ : à savoir redémontrer en écrivant la somme dans les deux sens.",
        "id": "c4r4-s0-0"
       },
       {
        "titre": "Compter avant de sommer",
        "enonce": "On pose $S = 7 + 11 + 15 + \\cdots + 203$, somme de termes consécutifs d'une suite arithmétique. Entrer $S$.",
        "reponse": 5250,
        "indice": "Combien y a-t-il de termes ? Pour quel entier $k$ a-t-on $203 = 7 + 4k$ ?",
        "explication": "Les termes s'écrivent $7 + 4k$ et $203 = 7 + 4 \\times 49$ : $k$ va de $0$ à $49$, soit 50 termes. Donc $S = 50 \\times \\frac{7 + 203}{2} = 50 \\times 105 = 5250$.",
        "retenir": "Somme de termes consécutifs d'une suite arithmétique : nombre de termes $\\times \\frac{\\text{premier} + \\text{dernier}}{2}$.",
        "id": "c4r4-s0-1"
       },
       {
        "titre": "La pyramide de gobelets",
        "enonce": "Des élèves du collège de Mamoudzou disposent de 2 027 gobelets pour bâtir une pyramide : 1 gobelet sur la rangée du haut, 2 sur la suivante, 3 sur la suivante, et ainsi de suite, chaque rangée étant complète. Entrer le nombre maximal de rangées.",
        "reponse": 63,
        "indice": "Avec $n$ rangées, il faut $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$ gobelets. Cherche le plus grand $n$ tel que $n(n+1) \\leqslant 4054$.",
        "explication": "Il faut $\\frac{n(n+1)}{2} \\leqslant 2027$, soit $n(n+1) \\leqslant 4054$. Comme $63 \\times 64 = 4032 \\leqslant 4054$ et $64 \\times 65 = 4160 > 4054$, on obtient $n = 63$ : la pyramide utilise $2016$ gobelets et il en reste $11$.",
        "retenir": "Un seuil sur une somme $\\frac{n(n+1)}{2}$ mène à une inéquation du second degré ; on conclut en testant deux entiers consécutifs.",
        "id": "c4r4-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Les puissances de 2",
        "enonce": "On pose $S = 1 + 2 + 2^2 + \\cdots + 2^{10}$. Entrer $S$.",
        "reponse": 2047,
        "indice": "Utilise $1 + q + \\cdots + q^n = \\frac{q^{n+1} - 1}{q - 1}$ avec $q = 2$. Combien y a-t-il de termes ?",
        "explication": "Avec $q = 2$ et $n = 10$, soit 11 termes : $S = \\frac{2^{11} - 1}{2 - 1} = 2048 - 1 = 2047$.",
        "retenir": "Pour $q \\neq 1$, $1 + q + \\cdots + q^n = \\frac{1 - q^{n+1}}{1 - q}$ : il y a $n + 1$ termes, d'où l'exposant $n + 1$.",
        "id": "c4r4-s1-0"
       },
       {
        "titre": "Des signes alternés",
        "enonce": "On pose $S = 1 - 2 + 4 - 8 + \\cdots + 1024$, dont les termes sont les puissances successives de $-2$, de $(-2)^0$ à $(-2)^{10}$. Entrer $S$.",
        "reponse": 683,
        "indice": "C'est la somme $1 + q + \\cdots + q^{10}$ avec $q = -2$.",
        "explication": "$S = \\frac{1 - (-2)^{11}}{1 - (-2)} = \\frac{1 + 2048}{3} = \\frac{2049}{3} = 683$. Attention au signe : $(-2)^{11} = -2048$, car l'exposant est impair.",
        "retenir": "La formule $\\frac{1 - q^{n+1}}{1 - q}$ vaut pour tout $q \\neq 1$, négatif compris : surveiller la parité de l'exposant.",
        "id": "c4r4-s1-1"
       },
       {
        "titre": "Versements réguliers",
        "enonce": "Chaque 1er janvier, de 2027 à 2036, on verse 1 000 € sur un compte rémunéré à 2 % par an (intérêts composés, versés chaque 31 décembre). Entrer le capital disponible juste après le versement de 2036, en euros, arrondi au centime.",
        "reponse": 10949.72,
        "tolerance": 0.005,
        "unite": "€",
        "indice": "Le versement de 2027 a rapporté des intérêts pendant 9 ans, celui de 2028 pendant 8 ans… et celui de 2036 pendant 0 an.",
        "explication": "Juste après le versement de 2036, le capital vaut $1000\\,(1 + 1{,}02 + \\cdots + 1{,}02^9) = 1000 \\times \\frac{1{,}02^{10} - 1}{0{,}02} \\approx 10\\,949{,}72$ €. Il y a 10 versements, donc 10 termes, de $1{,}02^0$ à $1{,}02^9$.",
        "retenir": "Des versements réguliers capitalisés conduisent à une somme géométrique : repérer avec soin le premier et le dernier exposant.",
        "id": "c4r4-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier $n \\geqslant 1$, $1 + 3 + 5 + \\cdots + (2n - 1) = n^2$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "C'est la somme de $n$ termes consécutifs d'une suite arithmétique de raison 2.",
        "explication": "Vrai. Les $n$ nombres impairs de $1$ à $2n - 1$ sont des termes consécutifs d'une suite arithmétique de raison 2. Leur somme vaut $n \\times \\frac{1 + (2n - 1)}{2} = n \\times n = n^2$.",
        "retenir": "La somme des $n$ premiers entiers impairs vaut $n^2$ : les carrés emboîtés des pythagoriciens.",
        "id": "c4r4-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $q$ et tout entier naturel $n$, $1 + q + q^2 + \\cdots + q^n = \\frac{1 - q^{n+1}}{1 - q}$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Un cas limite rend la formule inutilisable.",
        "explication": "Faux. Pour $q = 1$, le membre de droite n'est pas défini (division par $0$), alors que la somme vaut $1 + 1 + \\cdots + 1 = n + 1$. La formule n'est valable que pour $q \\neq 1$.",
        "retenir": "Somme géométrique : traiter à part le cas $q = 1$, où $1 + q + \\cdots + q^n = n + 1$.",
        "id": "c4r4-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier $n \\geqslant 1$, $\\sum_{k=1}^{n} (2k + 1) = 2\\sum_{k=1}^{n} k + 1$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste $n = 2$. Combien de fois le $1$ est-il ajouté ?",
        "explication": "Faux. Contre-exemple : pour $n = 2$, le membre de gauche vaut $3 + 5 = 8$ et celui de droite $2 \\times 3 + 1 = 7$. En fait, $\\sum_{k=1}^{n} (2k + 1) = 2\\sum_{k=1}^{n} k + \\sum_{k=1}^{n} 1 = n(n+1) + n$ : la constante est ajoutée $n$ fois.",
        "retenir": "Linéarité : $\\sum_{k=1}^{n} (a\\,u_k + b) = a\\sum_{k=1}^{n} u_k + nb$. La constante compte autant de fois qu'il y a de termes.",
        "id": "c4r4-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Les lettres de Sénèque",
    "fond": "mer",
    "athena": "Modéliser, c'est traduire une phrase en relation de récurrence ; une suite auxiliaire bien choisie rend ensuite la suite explicite.",
    "notion": "Problème : modélisation par une suite, seuil, algorithme",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#........................A.#",
     "#.......................####",
     "#..........................#",
     "#......##.............##...S",
     "#J.G...##........T.........S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Premiers termes",
        "enonce": "Entrer $u_2$.",
        "reponse": 1570,
        "indice": "Calcule d'abord $u_1$ avec la relation de récurrence.",
        "explication": "$u_1 = 0{,}9 \\times 1000 + 400 = 1300$, puis $u_2 = 0{,}9 \\times 1300 + 400 = 1170 + 400 = 1570$.",
        "retenir": "Une suite définie par récurrence se calcule de proche en proche : chaque terme exige le précédent.",
        "id": "c4b-s0-0"
       },
       {
        "titre": "Arithmétique ou géométrique ?",
        "enonce": "La suite $(u_n)$ est-elle arithmétique ou géométrique ? On rappelle que $u_0 = 1000$, $u_1 = 1300$ et $u_2 = 1570$.",
        "reponse": 1,
        "choix": [
         "Ni arithmétique ni géométrique.",
         "Arithmétique de raison 300.",
         "Géométrique de raison $1{,}3$.",
         "À la fois arithmétique et géométrique."
        ],
        "indice": "Compare $u_1 - u_0$ et $u_2 - u_1$, puis $\\frac{u_1}{u_0}$ et $\\frac{u_2}{u_1}$.",
        "explication": "$u_1 - u_0 = 300$ mais $u_2 - u_1 = 270$ : la suite n'est pas arithmétique. $\\frac{u_1}{u_0} = 1{,}3$ mais $\\frac{u_2}{u_1} = \\frac{1570}{1300} \\approx 1{,}21$ : elle n'est pas géométrique. Trois termes suffisent pour le prouver ; ils ne suffiraient pas, en revanche, pour prouver qu'une suite est arithmétique.",
        "retenir": "Pour montrer qu'une suite n'est pas arithmétique (ou géométrique), trois termes consécutifs suffisent ; pour montrer qu'elle l'est, il faut un calcul valable pour tout $n$.",
        "id": "c4b-s0-1"
       },
       {
        "titre": "La suite auxiliaire",
        "enonce": "On pose, pour tout entier naturel $n$, $v_n = u_n - 4000$. Démontrer que la suite $(v_n)$ est géométrique, en déduire $u_n$ en fonction de $n$, puis entrer $u_{10}$ arrondi à l'unité.",
        "reponse": 2954,
        "tolerance": 0.01,
        "indice": "Exprime $v_{n+1} = u_{n+1} - 4000$ à l'aide de $u_n$, puis fais apparaître $u_n - 4000$.",
        "explication": "$v_{n+1} = 0{,}9\\,u_n + 400 - 4000 = 0{,}9\\,u_n - 3600 = 0{,}9\\,(u_n - 4000) = 0{,}9\\,v_n$ : $(v_n)$ est géométrique de raison $0{,}9$ et de premier terme $v_0 = -3000$. Donc $v_n = -3000 \\times 0{,}9^n$ et $u_n = 4000 - 3000 \\times 0{,}9^n$. Ainsi $u_{10} = 4000 - 3000 \\times 0{,}9^{10} \\approx 2953{,}96$, soit environ 2954 palétuviers.",
        "retenir": "Méthode de la suite auxiliaire : montrer que $(v_n)$ est géométrique, écrire $v_n$ en fonction de $n$, puis revenir à $u_n$.",
        "id": "c4b-s0-2"
       },
       {
        "titre": "Le seuil",
        "enonce": "On admet que $u_n = 4000 - 3000 \\times 0{,}9^n$ pour tout $n$. On considère la fonction Python ci-dessous. Entrer la valeur renvoyée par seuil(3000).\n\n```\ndef seuil(s):\n    u = 1000\n    n = 0\n    while u < s:\n        u = 0.9 * u + 400\n        n = n + 1\n    return n\n```",
        "reponse": 11,
        "indice": "seuil(3000) renvoie le plus petit $n$ tel que $u_n \\geqslant 3000$, c'est-à-dire tel que $0{,}9^n \\leqslant \\frac{1}{3}$.",
        "explication": "La fonction renvoie le plus petit $n$ tel que $u_n \\geqslant 3000$, soit $3000 \\times 0{,}9^n \\leqslant 1000$, c'est-à-dire $0{,}9^n \\leqslant \\frac{1}{3}$. Or $0{,}9^{10} \\approx 0{,}349 > \\frac{1}{3}$ et $0{,}9^{11} \\approx 0{,}314 \\leqslant \\frac{1}{3}$ : seuil(3000) renvoie 11. La baie comptera au moins 3 000 palétuviers en 2036.",
        "retenir": "Une fonction de seuil renvoie le premier rang où la condition du « while » devient fausse ; on le retrouve en résolvant une inéquation.",
        "id": "c4b-s0-3"
       },
       {
        "titre": "Une boucle sans fin",
        "enonce": "On admet que $u_n = 4000 - 3000 \\times 0{,}9^n$ pour tout $n$. On reprend la fonction Python ci-dessous. Entrer le plus petit entier $s$ pour lequel l'appel seuil(s) ne se termine jamais.\n\n```\ndef seuil(s):\n    u = 1000\n    n = 0\n    while u < s:\n        u = 0.9 * u + 400\n        n = n + 1\n    return n\n```",
        "reponse": 4000,
        "indice": "Les termes $u_n$ peuvent-ils atteindre 4 000 ? Peuvent-ils atteindre 3 999 ?",
        "explication": "Pour tout $n$, $3000 \\times 0{,}9^n > 0$, donc $u_n < 4000$ : si $s \\geqslant 4000$, la condition $u < s$ reste vraie et la boucle ne s'arrête jamais. Si $s \\leqslant 3999$, il suffit que $3000 \\times 0{,}9^n \\leqslant 1$, ce qui arrive dès $n = 76$ : alors $u_n \\geqslant 3999 \\geqslant s$ et la boucle s'arrête. Le plus petit entier cherché est 4000.",
        "retenir": "Avant de lancer une boucle de seuil, vérifier que le seuil est atteignable : sinon le programme ne s'arrête jamais.",
        "id": "c4b-s0-4"
       }
      ],
      "boss": "Méduse la Gorgone",
      "monstre": "meduse",
      "contexte": "Une association replante la mangrove d'une baie de Mayotte. En 2025, la baie compte 1 000 jeunes palétuviers. Chaque année, 10 % des palétuviers meurent et l'association en plante 400 nouveaux. On note $u_n$ le nombre de palétuviers l'année $2025 + n$ : ainsi $u_0 = 1000$ et, pour tout entier naturel $n$, $u_{n+1} = 0{,}9\\,u_n + 400$."
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Le programme Python ci-dessous affiche 5. »\n\n```\nn = 0\ns = 0\nwhile s < 20:\n    n = n + 1\n    s = s + n\nprint(n)\n```",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris les valeurs de $n$ et de $s$ après chaque tour de boucle.",
        "explication": "Faux. Les valeurs successives de $(n, s)$ sont $(1, 1)$, $(2, 3)$, $(3, 6)$, $(4, 10)$, $(5, 15)$, $(6, 21)$. Avec $s = 15$, on a encore $s < 20$ : la boucle fait un tour de plus. Elle s'arrête à $s = 21$ et le programme affiche 6, le plus petit $n$ tel que $1 + 2 + \\cdots + n \\geqslant 20$.",
        "retenir": "Pour lire un programme, dresser le tableau des valeurs des variables tour par tour, en testant la condition au début de chaque tour.",
        "id": "c4b-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $(u_n)$ une suite telle que, pour tout entier naturel $n$, $u_{n+1} = 2u_n + 3$. Alors la suite $(u_n + 3)$ est géométrique. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule $u_{n+1} + 3$ et factorise.",
        "explication": "Vrai. Pour tout $n$, $u_{n+1} + 3 = 2u_n + 6 = 2(u_n + 3)$ : la suite $(u_n + 3)$ est géométrique de raison $2$, quel que soit $u_0$. On en déduit $u_n = (u_0 + 3) \\times 2^n - 3$.",
        "retenir": "Pour $u_{n+1} = a\\,u_n + b$ avec $a \\neq 1$, chercher le réel $\\ell$ tel que $\\ell = a\\ell + b$ (ici $\\ell = -3$) : la suite $(u_n - \\ell)$ est géométrique de raison $a$.",
        "id": "c4b-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Une suite à la fois arithmétique et géométrique est constante. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $u_{n+1}$ de deux façons, avec la raison $r$ et avec la raison $q$.",
        "explication": "Vrai. Si $u_{n+1} = u_n + r$ et $u_{n+1} = q\\,u_n$ pour tout $n$, alors $r = (q - 1)\\,u_n$ pour tout $n$. Si $q = 1$, alors $r = 0$ ; sinon, $u_n = \\frac{r}{q - 1}$ pour tout $n$. Dans les deux cas, la suite est constante.",
        "retenir": "Pour exploiter une relation vraie « pour tout $n$ », isoler $u_n$ : ici $r = (q - 1)\\,u_n$ force la suite à être constante.",
        "id": "c4b-b0-2"
       }
      ]
     }
    ]
   }
  ],
  "sanctuaire": {
   "sceauxOr": 3,
   "salle": {
    "nom": "Le sanctuaire d'Archytas",
    "fond": "sanctuaire",
    "athena": "Ici, une somme cache une équation, une récurrence cache une suite auxiliaire. Et le futur professeur doit savoir dire pourquoi une erreur en est une.",
    "notion": "Problèmes plus difficiles et regard de futur professeur",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................S",
     "#..........T...............S",
     "#.........##PPPPPPPPP#######",
     "#..A.....T##.........#######",
     "#.###...####.........#######",
     "#......T####.........#######",
     "#.....######.........#######",
     "#J.G..######.........#######",
     "############.........#######"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Somme et produit",
        "enonce": "Trois nombres sont trois termes consécutifs d'une suite arithmétique. Leur somme vaut 15 et leur produit vaut 80. Entrer le plus grand des trois.",
        "reponse": 8,
        "indice": "Note-les $b - r$, $b$, $b + r$ : la somme donne $b$ tout de suite.",
        "explication": "$(b - r) + b + (b + r) = 3b = 15$, donc $b = 5$. Puis $(5 - r) \\times 5 \\times (5 + r) = 5(25 - r^2) = 80$, d'où $r^2 = 9$ et $r = 3$ ou $r = -3$. Les nombres sont $2, 5, 8$ (ou $8, 5, 2$) : le plus grand est $8$.",
        "retenir": "Trois termes consécutifs d'une suite arithmétique : les noter $b - r$, $b$, $b + r$ ; la symétrie simplifie les calculs.",
        "id": "c4s-s0-0"
       },
       {
        "titre": "Arithmétique et géométrique",
        "enonce": "Soit $q$ un réel différent de 1. Les nombres $1$, $q$ et $q^2$ sont respectivement les termes $a_0$, $a_1$ et $a_3$ d'une suite arithmétique $(a_n)$. Entrer $q$.",
        "reponse": 2,
        "indice": "La raison de $(a_n)$ est $q - 1$. Écris $a_3$ de deux façons.",
        "explication": "La raison est $r = a_1 - a_0 = q - 1$, donc $a_3 = 1 + 3(q - 1) = 3q - 2$. On veut $q^2 = 3q - 2$, soit $q^2 - 3q + 2 = (q - 1)(q - 2) = 0$. Comme $q \\neq 1$, $q = 2$. Vérification : la suite $1, 2, 3, 4, \\dots$ convient, avec $a_3 = 4 = 2^2$.",
        "retenir": "Traduire « sont des termes d'une suite » en équations sur la raison ; un second degré apparaît souvent, avec une racine à écarter.",
        "id": "c4s-s0-1"
       },
       {
        "titre": "Combien de termes ?",
        "enonce": "On additionne les termes successifs de la suite arithmétique $5, 9, 13, 17, \\dots$ en partant du premier, et l'on obtient exactement 189. Entrer le nombre de termes additionnés.",
        "reponse": 9,
        "indice": "Le $n$-ième terme est $4n + 1$ : la somme des $n$ premiers termes vaut $n \\times \\frac{5 + (4n + 1)}{2}$.",
        "explication": "La somme des $n$ premiers termes vaut $n \\times \\frac{5 + 4n + 1}{2} = n(2n + 3)$. On résout $2n^2 + 3n - 189 = 0$ : $\\Delta = 9 + 1512 = 1521 = 39^2$, d'où $n = \\frac{-3 + 39}{4} = 9$ (l'autre racine, $-10{,}5$, est à rejeter). Vérification : $9 \\times 21 = 189$.",
        "retenir": "La somme de $n$ termes d'une suite arithmétique est un polynôme du second degré en $n$ : trouver $n$, c'est résoudre une équation du second degré.",
        "effet": "passerelle",
        "id": "c4s-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Une suite homographique",
        "enonce": "La suite $(u_n)$ est définie par $u_0 = 1$ et, pour tout entier naturel $n$, $u_{n+1} = \\frac{u_n}{1 + u_n}$. On admet que $u_n > 0$ pour tout $n$, et on pose $v_n = \\frac{1}{u_n}$. Entrer $u_{2026}$, sous forme de fraction.",
        "reponse": 0.000493339911198816,
        "indice": "Calcule $v_{n+1} = \\frac{1}{u_{n+1}}$ et simplifie : quelle est la nature de la suite $(v_n)$ ?",
        "explication": "$v_{n+1} = \\frac{1 + u_n}{u_n} = \\frac{1}{u_n} + 1 = v_n + 1$ : la suite $(v_n)$ est arithmétique de raison $1$, avec $v_0 = 1$. Donc $v_n = n + 1$ et $u_n = \\frac{1}{n + 1}$, d'où $u_{2026} = \\frac{1}{2027}$.",
        "retenir": "Une suite auxiliaire bien choisie (ici l'inverse) transforme une récurrence compliquée en suite arithmétique ou géométrique.",
        "id": "c4s-s1-0"
       },
       {
        "titre": "Une récurrence qui se télescope",
        "enonce": "La suite $(u_n)$ est définie par $u_0 = 1$ et, pour tout entier naturel $n$, $u_{n+1} = u_n + 2n + 3$. Entrer $u_{20}$.",
        "reponse": 441,
        "indice": "$u_{20} - u_0$ est la somme des écarts $u_{k+1} - u_k = 2k + 3$, pour $k$ allant de $0$ à $19$.",
        "explication": "$u_{20} = u_0 + \\sum_{k=0}^{19} (2k + 3) = 1 + 2 \\times \\frac{19 \\times 20}{2} + 3 \\times 20 = 1 + 380 + 60 = 441$. Plus généralement, $u_n = 1 + n(n - 1) + 3n = (n + 1)^2$.",
        "retenir": "Si $u_{k+1} - u_k = d_k$ pour tout $k$, alors $u_n = u_0 + \\sum_{k=0}^{n-1} d_k$ : les termes intermédiaires se télescopent.",
        "id": "c4s-s1-1"
       },
       {
        "titre": "Deux propositions de salaire",
        "enonce": "Contrat A : un salaire annuel de 30 000 € la première année, puis 1 500 € de plus chaque année. Contrat B : 30 000 € la première année, puis une hausse de 4 % par an. Entrer la valeur affichée par le programme Python ci-dessous.\n\n```\na = 30000\nb = 30000\nn = 0\nwhile b <= a:\n    a = a + 1500\n    b = b * 1.04\n    n = n + 1\nprint(n)\n```",
        "reponse": 12,
        "indice": "Le programme cherche le plus petit $n \\geqslant 1$ tel que $30\\,000 \\times 1{,}04^n > 30\\,000 + 1500n$. Compare les deux salaires pour $n = 11$ et $n = 12$.",
        "explication": "Au départ $a = b$, donc on entre dans la boucle. Après $n$ tours, $a = 30\\,000 + 1500n$ (suite arithmétique) et $b = 30\\,000 \\times 1{,}04^n$ (suite géométrique). On a $b \\leqslant a$ pour $n$ de 1 à 11 (pour $n = 11$ : $b \\approx 46\\,184$ et $a = 46\\,500$), puis, pour $n = 12$ : $b \\approx 48\\,031 > a = 48\\,000$. Le programme affiche 12.",
        "retenir": "Une suite géométrique de raison $q > 1$ et de premier terme strictement positif peut partir plus lentement, mais elle finit par dépasser une suite arithmétique.",
        "id": "c4s-s1-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Presque géométrique",
        "enonce": "Un élève affirme : « La suite définie pour tout entier naturel $n$ par $u_n = 3 \\times 2^n + 1$ est géométrique de raison 2, puisqu'on y voit $2^n$. » Quelle est la meilleure réponse du professeur ?",
        "reponse": 3,
        "choix": [
         "Il a raison : on multiplie par 2 à chaque étape.",
         "Il a raison, mais la raison est 3 et non 2.",
         "Il a tort : $u_0 = 4$, $u_1 = 7$, $u_2 = 13$ et $\\frac{7}{4} \\neq \\frac{13}{7}$ ; c'est la suite $(u_n - 1)$ qui est géométrique de raison 2.",
         "Il a tort : la suite est arithmétique de raison 3."
        ],
        "indice": "Calcule les trois premiers termes et leurs quotients successifs.",
        "explication": "$u_0 = 4$, $u_1 = 7$, $u_2 = 13$ : les quotients $\\frac{7}{4}$ et $\\frac{13}{7}$ diffèrent, donc la suite n'est pas géométrique ; elle n'est pas non plus arithmétique ($3 \\neq 6$). En fait $u_{n+1} = 2u_n - 1$ : la constante $+1$ casse la structure. C'est la suite $(u_n - 1)$, égale à $(3 \\times 2^n)$, qui est géométrique de raison 2.",
        "retenir": "Une suite $u_n = a\\,q^n + b$ avec $b \\neq 0$ n'est en général pas géométrique : c'est $(u_n - b)$ qui l'est.",
        "id": "c4s-s2-0"
       },
       {
        "titre": "Convaincre une classe",
        "enonce": "Une élève affirme : « J'ai vérifié que $u_1 > u_0$, $u_2 > u_1$ et $u_3 > u_2$, donc la suite est croissante. » Quelle suite, définie pour tout entier naturel $n$, choisir comme contre-exemple pour convaincre la classe ?",
        "reponse": 4,
        "choix": [
         "$u_n = n^2$",
         "$u_n = (-1)^n$",
         "$u_n = 2^n$",
         "$u_n = 6n - n^2$"
        ],
        "indice": "Il faut une suite qui vérifie les trois inégalités de l'élève, mais qui n'est pas croissante.",
        "explication": "$u_n = 6n - n^2$ donne $0, 5, 8, 9, 8, 5, \\dots$ : on a bien $u_0 < u_1 < u_2 < u_3$, mais $u_4 < u_3$. Les suites $(n^2)$ et $(2^n)$ sont croissantes, donc ne contredisent rien, et $((-1)^n)$ ne vérifie pas l'hypothèse, puisque $u_1 < u_0$.",
        "retenir": "Un bon contre-exemple vérifie toutes les hypothèses et contredit la conclusion ; quelques vérifications ne prouvent pas un « pour tout $n$ ».",
        "id": "c4s-s2-1"
       },
       {
        "titre": "Du collège au lycée",
        "enonce": "En classe de Première, quel lien exact entre les suites arithmétiques et les fonctions affines du collège le professeur peut-il énoncer ?",
        "reponse": 2,
        "choix": [
         "Une suite arithmétique traduit toujours une situation de proportionnalité entre $n$ et $u_n$.",
         "Les points de coordonnées $(n\\,;u_n)$ d'une suite arithmétique de raison $r$ sont alignés sur une droite de coefficient directeur $r$, car $u_n = f(n)$ avec $f(x) = rx + u_0$.",
         "Les points de coordonnées $(n\\,;u_n)$ d'une suite géométrique sont alignés, sur une droite de coefficient directeur $q$.",
         "Une suite arithmétique est associée à une fonction affine seulement si sa raison est positive."
        ],
        "indice": "Écris $u_n$ en fonction de $n$ et compare avec $f(x) = ax + b$.",
        "explication": "$u_n = u_0 + nr = f(n)$ avec $f(x) = rx + u_0$ : une suite arithmétique est la restriction aux entiers naturels d'une fonction affine, quelle que soit sa raison. Ses points sont alignés sur une droite de coefficient directeur $r$. Il n'y a proportionnalité que si $u_0 = 0$, et les points d'une suite géométrique non constante ne sont pas alignés.",
        "retenir": "Suite arithmétique : croissance linéaire (fonction affine) ; suite géométrique : croissance exponentielle. Un lien à faire vivre du collège au lycée.",
        "id": "c4s-s2-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Il existe une suite géométrique dont les nombres 1, 2 et 3 sont trois termes, pas forcément consécutifs. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Si $u_i = 1$, alors $2 = q^m$ et $3 = q^p$ pour des entiers $m$ et $p$ non nuls. Élimine $q$ en élevant à des puissances.",
        "explication": "Faux. Par l'absurde, soit $(u_n)$ géométrique de raison $q$, avec $u_i = 1$, $u_j = 2$ et $u_k = 3$.\n1) $q \\neq 0$ : sinon, tous les termes après $u_0$ sont nuls.\n2) Comme $u_j = u_i\\,q^{j-i}$ et $u_k = u_i\\,q^{k-i}$ : $q^m = 2$ et $q^p = 3$, où $m = j - i$ et $p = k - i$ sont des entiers non nuls (indices distincts).\n3) Donc $2^p = (q^m)^p = (q^p)^m = 3^m$.\n4) Si $m > 0$ et $p > 0$ : $2^p$ est pair et $3^m$ impair. Impossible.\n5) Si $m < 0$ et $p < 0$ : $2^{-p} = 3^{-m}$, même contradiction.\n6) Si $m$ et $p$ sont de signes contraires : l'un des nombres $2^p$, $3^m$ est supérieur à 1, l'autre inférieur à 1. Impossible.\nAucune suite géométrique ne contient 1, 2 et 3.",
        "retenir": "Pour prouver une impossibilité, raisonner par l'absurde jusqu'à une contradiction arithmétique simple : parité, décomposition en facteurs premiers.",
        "id": "c4s-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $(u_n)$ et $(v_n)$ sont deux suites croissantes, alors la suite $(u_n v_n)$ est croissante. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pense à des termes négatifs.",
        "explication": "Faux. Contre-exemple : $u_n = v_n = n - 3$ définissent deux suites croissantes, mais leur produit $(n - 3)^2$ vaut $9, 4, 1, 0, 1, \\dots$ : il commence par décroître. Le résultat devient vrai si les deux suites sont croissantes et à termes positifs.",
        "retenir": "La somme de deux suites croissantes est croissante ; leur produit ne l'est à coup sûr que si leurs termes sont positifs.",
        "id": "c4s-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier $n \\geqslant 1$, $n$ divise $1 + 2 + \\cdots + n$ si et seulement si $n$ est impair. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "$1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$. Distingue le cas $n$ impair et le cas $n = 2m$.",
        "explication": "Vrai. Si $n$ est impair, $\\frac{n+1}{2}$ est entier et $\\frac{n(n+1)}{2} = n \\times \\frac{n+1}{2}$ est un multiple de $n$. Si $n = 2m$, la somme vaut $m(2m + 1)$ ; si $2m$ la divisait, on aurait $m(2m + 1) = 2mk$ pour un entier $k$, soit $2m + 1 = 2k$ : impossible, car $2m + 1$ est impair.",
        "retenir": "Pour une équivalence, démontrer les deux sens ; ici, la disjonction des cas pair et impair fait tout le travail.",
        "id": "c4s-b0-2"
       }
      ]
     }
    ]
   }
  }
 },
 {
  "niveau": "Semaine 5",
  "titre": "Dérivation",
  "introduction": "Dériver, c'est regarder une courbe de si près qu'elle se confond avec une droite : sa tangente. Le nombre dérivé en donne la pente ; la dérivée, lue sur tout un intervalle, raconte les variations. Cette semaine, tu apprends à lire le mouvement d'une fonction : c'est le cœur de toute étude de fonction aux écrits.",
  "conclusion": "Emporte le chemin entier : taux d'accroissement, nombre dérivé, tangente, dérivée, signe, variations, extremums. Et garde la prudence du géomètre : une dérivée nulle n'annonce pas toujours un extremum, et une fonction n'est pas toujours dérivable là où elle est définie.",
  "salles": [
   {
    "nom": "L'école d'Épictète",
    "fond": "jardin",
    "athena": "Le nombre dérivé n'est pas une formule : c'est la limite d'un taux d'accroissement. Quand les règles de calcul se taisent, reviens à la définition.",
    "notion": "Taux d'accroissement, nombre dérivé",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#........................A.#",
     "#.......................####",
     "#..........................#",
     "#....................###...#",
     "#................T.........#",
     "#..............####........#",
     "#..........................S",
     "#J.G..T......##............S",
     "##########...###############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Pente d'une sécante",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2 - 3x$. Entrer le taux d'accroissement de $f$ entre $1$ et $4$.",
        "reponse": 2,
        "indice": "Calcule $\\frac{f(4) - f(1)}{4 - 1}$.",
        "explication": "$f(4) = 16 - 12 = 4$ et $f(1) = 1 - 3 = -2$, donc $\\frac{f(4) - f(1)}{4 - 1} = \\frac{4 - (-2)}{3} = 2$. C'est le coefficient directeur de la sécante passant par les points de la courbe d'abscisses 1 et 4.",
        "retenir": "Taux d'accroissement de $f$ entre $a$ et $b$ : $\\frac{f(b) - f(a)}{b - a}$, la pente de la sécante.",
        "id": "c5r1-s0-0"
       },
       {
        "titre": "De la sécante à la tangente",
        "enonce": "Soit $f$ la fonction inverse : $f(x) = \\frac{1}{x}$ pour $x \\neq 0$. Pour $h$ réel non nul avec $h > -2$, simplifier le taux d'accroissement $\\frac{f(2+h) - f(2)}{h}$, puis en déduire $f'(2)$. Entrer $f'(2)$, sous forme de fraction ou de décimal.",
        "reponse": -0.25,
        "indice": "Réduis $\\frac{1}{2+h} - \\frac{1}{2}$ au même dénominateur avant de diviser par $h$.",
        "explication": "$\\frac{1}{2+h} - \\frac{1}{2} = \\frac{2 - (2+h)}{2(2+h)} = \\frac{-h}{2(2+h)}$, donc le taux vaut $\\frac{-1}{2(2+h)}$, qui tend vers $-\\frac{1}{4}$ quand $h$ tend vers 0. Ainsi $f'(2) = -\\frac{1}{4}$, ce que confirme la formule $f'(x) = -\\frac{1}{x^2}$.",
        "retenir": "$f'(a)$ est la limite, quand $h$ tend vers 0, de $\\frac{f(a+h) - f(a)}{h}$ : on simplifie par $h$ avant de faire tendre $h$ vers 0.",
        "id": "c5r1-s0-1"
       },
       {
        "titre": "Un encadrement suffit",
        "enonce": "Une fonction $f$ définie sur $\\mathbb{R}$ vérifie, pour tout réel $h$ : $|f(1+h) - 2 - 4h| \\leq h^2$. On ne sait rien d'autre sur $f$. Démontrer que $f$ est dérivable en 1, puis entrer $f'(1)$.",
        "reponse": 4,
        "indice": "Prends d'abord $h = 0$ pour trouver $f(1)$, puis divise l'inégalité par $|h|$ lorsque $h \\neq 0$.",
        "explication": "Pour $h = 0$ : $|f(1) - 2| \\leq 0$, donc $f(1) = 2$. Pour $h \\neq 0$, en divisant par $|h|$ : $\\left|\\frac{f(1+h) - f(1)}{h} - 4\\right| \\leq |h|$. Le taux d'accroissement tend donc vers 4 quand $h$ tend vers 0 : $f$ est dérivable en 1 et $f'(1) = 4$.",
        "retenir": "Pour obtenir un nombre dérivé, il suffit d'encadrer le taux d'accroissement : si $|\\tau(h) - \\ell| \\leq |h|$, alors $\\tau(h)$ tend vers $\\ell$.",
        "id": "c5r1-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Vitesse instantanée",
        "enonce": "Sur la plage de Moya, un ballon est lancé verticalement. Son altitude, en mètres, $t$ secondes après le lancer, est $z(t) = 20t - 5t^2$. En calculant la limite du taux d'accroissement de $z$ entre $1$ et $1 + h$, entrer la vitesse instantanée du ballon à l'instant $t = 1$, en m/s.",
        "reponse": 10,
        "unite": "m/s",
        "indice": "Développe $z(1+h) - z(1)$ : tout se factorise par $h$.",
        "explication": "$z(1) = 15$ et $z(1+h) = 20 + 20h - 5(1 + 2h + h^2) = 15 + 10h - 5h^2$. Le taux vaut $\\frac{10h - 5h^2}{h} = 10 - 5h$, qui tend vers 10 quand $h$ tend vers 0. La vitesse instantanée à $t = 1$ est $z'(1) = 10$ m/s.",
        "retenir": "La vitesse instantanée est le nombre dérivé de la position : la limite des vitesses moyennes entre $t$ et $t + h$.",
        "id": "c5r1-s1-0"
       },
       {
        "titre": "Un point anguleux",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = |x - 2|$. Pour $h \\neq 0$, le taux d'accroissement de $f$ entre $2$ et $2 + h$ vaut $\\frac{|h|}{h}$. Quelle conclusion est correcte ?",
        "reponse": 3,
        "choix": [
         "$f$ est dérivable en 2 et $f'(2) = 0$, car $f$ atteint son minimum en 2.",
         "$f$ est dérivable en 2, car le taux $\\frac{|h|}{h}$ est défini pour tout $h \\neq 0$.",
         "$f$ n'est pas dérivable en 2 : le taux vaut 1 si $h > 0$ et $-1$ si $h < 0$, il n'a pas de limite en 0.",
         "$f$ est dérivable en 2 et $f'(2) = 1$, car $\\frac{|h|}{h} = 1$."
        ],
        "indice": "Distingue $h > 0$ et $h < 0$ : que vaut $|h|$ dans chaque cas ?",
        "explication": "Si $h > 0$, $\\frac{|h|}{h} = 1$ ; si $h < 0$, $\\frac{|h|}{h} = -1$. Le taux n'a pas de limite quand $h$ tend vers 0 : $f$ n'est pas dérivable en 2. La courbe présente un point anguleux, avec deux demi-tangentes de pentes 1 et $-1$. Que le taux soit défini pour tout $h \\neq 0$ ne suffit pas, c'est sa limite qui compte ; et un minimum atteint en 2 n'entraîne pas la dérivabilité.",
        "retenir": "Dérivable en $a$ : le taux d'accroissement a une limite finie quand $h$ tend vers 0. Pour $x \\mapsto |x|$ en 0, il vaut 1 ou $-1$ selon le signe de $h$ : pas de limite.",
        "id": "c5r1-s1-1"
       },
       {
        "titre": "Un raccord sans angle",
        "enonce": "Soient $a$ et $b$ deux réels, et $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2$ si $x \\leq 1$, et $f(x) = ax + b$ si $x > 1$. On veut que $f$ soit dérivable en 1. Entrer la valeur de $b$.",
        "reponse": -1,
        "indice": "Écris le taux d'accroissement de $f$ en 1 pour $h < 0$, puis pour $h > 0$, sachant que $f(1) = 1$. Pour $h > 0$, un terme en $\\frac{1}{h}$ doit disparaître.",
        "explication": "Ici $f(1) = 1^2 = 1$. Pour $h < 0$, le taux vaut $\\frac{(1+h)^2 - 1}{h} = 2 + h$, qui tend vers 2. Pour $h > 0$, il vaut $\\frac{a(1+h) + b - 1}{h} = a + \\frac{a + b - 1}{h}$ : il n'a de limite finie que si $a + b - 1 = 0$, et vaut alors $a$. La dérivabilité en 1 impose donc $a + b = 1$ et $a = 2$, d'où $b = -1$ ; réciproquement, pour $a = 2$ et $b = -1$, les deux taux tendent vers 2. La droite $y = 2x - 1$ est la tangente à la parabole au point d'abscisse 1.",
        "retenir": "Raccord sans « angle » en un point : les taux d'accroissement à gauche et à droite doivent avoir la même limite finie, ce qui raccorde les valeurs, puis les pentes.",
        "id": "c5r1-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si une fonction $f$ est dérivable en un réel $a$, alors $f(a+h)$ tend vers $f(a)$ quand $h$ tend vers 0. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $f(a+h) - f(a) = h \\times \\frac{f(a+h) - f(a)}{h}$ et fais tendre $h$ vers 0.",
        "explication": "Vrai. Pour $h \\neq 0$, $f(a+h) - f(a) = h \\times \\frac{f(a+h) - f(a)}{h}$. Quand $h$ tend vers 0, le second facteur tend vers $f'(a)$ et le premier vers 0 : le produit tend vers $0 \\times f'(a) = 0$, donc $f(a+h)$ tend vers $f(a)$. La réciproque est fausse : $|0 + h| = |h|$ tend vers $|0| = 0$, mais $x \\mapsto |x|$ n'est pas dérivable en 0.",
        "retenir": "Si $f$ est dérivable en $a$, alors $f(a+h)$ tend vers $f(a)$ : la courbe n'a pas de saut en $a$. La réciproque est fausse (valeur absolue en 0).",
        "id": "c5r1-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La fonction racine carrée est dérivable sur $[0\\,;+\\infty[$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris le taux d'accroissement de la racine carrée entre 0 et $h > 0$, et simplifie.",
        "explication": "Faux. Elle n'est pas dérivable en 0 : pour $h > 0$, $\\frac{\\sqrt{h} - \\sqrt{0}}{h} = \\frac{1}{\\sqrt{h}}$, qui tend vers $+\\infty$ quand $h$ tend vers 0. Elle est dérivable sur $]0\\,;+\\infty[$ seulement, avec $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ ; sa courbe admet une tangente verticale à l'origine.",
        "retenir": "La racine carrée est définie sur $[0\\,;+\\infty[$ mais dérivable seulement sur $]0\\,;+\\infty[$ (tangente verticale en 0).",
        "id": "c5r1-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La fonction $g$ définie sur $[0\\,;+\\infty[$ par $g(x) = x\\sqrt{x}$ est dérivable en 0. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "La formule du produit ne s'applique pas en 0, puisque la racine carrée n'y est pas dérivable : reviens au taux d'accroissement.",
        "explication": "Vrai. Comme $g$ n'est définie que sur $[0\\,;+\\infty[$, seuls les $h > 0$ interviennent : $\\frac{g(h) - g(0)}{h} = \\frac{h\\sqrt{h}}{h} = \\sqrt{h}$, qui tend vers 0. Donc $g$ est dérivable en 0 et $g'(0) = 0$, bien que la racine carrée ne le soit pas : la formule du produit ne permettait pas de conclure, il fallait revenir à la définition.",
        "retenir": "En un point où un facteur n'est pas dérivable, les formules ne concluent rien : on revient au taux d'accroissement.",
        "id": "c5r1-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "L'éternité de Plotin",
    "fond": "brumes",
    "athena": "La tangente en $a$ passe par le point $(a\\,;f(a))$ et a pour pente $f'(a)$ : $y = f'(a)(x - a) + f(a)$. Deux nombres suffisent à la tracer.",
    "notion": "Tangente à une courbe",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....................A....#",
     "#....................###...S",
     "#J.G..T...........T........S",
     "#########PPPPPP#############",
     "#########......#############",
     "#########......#############",
     "#########......#############",
     "#########......#############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Équation d'une tangente",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2 + 1$. La tangente à sa courbe au point d'abscisse 2 a pour équation réduite $y = mx + p$. Entrer $p$.",
        "reponse": -3,
        "indice": "Calcule $f(2)$ et $f'(2)$, puis utilise $y = f'(2)(x - 2) + f(2)$.",
        "explication": "$f(2) = 5$ et $f'(x) = 2x$, donc $f'(2) = 4$. La tangente a pour équation $y = 4(x - 2) + 5$, soit $y = 4x - 3$. Donc $p = -3$.",
        "retenir": "Tangente au point d'abscisse $a$ : $y = f'(a)(x - a) + f(a)$, puis on développe pour obtenir l'équation réduite.",
        "id": "c5r2-s0-0"
       },
       {
        "titre": "La tangente à la racine",
        "enonce": "Soit $f$ la fonction racine carrée et $T$ la tangente à sa courbe au point d'abscisse 4. Entrer l'abscisse du point d'intersection de $T$ avec l'axe des abscisses.",
        "reponse": -4,
        "indice": "Pour $x > 0$, $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$. Écris l'équation de $T$, puis résous $y = 0$.",
        "explication": "$f(4) = 2$ et $f'(4) = \\frac{1}{2\\sqrt{4}} = \\frac{1}{4}$. Donc $T : y = \\frac{1}{4}(x - 4) + 2$, soit $y = \\frac{1}{4}x + 1$. Pour $y = 0$ : $\\frac{1}{4}x = -1$, d'où $x = -4$.",
        "retenir": "$(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ pour $x > 0$ ; une droite coupe l'axe des abscisses là où $y = 0$.",
        "id": "c5r2-s0-1"
       },
       {
        "titre": "Un triangle invariable",
        "enonce": "Dans un repère orthonormé d'origine $O$, on considère la courbe de $f : x \\mapsto \\frac{3}{x}$ sur $]0\\,;+\\infty[$ et un réel $a > 0$. La tangente à cette courbe au point d'abscisse $a$ coupe l'axe des abscisses en $P$ et l'axe des ordonnées en $Q$. Entrer l'aire du triangle $OPQ$ (elle ne dépend pas de $a$).",
        "reponse": 6,
        "indice": "$f'(a) = -\\frac{3}{a^2}$. Écris l'équation réduite de la tangente en gardant $a$ comme paramètre, puis calcule ses points d'intersection avec les axes.",
        "explication": "La tangente a pour équation $y = -\\frac{3}{a^2}(x - a) + \\frac{3}{a} = -\\frac{3}{a^2}x + \\frac{6}{a}$. Elle coupe l'axe des ordonnées en $Q\\left(0\\,;\\frac{6}{a}\\right)$ et l'axe des abscisses en $P(2a\\,;0)$. Le triangle $OPQ$ est rectangle en $O$, d'aire $\\frac{1}{2} \\times 2a \\times \\frac{6}{a} = 6$, quel que soit $a$.",
        "retenir": "Pour montrer qu'une quantité « ne dépend pas de $a$ », on calcule avec $a$ quelconque jusqu'au bout : le paramètre doit disparaître.",
        "effet": "passerelle",
        "id": "c5r2-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Une direction imposée",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2 - 6x + 1$. En un unique point $A$ de sa courbe, la tangente est parallèle à la droite d'équation $y = 2x + 5$. Entrer l'ordonnée de $A$.",
        "reponse": -7,
        "indice": "Deux droites non verticales sont parallèles si et seulement si elles ont le même coefficient directeur : résous $f'(x) = 2$.",
        "explication": "$f'(x) = 2x - 6$. La condition $f'(x) = 2$ donne $x = 4$, puis $f(4) = 16 - 24 + 1 = -7$. Donc $A(4\\,;-7)$, et la tangente en $A$ a pour équation $y = 2x - 15$.",
        "retenir": "Tangente parallèle à une droite de coefficient directeur $m$ : résoudre $f'(x) = m$.",
        "id": "c5r2-s1-0"
       },
       {
        "titre": "Au-dessus ou au-dessous ?",
        "enonce": "Soit $T$ la tangente à la courbe de $f : x \\mapsto x^3$ au point d'abscisse 1. On admet que $x^3 - 3x + 2 = (x - 1)^2(x + 2)$ pour tout réel $x$. La courbe de $f$ est au-dessus de $T$ (au sens large) exactement sur un intervalle $[m\\,;+\\infty[$. Entrer $m$.",
        "reponse": -2,
        "indice": "Écris l'équation réduite de $T$, puis étudie le signe de la différence entre $f(x)$ et l'ordonnée du point de $T$ d'abscisse $x$.",
        "explication": "$f(1) = 1$ et $f'(1) = 3$ : $T : y = 3(x - 1) + 1 = 3x - 2$. Alors $f(x) - (3x - 2) = x^3 - 3x + 2 = (x - 1)^2(x + 2)$, du signe de $x + 2$ puisque $(x - 1)^2 \\geq 0$. La courbe est au-dessus de $T$ sur $[-2\\,;+\\infty[$ et au-dessous sur $]-\\infty\\,;-2]$ : elle traverse $T$ au point d'abscisse $-2$. Donc $m = -2$.",
        "retenir": "Position courbe-tangente : étudier le signe de $f(x) - [f'(a)(x - a) + f(a)]$, qui admet $(x - a)^2$ en facteur pour un polynôme.",
        "id": "c5r2-s1-1"
       },
       {
        "titre": "Deux tangentes issues d'un point",
        "enonce": "Dans un repère orthonormé, on considère la parabole $\\mathcal{P}$ d'équation $y = x^2$ et le point $A\\left(2\\,;-\\frac{1}{4}\\right)$. Exactement deux tangentes à $\\mathcal{P}$ passent par $A$. Entrer le produit de leurs coefficients directeurs.",
        "reponse": -1,
        "indice": "La tangente au point d'abscisse $a$ a pour équation $y = 2ax - a^2$. Écris que $A$ lui appartient : tu obtiens une équation du second degré en $a$. Inutile de la résoudre, pense au produit des racines.",
        "explication": "La tangente en $a$ est $y = 2a(x - a) + a^2 = 2ax - a^2$. Elle passe par $A$ si $-\\frac{1}{4} = 4a - a^2$, soit $a^2 - 4a - \\frac{1}{4} = 0$. Le discriminant vaut $16 + 1 = 17 > 0$ : deux solutions $a_1$ et $a_2$, de produit $-\\frac{1}{4}$. Les coefficients directeurs $2a_1$ et $2a_2$ ont pour produit $4a_1a_2 = -1$ : les deux tangentes sont perpendiculaires. C'est vrai pour tout point de la droite $y = -\\frac{1}{4}$, directrice de $\\mathcal{P}$.",
        "retenir": "Dans un repère orthonormé, deux droites de coefficients directeurs $m$ et $m'$ sont perpendiculaires si et seulement si $mm' = -1$.",
        "id": "c5r2-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La courbe d'une fonction dérivable sur $\\mathbb{R}$ reste toujours d'un même côté de chacune de ses tangentes. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pense à la fonction cube et à sa tangente à l'origine.",
        "explication": "Faux. Pour $f(x) = x^3$, on a $f(0) = f'(0) = 0$ : la tangente en 0 est l'axe des abscisses, d'équation $y = 0$. Or $x^3 < 0$ pour $x < 0$ et $x^3 > 0$ pour $x > 0$ : la courbe traverse sa tangente à l'origine (point d'inflexion).",
        "retenir": "Une courbe peut traverser sa tangente (la fonction cube en 0) : la position se démontre par le signe d'une différence.",
        "id": "c5r2-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $a$, la tangente à la parabole d'équation $y = x^2$ au point d'abscisse $a$ coupe l'axe des ordonnées au point d'ordonnée $-a^2$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris l'équation réduite de la tangente avec $a$ quelconque, puis fais $x = 0$.",
        "explication": "Vrai. La tangente a pour équation $y = 2a(x - a) + a^2 = 2ax - a^2$ ; pour $x = 0$, on obtient $y = -a^2$, et ceci pour tout réel $a$. (Pour $a = 0$, la tangente est l'axe des abscisses et le point est l'origine.)",
        "retenir": "Pour une proposition « pour tout $a$ », on calcule avec $a$ quelconque : vérifier un exemple numérique ne prouve rien.",
        "id": "c5r2-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Il existe deux points distincts de la parabole d'équation $y = x^2$ en lesquels les tangentes sont parallèles. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare les coefficients directeurs des tangentes aux points d'abscisses $a$ et $b$.",
        "explication": "Faux. Les tangentes aux points d'abscisses $a$ et $b$ ont pour coefficients directeurs $2a$ et $2b$ ; elles sont parallèles si et seulement si $2a = 2b$, c'est-à-dire $a = b$. Deux points distincts de la parabole ont des abscisses distinctes, donc des tangentes non parallèles.",
        "retenir": "Pour nier « il existe », on démontre un « pour tout » : ici, deux abscisses distinctes donnent toujours deux pentes distinctes.",
        "id": "c5r2-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "La méthode de Descartes",
    "fond": "nuit",
    "athena": "Avant de dériver, nomme la forme : somme, produit, quotient ou $x \\mapsto g(ax + b)$. La forme reconnue dicte la formule.",
    "notion": "Dérivées usuelles et opérations",
    "plan": [
     "############################",
     "#..........................#",
     "#.A...R....................#",
     "#######....................#",
     "#..........................#",
     "#..........................#",
     "#......................T...#",
     "#....................####..#",
     "#..........................#",
     "#................###.......#",
     "#..........................#",
     "#.............###..........S",
     "#JG.T...H..................S",
     "##########...###############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Un polynôme",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 2x^3 - 5x^2 + 4x - 1$. Entrer $f'(2)$.",
        "reponse": 8,
        "indice": "Dérive terme à terme, avec $(x^n)' = nx^{n-1}$.",
        "explication": "$f'(x) = 6x^2 - 10x + 4$, donc $f'(2) = 24 - 20 + 4 = 8$.",
        "retenir": "$(x^n)' = nx^{n-1}$ ; la dérivée d'une somme est la somme des dérivées, et $(ku)' = ku'$ pour une constante $k$.",
        "id": "c5r3-s0-0"
       },
       {
        "titre": "Un produit",
        "enonce": "Soit $f$ la fonction définie sur $]0\\,;+\\infty[$ par $f(x) = (x^2 + 1)\\sqrt{x}$. Entrer $f'(4)$, sous forme de fraction ou de décimal.",
        "reponse": 20.25,
        "indice": "$(uv)' = u'v + uv'$, avec $u(x) = x^2 + 1$ et $v(x) = \\sqrt{x}$.",
        "explication": "$f'(x) = 2x\\sqrt{x} + (x^2 + 1) \\times \\frac{1}{2\\sqrt{x}}$. En 4 : $f'(4) = 2 \\times 4 \\times 2 + \\frac{17}{4} = 16 + \\frac{17}{4} = \\frac{81}{4}$. Piège : le produit des dérivées $u'(4)v'(4) = 8 \\times \\frac{1}{4} = 2$ ne donne pas $f'(4)$.",
        "retenir": "$(uv)' = u'v + uv'$ : la dérivée d'un produit n'est pas le produit des dérivées.",
        "id": "c5r3-s0-1"
       },
       {
        "titre": "Le facteur qui s'annule",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (x - 1)(x - 2)(x - 3)(x - 4)$. Sans développer, entrer $f'(1)$.",
        "reponse": -6,
        "indice": "Écris $f(x) = (x - 1)g(x)$ avec $g(x) = (x - 2)(x - 3)(x - 4)$, et applique la formule du produit.",
        "explication": "Avec $f(x) = (x - 1)g(x)$ : $f'(x) = g(x) + (x - 1)g'(x)$, donc $f'(1) = g(1) = (-1)(-2)(-3) = -6$. Développer le polynôme de degré 4 aurait été long et source d'erreurs.",
        "retenir": "Si $f(x) = (x - a)g(x)$ avec $g$ dérivable, alors $f'(a) = g(a)$.",
        "id": "c5r3-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Un quotient",
        "enonce": "Soit $f$ la fonction définie sur $]3\\,;+\\infty[$ par $f(x) = \\frac{2x + 1}{x - 3}$. Entrer $f'(4)$.",
        "reponse": -7,
        "indice": "$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.",
        "explication": "$f'(x) = \\frac{2(x - 3) - (2x + 1) \\times 1}{(x - 3)^2} = \\frac{-7}{(x - 3)^2}$, donc $f'(4) = \\frac{-7}{1} = -7$.",
        "retenir": "$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ : attention à l'ordre au numérateur, $u'v$ d'abord.",
        "id": "c5r3-s1-0"
       },
       {
        "titre": "Une racine d'une expression affine",
        "enonce": "Soit $f$ la fonction définie sur $\\left]-\\infty\\,;\\frac{5}{2}\\right[$ par $f(x) = \\sqrt{5 - 2x}$. Entrer $f'(-2)$, sous forme de fraction.",
        "reponse": -0.3333333333333333,
        "indice": "Si $f(x) = g(ax + b)$, alors $f'(x) = a\\,g'(ax + b)$ ; ici $g$ est la racine carrée et $a = -2$.",
        "explication": "Avec $g(X) = \\sqrt{X}$, $a = -2$ et $b = 5$ : $f'(x) = -2 \\times \\frac{1}{2\\sqrt{5 - 2x}} = -\\frac{1}{\\sqrt{5 - 2x}}$. En $-2$ : $\\sqrt{9} = 3$, donc $f'(-2) = -\\frac{1}{3}$. Oublier le facteur $a$ donnerait $\\frac{1}{6}$, une erreur classique.",
        "retenir": "$(g(ax + b))' = a\\,g'(ax + b)$ : ne pas oublier le facteur $a$, ni son signe.",
        "id": "c5r3-s1-1"
       },
       {
        "titre": "Une tangente horizontale imposée",
        "enonce": "Soit $a$ un réel et $f$ la fonction définie sur $\\mathbb{R} \\setminus \\{1\\}$ par $f(x) = \\frac{x^2 + a}{x - 1}$. On veut que la courbe de $f$ admette une tangente horizontale au point d'abscisse 3. Entrer $a$.",
        "reponse": 3,
        "indice": "Une tangente horizontale correspond à $f'(3) = 0$ : calcule le numérateur de $f'(x)$ en fonction de $a$.",
        "explication": "$f'(x) = \\frac{2x(x - 1) - (x^2 + a)}{(x - 1)^2} = \\frac{x^2 - 2x - a}{(x - 1)^2}$. La condition $f'(3) = 0$ donne $9 - 6 - a = 0$, soit $a = 3$. Vérification : $f'(x) = \\frac{(x - 3)(x + 1)}{(x - 1)^2}$ s'annule bien en 3.",
        "retenir": "Tangente horizontale au point d'abscisse $x_0$ $\\iff$ $f'(x_0) = 0$ ; avec un paramètre, cette condition devient une équation.",
        "id": "c5r3-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si le produit $fg$ de deux fonctions définies sur $\\mathbb{R}$ est dérivable en 0, alors $f$ et $g$ sont dérivables en 0. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Cherche deux fonctions non dérivables en 0 dont le produit est une fonction polynôme.",
        "explication": "Faux. Avec $f(x) = g(x) = |x|$, aucune des deux n'est dérivable en 0, mais $f(x)g(x) = |x|^2 = x^2$ est dérivable en 0. Le théorème ne marche que dans un sens : si $u$ et $v$ sont dérivables, alors $uv$ l'est, et $(uv)' = u'v + uv'$.",
        "retenir": "Les théorèmes d'opérations donnent des conditions suffisantes de dérivabilité, pas des conditions nécessaires.",
        "id": "c5r3-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $f$ est une fonction dérivable et impaire sur $\\mathbb{R}$, alors sa dérivée $f'$ est paire. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Dérive les deux membres de l'égalité $f(-x) = -f(x)$.",
        "explication": "Vrai. Pour tout réel $x$, $f(-x) = -f(x)$. La dérivée de $x \\mapsto f(-x)$ est $x \\mapsto -f'(-x)$ (règle de $g(ax + b)$ avec $a = -1$). En dérivant les deux membres : $-f'(-x) = -f'(x)$, soit $f'(-x) = f'(x)$ pour tout réel $x$ : $f'$ est paire.",
        "retenir": "La dérivée de $x \\mapsto f(-x)$ est $x \\mapsto -f'(-x)$. La dérivée d'une fonction impaire est paire ; celle d'une fonction paire est impaire.",
        "id": "c5r3-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La fonction $x \\mapsto \\sqrt{4x}$ est dérivable sur $]0\\,;+\\infty[$, de dérivée $x \\mapsto \\frac{1}{\\sqrt{x}}$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Simplifie $\\sqrt{4x}$ pour $x > 0$, ou applique la règle de $g(ax + b)$ sans oublier $a$.",
        "explication": "Vrai. Pour $x > 0$, $\\sqrt{4x} = 2\\sqrt{x}$, de dérivée $2 \\times \\frac{1}{2\\sqrt{x}} = \\frac{1}{\\sqrt{x}}$. On le retrouve avec la règle de $g(ax + b)$ : $4 \\times \\frac{1}{2\\sqrt{4x}} = \\frac{4}{4\\sqrt{x}} = \\frac{1}{\\sqrt{x}}$. La réponse tentante $\\frac{1}{2\\sqrt{4x}}$ oublie le facteur 4.",
        "retenir": "Avant de dériver, simplifier ($\\sqrt{4x} = 2\\sqrt{x}$) ; et contrôler un résultat par une seconde méthode.",
        "id": "c5r3-b0-2"
       }
      ]
     }
    ],
    "acrobaties": [
     {
      "titre": "Une limite déguisée",
      "enonce": "Déterminer la limite de $\\frac{x^5 - 32}{x - 2}$ quand $x$ tend vers 2 (avec $x \\neq 2$), sans développer ni factoriser, en reconnaissant un objet du cours. Entrer cette limite.",
      "reponse": 80,
      "indice": "Écris 32 comme une puissance de 2, et relis la définition du nombre dérivé.",
      "explication": "Comme $32 = 2^5$, le quotient s'écrit $\\frac{f(x) - f(2)}{x - 2}$ avec $f(x) = x^5$ : c'est le taux d'accroissement de $f$ entre 2 et $x$. Puisque $f$ est dérivable en 2, sa limite est $f'(2) = 5 \\times 2^4 = 80$. La factorisation $x^5 - 32 = (x - 2)(x^4 + 2x^3 + 4x^2 + 8x + 16)$ donne le même résultat, plus laborieusement.",
      "retenir": "Une limite de la forme $\\frac{f(x) - f(a)}{x - a}$ quand $x$ tend vers $a$ est un nombre dérivé : reconnaître le taux d'accroissement dispense du calcul.",
      "id": "c5r3-h0",
      "figure": "double"
     }
    ]
   },
   {
    "nom": "Le calcul de Leibniz",
    "fond": "orient",
    "athena": "Le signe de $f'$ sur un intervalle donne les variations. Cherche les extremums là où $f'$ change de signe, et n'oublie jamais les bornes.",
    "notion": "Variations, extremums",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#...................A......#",
     "#..................##......#",
     "#...............T..........#",
     "#..............##..........#",
     "#..........................#",
     "#...........##.............#",
     "#..........................#",
     "#........##................S",
     "#JG...T....................S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le sens de variation",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 2x^3 - 3x^2 - 12x + 1$. Elle est croissante sur $]-\\infty\\,;\\alpha]$, décroissante sur $[\\alpha\\,;\\beta]$ et croissante sur $[\\beta\\,;+\\infty[$. Entrer $\\beta$.",
        "reponse": 2,
        "indice": "Calcule $f'(x)$, factorise ce trinôme et étudie son signe.",
        "explication": "$f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x + 1)(x - 2)$. Ce trinôme est positif à l'extérieur de ses racines et négatif entre elles : $f$ est croissante sur $]-\\infty\\,;-1]$, décroissante sur $[-1\\,;2]$, croissante sur $[2\\,;+\\infty[$. Donc $\\beta = 2$.",
        "retenir": "Sur un intervalle, $f' \\geq 0$ entraîne $f$ croissante et $f' \\leq 0$ entraîne $f$ décroissante : on étudie le signe de $f'$ après factorisation.",
        "id": "c5r4-s0-0"
       },
       {
        "titre": "Variations d'un quotient",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = \\frac{x + 1}{x^2 + 3}$. Elle est croissante sur un intervalle $[\\alpha\\,;\\beta]$ et décroissante sur $]-\\infty\\,;\\alpha]$ et sur $[\\beta\\,;+\\infty[$. Entrer $\\alpha$.",
        "reponse": -3,
        "indice": "Le dénominateur de $f'(x)$ est un carré non nul, donc strictement positif : seul le signe du numérateur compte.",
        "explication": "$f'(x) = \\frac{(x^2 + 3) - (x + 1) \\times 2x}{(x^2 + 3)^2} = \\frac{-x^2 - 2x + 3}{(x^2 + 3)^2} = \\frac{-(x + 3)(x - 1)}{(x^2 + 3)^2}$. Le numérateur, de coefficient dominant négatif, est positif entre ses racines $-3$ et $1$ : $f$ est croissante sur $[-3\\,;1]$. Donc $\\alpha = -3$.",
        "retenir": "Pour un quotient, le dénominateur de $f'$ est un carré positif : le signe de $f'$ est celui du numérateur, qu'on factorise.",
        "id": "c5r4-s0-1"
       },
       {
        "titre": "Croissante partout ?",
        "enonce": "Soit $a$ un réel et $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^3 - 3ax^2 + 3x + 1$. Entrer le plus grand réel $a$ pour lequel $f$ est croissante sur $\\mathbb{R}$.",
        "reponse": 1,
        "indice": "$f$ est croissante sur $\\mathbb{R}$ si et seulement si $f'(x) \\geq 0$ pour tout réel $x$ : regarde le discriminant du trinôme $f'(x)$.",
        "explication": "$f'(x) = 3x^2 - 6ax + 3 = 3(x^2 - 2ax + 1)$. Ce trinôme est positif ou nul sur $\\mathbb{R}$ si et seulement si son discriminant $4a^2 - 4$ est négatif ou nul, soit $-1 \\leq a \\leq 1$. Si $a > 1$, $f'$ est strictement négative entre ses deux racines et $f$ y décroît. Pour $a = 1$, $f'(x) = 3(x - 1)^2$ s'annule en 1 sans changer de signe : $f$ est même strictement croissante. Le plus grand $a$ est 1.",
        "retenir": "Sur un intervalle, une dérivée positive qui ne s'annule qu'en des points isolés donne une fonction strictement croissante (exemple : $x \\mapsto x^3$).",
        "id": "c5r4-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Un maximum local",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^3 - 12x$. Entrer la valeur du maximum local de $f$.",
        "reponse": 16,
        "indice": "Cherche où $f'$ s'annule en passant du signe $+$ au signe $-$.",
        "explication": "$f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$ : positive sur $]-\\infty\\,;-2[$, négative sur $]-2\\,;2[$, positive sur $]2\\,;+\\infty[$. Le maximum local est atteint en $-2$ : $f(-2) = -8 + 24 = 16$. Ce n'est pas un maximum sur $\\mathbb{R}$, puisque $f(5) = 65$.",
        "retenir": "Si $f'$ s'annule en $a$ en passant du signe $+$ au signe $-$, alors $f$ admet un maximum local en $a$.",
        "id": "c5r4-s1-0"
       },
       {
        "titre": "Un bac pour l'eau de pluie",
        "enonce": "Pour le potager du collège de Mamoudzou, un bac à base carrée, ouvert sur le dessus, doit contenir 32 dm³ d'eau de pluie. On note $x$ le côté de la base, en dm ($x > 0$). On admet que l'aire de tôle nécessaire, en dm², est $S(x) = x^2 + \\frac{128}{x}$. Entrer l'aire minimale de tôle, en dm².",
        "reponse": 48,
        "unite": "dm²",
        "indice": "Calcule $S'(x)$, réduis-la au même dénominateur et étudie son signe sur $]0\\,;+\\infty[$.",
        "explication": "$S'(x) = 2x - \\frac{128}{x^2} = \\frac{2(x^3 - 64)}{x^2}$, du signe de $x^3 - 64$ : négative sur $]0\\,;4[$, positive sur $]4\\,;+\\infty[$. $S$ est décroissante puis croissante, minimale en $x = 4$ : $S(4) = 16 + 32 = 48$ dm². Le bac a alors une hauteur de $\\frac{32}{16} = 2$ dm.",
        "retenir": "Optimiser : exprimer la grandeur en fonction d'une seule variable, étudier le signe de la dérivée, conclure avec le tableau de variations.",
        "id": "c5r4-s1-1"
       },
       {
        "titre": "Une dérivée qui s'annule deux fois",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^4 - 4x^3$. Entrer le nombre d'extremums locaux de $f$ sur $\\mathbb{R}$.",
        "reponse": 1,
        "indice": "Factorise $f'(x)$ et dresse son tableau de signes : une racine double change-t-elle le signe ?",
        "explication": "$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$. Elle s'annule en 0 et en 3, mais $4x^2 \\geq 0$ : $f'$ est négative sur $]-\\infty\\,;3[$ (nulle en 0) et positive sur $]3\\,;+\\infty[$. Donc $f$ est décroissante sur $]-\\infty\\,;3]$ et croissante sur $[3\\,;+\\infty[$ : un seul extremum local, le minimum $f(3) = -27$. En 0, $f'(0) = 0$ sans extremum.",
        "retenir": "Un changement de signe de $f'$ en $a$ assure un extremum local en $a$ ; une annulation sans changement de signe (racine double de $f'$) peut n'en donner aucun.",
        "id": "c5r4-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $f$ une fonction dérivable sur $\\mathbb{R}$ et $a$ un réel. Si $f'(a) = 0$, alors $f$ admet un extremum local en $a$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pense à la fonction cube.",
        "explication": "Faux. Pour $f(x) = x^3$ et $a = 0$ : $f'(0) = 0$, mais $f(x) < 0$ pour $x < 0$ et $f(x) > 0$ pour $x > 0$, donc $f$ n'admet ni maximum ni minimum local en 0 (elle est strictement croissante sur $\\mathbb{R}$). Pour conclure à un extremum, on vérifie que $f'$ s'annule en changeant de signe.",
        "retenir": "$f'(a) = 0$ est une condition nécessaire d'extremum local (à l'intérieur d'un intervalle), pas suffisante : contre-exemple $x \\mapsto x^3$ en 0.",
        "id": "c5r4-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $f$ une fonction dérivable sur un intervalle ouvert $I$. Si $f$ admet un maximum local en un point $c$ de $I$, alors $f'(c) = 0$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare les signes du taux d'accroissement en $c$ pour $h > 0$ et pour $h < 0$.",
        "explication": "Vrai. Pour $h$ assez proche de 0, $f(c + h) \\leq f(c)$. Si $h > 0$, le taux $\\frac{f(c+h) - f(c)}{h}$ est négatif ou nul, donc sa limite vérifie $f'(c) \\leq 0$ ; si $h < 0$, il est positif ou nul, donc $f'(c) \\geq 0$. Ainsi $f'(c) = 0$.",
        "retenir": "En un extremum local situé à l'intérieur de l'intervalle, la dérivée s'annule : condition nécessaire, pas suffisante.",
        "id": "c5r4-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $f$ une fonction dérivable sur $[0\\,;1]$. Si $f$ atteint son maximum sur $[0\\,;1]$ en un réel $c$, alors $f'(c) = 0$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Une fonction croissante sur $[0\\,;1]$ atteint son maximum en 1.",
        "explication": "Faux. La fonction $f : x \\mapsto x$ atteint son maximum sur $[0\\,;1]$ en $c = 1$, mais $f'(1) = 1 \\neq 0$. Le résultat « $f'(c) = 0$ » ne vaut qu'à l'intérieur de l'intervalle : un extremum peut être atteint en une borne.",
        "retenir": "Pour trouver le maximum sur $[a\\,;b]$, comparer les valeurs aux points où $f'$ s'annule ET aux bornes $a$ et $b$.",
        "id": "c5r4-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le tombeau d'Archimède",
    "fond": "crepuscule",
    "athena": "Un problème d'optimisation se gagne en trois temps : choisir la variable, exprimer la grandeur, étudier le signe de la dérivée.",
    "notion": "Problème : optimisation et étude de fonction",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..A.......................#",
     "#.###......................#",
     "#..........................#",
     "#....###...................#",
     "#..........................#",
     "#........###...............#",
     "#..........................#",
     "#.....###..................S",
     "#J.G................T......S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le rayon du cylindre",
        "enonce": "En coupant la figure par un plan contenant l'axe du cylindre, démontrer que $r^2 = 9 - \\frac{h^2}{4}$. Entrer le volume du cylindre de hauteur $h = 2$, divisé par $\\pi$.",
        "reponse": 16,
        "indice": "Dans la coupe, le centre de la boule, le centre d'une base et un point du cercle de cette base forment un triangle rectangle d'hypoténuse 3.",
        "explication": "Le centre $O$ de la boule est le milieu de l'axe du cylindre. Si $C$ est le centre d'une base et $M$ un point de son cercle : $OC = \\frac{h}{2}$, $CM = r$, $OM = 3$, et le théorème de Pythagore donne $r^2 + \\frac{h^2}{4} = 9$. Pour $h = 2$ : $r^2 = 8$, et $V = \\pi \\times 8 \\times 2 = 16\\pi$.",
        "retenir": "Pour un solide inscrit dans une sphère, une coupe par un plan de symétrie ramène le problème au théorème de Pythagore.",
        "id": "c5b-s0-0"
       },
       {
        "titre": "Le point critique",
        "enonce": "On admet que le volume du cylindre est $V(h) = \\pi\\left(9h - \\frac{h^3}{4}\\right)$ pour $h \\in\\, ]0\\,;6[$. La dérivée $V'$ s'annule en un unique réel $h_0$ de $]0\\,;6[$. Entrer $h_0$, arrondi au centième.",
        "reponse": 3.46,
        "tolerance": 0.005,
        "unite": "m",
        "indice": "Dérive en gardant $\\pi$ en facteur, puis résous $V'(h) = 0$ en ne gardant que la solution de $]0\\,;6[$.",
        "explication": "$V'(h) = \\pi\\left(9 - \\frac{3h^2}{4}\\right) = \\frac{3\\pi}{4}(12 - h^2)$. Ainsi $V'(h) = 0 \\iff h^2 = 12 \\iff h = 2\\sqrt{3}$ ou $h = -2\\sqrt{3}$ ; seule $h_0 = 2\\sqrt{3} \\approx 3{,}46$ m est dans $]0\\,;6[$.",
        "retenir": "Quand une équation donne deux racines opposées, on écarte explicitement celle qui sort de l'intervalle d'étude.",
        "id": "c5b-s0-1"
       },
       {
        "titre": "Un maximum bien justifié",
        "enonce": "On admet que $V'(h) = \\frac{3\\pi}{4}(12 - h^2)$ sur $]0\\,;6[$, et on note $h_0 = 2\\sqrt{3}$. Quel raisonnement établit correctement que $V$ admet en $h_0$ son maximum sur $]0\\,;6[$ ?",
        "reponse": 2,
        "choix": [
         "$V'(h_0) = 0$, donc $V$ admet un extremum en $h_0$ ; c'est un maximum car $V(h_0) > 0$.",
         "$V'(h) > 0$ sur $]0\\,;h_0[$ et $V'(h) < 0$ sur $]h_0\\,;6[$ : $V$ est croissante puis décroissante, d'où un maximum en $h_0$.",
         "$V(h_0) > V(3)$ et $V(h_0) > V(4)$, donc $V$ admet un maximum en $h_0$.",
         "$h_0$ est l'unique solution de $V'(h) = 0$ dans $]0\\,;6[$, c'est donc nécessairement un maximum."
        ],
        "indice": "Un seul argument permet de conclure : le comportement du signe de la dérivée de part et d'autre de $h_0$.",
        "explication": "Seul le deuxième raisonnement est complet : $12 - h^2 > 0$ pour $0 < h < 2\\sqrt{3}$ et $12 - h^2 < 0$ pour $2\\sqrt{3} < h < 6$, donc $V$ croît puis décroît et $V(h) \\leq V(h_0)$ pour tout $h$ de $]0\\,;6[$. L'annulation de $V'$ ne suffit pas (penser à $x \\mapsto x^3$) ; comparer quelques valeurs ne prouve rien pour toutes les autres ; l'unicité du point critique ne dit pas s'il s'agit d'un maximum ou d'un minimum.",
        "retenir": "Rédaction attendue : signe de la dérivée, tableau de variations, puis seulement la conclusion sur l'extremum.",
        "id": "c5b-s0-2"
       },
       {
        "titre": "Le rapport des volumes",
        "enonce": "On admet que le volume $V(h) = \\pi\\left(9h - \\frac{h^3}{4}\\right)$ du cylindre est maximal pour $h_0 = 2\\sqrt{3}$. Entrer le rapport du volume maximal du cylindre au volume de la boule de rayon 3, arrondi au centième.",
        "reponse": 0.58,
        "tolerance": 0.005,
        "indice": "Calcule d'abord $h_0^3 = (2\\sqrt{3})^3$ en valeur exacte ; le volume de la boule vaut $36\\pi$.",
        "explication": "$h_0^3 = 8 \\times 3\\sqrt{3} = 24\\sqrt{3}$, donc $V(h_0) = \\pi\\left(18\\sqrt{3} - 6\\sqrt{3}\\right) = 12\\sqrt{3}\\,\\pi$. La boule a pour volume $\\frac{4}{3}\\pi \\times 27 = 36\\pi$. Le rapport vaut $\\frac{12\\sqrt{3}}{36} = \\frac{\\sqrt{3}}{3} \\approx 0{,}58$ : le meilleur cylindre occupe environ 58 % de la boule.",
        "retenir": "Calculer en valeur exacte et n'arrondir qu'à la toute fin ; $(a\\sqrt{b})^3 = a^3 b\\sqrt{b}$.",
        "id": "c5b-s0-3"
       },
       {
        "titre": "La plus grande paroi",
        "enonce": "On admet que l'aire latérale du cylindre est $A(h) = \\pi h\\sqrt{36 - h^2}$ pour $h \\in\\, ]0\\,;6[$. Entrer la valeur maximale de $A(h)$, divisée par $\\pi$.",
        "reponse": 18,
        "indice": "$A(h) > 0$ : $A$ est maximale exactement là où $A(h)^2 = \\pi^2 h^2(36 - h^2)$ l'est. Pose $u = h^2$.",
        "explication": "Comme $A > 0$ et que la fonction carré est strictement croissante sur $[0\\,;+\\infty[$, $A$ et $A^2$ atteignent leur maximum au même point. Or $A(h)^2 = \\pi^2 u(36 - u)$ avec $u = h^2 \\in\\, ]0\\,;36[$ : ce trinôme en $u$ est maximal en $u = 18$, d'où $h = 3\\sqrt{2}$ et $A = \\pi \\times 3\\sqrt{2} \\times \\sqrt{18} = 18\\pi$. C'est exactement la moitié de l'aire de la sphère, $4\\pi \\times 9 = 36\\pi$.",
        "retenir": "Pour optimiser une quantité positive contenant une racine carrée, on peut optimiser son carré : l'extremum est atteint au même point.",
        "id": "c5b-s0-4"
       }
      ],
      "boss": "Le Minotaure de Cnossos",
      "monstre": "minotaure",
      "contexte": "Cicéron raconte avoir retrouvé à Syracuse le tombeau d'Archimède, orné d'une sphère inscrite dans un cylindre. On fait ici l'inverse : dans une boule de rayon 3 (en mètres), on inscrit un cylindre de révolution de hauteur $h$ et de rayon $r$, avec $0 < h < 6$, dont les deux cercles de base sont sur la sphère. On rappelle que le volume d'un cylindre est $\\pi r^2 h$, son aire latérale $2\\pi r h$, et que le volume d'une boule de rayon $R$ est $\\frac{4}{3}\\pi R^3$."
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $f$ est dérivable et strictement croissante sur $\\mathbb{R}$, alors $f'(x) > 0$ pour tout réel $x$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pense à une fonction strictement croissante dont la courbe admet une tangente horizontale.",
        "explication": "Faux. La fonction cube est strictement croissante sur $\\mathbb{R}$, mais sa dérivée $x \\mapsto 3x^2$ s'annule en 0. On a seulement $f'(x) \\geq 0$ pour tout réel $x$.",
        "retenir": "Strictement croissante entraîne $f' \\geq 0$, pas $f' > 0$ : la réciproque de « $f' > 0$ sur $I$ $\\Rightarrow$ $f$ strictement croissante sur $I$ » est fausse.",
        "id": "c5b-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x \\geq 0$, $x^3 + 16 \\geq 12x$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Étudie les variations de $g(x) = x^3 - 12x + 16$ sur $[0\\,;+\\infty[$.",
        "explication": "Vrai. Soit $g(x) = x^3 - 12x + 16$. $g'(x) = 3(x - 2)(x + 2)$ est négative sur $[0\\,;2]$ et positive sur $[2\\,;+\\infty[$ : sur $[0\\,;+\\infty[$, $g$ atteint son minimum en 2, et $g(2) = 8 - 24 + 16 = 0$. Donc $g(x) \\geq 0$ pour tout $x \\geq 0$. (Autre preuve : $g(x) = (x - 2)^2(x + 4)$.)",
        "retenir": "Pour démontrer $f(x) \\geq g(x)$ sur un intervalle, étudier $f - g$ et montrer que son minimum est positif ou nul.",
        "id": "c5b-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $f$ une fonction dérivable sur $[0\\,;+\\infty[$ telle que $f(0) = 0$ et $f'(x) \\leq 1$ pour tout $x \\geq 0$. Alors $f(x) \\leq x$ pour tout $x \\geq 0$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Étudie le sens de variation de $g(x) = x - f(x)$ sur $[0\\,;+\\infty[$.",
        "explication": "Vrai. Soit $g(x) = x - f(x)$. Alors $g'(x) = 1 - f'(x) \\geq 0$ : $g$ est croissante sur $[0\\,;+\\infty[$, donc pour tout $x \\geq 0$, $g(x) \\geq g(0) = 0$, c'est-à-dire $f(x) \\leq x$.",
        "retenir": "Pour comparer deux fonctions qui partent de la même valeur, étudier leur différence à l'aide de sa dérivée.",
        "id": "c5b-b0-2"
       }
      ]
     }
    ]
   }
  ],
  "sanctuaire": {
   "sceauxOr": 3,
   "salle": {
    "nom": "Le sanctuaire de Spinoza",
    "fond": "sanctuaire",
    "athena": "Ici, l'étude de fonction devient preuve : un minimum positif démontre une inégalité, et un contre-exemple bien choisi convainc toute une classe.",
    "notion": "Problèmes plus difficiles et regard de futur professeur",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#....................A.....#",
     "#...................###....#",
     "#........................T.#",
     "#.......................##.#",
     "#..........................#",
     "#....................##....S",
     "#J.G.T.............T.......S",
     "########PPPPPPPPPP##########",
     "########..........##########",
     "########..........##########",
     "########..........##########"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le rayon du cercle inscrit",
        "enonce": "D'après CAPES Mayotte 2021. Soit $f$ la fonction définie sur $]0\\,;1[$ par $f(x) = \\frac{x(1 - x)}{1 + x}$ (dans le sujet, elle sert à exprimer le rayon du cercle inscrit dans un triangle rectangle de périmètre 2). Calculer $f'(x)$, puis entrer $f'\\left(\\frac{1}{2}\\right)$ sous forme de fraction.",
        "reponse": -0.1111111111111111,
        "indice": "Écris $f(x) = \\frac{x - x^2}{1 + x}$ et applique la formule du quotient ; réduis le numérateur avant de remplacer.",
        "explication": "$f'(x) = \\frac{(1 - 2x)(1 + x) - (x - x^2)}{(1 + x)^2} = \\frac{1 - 2x - x^2}{(1 + x)^2}$. En $\\frac{1}{2}$ : le numérateur vaut $1 - 1 - \\frac{1}{4} = -\\frac{1}{4}$ et le dénominateur $\\frac{9}{4}$, d'où $f'\\left(\\frac{1}{2}\\right) = -\\frac{1}{9}$.",
        "retenir": "Pour la dérivée d'un quotient, développer et réduire le numérateur : c'est lui qui porte le signe de $f'$.",
        "id": "c5s-s0-0"
       },
       {
        "titre": "Le meilleur paramètre",
        "enonce": "D'après CAPES Mayotte 2021. Soit $f$ la fonction définie sur $]0\\,;1[$ par $f(x) = \\frac{x(1 - x)}{1 + x}$. On admet que $f'(x) = \\frac{1 - 2x - x^2}{(1 + x)^2}$. La fonction $f$ admet un maximum en un réel $x_0$. Entrer $x_0$, arrondi au centième.",
        "reponse": 0.41,
        "tolerance": 0.005,
        "indice": "Résous $1 - 2x - x^2 = 0$ et ne garde que la racine située dans $]0\\,;1[$.",
        "explication": "$x^2 + 2x - 1 = 0$ a pour discriminant 8 et pour racines $-1 - \\sqrt{2}$ et $-1 + \\sqrt{2}$. Seule $x_0 = \\sqrt{2} - 1 \\approx 0{,}41$ est dans $]0\\,;1[$. Le numérateur $1 - 2x - x^2$ est positif sur $]0\\,;x_0[$ et négatif sur $]x_0\\,;1[$ : $f$ croît puis décroît, d'où le maximum en $x_0$.",
        "retenir": "Un maximum se justifie par le changement de signe de $f'$ ; seules comptent les racines situées dans l'intervalle d'étude.",
        "id": "c5s-s0-1"
       },
       {
        "titre": "Le rayon maximal",
        "enonce": "D'après CAPES Mayotte 2021. Soit $f$ la fonction définie sur $]0\\,;1[$ par $f(x) = \\frac{x(1 - x)}{1 + x}$. On admet que $f$ atteint son maximum en $x_0 = \\sqrt{2} - 1$, qui vérifie $x_0^2 = 1 - 2x_0$. Calculer la valeur exacte de $f(x_0)$, puis l'entrer arrondie au millième.",
        "reponse": 0.172,
        "tolerance": 0.0005,
        "indice": "Remplace $x_0^2$ par $1 - 2x_0$ dans $x_0 - x_0^2$ : le numérateur devient une expression du premier degré en $x_0$.",
        "explication": "$f(x_0) = \\frac{x_0 - x_0^2}{1 + x_0} = \\frac{x_0 - 1 + 2x_0}{1 + x_0} = \\frac{3x_0 - 1}{1 + x_0}$. Avec $x_0 = \\sqrt{2} - 1$ : $\\frac{3\\sqrt{2} - 4}{\\sqrt{2}} = 3 - \\frac{4}{\\sqrt{2}} = 3 - 2\\sqrt{2} \\approx 0{,}172$. C'est le rayon du cercle inscrit dans le triangle rectangle isocèle de périmètre 2.",
        "retenir": "Pour évaluer une expression en une racine $x_0$ d'un trinôme, utiliser l'équation vérifiée par $x_0$ pour abaisser les degrés.",
        "id": "c5s-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "La meilleure constante",
        "enonce": "Entrer le plus grand réel $k$ tel que, pour tout réel $x$, $x^4 - 4x \\geq k$.",
        "reponse": -3,
        "indice": "Le plus grand $k$ qui convient est le minimum de $f : x \\mapsto x^4 - 4x$ sur $\\mathbb{R}$ ; étudie ses variations.",
        "explication": "$f'(x) = 4x^3 - 4 = 4(x - 1)(x^2 + x + 1)$, et $x^2 + x + 1 > 0$ (discriminant $-3$). Donc $f$ est décroissante sur $]-\\infty\\,;1]$ et croissante sur $[1\\,;+\\infty[$ : son minimum est $f(1) = -3$. L'inégalité est vraie pour $k = -3$, et fausse pour tout $k > -3$ (prendre $x = 1$). Donc $k = -3$.",
        "retenir": "« Le plus grand $k$ tel que $f(x) \\geq k$ pour tout $x$ » est le minimum de $f$ : prouver que $k$ convient, puis qu'aucun réel plus grand ne convient.",
        "id": "c5s-s1-0"
       },
       {
        "titre": "Compter les solutions",
        "enonce": "Programme de Terminale (théorème des valeurs intermédiaires). Entrer le nombre de solutions réelles de l'équation $x^3 - 3x + 1 = 0$.",
        "reponse": 3,
        "indice": "Étudie les variations de $f(x) = x^3 - 3x + 1$ et le signe de ses extremums locaux.",
        "explication": "$f'(x) = 3(x - 1)(x + 1)$ : $f$ croît sur $]-\\infty\\,;-1]$, décroît sur $[-1\\,;1]$, croît sur $[1\\,;+\\infty[$, avec $f(-1) = 3 > 0$ et $f(1) = -1 < 0$. Comme $f(-2) = -1$ et $f(2) = 3$, le théorème des valeurs intermédiaires, appliqué sur chaque intervalle où $f$ est continue et strictement monotone, donne exactement une solution dans $]-2\\,;-1[$, une dans $]-1\\,;1[$ et une dans $]1\\,;2[$ ; il n'y en a pas d'autre, car $f(x) \\leq -1$ pour $x \\leq -2$ et $f(x) \\geq 3$ pour $x \\geq 2$. Donc 3 solutions.",
        "retenir": "Compter les solutions de $f(x) = 0$ : tableau de variations, signe des extremums, puis théorème des valeurs intermédiaires sur chaque intervalle de stricte monotonie.",
        "id": "c5s-s1-1"
       },
       {
        "titre": "Le point le plus proche",
        "enonce": "Dans un repère orthonormé, on considère la courbe $\\mathcal{C}$ de la fonction racine carrée et le point $A\\left(\\frac{21}{2}\\,;0\\right)$. Pour $x \\geq 0$, on note $M$ le point de $\\mathcal{C}$ d'abscisse $x$. Entrer l'abscisse du point de $\\mathcal{C}$ le plus proche de $A$.",
        "reponse": 10,
        "indice": "La distance $AM$ est minimale là où $AM^2$ l'est : exprime $AM^2$ en fonction de $x$, sans racine carrée.",
        "explication": "$AM^2 = \\left(x - \\frac{21}{2}\\right)^2 + (\\sqrt{x})^2 = \\left(x - \\frac{21}{2}\\right)^2 + x$. Sa dérivée, $2\\left(x - \\frac{21}{2}\\right) + 1 = 2x - 20$, est négative sur $[0\\,;10[$ et positive sur $]10\\,;+\\infty[$ : $AM^2$, donc $AM$, est minimale en $x = 10$. Le point cherché est $(10\\,;\\sqrt{10})$.",
        "retenir": "Pour minimiser une distance, minimiser son carré : la racine carrée étant strictement croissante, l'extremum est atteint au même point.",
        "effet": "passerelle",
        "id": "c5s-s1-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Une erreur de dérivation",
        "enonce": "Un élève de Première écrit : « $f(x) = (3x - 1)^2$, donc $f'(x) = 2(3x - 1)$. » Quel diagnostic est correct ?",
        "reponse": 1,
        "choix": [
         "Il a oublié le facteur 3 : $f'(x) = 3 \\times 2(3x - 1) = 6(3x - 1)$.",
         "Il aurait dû développer d'abord : on ne sait pas dériver le carré d'une expression en Première.",
         "Il a oublié de dériver la constante $-1$ : $f'(x) = 2(3x - 1) - 1$.",
         "Il n'y a pas d'erreur."
        ],
        "indice": "Vérifie en développant : $(3x - 1)^2 = 9x^2 - 6x + 1$.",
        "explication": "En développant, $f(x) = 9x^2 - 6x + 1$, donc $f'(x) = 18x - 6 = 6(3x - 1)$, et non $2(3x - 1)$. L'élève a appliqué $(X^2)' = 2X$ en oubliant le facteur $a = 3$ de la règle $(g(ax + b))' = a\\,g'(ax + b)$. Le faire développer lui permet de constater l'erreur par lui-même.",
        "retenir": "Pour convaincre un élève, lui faire vérifier le résultat par une seconde méthode (ici, développer) plutôt que lui réciter la règle.",
        "id": "c5s-s2-0"
       },
       {
        "titre": "Le bon contre-exemple",
        "enonce": "Programme de Terminale (continuité). Pour convaincre une classe qu'une fonction continue en un point n'est pas forcément dérivable en ce point, quel exemple choisir ?",
        "reponse": 4,
        "choix": [
         "La fonction $x \\mapsto x^2$ en 0.",
         "La fonction inverse $x \\mapsto \\frac{1}{x}$ en 0.",
         "La fonction racine carrée en 1.",
         "La fonction $x \\mapsto |x|$ en 0."
        ],
        "indice": "L'exemple doit vérifier l'hypothèse (continuité au point choisi) et contredire la conclusion (dérivabilité en ce point).",
        "explication": "La valeur absolue est continue en 0, et son taux d'accroissement $\\frac{|h|}{h}$ vaut 1 pour $h > 0$ et $-1$ pour $h < 0$ : il n'a pas de limite, donc elle n'est pas dérivable en 0 (point anguleux visible sur la courbe). La fonction carré est dérivable en 0, la racine carrée est dérivable en 1, et la fonction inverse n'est même pas définie en 0.",
        "retenir": "Un bon contre-exemple vérifie toutes les hypothèses et contredit la conclusion ; la valeur absolue en 0 est l'exemple de référence.",
        "id": "c5s-s2-1"
       },
       {
        "titre": "Un tableau de variations faux",
        "enonce": "Un élève écrit : « Pour $f(x) = \\frac{1}{x}$, on a $f'(x) = -\\frac{1}{x^2} < 0$ pour tout $x \\neq 0$, donc $f$ est décroissante sur $\\mathbb{R}^*$ et $f(-1) > f(1)$. » Or $f(-1) = -1 < 1 = f(1)$. Quelle est l'erreur ?",
        "reponse": 3,
        "choix": [
         "Le calcul de la dérivée est faux : $f'(x) = \\frac{1}{x^2}$.",
         "Une dérivée strictement négative ne suffit pas à prouver la décroissance : il faut aussi étudier les limites.",
         "Le lien entre signe de $f'$ et variations ne vaut que sur un intervalle : $f$ est décroissante sur $]-\\infty\\,;0[$ et sur $]0\\,;+\\infty[$, pas sur leur réunion.",
         "$f$ est bien décroissante sur $\\mathbb{R}^*$ : l'élève s'est seulement trompé en calculant $f(-1)$."
        ],
        "indice": "Relis l'hypothèse du théorème qui relie le signe de $f'$ au sens de variation : sur quel type d'ensemble s'applique-t-il ?",
        "explication": "Le théorème « $f' < 0$ sur $I$ entraîne $f$ strictement décroissante sur $I$ » exige que $I$ soit un intervalle. $\\mathbb{R}^*$ n'en est pas un : $f$ est décroissante sur $]-\\infty\\,;0[$ et sur $]0\\,;+\\infty[$, mais pas sur leur réunion, comme le montre $f(-1) < f(1)$. Le calcul de $f'$ est juste.",
        "retenir": "Le signe de $f'$ donne les variations sur un intervalle ; un tableau de variations se découpe aux valeurs interdites.",
        "id": "c5s-s2-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $f$ une fonction dérivable sur $\\mathbb{R}$ dont la dérivée $f'$ est croissante sur $\\mathbb{R}$. Alors la courbe de $f$ est au-dessus de chacune de ses tangentes. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Fixe $a$ et étudie les variations de la différence entre $f(x)$ et l'ordonnée du point d'abscisse $x$ de la tangente en $a$.",
        "explication": "Vrai. Soit $a$ un réel et $g(x) = f(x) - f'(a)(x - a) - f(a)$. Alors $g'(x) = f'(x) - f'(a)$, négative ou nulle pour $x \\leq a$ et positive ou nulle pour $x \\geq a$, car $f'$ est croissante. Donc $g$ est décroissante sur $]-\\infty\\,;a]$, croissante sur $[a\\,;+\\infty[$, et $g(x) \\geq g(a) = 0$ : la courbe est au-dessus de sa tangente en $a$. En Terminale, une telle fonction est dite convexe.",
        "retenir": "Position courbe-tangente : étudier $g(x) = f(x) - [f'(a)(x - a) + f(a)]$, qui s'annule en $a$, à l'aide de sa dérivée.",
        "id": "c5s-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soient $f$ et $g$ deux fonctions dérivables sur $\\mathbb{R}$ telles que $f(0) = g(0)$ et $f'(x) \\leq g'(x)$ pour tout réel $x$. Alors $f(x) \\leq g(x)$ pour tout réel $x$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Regarde ce qui se passe pour $x < 0$, avec deux fonctions affines bien choisies.",
        "explication": "Faux. Avec $f(x) = 0$ et $g(x) = x$ : $f(0) = g(0)$ et $f'(x) = 0 \\leq 1 = g'(x)$, mais $f(-1) = 0 > -1 = g(-1)$. La différence $g - f$ est croissante et nulle en 0 : elle est positive pour $x \\geq 0$, mais négative pour $x \\leq 0$.",
        "retenir": "Une fonction croissante et nulle en 0 est positive à droite de 0 et négative à gauche : attention au domaine d'une inégalité.",
        "id": "c5s-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Soit $f$ une fonction dérivable sur $\\mathbb{R}$. Si $f'$ est paire, alors $f$ est impaire. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Ajoute une constante non nulle à une fonction impaire.",
        "explication": "Faux. Pour $f(x) = x + 1$, la dérivée $f'(x) = 1$ est paire, mais $f(0) = 1 \\neq 0$, alors qu'une fonction impaire sur $\\mathbb{R}$ vérifie $f(0) = 0$. (Si $f'$ est paire, c'est $f - f(0)$ qui est impaire : la constante empêche la réciproque.)",
        "retenir": "Une fonction impaire définie en 0 vérifie $f(0) = 0$. Une dérivée ne détermine une fonction qu'à une constante près.",
        "id": "c5s-b0-2"
       }
      ]
     }
    ]
   }
  }
 },
 {
  "niveau": "Semaine 6",
  "titre": "Fonction exponentielle",
  "introduction": "Voici la fonction qui est sa propre dérivée : $\\exp' = \\exp$ et $\\exp(0) = 1$. De cette seule propriété naissent toutes les autres : elle change les sommes en produits, ne s'annule jamais et croît sans cesse. Partout où une grandeur varie en proportion d'elle-même (une population, la dose d'un médicament, l'écart de température d'un plat qui refroidit), c'est elle que tu retrouves.",
  "conclusion": "Emporte deux réflexes : ramener toute équation à $e^{a} = e^{b}$ ou à un second degré en $X = e^{x} > 0$, et dériver $e^{u}$ en $u'e^{u}$. Le reste, signe, variations et modèles, découle de la positivité et de la stricte croissance de l'exponentielle.",
  "salles": [
   {
    "nom": "La goutte de Lucrèce",
    "fond": "crepuscule",
    "athena": "L'exponentielle change les sommes en produits : $e^{a+b} = e^{a}e^{b}$. Toutes ses règles de calcul en découlent, comme pour les puissances du collège.",
    "notion": "Définition et propriétés algébriques",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.........................A#",
     "#........................###",
     "#...........D..............#",
     "#.........####........###..S",
     "#J.G...T............T......S",
     "###############...##########"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Puissances d'exponentielle",
        "enonce": "On pose $A = \\dfrac{(e^{3})^{2} \\times e^{-4}}{e^{-1}}$. Le nombre $A$ s'écrit $e^{n}$ avec $n$ entier. Entrer $n$.",
        "reponse": 3,
        "indice": "Utilise $(e^{a})^{k} = e^{ka}$, $e^{a}e^{b} = e^{a+b}$ et $\\frac{e^{a}}{e^{b}} = e^{a-b}$, en surveillant les signes.",
        "explication": "$(e^{3})^{2} = e^{6}$, donc le numérateur vaut $e^{6-4} = e^{2}$, et $A = \\frac{e^{2}}{e^{-1}} = e^{2-(-1)} = e^{3}$. Donc $n = 3$. Les pièges : écrire $(e^{3})^{2} = e^{9}$, ou oublier que diviser par $e^{-1}$ revient à multiplier par $e$.",
        "retenir": "$e^{a+b} = e^{a}e^{b}$, $e^{a-b} = \\frac{e^{a}}{e^{b}}$, $(e^{a})^{k} = e^{ka}$ : les règles des puissances valent pour l'exponentielle.",
        "id": "c6r1-s0-0"
       },
       {
        "titre": "Une différence de carrés",
        "enonce": "Pour tout réel $x$, on pose $B(x) = (e^{x} + e^{-x})^{2} - (e^{x} - e^{-x})^{2}$. Cette expression ne dépend pas de $x$. Entrer sa valeur.",
        "reponse": 4,
        "indice": "Développe les deux carrés : que vaut le produit $e^{x} \\times e^{-x}$ ?",
        "explication": "$(e^{x}+e^{-x})^{2} = e^{2x} + 2e^{x}e^{-x} + e^{-2x} = e^{2x} + 2 + e^{-2x}$, car $e^{x}e^{-x} = e^{0} = 1$. De même, $(e^{x}-e^{-x})^{2} = e^{2x} - 2 + e^{-2x}$. La différence vaut $4$ pour tout réel $x$ (c'est aussi $(a+b)^{2} - (a-b)^{2} = 4ab$ avec $ab = 1$).",
        "retenir": "$e^{x} \\times e^{-x} = e^{0} = 1$ : $e^{-x}$ est l'inverse de $e^{x}$, pas son opposé.",
        "id": "c6r1-s0-1"
       },
       {
        "titre": "Une équation fonctionnelle",
        "enonce": "Soit $f$ une fonction définie sur $\\mathbb{R}$ telle que, pour tous réels $a$ et $b$, $f(a+b) = f(a) \\times f(b)$, et telle que $f(1) = 3$. Entrer $f(-2)$, sous forme de fraction.",
        "reponse": 0.1111111111111111,
        "indice": "Choisis d'abord $a = 1$ et $b = 0$ pour obtenir $f(0)$, puis $a = 1$ et $b = -1$.",
        "explication": "Avec $a = 1$, $b = 0$ : $f(1) = f(1)f(0)$, et $f(1) = 3 \\neq 0$, donc $f(0) = 1$. Avec $a = 1$, $b = -1$ : $f(0) = f(1)f(-1)$, donc $f(-1) = \\frac{1}{3}$. Enfin, avec $a = b = -1$ : $f(-2) = f(-1)^{2} = \\frac{1}{9}$. C'est la relation fonctionnelle de l'exponentielle : ici $f(n) = 3^{n}$ pour tout entier $n$.",
        "retenir": "Si $f(a+b) = f(a)f(b)$ pour tous réels $a$ et $b$, et si $f$ n'est pas la fonction nulle, alors $f(0) = 1$ et $f(-a) = \\frac{1}{f(a)}$ : c'est le comportement des puissances.",
        "id": "c6r1-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "La méthode d'Euler",
        "enonce": "La fonction exponentielle est l'unique fonction $f$ dérivable sur $\\mathbb{R}$ telle que $f' = f$ et $f(0) = 1$. Pour approcher $e = f(1)$, on applique la méthode d'Euler de pas $h = 0{,}5$ : $y_0 = 1$ et $y_{n+1} = y_n + h \\times y_n$. Le nombre $y_2$ est alors une valeur approchée de $e$. Entrer $y_2$.",
        "reponse": 2.25,
        "indice": "Comme $f' = f$, on a $f(x+h) \\approx f(x) + h\\,f(x)$ : chaque pas multiplie par $1 + h$.",
        "explication": "$y_1 = 1 + 0{,}5 \\times 1 = 1{,}5$, puis $y_2 = 1{,}5 + 0{,}5 \\times 1{,}5 = 2{,}25$. C'est $(1{,}5)^{2}$ : une approximation grossière de $e \\approx 2{,}718$, qui s'améliore quand le pas diminue.",
        "retenir": "Méthode d'Euler pour $f' = f$ : $y_{n+1} = (1+h)\\,y_n$. Avec le pas $h = \\frac{1}{n}$, on obtient $e \\approx \\left(1+\\frac{1}{n}\\right)^{n}$.",
        "id": "c6r1-s1-0"
       },
       {
        "titre": "Une tangente remarquable",
        "enonce": "Dans un repère, on considère la courbe de la fonction exponentielle et sa tangente au point d'abscisse $3$. Cette tangente coupe l'axe des abscisses en un point. Entrer l'abscisse de ce point.",
        "reponse": 2,
        "indice": "La tangente au point d'abscisse $a$ a pour équation $y = \\exp'(a)(x-a) + \\exp(a)$, et $\\exp' = \\exp$.",
        "explication": "Comme $\\exp' = \\exp$, la tangente au point d'abscisse $3$ a pour équation $y = e^{3}(x-3) + e^{3} = e^{3}(x-2)$. Comme $e^{3} \\neq 0$, $y = 0$ équivaut à $x = 2$. Plus généralement, la tangente au point d'abscisse $a$ coupe l'axe des abscisses en $a - 1$.",
        "retenir": "Tangente à la courbe de exp au point d'abscisse $a$ : $y = e^{a}(x - a + 1)$ ; elle coupe l'axe des abscisses en $a - 1$.",
        "id": "c6r1-s1-1"
       },
       {
        "titre": "Pourquoi l'exponentielle ne s'annule pas",
        "enonce": "Soit $f$ une fonction dérivable sur $\\mathbb{R}$ telle que $f' = f$ et $f(0) = 1$. Pour démontrer que $f$ ne s'annule pas, on pose, pour tout réel $x$, $g(x) = f(x) \\times f(-x)$. Quelle rédaction est correcte ?",
        "reponse": 4,
        "choix": [
         "Pour tout réel $x$, $f'(x) = f(x) > 0$, donc $f$ est croissante et $f(x) \\ge f(0) = 1$.",
         "$g'(x) = f'(x)f(-x) + f(x)f'(-x) = 2g(x)$, donc $g$ ne s'annule pas.",
         "$f$ est la fonction exponentielle, qui est toujours strictement positive, donc $g(x) > 0$.",
         "$g'(x) = f'(x)f(-x) - f(x)f'(-x) = 0$, donc $g$ est constante, égale à $g(0) = 1$ ; ainsi $f(x)f(-x) = 1$ et $f(x) \\neq 0$."
        ],
        "indice": "La dérivée de $x \\mapsto f(-x)$ est $x \\mapsto -f'(-x)$ : c'est la dérivée de $x \\mapsto f(ax+b)$ avec $a = -1$.",
        "explication": "La dérivée d'un produit et celle de $x \\mapsto f(-x)$ donnent $g'(x) = f'(x)f(-x) - f(x)f'(-x) = f(x)f(-x) - f(x)f(-x) = 0$. Donc $g$ est constante sur $\\mathbb{R}$, égale à $g(0) = f(0)^{2} = 1$ : $f(x)f(-x) = 1$, donc $f(x) \\neq 0$. Les rédactions qui affirment $f > 0$ supposent ce qu'il faut démontrer ; celle qui écrit $+f(x)f'(-x)$ oublie le facteur $-1$.",
        "retenir": "Pour tout réel $x$, $e^{x} \\times e^{-x} = 1$ : l'exponentielle ne s'annule jamais, et $e^{-x} = \\frac{1}{e^{x}}$.",
        "id": "c6r1-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, $e^{x^{2}} = (e^{x})^{2}$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $(e^{x})^{2}$ sous la forme $e^{\\dots}$, puis teste $x = 1$.",
        "explication": "Faux. $(e^{x})^{2} = e^{2x}$. Pour $x = 1$ : $e^{1^{2}} = e$, alors que $(e^{1})^{2} = e^{2}$, et $e \\neq e^{2}$ car $e \\neq 1$. L'égalité n'a lieu que si $x^{2} = 2x$, c'est-à-dire pour $x = 0$ ou $x = 2$.",
        "retenir": "$(e^{x})^{2} = e^{2x}$, et non $e^{x^{2}}$ : on multiplie l'exposant par 2, on ne l'élève pas au carré.",
        "id": "c6r1-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, $\\sqrt{e^{x}} = e^{x/2}$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Un réel $y$ est égal à $\\sqrt{A}$ si et seulement si $y \\ge 0$ et $y^{2} = A$.",
        "explication": "Vrai. Pour tout réel $x$, $e^{x/2} > 0$ et $(e^{x/2})^{2} = e^{2 \\times x/2} = e^{x}$. Or $\\sqrt{e^{x}}$ est l'unique réel positif dont le carré vaut $e^{x}$ : donc $\\sqrt{e^{x}} = e^{x/2}$.",
        "retenir": "$\\sqrt{e^{x}} = e^{x/2}$ : la racine carrée divise l'exposant par 2, grâce à la positivité de l'exponentielle.",
        "id": "c6r1-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si une fonction $f$ dérivable sur $\\mathbb{R}$ vérifie $f' = f$, alors $f$ est la fonction exponentielle. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Cherche une fonction très simple égale à sa dérivée, ou multiplie l'exponentielle par une constante.",
        "explication": "Faux. La fonction nulle vérifie $f' = f$ sans être l'exponentielle ; de même, $f(x) = 2e^{x}$ vérifie $f'(x) = 2e^{x} = f(x)$, mais $f(0) = 2$. Il manque la condition $f(0) = 1$ : les fonctions telles que $f' = f$ sont exactement les fonctions $x \\mapsto Ce^{x}$, $C$ réel (car la dérivée de $x \\mapsto f(x)e^{-x}$ est alors nulle).",
        "retenir": "L'exponentielle est caractérisée par deux conditions : $f' = f$ et $f(0) = 1$. Sans la seconde, il y a une infinité de solutions.",
        "id": "c6r1-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Les leçons de Musonius",
    "fond": "mer",
    "athena": "L'exponentielle est strictement croissante : $e^{a} = e^{b}$ équivaut à $a = b$, et $e^{a} < e^{b}$ à $a < b$. Ramène-toi toujours à cette forme.",
    "notion": "Équations et inéquations",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....................A....#",
     "#....................###...S",
     "#J.G.T............T........S",
     "########PPPPPPP#############",
     "########.......#############",
     "########.......#############",
     "########.......#############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Égalité d'exponentielles",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'équation $e^{2x+1} = e^{7-x}$. Entrer la solution.",
        "reponse": 2,
        "indice": "$e^{a} = e^{b}$ équivaut à $a = b$.",
        "explication": "L'exponentielle est strictement croissante, donc $e^{2x+1} = e^{7-x}$ équivaut à $2x + 1 = 7 - x$, soit $3x = 6$, c'est-à-dire $x = 2$.",
        "retenir": "Pour tous réels $a$ et $b$ : $e^{a} = e^{b} \\iff a = b$.",
        "id": "c6r2-s0-0"
       },
       {
        "titre": "Le piège du carré",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'équation $\\dfrac{e^{x^{2}}}{e^{3}} = (e^{x})^{2}$. Entrer la plus petite solution.",
        "reponse": -1,
        "indice": "Écris chaque membre sous la forme $e^{\\dots}$ ; attention, $(e^{x})^{2}$ n'est pas $e^{x^{2}}$.",
        "explication": "L'équation s'écrit $e^{x^{2}-3} = e^{2x}$, c'est-à-dire $x^{2} - 3 = 2x$, soit $x^{2} - 2x - 3 = 0$. Le discriminant vaut $16$ ; les solutions sont $-1$ et $3$. La plus petite est $-1$.",
        "retenir": "Une équation $e^{u(x)} = e^{v(x)}$ se ramène à $u(x) = v(x)$, souvent une équation du second degré.",
        "id": "c6r2-s0-1"
       },
       {
        "titre": "Un second degré caché",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'équation $e^{2x} - (e^{3} + e^{4})\\,e^{x} + e^{7} = 0$. Entrer la somme des solutions.",
        "reponse": 7,
        "indice": "Avec $X = e^{x}$, on obtient $X^{2} - SX + P = 0$ : quels sont les deux nombres de somme $S = e^{3} + e^{4}$ et de produit $P = e^{7}$ ?",
        "explication": "Avec $X = e^{x}$ (donc $e^{2x} = X^{2}$), l'équation devient $X^{2} - (e^{3}+e^{4})X + e^{3}e^{4} = 0$, soit $(X - e^{3})(X - e^{4}) = 0$. Donc $e^{x} = e^{3}$ ou $e^{x} = e^{4}$, c'est-à-dire $x = 3$ ou $x = 4$. La somme vaut $7$ ; on la lit aussi sur le produit des racines : $e^{x_1}e^{x_2} = e^{x_1+x_2} = e^{7}$.",
        "retenir": "Équation en $e^{2x}$ et $e^{x}$ : poser $X = e^{x}$ (avec $X > 0$), résoudre le second degré, puis revenir à $x$.",
        "effet": "passerelle",
        "id": "c6r2-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Une inéquation",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'inéquation $e^{-x} \\ge e^{2x-6}$. L'ensemble des solutions est de la forme $]-\\infty\\,;a]$. Entrer $a$.",
        "reponse": 2,
        "indice": "L'exponentielle est strictement croissante : l'inégalité entre les exposants a le même sens.",
        "explication": "Comme l'exponentielle est strictement croissante, $e^{-x} \\ge e^{2x-6}$ équivaut à $-x \\ge 2x - 6$, soit $6 \\ge 3x$, c'est-à-dire $x \\le 2$. L'ensemble des solutions est $]-\\infty\\,;2]$.",
        "retenir": "Pour tous réels $a$ et $b$ : $e^{a} \\le e^{b} \\iff a \\le b$. L'exponentielle conserve l'ordre.",
        "id": "c6r2-s1-0"
       },
       {
        "titre": "Changement de variable",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'inéquation $e^{2x} + e^{x} - 2 < 0$. L'ensemble des solutions est de la forme $]-\\infty\\,;a[$. Entrer $a$.",
        "reponse": 0,
        "indice": "Pose $X = e^{x}$ et factorise $X^{2} + X - 2$, sans oublier que $X > 0$.",
        "explication": "Avec $X = e^{x}$, l'inéquation devient $X^{2} + X - 2 < 0$, soit $(X - 1)(X + 2) < 0$. Comme $X = e^{x} > 0$, on a $X + 2 > 0$ : l'inéquation équivaut à $X < 1$, soit $e^{x} < e^{0}$, c'est-à-dire $x < 0$. L'ensemble des solutions est $]-\\infty\\,;0[$.",
        "retenir": "Après le changement de variable $X = e^{x}$, garder la contrainte $X > 0$ : elle élimine des cas.",
        "id": "c6r2-s1-1"
       },
       {
        "titre": "Un tableau de signes",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'inéquation $(x^{2} - 9)(e^{x} - 1) \\le 0$. Entrer le nombre d'entiers relatifs de l'intervalle $[-6\\,;6]$ qui en sont solutions.",
        "reponse": 8,
        "indice": "Étudie séparément le signe de $x^{2} - 9$ et celui de $e^{x} - 1$ (compare $e^{x}$ à $e^{0}$), puis dresse un tableau de signes.",
        "explication": "$x^{2} - 9$ est négatif sur $[-3\\,;3]$ et positif ailleurs ; $e^{x} - 1$ est du signe de $x$, car $e^{x} > 1 \\iff x > 0$. Le produit est négatif ou nul sur $]-\\infty\\,;-3] \\cup [0\\,;3]$. Dans $[-6\\,;6]$, les entiers solutions sont $-6$, $-5$, $-4$, $-3$, $0$, $1$, $2$ et $3$ : il y en a $8$.",
        "retenir": "Un produit se traite par un tableau de signes, une ligne par facteur, sans oublier les valeurs qui l'annulent.",
        "id": "c6r2-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous réels $a$ et $b$, si $e^{a} < e^{b}$, alors $a < b$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Raisonne par contraposée : que se passe-t-il si $a \\ge b$ ?",
        "explication": "Vrai. Par contraposée : si $a \\ge b$, alors $e^{a} \\ge e^{b}$ car l'exponentielle est croissante, donc on n'a pas $e^{a} < e^{b}$. Ainsi, $e^{a} < e^{b}$ entraîne $a < b$ ; la réciproque est vraie aussi, par stricte croissance.",
        "retenir": "Une fonction strictement croissante conserve l'ordre dans les deux sens : $e^{a} < e^{b} \\iff a < b$.",
        "id": "c6r2-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « L'équation $e^{x^{2}} = e$ admet une unique solution réelle. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $e = e^{1}$, puis résous l'équation obtenue sur les exposants.",
        "explication": "Faux. $e^{x^{2}} = e^{1}$ équivaut à $x^{2} = 1$, soit $x = 1$ ou $x = -1$. Les réels $1$ et $-1$ sont deux solutions distinctes : $e^{(-1)^{2}} = e^{1} = e$.",
        "retenir": "$e^{u} = e^{v} \\iff u = v$ : le problème passe aux exposants, avec toutes leurs solutions (ici $x^{2} = 1$ en a deux).",
        "id": "c6r2-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « L'ensemble des solutions de l'inéquation $e^{1/x} > e$ est l'intervalle $]0\\,;1[$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "L'inéquation équivaut à $\\frac{1}{x} > 1$ ; attention au signe de $x$ avant de multiplier.",
        "explication": "Vrai. Par stricte croissance de l'exponentielle, $e^{1/x} > e^{1}$ équivaut à $\\frac{1}{x} > 1$, avec $x \\neq 0$. Si $x < 0$, alors $\\frac{1}{x} < 0 < 1$ : pas de solution. Si $x > 0$, on multiplie par $x > 0$ : $1 > x$. L'ensemble des solutions est bien $]0\\,;1[$.",
        "retenir": "Avant de multiplier une inégalité par $x$, connaître le signe de $x$ ; sinon, distinguer les cas.",
        "id": "c6r2-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le banquet de Plutarque",
    "fond": "bibliotheque",
    "athena": "La règle d'or : la dérivée de $e^{u}$ est $u'e^{u}$. L'exposant ne bouge pas ; sa dérivée vient multiplier.",
    "notion": "Dérivées et études de fonctions",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................S",
     "#J.G.T......T..H.......R.A.S",
     "########...#####.......#####"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Une exponentielle affine",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = e^{-3x+2}$. Entrer $f'\\left(\\frac{2}{3}\\right)$.",
        "reponse": -3,
        "indice": "La dérivée de $x \\mapsto e^{ax+b}$ est $x \\mapsto a\\,e^{ax+b}$.",
        "explication": "Pour tout réel $x$, $f'(x) = -3e^{-3x+2}$. Donc $f'\\left(\\frac{2}{3}\\right) = -3e^{-2+2} = -3e^{0} = -3$. Oublier le facteur $-3$ donnerait $1$ : c'est l'erreur la plus fréquente.",
        "retenir": "$(e^{ax+b})' = a\\,e^{ax+b}$ : le coefficient de $x$ vient devant, l'exponentielle reste inchangée.",
        "id": "c6r3-s0-0"
       },
       {
        "titre": "Un exposant du second degré",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = e^{x^{2}-2x}$. Entrer $f'(0)$.",
        "reponse": -2,
        "indice": "La dérivée de $e^{u}$ est $u'e^{u}$ ; ici $u(x) = x^{2} - 2x$.",
        "explication": "Avec $u(x) = x^{2} - 2x$, on a $u'(x) = 2x - 2$, donc $f'(x) = (2x - 2)e^{x^{2}-2x}$ et $f'(0) = -2 \\times e^{0} = -2$. Attention : la dérivée de $e^{u}$ n'est pas $u\\,e^{u-1}$, règle des puissances qui ne s'applique pas ici.",
        "retenir": "$(e^{u})' = u'e^{u}$ : on multiplie par la dérivée de l'exposant, sans toucher à l'exposant.",
        "id": "c6r3-s0-1"
       },
       {
        "titre": "Une équation différentielle",
        "enonce": "On cherche les réels $a$ tels que la fonction $f : x \\mapsto e^{ax}$ vérifie, pour tout réel $x$, $f''(x) + f'(x) - 6f(x) = 0$, où $f''$ désigne la dérivée de $f'$. Entrer la valeur positive de $a$.",
        "reponse": 2,
        "indice": "Exprime $f'(x)$ et $f''(x)$ à l'aide de $e^{ax}$, puis factorise par $e^{ax}$, qui ne s'annule pas.",
        "explication": "$f'(x) = a\\,e^{ax}$ et $f''(x) = a^{2}e^{ax}$. La condition s'écrit $(a^{2} + a - 6)e^{ax} = 0$ pour tout réel $x$ ; comme $e^{ax} > 0$, elle équivaut à $a^{2} + a - 6 = 0$, soit $(a - 2)(a + 3) = 0$. Donc $a = 2$ ou $a = -3$ ; la valeur positive est $2$.",
        "retenir": "Pour $f(x) = e^{ax}$, dériver revient à multiplier par $a$ : $f' = af$ et $f'' = a^{2}f$. Une telle équation se ramène au second degré.",
        "id": "c6r3-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Un minimum",
        "enonce": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (x-3)e^{x}$. Elle admet un minimum sur $\\mathbb{R}$. Entrer l'abscisse du point où il est atteint.",
        "reponse": 2,
        "indice": "Dérive le produit $(x-3) \\times e^{x}$, puis factorise par $e^{x}$.",
        "explication": "$f'(x) = 1 \\times e^{x} + (x-3)e^{x} = (x-2)e^{x}$. Comme $e^{x} > 0$, $f'(x)$ a le signe de $x - 2$ : $f$ est décroissante sur $]-\\infty\\,;2]$ et croissante sur $[2\\,;+\\infty[$. Le minimum est atteint en $x = 2$ ; il vaut $-e^{2}$.",
        "retenir": "$\\big((ax+b)e^{x}\\big)' = (ax + a + b)e^{x}$ : le signe de la dérivée est celui d'un facteur affine.",
        "id": "c6r3-s1-0"
       },
       {
        "titre": "Un maximum",
        "enonce": "Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x) = (x+1)e^{-x}$. Entrer le maximum de $g$ sur $\\mathbb{R}$.",
        "reponse": 1,
        "indice": "La dérivée de $x \\mapsto e^{-x}$ est $x \\mapsto -e^{-x}$ : attention au signe.",
        "explication": "$g'(x) = e^{-x} + (x+1)(-e^{-x}) = -x\\,e^{-x}$. Comme $e^{-x} > 0$, $g'(x)$ est du signe de $-x$ : $g$ est croissante sur $]-\\infty\\,;0]$ et décroissante sur $[0\\,;+\\infty[$. Son maximum est $g(0) = 1$.",
        "retenir": "$(e^{-x})' = -e^{-x}$ : oublier ce signe moins inverse tout le tableau de variations.",
        "id": "c6r3-s1-1"
       },
       {
        "titre": "Une tangente sous condition",
        "enonce": "Pour tout réel $k$, on note $f_k$ la fonction définie sur $\\mathbb{R}$ par $f_k(x) = (x+k)e^{x}$. Déterminer le réel $k$ tel que la tangente à la courbe de $f_k$ au point d'abscisse $0$ passe par le point $A(-3\\,;0)$. Entrer $k$, sous forme de fraction ou de décimal.",
        "reponse": -1.5,
        "indice": "Calcule $f_k(0)$ et $f_k'(0)$, écris l'équation de la tangente, puis traduis « $A$ appartient à la tangente ».",
        "explication": "$f_k'(x) = e^{x} + (x+k)e^{x} = (x+k+1)e^{x}$, donc $f_k(0) = k$ et $f_k'(0) = k+1$. La tangente a pour équation $y = (k+1)x + k$. Elle passe par $A(-3\\,;0)$ si et seulement si $0 = -3(k+1) + k = -2k - 3$, soit $k = -\\frac{3}{2}$.",
        "retenir": "Tangente en $a$ : $y = f'(a)(x-a) + f(a)$. « Le point est sur la droite » se traduit par une équation d'inconnue le paramètre.",
        "id": "c6r3-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $f(x) = e^{x} \\times e^{x}$ pour tout réel $x$, alors $f'(x) = e^{x} \\times e^{x}$ pour tout réel $x$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $f(x) = e^{2x}$, ou dérive le produit avec $(uv)' = u'v + uv'$.",
        "explication": "Faux. $f(x) = e^{2x}$, donc $f'(x) = 2e^{2x}$. En $x = 0$ : $f'(0) = 2$, alors que $e^{0} \\times e^{0} = 1$. L'erreur consiste à dériver un produit en multipliant les dérivées ; en fait $(uv)' = u'v + uv' = 2e^{x}e^{x}$.",
        "retenir": "La dérivée d'un produit n'est pas le produit des dérivées : $(uv)' = u'v + uv'$.",
        "id": "c6r3-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La fonction $f : x \\mapsto x\\,e^{x}$ est croissante sur $\\mathbb{R}$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule $f'(x)$ et étudie son signe pour $x < -1$.",
        "explication": "Faux. $f'(x) = (x+1)e^{x}$ est strictement négative sur $]-\\infty\\,;-1[$. Contre-exemple explicite : $-2 < -1$, mais $f(-2) - f(-1) = -2e^{-2} + e^{-1} = e^{-2}(e - 2) > 0$, donc $f(-2) > f(-1)$.",
        "retenir": "Pour réfuter « $f$ est croissante sur $\\mathbb{R}$ », il suffit d'exhiber $a < b$ avec $f(a) > f(b)$.",
        "id": "c6r3-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La fonction $x \\mapsto e^{-x^{2}}$ admet sur $\\mathbb{R}$ un maximum égal à $1$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare $-x^{2}$ à $0$, ou étudie le signe de la dérivée $-2x\\,e^{-x^{2}}$.",
        "explication": "Vrai. Pour tout réel $x$, $-x^{2} \\le 0$, donc $e^{-x^{2}} \\le e^{0} = 1$ par croissance de l'exponentielle, avec égalité pour $x = 0$. La dérivée $-2x\\,e^{-x^{2}}$, du signe de $-x$, confirme : la fonction croît sur $]-\\infty\\,;0]$ puis décroît sur $[0\\,;+\\infty[$.",
        "retenir": "Comparer les exposants suffit parfois : $u(x) \\le 0$ entraîne $e^{u(x)} \\le 1$.",
        "id": "c6r3-b0-2"
       }
      ]
     }
    ],
    "acrobaties": [
     {
      "titre": "La faille de la démonstration",
      "enonce": "Un élève veut démontrer que, pour tout réel $x$, $e^{x} \\ge 1 + x$. Il écrit : (1) Soit $g(x) = e^{x} - 1 - x$. (2) Pour tout réel $x$, $g'(x) = e^{x} - 1$. (3) Or $e^{x} \\ge 1$, donc $g'(x) \\ge 0$ et $g$ est croissante sur $\\mathbb{R}$. (4) Donc $g(x) \\ge g(0) = 0$. Quelle est la première étape fausse ?",
      "reponse": 3,
      "choix": [
       "L'étape (1)",
       "L'étape (2)",
       "L'étape (3)",
       "Aucune : la démonstration est correcte"
      ],
      "indice": "Teste l'affirmation « $e^{x} \\ge 1$ » pour $x = -1$.",
      "explication": "L'étape (3) est fausse : $e^{x} \\ge 1$ seulement pour $x \\ge 0$ ; par exemple $e^{-1} < 1$. En réalité, $g'(x)$ a le signe de $x$ : $g$ est décroissante sur $]-\\infty\\,;0]$ et croissante sur $[0\\,;+\\infty[$, donc son minimum est $g(0) = 0$, et $g(x) \\ge 0$ pour tout réel $x$. L'étape (4) est d'ailleurs fautive elle aussi : si $g$ est croissante, $g(x) \\le g(0)$ pour $x \\le 0$. La conclusion est vraie, mais la preuve de l'élève ne vaut que pour $x \\ge 0$.",
      "retenir": "Pour tout réel $x$, $e^{x} \\ge 1 + x$ : la courbe de exp est au-dessus de sa tangente en 0. On le prouve par un minimum, pas par une croissance globale.",
      "id": "c6r3-h0",
      "figure": "salto"
     }
    ]
   },
   {
    "nom": "Le tonneau de Diogène",
    "fond": "temple",
    "athena": "À durées égales, facteurs égaux : $e^{(n+1)a} = e^{a} \\times e^{na}$. Une grandeur qui varie proportionnellement à elle-même suit un modèle exponentiel.",
    "notion": "Suites et modèles exponentiels",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#............T........A....#",
     "#...........###......###...#",
     "#..........................#",
     "#...............###........#",
     "#..........................#",
     "#...........###............#",
     "#..........................#",
     "#.......###................S",
     "#J.G..T....................S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Une suite géométrique",
        "enonce": "Pour tout entier naturel $n$, on pose $u_n = e^{1-2n}$. La suite $(u_n)$ est géométrique et sa raison s'écrit $e^{k}$. Entrer $k$.",
        "reponse": -2,
        "indice": "Calcule le quotient $\\frac{u_{n+1}}{u_n}$ avec la règle $\\frac{e^{a}}{e^{b}} = e^{a-b}$.",
        "explication": "Pour tout entier $n$, $u_n > 0$ et $\\frac{u_{n+1}}{u_n} = \\frac{e^{1-2(n+1)}}{e^{1-2n}} = e^{(-1-2n)-(1-2n)} = e^{-2}$. La suite est géométrique de raison $e^{-2}$ et de premier terme $u_0 = e$ : $k = -2$.",
        "retenir": "$u_n = e^{an+b}$ définit une suite géométrique de raison $e^{a}$ : $u_{n+1} = e^{a} \\times u_n$.",
        "id": "c6r4-s0-0"
       },
       {
        "titre": "Un produit de termes",
        "enonce": "Pour tout entier naturel $n$, on pose $u_n = e^{2n+1}$. Le produit $P = u_0 \\times u_1 \\times \\cdots \\times u_9$ s'écrit $e^{N}$. Entrer $N$.",
        "reponse": 100,
        "indice": "Le produit des exponentielles est l'exponentielle de la somme : il reste à sommer les termes d'une suite arithmétique.",
        "explication": "$P = e^{1+3+5+\\cdots+19}$. Les exposants forment une suite arithmétique de 10 termes, de premier terme $1$ et de dernier terme $19$ : leur somme vaut $10 \\times \\frac{1+19}{2} = 100$. Donc $N = 100$.",
        "retenir": "Somme de termes consécutifs d'une suite arithmétique : nombre de termes × (premier + dernier) / 2.",
        "id": "c6r4-s0-1"
       },
       {
        "titre": "Le plus grand terme",
        "enonce": "Pour tout entier naturel $n$, on pose $u_n = n^{2}e^{-n}$. En étudiant la fonction $f : x \\mapsto x^{2}e^{-x}$ sur $[0\\,;+\\infty[$, déterminer l'entier $n$ pour lequel $u_n$ est le plus grand terme de la suite. Entrer cet entier.",
        "reponse": 2,
        "indice": "Dérive le produit $x^{2} \\times e^{-x}$ et factorise : le signe de $f'(x)$ est celui d'un trinôme.",
        "explication": "$f'(x) = 2x\\,e^{-x} - x^{2}e^{-x} = x(2-x)e^{-x}$. Sur $[0\\,;+\\infty[$, $f'$ est positive sur $[0\\,;2]$ et négative sur $[2\\,;+\\infty[$ : $f$ croît strictement puis décroît strictement, avec un maximum en $2$. Comme $u_n = f(n)$ et que $2$ est un entier, le plus grand terme est $u_2 = 4e^{-2} \\approx 0{,}54$.",
        "retenir": "Si $u_n = f(n)$ et si $f$ est monotone sur $[p\\,;+\\infty[$, alors $(u_n)$ a la même monotonie à partir du rang $p$ ; la réciproque est fausse.",
        "id": "c6r4-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Des bactéries dans le lagon",
        "enonce": "Dans un échantillon d'eau prélevé dans le lagon, le nombre de bactéries est modélisé par $N(t) = 2000\\,e^{0{,}3t}$, où $t$ est le temps en heures. Il existe un réel $k$ tel que, pour tout $t \\ge 0$, $N'(t) = k\\,N(t)$. Entrer $k$.",
        "reponse": 0.3,
        "indice": "Dérive $t \\mapsto e^{0{,}3t}$ : c'est une exponentielle de la forme $e^{at}$.",
        "explication": "$N'(t) = 2000 \\times 0{,}3\\,e^{0{,}3t} = 0{,}3\\,N(t)$. Donc $k = 0{,}3$ : la vitesse de croissance est proportionnelle à l'effectif, ce qui caractérise un modèle exponentiel.",
        "retenir": "$N(t) = N_0e^{kt}$ vérifie $N' = kN$ : croissance si $k > 0$, décroissance si $k < 0$.",
        "id": "c6r4-s1-0"
       },
       {
        "titre": "Le mataba refroidit",
        "enonce": "On sert du mataba bouillant dans une assiette. Sa température, en degrés Celsius, est modélisée par $T(t) = 25 + 75\\,e^{-0{,}1t}$, où $t$ est le temps en minutes. Entrer $T'(0)$, vitesse de variation de la température à l'instant $0$, en degrés par minute.",
        "reponse": -7.5,
        "unite": "°C/min",
        "indice": "La dérivée de la constante 25 est nulle, et la dérivée de $t \\mapsto e^{-0{,}1t}$ est $t \\mapsto -0{,}1\\,e^{-0{,}1t}$.",
        "explication": "$T'(t) = 75 \\times (-0{,}1)\\,e^{-0{,}1t} = -7{,}5\\,e^{-0{,}1t}$, donc $T'(0) = -7{,}5$ : au départ, la température baisse de 7,5 °C par minute. Ensuite, $|T'(t)|$ diminue : le refroidissement ralentit à mesure que l'écart avec l'air ambiant (25 °C) se réduit.",
        "retenir": "Pour $T(t) = a + C\\,e^{-kt}$, la constante disparaît à la dérivation : $T'(t) = -kC\\,e^{-kt}$.",
        "id": "c6r4-s1-1"
       },
       {
        "titre": "La demi-vie d'un médicament",
        "enonce": "La concentration d'un médicament dans le sang est modélisée par $C(t) = C_0\\,e^{-kt}$, avec $t$ en heures, $C_0 > 0$ et $k > 0$. Au bout de 6 heures, la concentration a été divisée par 4. Au bout de combien d'heures la concentration initiale est-elle divisée par 8 ? Entrer ce nombre d'heures.",
        "reponse": 9,
        "unite": "h",
        "indice": "$e^{-6k} = \\frac{1}{4}$ : écris $\\frac{1}{4} = \\left(\\frac{1}{2}\\right)^{2}$ et cherche d'abord $e^{-3k}$.",
        "explication": "$C(6) = \\frac{C_0}{4}$ donne $e^{-6k} = \\frac{1}{4}$, soit $(e^{-3k})^{2} = \\frac{1}{4}$, donc $e^{-3k} = \\frac{1}{2}$ car $e^{-3k} > 0$ : la concentration est divisée par 2 toutes les 3 heures. Alors $\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^{3} = e^{-9k}$, et comme $t \\mapsto e^{-kt}$ est strictement décroissante, $C(t) = \\frac{C_0}{8}$ équivaut à $t = 9$.",
        "retenir": "Dans un modèle exponentiel, la durée de division par 2 (demi-vie) est constante : trois demi-vies divisent par $2^{3} = 8$.",
        "id": "c6r4-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La suite définie pour tout entier naturel $n$ par $u_n = e^{n^{2}}$ est géométrique. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare $\\frac{u_1}{u_0}$ et $\\frac{u_2}{u_1}$.",
        "explication": "Faux. $\\frac{u_1}{u_0} = \\frac{e^{1}}{e^{0}} = e$, alors que $\\frac{u_2}{u_1} = \\frac{e^{4}}{e^{1}} = e^{3}$. Le quotient de deux termes consécutifs n'est pas constant : la suite n'est pas géométrique, car les exposants $n^{2}$ ne forment pas une suite arithmétique.",
        "retenir": "La suite $(e^{v_n})$ est géométrique si et seulement si la suite $(v_n)$ est arithmétique.",
        "id": "c6r4-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si une grandeur est modélisée par $N(t) = N_0\\,e^{kt}$ avec $N_0 > 0$, alors son taux d'évolution entre les instants $t$ et $t+1$ ne dépend pas de $t$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule le coefficient multiplicateur $\\frac{N(t+1)}{N(t)}$.",
        "explication": "Vrai. Pour tout $t$, $\\frac{N(t+1)}{N(t)} = \\frac{N_0e^{kt+k}}{N_0e^{kt}} = e^{k}$ : le coefficient multiplicateur est constant, donc le taux d'évolution $e^{k} - 1$ aussi. C'est la version continue d'une suite géométrique.",
        "retenir": "Modèle exponentiel : sur des durées égales, le coefficient multiplicateur est le même.",
        "id": "c6r4-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $a$, la suite $(e^{na})_{n \\in \\mathbb{N}}$ est monotone. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Étudie le signe de $u_{n+1} - u_n = e^{na}(e^{a} - 1)$.",
        "explication": "Vrai. $u_{n+1} - u_n = e^{na}(e^{a} - 1)$ est du signe de $e^{a} - 1$, c'est-à-dire du signe de $a$, qui ne dépend pas de $n$. Si $a > 0$, la suite est croissante ; si $a < 0$, elle est décroissante ; si $a = 0$, elle est constante.",
        "retenir": "Sens de variation d'une suite : étudier le signe de $u_{n+1} - u_n$ et vérifier qu'il ne dépend pas de $n$.",
        "id": "c6r4-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "La quête de Xénophane",
    "fond": "orient",
    "athena": "Signe, dérivée, variations, tangente, extremum : une étude complète. N'oublie aucune branche du tableau avant de conclure.",
    "notion": "Problème : étude complète d'une fonction avec exponentielle",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....A....................#",
     "#....###...................#",
     "#..........................#",
     "#.##.......................S",
     "#..................T.......S",
     "#....##...##################",
     "#J.G......##################",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le signe",
        "enonce": "Résoudre dans $\\mathbb{R}$ l'inéquation $f(x) < 0$. Entrer le nombre d'entiers relatifs qui en sont solutions.",
        "reponse": 3,
        "indice": "$e^{x} > 0$ : le signe de $f(x)$ est celui de $x^{2} - 3$.",
        "explication": "Comme $e^{x} > 0$ pour tout réel $x$, $f(x) < 0$ équivaut à $x^{2} < 3$, soit $-\\sqrt{3} < x < \\sqrt{3}$. Comme $\\sqrt{3} \\approx 1{,}73$, les entiers solutions sont $-1$, $0$ et $1$ : il y en a $3$.",
        "retenir": "$e^{u}$ est toujours strictement positif : le signe de $P(x)\\,e^{x}$ est celui de $P(x)$.",
        "id": "c6b-s0-0"
       },
       {
        "titre": "La dérivée",
        "enonce": "Il existe des réels $b$ et $c$ tels que, pour tout réel $x$, $f'(x) = (x^{2} + bx + c)\\,e^{x}$. Entrer $b$.",
        "reponse": 2,
        "indice": "Dérive le produit $u \\times v$ avec $u(x) = x^{2} - 3$ et $v(x) = e^{x}$, puis factorise par $e^{x}$.",
        "explication": "$f'(x) = 2x\\,e^{x} + (x^{2}-3)e^{x} = (x^{2} + 2x - 3)e^{x}$, donc $b = 2$ et $c = -3$. Les deux erreurs typiques : multiplier les dérivées ($2x\\,e^{x}$) ou oublier de dériver le facteur polynomial ($(x^{2}-3)e^{x}$, qui donnerait $b = 0$).",
        "retenir": "$(P\\,e^{x})' = (P' + P)\\,e^{x}$ : on ajoute au polynôme sa dérivée, l'exponentielle reste en facteur.",
        "id": "c6b-s0-1"
       },
       {
        "titre": "Les variations",
        "enonce": "On admet que, pour tout réel $x$, $f'(x) = (x^{2} + 2x - 3)\\,e^{x}$. Sur quel intervalle la fonction $f$ est-elle décroissante ?",
        "reponse": 2,
        "choix": [
         "$]-\\infty\\,;-3]$ et $[1\\,;+\\infty[$",
         "$[-3\\,;1]$",
         "$[-1\\,;3]$",
         "$[-\\sqrt{3}\\,;\\sqrt{3}]$"
        ],
        "indice": "Le signe de $f'(x)$ est celui du trinôme $x^{2} + 2x - 3$ : cherche ses racines.",
        "explication": "Comme $e^{x} > 0$, $f'(x)$ a le signe de $x^{2} + 2x - 3 = (x+3)(x-1)$, trinôme de racines $-3$ et $1$, négatif entre ses racines. Donc $f$ est décroissante sur $[-3\\,;1]$, et croissante sur $]-\\infty\\,;-3]$ et sur $[1\\,;+\\infty[$. L'intervalle $[-\\sqrt{3}\\,;\\sqrt{3}]$ est celui où $f$ est négative : ne pas confondre le signe de $f$ et celui de $f'$.",
        "retenir": "Les variations de $f$ se lisent sur le signe de $f'$, pas sur celui de $f$. Un trinôme a le signe de $a$ à l'extérieur de ses racines.",
        "id": "c6b-s0-2"
       },
       {
        "titre": "Une tangente",
        "enonce": "On admet que, pour tout réel $x$, $f'(x) = (x^{2} + 2x - 3)\\,e^{x}$. La tangente à $\\mathcal{C}$ au point d'abscisse $0$ coupe l'axe des abscisses en un point. Entrer l'abscisse de ce point.",
        "reponse": -1,
        "indice": "Équation de la tangente au point d'abscisse $0$ : $y = f'(0)\\,x + f(0)$.",
        "explication": "$f(0) = (0-3)e^{0} = -3$ et $f'(0) = -3e^{0} = -3$, donc la tangente a pour équation $y = -3x - 3$. Elle coupe l'axe des abscisses lorsque $-3x - 3 = 0$, soit $x = -1$.",
        "retenir": "Tangente au point d'abscisse $a$ : $y = f'(a)(x-a) + f(a)$ ; en $a = 0$, $y = f'(0)\\,x + f(0)$.",
        "id": "c6b-s0-3"
       },
       {
        "titre": "Le minimum",
        "enonce": "On admet que $f$ est croissante sur $]-\\infty\\,;-3]$, décroissante sur $[-3\\,;1]$ et croissante sur $[1\\,;+\\infty[$. La fonction $f$ admet un minimum sur $\\mathbb{R}$, qui s'écrit $k \\times e$ avec $k$ réel. Entrer $k$.",
        "reponse": -2,
        "indice": "Sur $[-3\\,;+\\infty[$, le minimum est $f(1)$. Et pour $x \\le -3$, quel est le signe de $x^{2} - 3$ ?",
        "explication": "Sur $[-3\\,;+\\infty[$, $f$ décroît puis croît : le minimum y est $f(1) = (1-3)e = -2e$. Sur $]-\\infty\\,;-3]$, $x^{2} \\ge 9$, donc $f(x) = (x^{2}-3)e^{x} > 0 > -2e$. Le minimum de $f$ sur $\\mathbb{R}$ est donc $-2e$, atteint en $1$ : $k = -2$. Il ne fallait pas oublier la branche $]-\\infty\\,;-3]$, où $f$ croît : il faut y comparer $f$ à $-2e$.",
        "retenir": "Un minimum local ne devient global qu'après comparaison avec toutes les autres branches du tableau de variations.",
        "id": "c6b-s0-4"
       }
      ],
      "boss": "Céléno, reine des Harpies",
      "monstre": "harpie",
      "contexte": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (x^{2} - 3)\\,e^{x}$, et $\\mathcal{C}$ sa courbe représentative dans un repère orthonormé. On étudie successivement le signe de $f$, sa dérivée, ses variations, une tangente et son minimum. Les questions sont indépendantes : chacune redonne les résultats dont elle a besoin."
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, $(x^{2} - 3)\\,e^{x} \\ge -3$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule la valeur de l'expression en $x = 1$, sachant que $e \\approx 2{,}718$.",
        "explication": "Faux. Pour $x = 1$ : $(1 - 3)e^{1} = -2e \\approx -5{,}44$, et $-2e < -3$ car $e > 1{,}5$. La valeur $-3$ est celle prise en $0$, mais ce n'est pas le minimum : il est atteint en $1$ et vaut $-2e$.",
        "retenir": "Une valeur remarquable, comme l'image de 0, n'est pas forcément un minimum : seule l'étude des variations le dit.",
        "id": "c6b-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous réels $a$ et $b$, $e^{\\frac{a+b}{2}} \\le \\dfrac{e^{a} + e^{b}}{2}$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pose $A = e^{a/2}$ et $B = e^{b/2}$, et pense à $(A - B)^{2} \\ge 0$.",
        "explication": "Vrai. Avec $A = e^{a/2}$ et $B = e^{b/2}$ : $AB = e^{\\frac{a+b}{2}}$, $A^{2} = e^{a}$ et $B^{2} = e^{b}$. Or $(A - B)^{2} \\ge 0$ donne $A^{2} + B^{2} \\ge 2AB$, c'est-à-dire $\\frac{e^{a}+e^{b}}{2} \\ge e^{\\frac{a+b}{2}}$. C'est l'inégalité entre la moyenne géométrique et la moyenne arithmétique de $e^{a}$ et $e^{b}$.",
        "retenir": "Pour tous réels $x, y > 0$ : $\\sqrt{xy} \\le \\frac{x+y}{2}$, car $(\\sqrt{x} - \\sqrt{y})^{2} \\ge 0$.",
        "id": "c6b-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « La négation de l'énoncé “pour tout réel $x$, $e^{x} > x$” est “il existe un réel $x$ tel que $e^{x} < x$”. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Le contraire de « strictement supérieur » n'est pas « strictement inférieur ».",
        "explication": "Faux. La négation de « pour tout $x$, $P(x)$ » est « il existe $x$ tel que non $P(x)$ », et la négation de $e^{x} > x$ est $e^{x} \\le x$. La négation correcte est donc « il existe un réel $x$ tel que $e^{x} \\le x$ ». L'énoncé initial est d'ailleurs vrai, puisque $e^{x} \\ge 1 + x > x$.",
        "retenir": "Nier « pour tout $x$, $f(x) > g(x)$ » donne « il existe $x$ tel que $f(x) \\le g(x)$ » : le cas d'égalité change de camp.",
        "id": "c6b-b0-2"
       }
      ]
     }
    ]
   }
  ],
  "sanctuaire": {
   "sceauxOr": 3,
   "salle": {
    "nom": "Le sanctuaire de Kant",
    "fond": "sanctuaire",
    "athena": "Ici, les outils de Terminale sont permis, et chaque énoncé qui les utilise le signale. Puis vient le regard du professeur : comprendre l'erreur avant de la corriger.",
    "notion": "Problèmes plus difficiles et regard de futur professeur",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................S",
     "#..........T...............S",
     "#.........##PPPPPPPPP#######",
     "#..A.....T##.........#######",
     "#.###...####.........#######",
     "#......T####.........#######",
     "#.....######.........#######",
     "#J.G..######.........#######",
     "############.........#######"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Un nombre dérivé déguisé",
        "enonce": "Déterminer $\\displaystyle \\lim_{x \\to 0} \\frac{e^{3x} - 1}{x}$. Entrer cette limite.",
        "reponse": 3,
        "indice": "Reconnais le taux d'accroissement en $0$ de la fonction $g : x \\mapsto e^{3x}$.",
        "explication": "Avec $g(x) = e^{3x}$, on a $g(0) = 1$, donc $\\frac{e^{3x}-1}{x} = \\frac{g(x) - g(0)}{x - 0}$ est le taux d'accroissement de $g$ en $0$. Comme $g$ est dérivable en $0$, il tend vers $g'(0) = 3e^{0} = 3$.",
        "retenir": "Une limite de la forme $\\frac{g(x) - g(a)}{x - a}$ est un nombre dérivé : par exemple $\\lim_{x \\to 0} \\frac{e^{x}-1}{x} = 1$.",
        "id": "c6s-s0-0"
       },
       {
        "titre": "Le terme dominant",
        "enonce": "Programme de Terminale : on admet que $\\displaystyle \\lim_{x \\to +\\infty} x\\,e^{-x} = 0$. Déterminer $\\displaystyle \\lim_{x \\to +\\infty} \\frac{x\\,e^{x} - e^{2x}}{e^{2x} + x}$. Entrer cette limite.",
        "reponse": -1,
        "indice": "Divise le numérateur et le dénominateur par $e^{2x}$, le terme qui domine.",
        "explication": "En divisant par $e^{2x}$ : $\\frac{x e^{x} - e^{2x}}{e^{2x} + x} = \\frac{x e^{-x} - 1}{1 + x e^{-2x}}$. Or $x e^{-x} \\to 0$, et pour $x \\ge 0$, $0 \\le x e^{-2x} \\le x e^{-x}$ car $e^{-x} \\le 1$, donc $x e^{-2x} \\to 0$. La limite vaut $\\frac{0 - 1}{1 + 0} = -1$.",
        "retenir": "Forme indéterminée avec des exponentielles : factoriser par le terme dominant ($e^{2x}$ l'emporte sur $x\\,e^{x}$).",
        "id": "c6s-s0-1"
       },
       {
        "titre": "La crue d'une rivière",
        "enonce": "Pendant le passage d'une dépression tropicale sur Grande-Terre, le débit supplémentaire d'une rivière, en m³/s, est modélisé par $D(t) = 0{,}1\\,t^{3}e^{-t/3}$ pour $t \\ge 0$, où $t$ est le temps en heures écoulé depuis le début des pluies. Au bout de combien d'heures ce débit est-il maximal ? Entrer ce nombre d'heures.",
        "reponse": 9,
        "unite": "h",
        "indice": "Dérive le produit $t^{3} \\times e^{-t/3}$, puis factorise par $t^{2}e^{-t/3}$.",
        "explication": "$D'(t) = 0{,}1\\left(3t^{2}e^{-t/3} - \\frac{1}{3}t^{3}e^{-t/3}\\right) = 0{,}1\\,t^{2}e^{-t/3}\\left(3 - \\frac{t}{3}\\right)$. Pour $t > 0$, $D'(t)$ a le signe de $3 - \\frac{t}{3}$ : positif avant $9$, négatif après. Le débit croît puis décroît : il est maximal au bout de 9 heures. $D'$ s'annule aussi en $0$, mais c'est là que le débit est minimal.",
        "retenir": "Un extremum se lit sur un changement de signe de $f'$, pas sur la seule annulation de $f'$.",
        "effet": "passerelle",
        "id": "c6s-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Un point d'inflexion",
        "enonce": "Programme de Terminale (convexité). Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x\\,e^{-x}$. Sa courbe admet un unique point d'inflexion. Entrer son abscisse.",
        "reponse": 2,
        "indice": "Calcule $f'$, puis $f''$, la dérivée de $f'$, et cherche où $f''$ change de signe.",
        "explication": "$f'(x) = e^{-x} - x\\,e^{-x} = (1-x)e^{-x}$, puis $f''(x) = -e^{-x} - (1-x)e^{-x} = (x-2)e^{-x}$. Comme $e^{-x} > 0$, $f''$ a le signe de $x - 2$ : $f$ est concave sur $]-\\infty\\,;2]$ et convexe sur $[2\\,;+\\infty[$. Le point d'inflexion a pour abscisse $2$.",
        "retenir": "Point d'inflexion : $f''$ s'annule en changeant de signe. Pour $P(x)\\,e^{-x}$, chaque dérivation donne $(P' - P)\\,e^{-x}$.",
        "id": "c6s-s1-0"
       },
       {
        "titre": "Deux solutions, à quelle condition ?",
        "enonce": "Programme de Terminale : on admet que, pour tout réel $X > 0$, l'équation $e^{x} = X$ a une unique solution réelle. Soit $m$ un réel. L'équation $e^{2x} - m\\,e^{x} + 4 = 0$ admet deux solutions réelles distinctes si et seulement si $m$ appartient à un intervalle $]a\\,;+\\infty[$. Entrer $a$.",
        "reponse": 4,
        "indice": "Avec $X = e^{x}$, il faut deux racines distinctes et strictement positives : regarde le discriminant, puis la somme et le produit des racines.",
        "explication": "Avec $X = e^{x}$, l'équation devient $X^{2} - mX + 4 = 0$, et chaque racine $X > 0$ donne exactement une solution $x$. Il faut donc deux racines distinctes strictement positives : $\\Delta = m^{2} - 16 > 0$ ; leur produit vaut $4 > 0$, donc elles sont de même signe, celui de leur somme $m$. D'où $m > 4$, et $a = 4$. Pour $m < -4$, les deux racines sont négatives : aucune solution.",
        "retenir": "Signe des racines d'un trinôme sans les calculer : produit $\\frac{c}{a}$ et somme $-\\frac{b}{a}$.",
        "id": "c6s-s1-1"
       },
       {
        "titre": "Tangentes issues d'un point",
        "enonce": "Programme de Terminale (théorème des valeurs intermédiaires). Combien de tangentes à la courbe de la fonction exponentielle passent par le point $A\\left(0\\,;\\frac{1}{2}\\right)$ ? Entrer ce nombre.",
        "reponse": 2,
        "indice": "La tangente au point d'abscisse $a$ coupe l'axe des ordonnées en $(1-a)e^{a}$. Étudie les variations de $g : a \\mapsto (1-a)e^{a}$, puis compare $g(-2)$, $g(0)$ et $g(1)$ à $\\frac{1}{2}$.",
        "explication": "La tangente en $a$ a pour équation $y = e^{a}(x - a) + e^{a}$ ; elle passe par $A$ si et seulement si $g(a) = (1-a)e^{a} = \\frac{1}{2}$. Or $g'(a) = -a\\,e^{a}$ : $g$ est strictement croissante sur $]-\\infty\\,;0]$, strictement décroissante sur $[0\\,;+\\infty[$, et $g(0) = 1$. Comme $g(-2) = 3e^{-2} < \\frac{1}{2}$ (car $e^{2} > 6$) et $g(1) = 0$, le théorème des valeurs intermédiaires donne une unique solution dans $]-2\\,;0[$ et une unique solution dans $]0\\,;1[$ ; ailleurs, $g(a) < \\frac{1}{2}$. Il y a donc 2 tangentes.",
        "retenir": "« Combien de tangentes passent par $A$ ? » revient à « combien de solutions a l'équation d'inconnue $a$ ? » : c'est une étude de fonction.",
        "temps": 420,
        "id": "c6s-s1-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "L'erreur de dérivation",
        "enonce": "Un élève écrit : « La dérivée de $f(x) = e^{x^{2}}$ est $f'(x) = x^{2}e^{x^{2}-1}$. » Quelle est son erreur ?",
        "reponse": 1,
        "choix": [
         "Il applique à l'exponentielle la règle de dérivation de $x^{n}$ ; la bonne dérivée est $2x\\,e^{x^{2}}$.",
         "Il a confondu $e^{x^{2}}$ avec $(e^{x})^{2}$ ; la bonne dérivée est $2e^{2x}$.",
         "Il a seulement oublié un facteur 2 ; la bonne dérivée est $2x^{2}e^{x^{2}-1}$.",
         "Aucune erreur : la formule est juste."
        ],
        "indice": "Compare avec la formule $(e^{u})' = u'e^{u}$ : que devient l'exposant ?",
        "explication": "L'élève traite $e^{x^{2}}$ comme une puissance : il fait « descendre » l'exposant et lui retire 1, comme pour $(x^{n})' = nx^{n-1}$. Or $(e^{u})' = u'e^{u}$ avec $u(x) = x^{2}$, donc $f'(x) = 2x\\,e^{x^{2}}$. Pour remédier, on peut lui faire appliquer sa règle à $e^{x}$ lui-même : elle donnerait $x\\,e^{x-1}$ au lieu de $e^{x}$.",
        "retenir": "Erreur classique : appliquer $(x^{n})' = nx^{n-1}$ à une exponentielle. Dans $e^{u}$, l'exposant ne bouge pas : $(e^{u})' = u'e^{u}$.",
        "id": "c6s-s2-0"
       },
       {
        "titre": "Prolonger les puissances",
        "enonce": "Une élève de Première demande pourquoi on note $\\exp(x) = e^{x}$. Quelle réponse est mathématiquement correcte ?",
        "reponse": 3,
        "choix": [
         "C'est une convention arbitraire, sans lien avec les puissances vues au collège.",
         "Parce que $e^{x}$ s'obtient en multipliant $e$ par lui-même $x$ fois, pour tout réel $x$.",
         "Parce que $\\exp(a+b) = \\exp(a)\\exp(b)$ et $\\exp(1) = e$ donnent $\\exp(n) = e^{n}$ pour tout entier $n$ : la notation prolonge les puissances.",
         "Parce que la fonction exponentielle est la dérivée de la constante $e$."
        ],
        "indice": "Que vaut $\\exp(2) = \\exp(1+1)$ ? Et $\\exp(-1)$ ?",
        "explication": "La relation fonctionnelle donne $\\exp(2) = \\exp(1)^{2} = e^{2}$, puis par récurrence $\\exp(n) = e^{n}$ pour tout entier naturel $n$, et $\\exp(-n) = \\frac{1}{e^{n}} = e^{-n}$. Les règles $e^{a+b} = e^{a}e^{b}$ et $(e^{a})^{n} = e^{na}$ prolongent celles des puissances du collège. En revanche, « multiplier $e$ par lui-même $x$ fois » n'a pas de sens pour $x = \\frac{1}{2}$ ou $x = \\sqrt{2}$.",
        "retenir": "$\\exp(n) = e^{n}$ pour tout entier $n$ : la notation $e^{x}$ prolonge les puissances entières, avec les mêmes règles de calcul.",
        "id": "c6s-s2-1"
       },
       {
        "titre": "Le bon contre-exemple",
        "enonce": "Un élève affirme : « Pour tout réel $x$, $e^{x} > x^{2}$ ; je l'ai vérifié pour $x = 0$, $1$, $2$, $3$ et $10$. » Quel exemple montre à la classe que l'affirmation est fausse ?",
        "reponse": 4,
        "choix": [
         "$x = 5$",
         "$x = \\frac{1}{2}$",
         "$x = -\\frac{1}{10}$",
         "$x = -1$"
        ],
        "indice": "Cherche là où $e^{x}$ est petit : du côté des négatifs, mais pas trop près de 0.",
        "explication": "Pour $x = -1$ : $e^{-1} = \\frac{1}{e} < 1 = (-1)^{2}$, car $e > 1$. L'affirmation est donc fausse. Les autres valeurs vérifient l'inégalité (par exemple $e^{-0{,}1} \\approx 0{,}90 > 0{,}01$) et ne prouvent rien. Leçon pour la classe : des exemples ne démontrent pas un énoncé universel, alors qu'un seul contre-exemple suffit à le réfuter.",
        "retenir": "Énoncé « pour tout » : des exemples ne prouvent rien, un contre-exemple réfute. Le chercher là où l'intuition est la plus fragile.",
        "id": "c6s-s2-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "D'après CAPES Mayotte 2022. Programme de Terminale (limite d'une suite). Proposition : « $\\displaystyle \\lim_{n \\to +\\infty} n\\left(e^{\\frac{1}{n}} - 1\\right) = 1$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pose $h = \\frac{1}{n}$ et reconnais un taux d'accroissement de l'exponentielle en $0$.",
        "explication": "Vrai. Avec $h = \\frac{1}{n}$, qui tend vers $0$, on a $n\\left(e^{1/n} - 1\\right) = \\frac{e^{h} - e^{0}}{h - 0}$ : c'est le taux d'accroissement de l'exponentielle entre $0$ et $h$. Comme l'exponentielle est dérivable en $0$, il tend vers $\\exp'(0) = e^{0} = 1$.",
        "retenir": "$\\lim_{h \\to 0} \\frac{e^{h}-1}{h} = 1$ : c'est le nombre dérivé de exp en 0, à reconnaître sous toutes ses formes.",
        "id": "c6s-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout entier $n \\ge 1$, $\\left(1 + \\frac{1}{n}\\right)^{n} \\le e$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Utilise l'inégalité $e^{x} \\ge 1 + x$, valable pour tout réel $x$, avec $x = \\frac{1}{n}$.",
        "explication": "Vrai. Pour tout réel $x$, $e^{x} \\ge 1 + x$ (la fonction $x \\mapsto e^{x} - 1 - x$ a pour minimum $0$, atteint en $0$). Avec $x = \\frac{1}{n}$ : $0 < 1 + \\frac{1}{n} \\le e^{1/n}$. La fonction $t \\mapsto t^{n}$ étant croissante sur $[0\\,;+\\infty[$, on obtient $\\left(1 + \\frac{1}{n}\\right)^{n} \\le \\left(e^{1/n}\\right)^{n} = e$.",
        "retenir": "L'inégalité $e^{x} \\ge 1 + x$ est un outil : l'appliquer en un point bien choisi, puis composer par une fonction croissante.",
        "id": "c6s-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tout réel $x$, $e^{x} \\ge 1 + x + \\dfrac{x^{2}}{2}$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste un réel négatif, par exemple $x = -1$, avec $e \\approx 2{,}718$.",
        "explication": "Faux. Pour $x = -1$ : $1 + x + \\frac{x^{2}}{2} = \\frac{1}{2}$, alors que $e^{-1} = \\frac{1}{e} < \\frac{1}{2}$ car $e > 2$. L'inégalité est vraie pour $x \\ge 0$, mais pas sur $\\mathbb{R}$ tout entier.",
        "retenir": "Une inégalité vraie sur $[0\\,;+\\infty[$ peut être fausse sur $\\mathbb{R}$ : toujours tester des réels négatifs.",
        "id": "c6s-b0-2"
       }
      ]
     }
    ]
   }
  }
 },
 {
  "niveau": "Semaine 7",
  "titre": "Vecteurs, géométrie repérée et produit scalaire",
  "introduction": "Descartes a donné à chaque point deux nombres, et la géométrie est devenue calcul. Le produit scalaire achève ce mouvement : un seul nombre dit à la fois les longueurs, les angles et l'orthogonalité. Cette semaine, apprends à passer de la figure à l'équation et retour, sans perdre le sens : vecteur normal, projeté orthogonal et distance t'ouvriront plus tard les portes de l'espace.",
  "conclusion": "Emporte trois réflexes : le déterminant pour la colinéarité, le vecteur normal pour écrire une droite et ses perpendiculaires, le produit scalaire pour les angles, les longueurs et l'orthogonalité. La distance d'un point à une droite n'est qu'un projeté orthogonal : dans l'espace, la même idée donnera la distance à un plan.",
  "salles": [
   {
    "nom": "L'ombre de Thalès",
    "fond": "nuit",
    "athena": "Thalès mesurait une pyramide par son ombre : la colinéarité est une proportionnalité, et le déterminant $xy'-yx'$ la teste en un seul calcul.",
    "notion": "Vecteurs, coordonnées, colinéarité",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#....T........D............#",
     "#...###.....#####..........#",
     "#........................A.#",
     "#.......###.............####",
     "#..........................#",
     "#....##...............##...S",
     "#JG................T.......S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le quatrième sommet",
        "enonce": "Dans un repère orthonormé, on considère les points $A(2\\,;-1)$, $B(5\\,;3)$ et $C(-1\\,;6)$. Le point $D$ est tel que $ABCD$ soit un parallélogramme. Entrer l'abscisse de $D$.",
        "reponse": -4,
        "indice": "Dans le parallélogramme $ABCD$, les côtés opposés $[AB]$ et $[DC]$ donnent $\\vec{AB}=\\vec{DC}$ : attention à l'ordre des lettres.",
        "explication": "$ABCD$ est un parallélogramme si et seulement si $\\vec{AB}=\\vec{DC}$. Ici $\\vec{AB}(3\\,;4)$, donc $x_C-x_D=3$ et $y_C-y_D=4$, d'où $D(-4\\,;2)$. L'erreur classique $\\vec{AB}=\\vec{CD}$ donne $(2\\,;10)$, qui construit le parallélogramme $ABDC$.",
        "retenir": "$ABCD$ parallélogramme $\\iff \\vec{AB}=\\vec{DC} \\iff$ les diagonales $[AC]$ et $[BD]$ ont le même milieu.",
        "id": "c7r1-s0-0"
       },
       {
        "titre": "Le point pondéré",
        "enonce": "Dans un repère orthonormé, on considère $A(-2\\,;1)$ et $B(4\\,;5)$. Le point $M$ vérifie $\\vec{MA}+2\\vec{MB}=\\vec{0}$. Entrer l'ordonnée de $M$, sous forme de fraction.",
        "reponse": 3.6666666666666665,
        "indice": "Avec la relation de Chasles, écris $\\vec{MB}=\\vec{MA}+\\vec{AB}$, puis exprime $\\vec{AM}$ en fonction de $\\vec{AB}$.",
        "explication": "$\\vec{MA}+2(\\vec{MA}+\\vec{AB})=\\vec{0}$ donne $3\\vec{AM}=2\\vec{AB}$, soit $\\vec{AM}=\\frac{2}{3}\\vec{AB}$. Avec $\\vec{AB}(6\\,;4)$ : $M\\left(-2+4\\,;1+\\frac{8}{3}\\right)$, c'est-à-dire $M\\left(2\\,;\\frac{11}{3}\\right)$.",
        "retenir": "Point défini par une relation vectorielle : tout ramener à une seule origine par Chasles, puis passer aux coordonnées.",
        "id": "c7r1-s0-1"
       },
       {
        "titre": "Dans une autre base",
        "enonce": "Dans un repère orthonormé, on considère $\\vec{u}(2\\,;1)$, $\\vec{v}(-1\\,;3)$ et $\\vec{w}(7\\,;0)$. Justifier que $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, puis déterminer les réels $a$ et $b$ tels que $\\vec{w}=a\\vec{u}+b\\vec{v}$. Entrer $a$.",
        "reponse": 3,
        "indice": "Calcule le déterminant de $\\vec{u}$ et $\\vec{v}$, puis traduis l'égalité vectorielle en un système de deux équations d'inconnues $a$ et $b$.",
        "explication": "$\\det(\\vec{u},\\vec{v})=2\\times3-1\\times(-1)=7\\neq0$ : $(\\vec{u},\\vec{v})$ est une base, donc $a$ et $b$ existent et sont uniques. Le système $2a-b=7$, $a+3b=0$ donne $a=-3b$, puis $-7b=7$ : $b=-1$ et $a=3$. Vérification : $3\\vec{u}-\\vec{v}$ a pour coordonnées $(7\\,;0)$.",
        "retenir": "Deux vecteurs non colinéaires forment une base : tout vecteur du plan s'écrit de façon unique comme combinaison de ces deux vecteurs.",
        "id": "c7r1-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Colinéaires ?",
        "enonce": "Dans un repère orthonormé, on considère $\\vec{u}(-3\\,;5)$ et $\\vec{v}(6\\,;k)$, où $k$ est un réel. Entrer la valeur de $k$ pour laquelle $\\vec{u}$ et $\\vec{v}$ sont colinéaires.",
        "reponse": -10,
        "indice": "Deux vecteurs $(x\\,;y)$ et $(x'\\,;y')$ sont colinéaires si et seulement si $xy'-yx'=0$.",
        "explication": "$\\det(\\vec{u},\\vec{v})=(-3)\\times k-5\\times6=-3k-30$, nul si et seulement si $k=-10$. Contrôle : $\\vec{v}(6\\,;-10)=-2\\,\\vec{u}$.",
        "retenir": "$\\vec{u}(x\\,;y)$ et $\\vec{v}(x'\\,;y')$ sont colinéaires si et seulement si $xy'-yx'=0$.",
        "id": "c7r1-s1-0"
       },
       {
        "titre": "Trois points alignés",
        "enonce": "Dans un repère orthonormé, on considère $A(1\\,;2)$, $B(4\\,;-1)$ et, pour tout réel $m$, le point $C(m\\,;m+5)$. Entrer la valeur de $m$ pour laquelle $A$, $B$ et $C$ sont alignés.",
        "reponse": -1,
        "indice": "$A$, $B$ et $C$ sont alignés si et seulement si $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires.",
        "explication": "$\\vec{AB}(3\\,;-3)$ et $\\vec{AC}(m-1\\,;m+3)$. Leur déterminant vaut $3(m+3)-(-3)(m-1)=6m+6$, nul pour $m=-1$. On obtient $C(-1\\,;4)$, qui vérifie bien l'équation $y=-x+3$ de la droite $(AB)$.",
        "retenir": "Alignement de trois points = colinéarité de deux vecteurs ayant une origine commune.",
        "id": "c7r1-s1-1"
       },
       {
        "titre": "Alignés sans angle droit",
        "enonce": "$ABCD$ est un parallélogramme. On travaille dans le repère $(A\\,;\\vec{AB},\\vec{AD})$, qui n'est pas nécessairement orthonormé. Le point $E$ vérifie $\\vec{AE}=\\frac{1}{3}\\vec{AB}$ et, pour un réel $k$, le point $F$ vérifie $\\vec{AF}=k\\,\\vec{AD}$. Entrer la valeur de $k$ pour laquelle $E$, $F$ et $C$ sont alignés, sous forme de fraction ou de décimal.",
        "reponse": -0.5,
        "indice": "Dans ce repère, $C$ a pour coordonnées $(1\\,;1)$ car $\\vec{AC}=\\vec{AB}+\\vec{AD}$. Le critère du déterminant reste valable dans un repère quelconque.",
        "explication": "Coordonnées : $E\\left(\\frac{1}{3}\\,;0\\right)$, $F(0\\,;k)$, $C(1\\,;1)$. Les vecteurs $\\vec{EC}\\left(\\frac{2}{3}\\,;1\\right)$ et $\\vec{EF}\\left(-\\frac{1}{3}\\,;k\\right)$ ont pour déterminant $\\frac{2}{3}k+\\frac{1}{3}$, nul pour $k=-\\frac{1}{2}$ : $F$ est le symétrique par rapport à $A$ du milieu de $[AD]$. La colinéarité n'utilise ni longueur ni angle : un repère quelconque suffit.",
        "retenir": "Colinéarité, alignement, milieux : valables dans tout repère. Seuls les calculs de longueurs et d'angles exigent un repère orthonormé.",
        "id": "c7r1-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous vecteurs $\\vec{u}$, $\\vec{v}$, $\\vec{w}$ du plan, si $\\vec{u}$ et $\\vec{v}$ sont colinéaires et si $\\vec{v}$ et $\\vec{w}$ sont colinéaires, alors $\\vec{u}$ et $\\vec{w}$ sont colinéaires. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pense au vecteur que l'on oublie toujours.",
        "explication": "Faux. Contre-exemple dans un repère orthonormé : $\\vec{u}(1\\,;0)$, $\\vec{v}=\\vec{0}$ et $\\vec{w}(0\\,;1)$. Le vecteur nul est colinéaire à tout vecteur, donc les deux hypothèses sont vraies, mais $\\det(\\vec{u},\\vec{w})=1\\neq0$. La propriété devient vraie si l'on impose $\\vec{v}\\neq\\vec{0}$.",
        "retenir": "Le vecteur nul est colinéaire à tout vecteur : la colinéarité ne se transmet qu'à travers un vecteur non nul.",
        "id": "c7r1-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un repère quelconque du plan (non nécessairement orthonormé), si les vecteurs $\\vec{u}(a\\,;b)$ et $\\vec{v}(c\\,;d)$ vérifient $ad-bc=0$, alors $\\vec{u}$ et $\\vec{v}$ sont colinéaires. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Traite à part le cas $\\vec{u}=\\vec{0}$, puis cherche un réel $k$ tel que $\\vec{v}=k\\vec{u}$.",
        "explication": "Vrai. Si $\\vec{u}=\\vec{0}$, c'est immédiat. Sinon, si $a\\neq0$, posons $k=\\frac{c}{a}$ : $c=ka$ et $d=\\frac{bc}{a}=kb$, donc $\\vec{v}=k\\vec{u}$. Si $a=0$, alors $b\\neq0$ et $bc=0$ donne $c=0$ ; avec $k=\\frac{d}{b}$, on a encore $\\vec{v}=k\\vec{u}$. Aucune longueur, aucun angle : le repère peut être quelconque.",
        "retenir": "Le critère $xy'-yx'=0$ est une équivalence, valable dans tout repère, vecteur nul compris.",
        "id": "c7r1-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Soit $A$ et $B$ deux points distincts du plan. Proposition : « Un point $M$ vérifie $MA=MB$ si et seulement si $M$ est le milieu de $[AB]$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Le sens « $M$ milieu $\\Rightarrow MA=MB$ » est vrai. Et la réciproque ? Où sont tous les points équidistants de $A$ et de $B$ ?",
        "explication": "Faux. Dans un repère orthonormé, avec $A(-1\\,;0)$, $B(1\\,;0)$ et $M(0\\,;1)$ : $MA=MB=\\sqrt{2}$, mais le milieu de $[AB]$ est $O(0\\,;0)$. Les points équidistants de $A$ et $B$ forment la médiatrice de $[AB]$. La version vectorielle, elle, est une équivalence : $\\vec{MA}+\\vec{MB}=\\vec{0}$ si et seulement si $M$ est le milieu de $[AB]$.",
        "retenir": "$MA=MB$ caractérise la médiatrice de $[AB]$ ; $\\vec{MA}+\\vec{MB}=\\vec{0}$ caractérise le milieu.",
        "id": "c7r1-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "L'Académie de Platon",
    "fond": "jardin",
    "athena": "Dans $ax+by+c=0$, lis sans calcul : $(-b\\,;a)$ dirige la droite et, en repère orthonormé, $(a\\,;b)$ lui est normal. Un vecteur normal suffit pour écrire une perpendiculaire.",
    "notion": "Équations de droites, vecteurs directeur et normal",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.......................A..#",
     "#......................###.#",
     "#..........................#",
     "#..................###.....S",
     "#J.G..T..........T.........S",
     "#########PPPPPP#############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Du vecteur directeur à l'équation",
        "enonce": "Dans un repère orthonormé, la droite $d$ passe par $A(2\\,;-1)$ et admet $\\vec{u}(3\\,;2)$ pour vecteur directeur. Elle a une équation de la forme $2x-3y+c=0$. Entrer $c$.",
        "reponse": -7,
        "indice": "La droite $ax+by+c=0$ est dirigée par $(-b\\,;a)$ : vérifie que la forme proposée convient, puis écris que $A$ appartient à $d$.",
        "explication": "La droite $2x-3y+c=0$ est dirigée par $(3\\,;2)$ : la forme convient. $A\\in d$ donne $2\\times2-3\\times(-1)+c=0$, soit $c=-7$. Une équation de $d$ est $2x-3y-7=0$.",
        "retenir": "La droite $ax+by+c=0$ a pour vecteur directeur $(-b\\,;a)$ ; un point de la droite fixe ensuite $c$.",
        "id": "c7r2-s0-0"
       },
       {
        "titre": "La parallèle",
        "enonce": "Dans un repère orthonormé, on considère la droite $\\Delta : 3x+4y-1=0$ et le point $A(-1\\,;5)$. La parallèle à $\\Delta$ passant par $A$ a pour équation réduite $y=mx+p$. Entrer $p$, sous forme de fraction.",
        "reponse": 4.25,
        "indice": "Deux droites parallèles ont des équations cartésiennes qui peuvent ne différer que par le terme constant.",
        "explication": "La parallèle a une équation $3x+4y+c=0$, et $A$ donne $-3+20+c=0$, donc $c=-17$. En isolant $y$ : $y=-\\frac{3}{4}x+\\frac{17}{4}$, d'où $p=\\frac{17}{4}$. Piège : recopier $p=\\frac{1}{4}$, l'ordonnée à l'origine de $\\Delta$.",
        "retenir": "Droites parallèles : mêmes coefficients $a$ et $b$ (ou même coefficient directeur), seule la constante change.",
        "id": "c7r2-s0-1"
       },
       {
        "titre": "Le point fixe",
        "enonce": "Dans un repère orthonormé, on considère, pour tout réel $m$, la droite $d_m : (1+m)x-(1+2m)y-3=0$. Toutes les droites $d_m$ passent par un même point $K$. Entrer l'abscisse de $K$.",
        "reponse": 6,
        "indice": "Regroupe l'équation sous la forme $(\\dots)+m(\\dots)=0$ : elle doit être vraie pour tout réel $m$.",
        "explication": "L'équation s'écrit $(x-y-3)+m(x-2y)=0$. Elle est vraie pour tout $m$ si et seulement si $x-y-3=0$ et $x-2y=0$ (prendre $m=0$, puis $m=1$), soit $y=3$ et $x=6$. Réciproquement, $K(6\\,;3)$ vérifie $6(1+m)-3(1+2m)-3=0$ pour tout $m$.",
        "retenir": "Égalité vraie pour tout $m$ : l'écrire $A+mB=0$, puis exiger $A=0$ et $B=0$.",
        "effet": "passerelle",
        "id": "c7r2-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "La perpendiculaire",
        "enonce": "Dans un repère orthonormé, on considère la droite $d : 2x-5y+1=0$ et le point $A(3\\,;1)$. La perpendiculaire à $d$ passant par $A$ a une équation de la forme $5x+2y+c=0$. Entrer $c$.",
        "reponse": -17,
        "indice": "Un vecteur directeur de $d$ est un vecteur normal de toute perpendiculaire à $d$.",
        "explication": "$d$ est dirigée par $\\vec{u}(5\\,;2)$, qui est donc normal à la perpendiculaire : celle-ci a une équation $5x+2y+c=0$. $A$ donne $15+2+c=0$, soit $c=-17$. Contrôle : les vecteurs normaux $(2\\,;-5)$ et $(5\\,;2)$ sont orthogonaux.",
        "retenir": "Dans un repère orthonormé, la droite de vecteur normal $\\vec{n}(a\\,;b)$ a une équation de la forme $ax+by+c=0$.",
        "id": "c7r2-s1-0"
       },
       {
        "titre": "La médiatrice",
        "enonce": "Dans un repère orthonormé, on considère $A(-1\\,;2)$ et $B(3\\,;6)$. La médiatrice de $[AB]$ a une équation de la forme $x+y+c=0$. Entrer $c$.",
        "reponse": -5,
        "indice": "La médiatrice passe par le milieu de $[AB]$ et admet $\\vec{AB}$ pour vecteur normal.",
        "explication": "Le milieu de $[AB]$ est $I(1\\,;4)$ et $\\vec{AB}(4\\,;4)$, colinéaire à $(1\\,;1)$, est normal à la médiatrice : équation $x+y+c=0$ avec $1+4+c=0$, soit $c=-5$. Autre voie : $MA^2=MB^2$ donne $8x+8y-40=0$.",
        "retenir": "Médiatrice de $[AB]$ : la droite qui passe par le milieu de $[AB]$ et admet $\\vec{AB}$ pour vecteur normal.",
        "id": "c7r2-s1-1"
       },
       {
        "titre": "Le pied de la perpendiculaire",
        "enonce": "Dans un repère orthonormé, on considère la droite $d : x-2y+3=0$ et le point $M(4\\,;1)$. On note $H$ le projeté orthogonal de $M$ sur $d$. Entrer l'abscisse de $H$.",
        "reponse": 3,
        "indice": "$H$ est sur la droite qui passe par $M$ et qui est dirigée par un vecteur normal $\\vec{n}$ de $d$ : écris $\\vec{MH}=t\\,\\vec{n}$, puis impose $H\\in d$.",
        "explication": "$\\vec{n}(1\\,;-2)$ est normal à $d$, donc $H(4+t\\,;1-2t)$ pour un réel $t$. $H\\in d$ donne $4+t-2(1-2t)+3=0$, soit $5t+5=0$ et $t=-1$. Ainsi $H(3\\,;3)$, et la distance de $M$ à $d$ vaut $MH=\\sqrt{1+4}=\\sqrt{5}$.",
        "retenir": "Projeté orthogonal de $M$ sur $d$ : partir de $M$ selon un vecteur normal de $d$, puis chercher l'intersection avec $d$.",
        "id": "c7r2-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un repère orthonormé, toute droite admet une équation de la forme $y=mx+p$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Pense à une droite parallèle à l'axe des ordonnées.",
        "explication": "Faux. La droite d'équation $x=2$ contient $(2\\,;0)$ et $(2\\,;1)$ : une équation $y=mx+p$ imposerait $0=2m+p$ et $1=2m+p$, ce qui est contradictoire. Toute droite admet en revanche une équation cartésienne $ax+by+c=0$ avec $(a\\,;b)\\neq(0\\,;0)$.",
        "retenir": "Les droites parallèles à l'axe des ordonnées n'ont pas d'équation réduite $y=mx+p$ : leur équation est $x=k$.",
        "id": "c7r2-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un repère orthonormé, les droites $d : 2x-3y+1=0$ et $d' : -4x+6y-2=0$ sont strictement parallèles. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare les deux équations terme à terme.",
        "explication": "Faux. L'équation de $d'$ est celle de $d$ multipliée par $-2$ : les deux droites sont confondues. Par exemple, le point $(1\\,;1)$ vérifie les deux équations. Elles sont parallèles, mais pas strictement.",
        "retenir": "Équations proportionnelles, constante comprise : droites confondues. Seuls $a$ et $b$ proportionnels : droites parallèles.",
        "id": "c7r2-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un repère orthonormé, les droites $d : ax+by+c=0$ et $d' : a'x+b'y+c'=0$ sont perpendiculaires si et seulement si $aa'+bb'=0$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Que représentent les vecteurs $(a\\,;b)$ et $(a'\\,;b')$ pour ces deux droites ?",
        "explication": "Vrai. $\\vec{u}(-b\\,;a)$ dirige $d$ et $\\vec{u}'(-b'\\,;a')$ dirige $d'$. Les droites sont perpendiculaires si et seulement si $\\vec{u}\\cdot\\vec{u}'=0$, et dans un repère orthonormé $\\vec{u}\\cdot\\vec{u}'=bb'+aa'$. Autrement dit, deux droites sont perpendiculaires si et seulement si leurs vecteurs normaux $(a\\,;b)$ et $(a'\\,;b')$ sont orthogonaux.",
        "retenir": "Deux droites sont perpendiculaires si et seulement si leurs vecteurs normaux (ou directeurs) sont orthogonaux.",
        "id": "c7r2-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le méridien de Posidonius",
    "fond": "crepuscule",
    "athena": "Le produit scalaire a quatre visages : coordonnées, normes, projection, cosinus. Avant de calculer, choisis celui que l'énoncé te tend.",
    "notion": "Produit scalaire : définitions et calculs",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#...................R...A..#",
     "#...................######.#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........T...............#",
     "#.........###..............#",
     "#..........................#",
     "S.............###..........#",
     "S.................H..T..G.J#",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "En coordonnées",
        "enonce": "Dans un repère orthonormé, on considère $\\vec{u}(3\\,;-2)$ et $\\vec{v}(4\\,;5)$. Entrer $\\vec{u}\\cdot\\vec{v}$.",
        "reponse": 2,
        "indice": "Dans un repère orthonormé, $\\vec{u}\\cdot\\vec{v}=xx'+yy'$.",
        "explication": "$\\vec{u}\\cdot\\vec{v}=3\\times4+(-2)\\times5=12-10=2$. Le produit scalaire est un nombre réel, pas un vecteur.",
        "retenir": "En repère orthonormé : $\\vec{u}\\cdot\\vec{v}=xx'+yy'$ et $\\|\\vec{u}\\|^2=x^2+y^2$.",
        "id": "c7r3-s0-0"
       },
       {
        "titre": "Avec les seules normes",
        "enonce": "Deux vecteurs $\\vec{u}$ et $\\vec{v}$ vérifient $\\|\\vec{u}\\|=3$, $\\|\\vec{v}\\|=5$ et $\\|\\vec{u}+\\vec{v}\\|=7$. Entrer $\\vec{u}\\cdot\\vec{v}$, sous forme de fraction ou de décimal.",
        "reponse": 7.5,
        "indice": "Développe $\\|\\vec{u}+\\vec{v}\\|^2=(\\vec{u}+\\vec{v})\\cdot(\\vec{u}+\\vec{v})$.",
        "explication": "$\\|\\vec{u}+\\vec{v}\\|^2=\\|\\vec{u}\\|^2+2\\,\\vec{u}\\cdot\\vec{v}+\\|\\vec{v}\\|^2$, donc $49=9+2\\,\\vec{u}\\cdot\\vec{v}+25$ et $\\vec{u}\\cdot\\vec{v}=\\frac{15}{2}$. On en déduit $\\cos(\\vec{u},\\vec{v})=\\frac{7{,}5}{15}=\\frac{1}{2}$ : les vecteurs forment un angle de $60^\\circ$.",
        "retenir": "$\\vec{u}\\cdot\\vec{v}=\\frac{1}{2}\\left(\\|\\vec{u}+\\vec{v}\\|^2-\\|\\vec{u}\\|^2-\\|\\vec{v}\\|^2\\right)$ : les normes suffisent.",
        "id": "c7r3-s0-1"
       },
       {
        "titre": "Le minimum caché",
        "enonce": "Deux vecteurs $\\vec{u}$ et $\\vec{v}$ vérifient $\\|\\vec{u}\\|=2$, $\\|\\vec{v}\\|=3$ et $\\vec{u}\\cdot\\vec{v}=-1$. Pour tout réel $t$, on pose $f(t)=\\|\\vec{u}+t\\,\\vec{v}\\|^2$. Entrer la valeur de $t$ pour laquelle $f(t)$ est minimal, sous forme de fraction.",
        "reponse": 0.1111111111111111,
        "indice": "Développe $f(t)$ : c'est un trinôme du second degré en $t$.",
        "explication": "$f(t)=\\|\\vec{u}\\|^2+2t\\,\\vec{u}\\cdot\\vec{v}+t^2\\|\\vec{v}\\|^2=9t^2-2t+4$, minimal en $t=\\frac{2}{18}=\\frac{1}{9}$. Pour cette valeur, $(\\vec{u}+t\\vec{v})\\cdot\\vec{v}=-1+9t=0$ : le vecteur le plus court de la famille est orthogonal à $\\vec{v}$. C'est l'idée du projeté orthogonal.",
        "retenir": "$\\|\\vec{u}+t\\vec{v}\\|$ est minimal quand $\\vec{u}+t\\vec{v}$ est orthogonal à $\\vec{v}$, c'est-à-dire pour $t=-\\frac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{v}\\|^2}$.",
        "id": "c7r3-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Avec le cosinus",
        "enonce": "Dans un triangle $ABC$, on a $AB=4$, $AC=6$ et $\\widehat{BAC}=60^\\circ$. Entrer $\\vec{AB}\\cdot\\vec{AC}$.",
        "reponse": 12,
        "indice": "$\\vec{AB}\\cdot\\vec{AC}=AB\\times AC\\times\\cos\\widehat{BAC}$.",
        "explication": "$\\vec{AB}\\cdot\\vec{AC}=4\\times6\\times\\cos60^\\circ=24\\times\\frac{1}{2}=12$.",
        "retenir": "$\\vec{u}\\cdot\\vec{v}=\\|\\vec{u}\\|\\times\\|\\vec{v}\\|\\times\\cos(\\vec{u},\\vec{v})$ : le signe du produit scalaire est celui du cosinus.",
        "id": "c7r3-s1-0"
       },
       {
        "titre": "Par projection",
        "enonce": "$ABCD$ est un carré de côté 4 et $I$ est le milieu de $[CD]$. Entrer $\\vec{AB}\\cdot\\vec{AI}$.",
        "reponse": 8,
        "indice": "Projette orthogonalement le point $I$ sur la droite $(AB)$.",
        "explication": "Le projeté orthogonal de $I$ sur $(AB)$ est le milieu $J$ de $[AB]$, et $\\vec{AJ}$ a le même sens que $\\vec{AB}$. Donc $\\vec{AB}\\cdot\\vec{AI}=\\vec{AB}\\cdot\\vec{AJ}=4\\times2=8$. Contrôle dans le repère orthonormé d'origine $A$ où $B(4\\,;0)$ et $D(0\\,;4)$ : $\\vec{AB}(4\\,;0)$ et $\\vec{AI}(2\\,;4)$.",
        "retenir": "Si $H$ est le projeté orthogonal de $C$ sur $(AB)$, alors $\\vec{AB}\\cdot\\vec{AC}=\\vec{AB}\\cdot\\vec{AH}$ : positif si même sens, négatif sinon.",
        "id": "c7r3-s1-1"
       },
       {
        "titre": "L'angle des diagonales",
        "enonce": "$ABCD$ est un rectangle tel que $AB=6$ et $AD=4$ ; ses diagonales se coupent en $O$. Entrer $\\cos\\widehat{AOB}$, sous forme de fraction.",
        "reponse": -0.38461538461538464,
        "indice": "Place le rectangle dans un repère orthonormé d'origine $A$, puis calcule $\\vec{OA}\\cdot\\vec{OB}$ et les longueurs $OA$ et $OB$.",
        "explication": "Repère orthonormé d'origine $A$ : $B(6\\,;0)$, $D(0\\,;4)$, $O(3\\,;2)$. $\\vec{OA}(-3\\,;-2)$ et $\\vec{OB}(3\\,;-2)$ donnent $\\vec{OA}\\cdot\\vec{OB}=-9+4=-5$ et $OA=OB=\\sqrt{13}$. Donc $\\cos\\widehat{AOB}=-\\frac{5}{13}$ : l'angle est obtus, ce qui est cohérent puisqu'il fait face au grand côté $[AB]$.",
        "retenir": "Angle géométrique : $\\cos\\widehat{AOB}=\\dfrac{\\vec{OA}\\cdot\\vec{OB}}{OA\\times OB}$, après avoir choisi un repère adapté à la figure.",
        "id": "c7r3-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous vecteurs $\\vec{u}$ et $\\vec{v}$ du plan, $|\\vec{u}\\cdot\\vec{v}|\\leq\\|\\vec{u}\\|\\times\\|\\vec{v}\\|$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Traite à part le cas d'un vecteur nul, puis utilise l'expression du produit scalaire avec le cosinus.",
        "explication": "Vrai. Si $\\vec{u}$ ou $\\vec{v}$ est nul, les deux membres sont nuls. Sinon, $\\vec{u}\\cdot\\vec{v}=\\|\\vec{u}\\|\\times\\|\\vec{v}\\|\\times\\cos\\theta$, où $\\theta$ est l'angle des deux vecteurs, et $|\\cos\\theta|\\leq1$. C'est l'inégalité de Cauchy-Schwarz ; l'égalité a lieu si et seulement si les vecteurs sont colinéaires.",
        "retenir": "Inégalité de Cauchy-Schwarz : $|\\vec{u}\\cdot\\vec{v}|\\leq\\|\\vec{u}\\|\\,\\|\\vec{v}\\|$, avec égalité si et seulement si $\\vec{u}$ et $\\vec{v}$ sont colinéaires.",
        "id": "c7r3-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous vecteurs $\\vec{u}$ et $\\vec{v}$ du plan, $(\\vec{u}+\\vec{v})\\cdot(\\vec{u}-\\vec{v})=0$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Développe, comme une identité remarquable.",
        "explication": "Faux. $(\\vec{u}+\\vec{v})\\cdot(\\vec{u}-\\vec{v})=\\|\\vec{u}\\|^2-\\|\\vec{v}\\|^2$. Contre-exemple en repère orthonormé : $\\vec{u}(2\\,;0)$ et $\\vec{v}(1\\,;0)$ donnent $(3\\,;0)\\cdot(1\\,;0)=3\\neq0$. L'égalité n'a lieu que si $\\|\\vec{u}\\|=\\|\\vec{v}\\|$ : c'est l'orthogonalité des diagonales d'un losange.",
        "retenir": "$(\\vec{u}+\\vec{v})\\cdot(\\vec{u}-\\vec{v})=\\|\\vec{u}\\|^2-\\|\\vec{v}\\|^2$ : nul si et seulement si $\\|\\vec{u}\\|=\\|\\vec{v}\\|$.",
        "id": "c7r3-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous vecteurs $\\vec{u}$ et $\\vec{v}$ du plan, $\\|\\vec{u}+\\vec{v}\\|^2=\\|\\vec{u}\\|^2+\\|\\vec{v}\\|^2$ si et seulement si $\\vec{u}$ et $\\vec{v}$ sont orthogonaux. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Développe $\\|\\vec{u}+\\vec{v}\\|^2$.",
        "explication": "Vrai. $\\|\\vec{u}+\\vec{v}\\|^2=\\|\\vec{u}\\|^2+2\\,\\vec{u}\\cdot\\vec{v}+\\|\\vec{v}\\|^2$, donc l'égalité équivaut à $\\vec{u}\\cdot\\vec{v}=0$, c'est-à-dire à l'orthogonalité (le vecteur nul étant orthogonal à tout vecteur). C'est le théorème de Pythagore et sa réciproque, en une seule ligne.",
        "retenir": "Pythagore vectoriel : $\\|\\vec{u}+\\vec{v}\\|^2=\\|\\vec{u}\\|^2+\\|\\vec{v}\\|^2 \\iff \\vec{u}\\cdot\\vec{v}=0$.",
        "id": "c7r3-b0-2"
       }
      ]
     }
    ],
    "acrobaties": [
     {
      "titre": "La simplification interdite",
      "enonce": "Un élève veut démontrer que si $\\vec{u}\\cdot\\vec{v}=\\vec{u}\\cdot\\vec{w}$ avec $\\vec{u}\\neq\\vec{0}$, alors $\\vec{v}=\\vec{w}$. Il écrit : « on simplifie par $\\vec{u}$, qui n'est pas nul ». Que peut-on réellement déduire de l'hypothèse ?",
      "reponse": 2,
      "choix": [
       "Que $\\vec{v}=\\vec{w}$ : la simplification est permise puisque $\\vec{u}\\neq\\vec{0}$.",
       "Seulement que $\\vec{u}$ est orthogonal à $\\vec{v}-\\vec{w}$.",
       "Que $\\vec{v}$ et $\\vec{w}$ sont colinéaires.",
       "Que $\\|\\vec{v}\\|=\\|\\vec{w}\\|$."
      ],
      "indice": "Fais tout passer dans le même membre et factorise : quelle propriété géométrique obtiens-tu ?",
      "explication": "L'hypothèse équivaut à $\\vec{u}\\cdot(\\vec{v}-\\vec{w})=0$, c'est-à-dire à $\\vec{u}\\perp(\\vec{v}-\\vec{w})$, et rien de plus. Contre-exemple à la « simplification », dans un repère orthonormé : $\\vec{u}(1\\,;0)$, $\\vec{v}(1\\,;0)$ et $\\vec{w}(1\\,;5)$ donnent $\\vec{u}\\cdot\\vec{v}=\\vec{u}\\cdot\\vec{w}=1$, alors que $\\vec{v}$ et $\\vec{w}$ ne sont ni égaux, ni colinéaires, ni de même norme.",
      "retenir": "On ne divise jamais par un vecteur : $\\vec{u}\\cdot\\vec{v}=\\vec{u}\\cdot\\vec{w}$ signifie seulement $\\vec{u}\\perp(\\vec{v}-\\vec{w})$.",
      "id": "c7r3-h0",
      "figure": "double"
     }
    ]
   },
   {
    "nom": "L'attention de Simone Weil",
    "fond": "orient",
    "athena": "Regarde avant de calculer : un diamètre, un rayon perpendiculaire à une tangente, un angle obtus caché font souvent tout le travail.",
    "notion": "Applications : Al-Kashi, orthogonalité, cercles",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....................T....#",
     "#....................###...#",
     "#..........................#",
     "#................###.......#",
     "#......A...................#",
     "#.....###....###...........#",
     "#..........................#",
     "#........###...............S",
     "#J.G.T.....................S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "La traversée du lagon",
        "enonce": "Depuis un ponton $P$ de Petite-Terre, un kayak rejoint un îlot $I$ situé à 5 km, un autre rejoint un récif $R$ situé à 8 km. L'angle $\\widehat{IPR}$ mesure $60^\\circ$. Entrer la distance $IR$, en km.",
        "reponse": 7,
        "unite": "km",
        "indice": "Formule d'Al-Kashi : $IR^2=PI^2+PR^2-2\\,PI\\times PR\\times\\cos\\widehat{IPR}$.",
        "explication": "$IR^2=25+64-2\\times5\\times8\\times\\frac{1}{2}=89-40=49$, donc $IR=7$ km.",
        "retenir": "Al-Kashi : $a^2=b^2+c^2-2bc\\cos\\widehat{A}$ ; c'est Pythagore corrigé par un produit scalaire.",
        "id": "c7r4-s0-0"
       },
       {
        "titre": "Un angle obtus",
        "enonce": "Dans un triangle $ABC$, on a $AB=4$, $AC=5$ et $BC=7$. Entrer $\\cos\\widehat{BAC}$, sous forme de fraction.",
        "reponse": -0.2,
        "indice": "Écris la formule d'Al-Kashi pour le côté opposé au sommet $A$, puis isole le cosinus.",
        "explication": "$BC^2=AB^2+AC^2-2\\,AB\\times AC\\times\\cos\\widehat{BAC}$ donne $\\cos\\widehat{BAC}=\\frac{16+25-49}{2\\times4\\times5}=\\frac{-8}{40}=-\\frac{1}{5}$. Le cosinus est négatif : l'angle est obtus, ce qu'annonçait $BC^2>AB^2+AC^2$.",
        "retenir": "$\\cos\\widehat{A}=\\dfrac{b^2+c^2-a^2}{2bc}$, où $a$ est le côté opposé à $A$ : son signe dit si l'angle est aigu, droit ou obtus.",
        "id": "c7r4-s0-1"
       },
       {
        "titre": "La médiane",
        "enonce": "Dans un triangle $ABC$, on a $AB=7$, $AC=9$ et $BC=8$. On note $I$ le milieu de $[BC]$. Entrer la longueur $AI$.",
        "reponse": 7,
        "indice": "Écris $\\vec{AI}=\\frac{1}{2}(\\vec{AB}+\\vec{AC})$ et calcule d'abord $\\vec{AB}\\cdot\\vec{AC}$ à partir des trois longueurs.",
        "explication": "$\\vec{AB}\\cdot\\vec{AC}=\\frac{1}{2}(AB^2+AC^2-BC^2)=\\frac{1}{2}(49+81-64)=33$. Puis $AI^2=\\frac{1}{4}\\left(AB^2+2\\,\\vec{AB}\\cdot\\vec{AC}+AC^2\\right)=\\frac{1}{4}(49+66+81)=49$, donc $AI=7$. C'est le théorème de la médiane : $AB^2+AC^2=2AI^2+\\frac{1}{2}BC^2$.",
        "retenir": "Théorème de la médiane : $AB^2+AC^2=2AI^2+\\frac{1}{2}BC^2$, où $I$ est le milieu de $[BC]$.",
        "id": "c7r4-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Centre et rayon",
        "enonce": "Dans un repère orthonormé, l'ensemble des points $M(x\\,;y)$ tels que $x^2+y^2-6x+4y-12=0$ est un cercle. Entrer son rayon.",
        "reponse": 5,
        "indice": "Fais apparaître deux carrés, par exemple $x^2-6x=(x-3)^2-9$.",
        "explication": "L'équation s'écrit $(x-3)^2-9+(y+2)^2-4-12=0$, soit $(x-3)^2+(y+2)^2=25$ : cercle de centre $\\Omega(3\\,;-2)$ et de rayon 5.",
        "retenir": "$(x-a)^2+(y-b)^2=r^2$ : cercle de centre $(a\\,;b)$ et de rayon $r$ ; on s'y ramène par forme canonique.",
        "id": "c7r4-s1-0"
       },
       {
        "titre": "Le cercle de diamètre [AB]",
        "enonce": "Dans un repère orthonormé, on considère $A(1\\,;2)$ et $B(5\\,;-4)$. L'ensemble des points $M(x\\,;y)$ tels que $\\vec{MA}\\cdot\\vec{MB}=0$ a une équation de la forme $x^2+y^2+ax+by+c=0$. Entrer $c$.",
        "reponse": -3,
        "indice": "Écris les coordonnées de $\\vec{MA}$ et de $\\vec{MB}$ en fonction de $x$ et $y$, puis développe leur produit scalaire.",
        "explication": "$\\vec{MA}(1-x\\,;2-y)$ et $\\vec{MB}(5-x\\,;-4-y)$, donc $\\vec{MA}\\cdot\\vec{MB}=(1-x)(5-x)+(2-y)(-4-y)=x^2-6x+5+y^2+2y-8$, et $c=-3$. C'est le cercle de diamètre $[AB]$ : centre $(3\\,;-1)$, rayon $\\sqrt{13}=\\frac{AB}{2}$.",
        "retenir": "$\\vec{MA}\\cdot\\vec{MB}=0$ décrit le cercle de diamètre $[AB]$ : le cercle circonscrit au triangle rectangle du collège, en une équation.",
        "id": "c7r4-s1-1"
       },
       {
        "titre": "Les tangentes parallèles",
        "enonce": "Dans un repère orthonormé, on considère le cercle $\\mathcal{C}$ de centre $\\Omega(2\\,;-1)$ et de rayon 2 et, pour tout réel $k$, la droite $d_k : 3x+4y+k=0$. Entrer la plus grande valeur de $k$ pour laquelle $d_k$ est tangente à $\\mathcal{C}$.",
        "reponse": 8,
        "indice": "$d_k$ est tangente à $\\mathcal{C}$ si et seulement si $\\Omega H=2$, où $H$ est le projeté orthogonal de $\\Omega$ sur $d_k$. Pars de $\\Omega$ selon le vecteur normal $(3\\,;4)$.",
        "explication": "$\\vec{n}(3\\,;4)$ est normal à $d_k$ : $H=\\Omega+t\\vec{n}$, soit $H(2+3t\\,;-1+4t)$, et $H\\in d_k$ donne $25t+2+k=0$. Alors $\\Omega H=|t|\\times\\|\\vec{n}\\|=\\frac{|k+2|}{5}$. La tangence s'écrit $|k+2|=10$, soit $k=8$ ou $k=-12$. La plus grande valeur est 8.",
        "retenir": "Une droite est tangente à un cercle si et seulement si la distance du centre à la droite est égale au rayon.",
        "id": "c7r4-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un triangle $ABC$, si $BC^2>AB^2+AC^2$, alors l'angle $\\widehat{BAC}$ est obtus. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Exprime $\\cos\\widehat{BAC}$ à l'aide de la formule d'Al-Kashi.",
        "explication": "Vrai. Al-Kashi donne $\\cos\\widehat{BAC}=\\dfrac{AB^2+AC^2-BC^2}{2\\,AB\\times AC}$. L'hypothèse rend le numérateur strictement négatif et le dénominateur est positif : $\\cos\\widehat{BAC}<0$. Comme $\\widehat{BAC}$ est strictement compris entre $0^\\circ$ et $180^\\circ$, l'angle est obtus. La réciproque est vraie aussi.",
        "retenir": "Comparer $a^2$ à $b^2+c^2$ dit si l'angle opposé au côté $a$ est aigu, droit ou obtus.",
        "id": "c7r4-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un repère orthonormé, l'ensemble des points $M(x\\,;y)$ tels que $x^2+y^2-2x+4y+6=0$ est un cercle. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Mets l'équation sous forme canonique et regarde le signe du second membre.",
        "explication": "Faux. L'équation s'écrit $(x-1)^2+(y+2)^2=1+4-6=-1$. Une somme de deux carrés ne peut pas valoir $-1$ : l'ensemble est vide. Une équation $x^2+y^2+ax+by+c=0$ décrit un cercle, un point ou l'ensemble vide.",
        "retenir": "Avant de lire un centre et un rayon, vérifier que le second membre de la forme canonique est strictement positif.",
        "id": "c7r4-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un repère orthonormé, la droite $d : x+y+1=0$ est tangente au cercle $\\mathcal{C} : x^2+y^2-4x-2y-3=0$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Détermine le centre et le rayon de $\\mathcal{C}$, puis le projeté orthogonal du centre sur $d$.",
        "explication": "Vrai. $\\mathcal{C} : (x-2)^2+(y-1)^2=8$, de centre $\\Omega(2\\,;1)$ et de rayon $2\\sqrt{2}$. Le projeté de $\\Omega$ sur $d$ est $H=\\Omega+t\\,(1\\,;1)$ avec $(2+t)+(1+t)+1=0$, soit $t=-2$ et $H(0\\,;-1)$. Alors $\\Omega H=\\sqrt{4+4}=2\\sqrt{2}$, égal au rayon : $d$ est tangente à $\\mathcal{C}$ en $H$.",
        "retenir": "Tangence : distance du centre à la droite égale au rayon ; le point de contact est le projeté orthogonal du centre.",
        "id": "c7r4-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "La mesure d'Ératosthène",
    "fond": "temple",
    "athena": "Ératosthène a mesuré la Terre avec un angle et une distance. Mesure ce pavé pièce à pièce : chaque question peut se traiter seule.",
    "notion": "Problème de géométrie repérée",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.......................A..#",
     "#......................###.#",
     "#..........................#",
     "#...................###....#",
     "#..........................#",
     "#................###.......#",
     "#..........................#",
     "S...................###....#",
     "S.......T...............G.J#",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le sommet E",
        "enonce": "On rappelle que $E$ est le point d'ordonnée positive tel que $EA=ED=2$, avec $A\\left(-\\frac{3}{2}\\,;0\\right)$ et $D\\left(\\frac{3}{2}\\,;0\\right)$. Quelle est l'ordonnée de $E$ ?",
        "reponse": 3,
        "choix": [
         "$\\frac{\\sqrt{15}}{2}$",
         "$\\frac{7}{4}$",
         "$\\frac{\\sqrt{7}}{2}$",
         "$\\sqrt{3}$"
        ],
        "indice": "$E$ est équidistant de $A$ et de $D$ : sur quelle droite se trouve-t-il ?",
        "explication": "$EA=ED$ place $E$ sur la médiatrice de $[AD]$, qui est l'axe des ordonnées : $E(0\\,;y)$ avec $y>0$. Puis $EA^2=\\frac{9}{4}+y^2=4$, donc $y^2=\\frac{7}{4}$ et $y=\\frac{\\sqrt{7}}{2}$. Les autres valeurs viennent d'erreurs classiques : $\\frac{\\sqrt{15}}{2}$ confond $A$ avec $B$, et $\\frac{7}{4}$ oublie la racine carrée.",
        "retenir": "Un point équidistant de deux points est sur leur médiatrice : la symétrie de la figure fixe une coordonnée.",
        "id": "c7b-s0-0"
       },
       {
        "titre": "L'angle en $G_1$",
        "enonce": "On admet que $B\\left(-\\frac{1}{2}\\,;0\\right)$ et $E\\left(0\\,;\\frac{\\sqrt{7}}{2}\\right)$. Le point $G_1$ vérifie $G_1B=G_1E=1$. Entrer la mesure, en degrés, de l'angle $\\widehat{BG_1E}$.",
        "reponse": 90,
        "unite": "°",
        "indice": "Calcule $BE^2$, puis applique la formule d'Al-Kashi dans le triangle $BG_1E$.",
        "explication": "$BE^2=\\left(\\frac{1}{2}\\right)^2+\\frac{7}{4}=2$. Al-Kashi dans $BG_1E$ : $BE^2=G_1B^2+G_1E^2-2\\,G_1B\\times G_1E\\times\\cos\\widehat{BG_1E}$, soit $2=2-2\\cos\\widehat{BG_1E}$. Donc $\\cos\\widehat{BG_1E}=0$ : l'angle est droit (c'est aussi la réciproque du théorème de Pythagore).",
        "retenir": "Al-Kashi contient la réciproque de Pythagore : $a^2=b^2+c^2 \\iff \\cos\\widehat{A}=0$.",
        "id": "c7b-s0-1"
       },
       {
        "titre": "Le cercle $\\mathcal{C}_5$",
        "enonce": "On admet que $E\\left(0\\,;\\frac{\\sqrt{7}}{2}\\right)$. Le cercle $\\mathcal{C}_5$ de centre $E$ et de rayon 1 a une équation de la forme $x^2+y^2+ax+by+c=0$. Entrer $c$, sous forme de fraction.",
        "reponse": 0.75,
        "indice": "Écris $(x-x_E)^2+(y-y_E)^2=1$, puis développe.",
        "explication": "$x^2+\\left(y-\\frac{\\sqrt{7}}{2}\\right)^2=1$ donne $x^2+y^2-\\sqrt{7}\\,y+\\frac{7}{4}-1=0$ : $a=0$, $b=-\\sqrt{7}$ et $c=\\frac{3}{4}$.",
        "retenir": "Le terme constant de l'équation développée d'un cercle de centre $\\Omega$ et de rayon $r$ vaut $x_\\Omega^2+y_\\Omega^2-r^2$.",
        "id": "c7b-s0-2"
       },
       {
        "titre": "La corde commune",
        "enonce": "On admet que $B\\left(-\\frac{1}{2}\\,;0\\right)$, $E\\left(0\\,;\\frac{\\sqrt{7}}{2}\\right)$ et que les deux points communs à $\\mathcal{C}_1$ et $\\mathcal{C}_5$ sont sur la droite $\\Delta : x+\\sqrt{7}\\,y-\\frac{3}{2}=0$ (obtenue en soustrayant les équations des deux cercles). On note $\\delta$ la distance du point $B$ à la droite $\\Delta$. Entrer $\\delta^2$, le carré de cette distance, sous forme de fraction.",
        "reponse": 0.5,
        "indice": "Compare un vecteur normal de $\\Delta$ au vecteur $\\vec{BE}$ : $\\Delta$ est une droite bien connue associée au segment $[BE]$.",
        "explication": "$\\vec{n}(1\\,;\\sqrt{7})=2\\,\\vec{BE}$ est normal à $\\Delta$, et le milieu $\\left(-\\frac{1}{4}\\,;\\frac{\\sqrt{7}}{4}\\right)$ de $[BE]$ vérifie l'équation de $\\Delta$ : $\\Delta$ est la médiatrice de $[BE]$. Le projeté orthogonal de $B$ sur $\\Delta$ est ce milieu, donc $\\delta=\\frac{BE}{2}=\\frac{\\sqrt{2}}{2}$ et $\\delta^2=\\frac{1}{2}$. Contrôle par la formule : $\\frac{\\left|-\\frac{1}{2}-\\frac{3}{2}\\right|}{\\sqrt{1+7}}=\\frac{2}{2\\sqrt{2}}$.",
        "retenir": "Deux cercles de même rayon se coupent sur la médiatrice de leurs centres ; une distance à une droite se lit sur un projeté orthogonal.",
        "id": "c7b-s0-3"
       },
       {
        "titre": "L'aire du pavé",
        "enonce": "On admet que $B\\left(-\\frac{1}{2}\\,;0\\right)$, $C\\left(\\frac{1}{2}\\,;0\\right)$, $E\\left(0\\,;\\frac{\\sqrt{7}}{2}\\right)$ et que les triangles $BG_1E$ et $CG_2E$ sont rectangles isocèles en $G_1$ et $G_2$, avec $G_1B=G_2C=1$, et situés à l'extérieur du triangle $BCE$. Entrer l'aire du pentagone $BCG_2EG_1$, arrondie au centième.",
        "reponse": 1.66,
        "tolerance": 0.005,
        "indice": "Découpe le pentagone en trois triangles : $BCE$ et les deux triangles rectangles isocèles.",
        "explication": "Le triangle $BCE$ a pour base $BC=1$ et pour hauteur $y_E=\\frac{\\sqrt{7}}{2}$ : son aire vaut $\\frac{\\sqrt{7}}{4}$. Chaque triangle rectangle isocèle dont les côtés de l'angle droit mesurent 1 a pour aire $\\frac{1}{2}$. Aire du pentagone : $1+\\frac{\\sqrt{7}}{4}\\approx1{,}66$.",
        "retenir": "Aire d'un polygone en repère : le découper en triangles dont on connaît une base et la hauteur associée.",
        "id": "c7b-s0-4"
       }
      ],
      "boss": "Le Sphinx de Thèbes",
      "monstre": "sphinx",
      "contexte": "D'après CAPES Mayotte 2022 (composition 1) : certains trottoirs du Caire sont pavés de pentagones dont les cinq côtés ont la même longueur. Le plan est muni d'un repère orthonormé. On considère $A\\left(-\\frac{3}{2}\\,;0\\right)$, $B\\left(-\\frac{1}{2}\\,;0\\right)$, $C\\left(\\frac{1}{2}\\,;0\\right)$ et $D\\left(\\frac{3}{2}\\,;0\\right)$. Le point $E$ est le point d'ordonnée positive tel que $EA=ED=2$. On note $\\mathcal{C}_1$ le cercle de centre $B$ et de rayon 1, $\\mathcal{C}_5$ le cercle de centre $E$ et de rayon 1, $G_1$ le point commun à $\\mathcal{C}_1$ et $\\mathcal{C}_5$ d'abscisse négative et $G_2$ le symétrique de $G_1$ par rapport à l'axe des ordonnées. Le pavé est le pentagone $BCG_2EG_1$."
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Dans un repère orthonormé, on considère $E(-2\\,;0)$, $F(8\\,;0)$ et $G(0\\,;4)$. Proposition : « L'orthocentre du triangle $EFG$ est le point $G$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule $\\vec{GE}\\cdot\\vec{GF}$.",
        "explication": "Vrai. $\\vec{GE}(-2\\,;-4)$ et $\\vec{GF}(8\\,;-4)$ donnent $\\vec{GE}\\cdot\\vec{GF}=-16+16=0$ : le triangle est rectangle en $G$. La hauteur issue de $E$ est alors la droite $(EG)$ et celle issue de $F$ est la droite $(FG)$ : elles se coupent en $G$, qui est donc l'orthocentre.",
        "retenir": "Dans un triangle rectangle, l'orthocentre est le sommet de l'angle droit.",
        "id": "c7b-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $ABCD$ est un quadrilatère tel que $\\vec{AC}\\cdot\\vec{BD}=0$, alors $ABCD$ est un losange. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Les diagonales d'un losange sont perpendiculaires. Et la réciproque ? Pense à un cerf-volant.",
        "explication": "Faux. Dans un repère orthonormé, prenons $A(0\\,;1)$, $B(-1\\,;0)$, $C(0\\,;-3)$ et $D(1\\,;0)$ : $\\vec{AC}(0\\,;-4)$ et $\\vec{BD}(2\\,;0)$ sont orthogonaux, mais $AB=\\sqrt{2}$ et $BC=\\sqrt{10}$, donc $ABCD$ n'est pas un losange. Il faudrait en plus que les diagonales aient le même milieu.",
        "retenir": "Diagonales perpendiculaires ne suffisent pas pour un losange : il faut aussi qu'elles se coupent en leur milieu.",
        "id": "c7b-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Un parallélogramme dont les diagonales ont la même longueur est un rectangle. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Exprime $\\vec{AC}$ et $\\vec{BD}$ à l'aide de $\\vec{AB}$ et $\\vec{AD}$, puis compare $AC^2$ et $BD^2$.",
        "explication": "Vrai. Soit $ABCD$ un parallélogramme, $\\vec{u}=\\vec{AB}$ et $\\vec{v}=\\vec{AD}$ : $\\vec{AC}=\\vec{u}+\\vec{v}$ et $\\vec{BD}=\\vec{v}-\\vec{u}$, donc $AC^2-BD^2=4\\,\\vec{u}\\cdot\\vec{v}$. Ainsi $AC=BD$ équivaut à $\\vec{u}\\cdot\\vec{v}=0$, c'est-à-dire à un angle droit en $A$ : un parallélogramme ayant un angle droit est un rectangle. Sans l'hypothèse « parallélogramme », c'est faux : un trapèze isocèle a des diagonales de même longueur.",
        "retenir": "Dans un parallélogramme : diagonales de même longueur $\\iff$ rectangle ; diagonales perpendiculaires $\\iff$ losange.",
        "id": "c7b-b0-2"
       }
      ]
     }
    ]
   }
  ],
  "sanctuaire": {
   "sceauxOr": 3,
   "salle": {
    "nom": "Le sanctuaire de Poincaré",
    "fond": "sanctuaire",
    "athena": "Ici, les échafaudages tombent : la distance devient une projection, l'optimum un produit scalaire. Enseigner, ce sera savoir dire pourquoi.",
    "notion": "Problèmes plus difficiles et regard de futur professeur",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#....................A.....#",
     "#...................###....#",
     "#........................T.#",
     "#.......................##.#",
     "#..........................#",
     "#....................##....S",
     "#J.G.T.............T.......S",
     "########PPPPPPPPPP##########",
     "########..........##########",
     "########..........##########",
     "########..........##########"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Entre deux parallèles",
        "enonce": "Dans un repère orthonormé, on considère les droites $d : 3x-4y+2=0$ et $d' : 6x-8y-21=0$. Justifier qu'elles sont parallèles, puis entrer la distance entre $d$ et $d'$, sous forme de fraction ou de décimal.",
        "reponse": 2.5,
        "indice": "Prends un point $A$ de $d$ et projette-le orthogonalement sur $d'$ en suivant le vecteur normal $\\vec{n}(3\\,;-4)$.",
        "explication": "Les vecteurs normaux $(3\\,;-4)$ et $(6\\,;-8)$ sont colinéaires : $d$ et $d'$ sont parallèles (et distinctes). Le point $A(2\\,;2)$ est sur $d$. Son projeté sur $d'$ est $H=A+t\\vec{n}$ avec $6(2+3t)-8(2-4t)-21=0$, soit $50t=25$ et $t=\\frac{1}{2}$. Distance : $AH=|t|\\times\\|\\vec{n}\\|=\\frac{1}{2}\\times5=\\frac{5}{2}$. Piège : appliquer $\\frac{|c-c'|}{5}$ sans réécrire $d' : 3x-4y-\\frac{21}{2}=0$ donne $\\frac{23}{5}$.",
        "retenir": "Distance entre deux droites parallèles : la distance d'un point quelconque de l'une à l'autre, obtenue par projection orthogonale.",
        "id": "c7s-s0-0"
       },
       {
        "titre": "Le point le plus proche",
        "enonce": "Dans un repère orthonormé, on considère la droite $d : y=2x+1$ et le point $A(5\\,;1)$. Un point $M$ parcourt la droite $d$. Entrer la valeur minimale de $AM^2$.",
        "reponse": 20,
        "indice": "Écris $M(x\\,;2x+1)$ : $AM^2$ est un trinôme en $x$. Ou bien cherche le projeté orthogonal de $A$ sur $d$.",
        "explication": "$AM^2=(x-5)^2+(2x)^2=5x^2-10x+25$, minimal en $x=1$, où il vaut 20. Le point $H(1\\,;3)$ obtenu est le projeté orthogonal de $A$ sur $d$ : $\\vec{AH}(-4\\,;2)$ est orthogonal au vecteur directeur $(1\\,;2)$. La distance de $A$ à $d$ vaut $\\sqrt{20}=2\\sqrt{5}$.",
        "retenir": "Le minimum de $AM$ pour $M$ sur une droite est atteint au projeté orthogonal : c'est la distance du point à la droite.",
        "id": "c7s-s0-1"
       },
       {
        "titre": "Une aire par la distance",
        "enonce": "Dans un repère orthonormé, on considère $A(1\\,;2)$, $B(4\\,;-1)$ et $C(6\\,;5)$. En calculant la distance de $C$ à la droite $(AB)$ à l'aide d'un vecteur normal, déterminer l'aire du triangle $ABC$. Entrer cette aire.",
        "reponse": 12,
        "indice": "$\\vec{AB}(3\\,;-3)$ dirige $(AB)$, donc $\\vec{n}(1\\,;1)$ lui est normal. La distance de $C$ à $(AB)$ est la longueur de la projection de $\\vec{AC}$ sur la direction de $\\vec{n}$.",
        "explication": "$\\vec{AC}(5\\,;3)$ et $\\vec{n}(1\\,;1)$ : la distance de $C$ à $(AB)$ vaut $\\frac{|\\vec{AC}\\cdot\\vec{n}|}{\\|\\vec{n}\\|}=\\frac{8}{\\sqrt{2}}=4\\sqrt{2}$. Avec $AB=3\\sqrt{2}$, l'aire vaut $\\frac{1}{2}\\times3\\sqrt{2}\\times4\\sqrt{2}=12$. On retrouve $\\frac{1}{2}|\\det(\\vec{AB},\\vec{AC})|=\\frac{1}{2}|9+15|=12$.",
        "retenir": "Distance de $C$ à $(AB)$ : $\\dfrac{|\\vec{AC}\\cdot\\vec{n}|}{\\|\\vec{n}\\|}$, avec $\\vec{n}$ normal à $(AB)$. La même formule donnera la distance d'un point à un plan.",
        "id": "c7s-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "La règle du parallélogramme",
        "enonce": "$ABCD$ est un parallélogramme tel que $AB=9$, $AD=7$ et $AC=14$. Entrer la longueur $BD$.",
        "reponse": 8,
        "indice": "Avec $\\vec{u}=\\vec{AB}$ et $\\vec{v}=\\vec{AD}$, on a $\\vec{AC}=\\vec{u}+\\vec{v}$ et $\\vec{BD}=\\vec{v}-\\vec{u}$. Additionne les carrés des normes.",
        "explication": "$AC^2+BD^2=\\|\\vec{u}+\\vec{v}\\|^2+\\|\\vec{v}-\\vec{u}\\|^2=2\\left(\\|\\vec{u}\\|^2+\\|\\vec{v}\\|^2\\right)$, car les doubles produits s'éliminent. Donc $BD^2=2(81+49)-196=64$ et $BD=8$.",
        "retenir": "Règle du parallélogramme : $AC^2+BD^2=2(AB^2+AD^2)$, la somme des carrés des diagonales égale celle des quatre côtés.",
        "id": "c7s-s1-0"
       },
       {
        "titre": "Une droite cachée",
        "enonce": "Dans un repère orthonormé, on considère $A(1\\,;2)$ et $B(5\\,;4)$. L'ensemble des points $M$ tels que $MA^2-MB^2=20$ est une droite. Entrer l'ordonnée de son point d'intersection avec l'axe des ordonnées.",
        "reponse": 14,
        "indice": "Développe $MA^2-MB^2$ en coordonnées : les termes en $x^2$ et en $y^2$ disparaissent.",
        "explication": "$MA^2-MB^2=(x-1)^2+(y-2)^2-(x-5)^2-(y-4)^2=8x+4y-36$. La condition s'écrit $8x+4y-56=0$, soit $2x+y-14=0$ : une droite de vecteur normal $(2\\,;1)$, colinéaire à $\\vec{AB}(4\\,;2)$, donc perpendiculaire à $(AB)$. Pour $x=0$, on obtient $y=14$.",
        "retenir": "$MA^2-MB^2=2\\,\\vec{IM}\\cdot\\vec{AB}$, où $I$ est le milieu de $[AB]$ : l'ensemble $MA^2-MB^2=k$ est une droite perpendiculaire à $(AB)$.",
        "id": "c7s-s1-1"
       },
       {
        "titre": "Le maximum sur le cercle",
        "enonce": "Dans un repère orthonormé, le point $M(x\\,;y)$ parcourt le cercle de centre $O$ et de rayon 2. Entrer la plus grande valeur prise par $3x+4y$.",
        "reponse": 10,
        "indice": "$3x+4y$ est le produit scalaire de $\\vec{OM}$ par un vecteur fixe : majore-le.",
        "explication": "$3x+4y=\\vec{n}\\cdot\\vec{OM}$ avec $\\vec{n}(3\\,;4)$. Par l'inégalité de Cauchy-Schwarz, $\\vec{n}\\cdot\\vec{OM}\\leq\\|\\vec{n}\\|\\times OM=5\\times2=10$, avec égalité lorsque $\\vec{OM}$ est colinéaire à $\\vec{n}$ et de même sens : $M\\left(\\frac{6}{5}\\,;\\frac{8}{5}\\right)$ donne bien $\\frac{18}{5}+\\frac{32}{5}=10$. Géométriquement, la droite $3x+4y=10$ est tangente au cercle.",
        "retenir": "Pour optimiser $ax+by$ sur un cercle de centre $O$ et de rayon $r$, y voir un produit scalaire : le maximum vaut $r\\sqrt{a^2+b^2}$.",
        "effet": "passerelle",
        "id": "c7s-s1-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Le signe oublié",
        "enonce": "En Première, on donne un triangle $ABC$ tel que $AB=4$, $AC=5$ et $\\widehat{BAC}=120^\\circ$. Un élève note $H$ le projeté orthogonal de $C$ sur $(AB)$, calcule $AH=5\\cos60^\\circ=2{,}5$ et conclut : $\\vec{AB}\\cdot\\vec{AC}=AB\\times AH=10$. Quel diagnostic poser ?",
        "reponse": 4,
        "choix": [
         "Le calcul est juste : par projection, un produit scalaire est un produit de deux longueurs.",
         "Il fallait projeter $B$ sur $(AC)$ : la projection de $C$ sur $(AB)$ ne convient pas.",
         "Il fallait encore multiplier par $\\cos120^\\circ$, ce qui donne $-5$.",
         "$H$ n'est pas sur la demi-droite $[AB)$ : $\\vec{AH}$ et $\\vec{AB}$ sont de sens contraires, donc $\\vec{AB}\\cdot\\vec{AC}=-AB\\times AH=-10$."
        ],
        "indice": "L'angle $\\widehat{BAC}$ est obtus : de quel côté de $A$ tombe le projeté de $C$ sur la droite $(AB)$ ?",
        "explication": "L'angle en $A$ étant obtus, $H$ est sur la droite $(AB)$, du côté de $A$ opposé à $B$ : $\\vec{AB}\\cdot\\vec{AC}=\\vec{AB}\\cdot\\vec{AH}=-AB\\times AH=-10$. Contrôle : $4\\times5\\times\\cos120^\\circ=-10$. La longueur $AH=2{,}5$ était juste ; projeter $B$ sur $(AC)$ marcherait aussi, à condition de tenir compte du sens.",
        "retenir": "Produit scalaire par projection : $\\vec{AB}\\cdot\\vec{AC}=\\pm AB\\times AH$, le signe dépendant du sens de $\\vec{AH}$ par rapport à $\\vec{AB}$.",
        "id": "c7s-s2-0"
       },
       {
        "titre": "Un exemple qui convainc",
        "enonce": "Pour convaincre une classe que la formule $\\vec{u}\\cdot\\vec{v}=xx'+yy'$ exige un repère orthonormé, quel exemple choisir ?",
        "reponse": 2,
        "choix": [
         "Dans un repère orthonormé, $\\vec{u}(1\\,;0)$ et $\\vec{v}(0\\,;1)$ : la formule donne 0 et les vecteurs sont bien orthogonaux.",
         "Dans un repère où $\\vec{\\imath}$ et $\\vec{\\jmath}$, unitaires, forment un angle de $60^\\circ$ : pour $\\vec{\\imath}(1\\,;0)$ et $\\vec{\\jmath}(0\\,;1)$, la formule donne 0, or $\\vec{\\imath}\\cdot\\vec{\\jmath}=\\frac{1}{2}$.",
         "Dans un repère orthonormé, $\\vec{u}(2\\,;0)$ et $\\vec{v}(3\\,;0)$ : la formule donne $6=\\|\\vec{u}\\|\\times\\|\\vec{v}\\|$.",
         "Dans un repère où $\\vec{\\imath}\\perp\\vec{\\jmath}$, $\\|\\vec{\\imath}\\|=2$ et $\\|\\vec{\\jmath}\\|=1$ : la formule donne $\\vec{\\imath}\\cdot\\vec{\\jmath}=0$, ce qui est exact."
        ],
        "indice": "Un exemple convaincant doit mettre la formule en défaut, pas la confirmer.",
        "explication": "Les exemples 1, 3 et 4 donnent tous un résultat juste : ils ne prouvent rien. Dans le repère à $60^\\circ$, $\\vec{\\imath}$ et $\\vec{\\jmath}$ ont pour coordonnées $(1\\,;0)$ et $(0\\,;1)$ ; la formule donnerait 0, alors que $\\vec{\\imath}\\cdot\\vec{\\jmath}=1\\times1\\times\\cos60^\\circ=\\frac{1}{2}$. En général, $\\vec{u}\\cdot\\vec{v}=xx'\\|\\vec{\\imath}\\|^2+(xy'+yx')\\,\\vec{\\imath}\\cdot\\vec{\\jmath}+yy'\\|\\vec{\\jmath}\\|^2$ : on ne retrouve $xx'+yy'$ que si la base est orthonormée.",
        "retenir": "Une formule fausse se réfute par un seul exemple où elle échoue ; des exemples où elle marche ne prouvent rien.",
        "id": "c7s-s2-1"
       },
       {
        "titre": "Pourquoi la plus courte ?",
        "enonce": "Une élève demande pourquoi la distance d'un point $M$ à une droite $d$ est la longueur $MH$, où $H$ est le projeté orthogonal de $M$ sur $d$. Quelle justification attendre au tableau ?",
        "reponse": 1,
        "choix": [
         "Pour tout point $P$ de $d$, le triangle $MHP$ est rectangle en $H$, donc $MP^2=MH^2+HP^2\\geq MH^2$, avec égalité seulement si $P=H$.",
         "Par l'inégalité triangulaire, $MP\\leq MH+HP$ pour tout point $P$ de $d$.",
         "Parce que la perpendiculaire est, par définition, le plus court chemin d'un point à une droite.",
         "Parce que le cercle de centre $M$ et de rayon $MH$ coupe $d$ en deux points."
        ],
        "indice": "Compare $MP$ et $MH$ pour un point $P$ quelconque de $d$ : quel théorème du collège relie ces longueurs ?",
        "explication": "Seule la première réponse démontre : pour $P\\neq H$, Pythagore dans $MHP$ donne $MP^2=MH^2+HP^2>MH^2$. L'inégalité triangulaire majore $MP$ au lieu de le minorer ; la troisième réponse affirme ce qu'il faut prouver ; le cercle de rayon $MH$ est tangent à $d$ en $H$ et ne la coupe pas en deux points. Cette preuve se transpose telle quelle à la distance d'un point à un plan.",
        "retenir": "Distance d'un point à une droite (ou à un plan) : le minimum est atteint au projeté orthogonal, par le théorème de Pythagore.",
        "id": "c7s-s2-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous points $A$, $B$, $C$ du plan, si $AB+BC=AC$, alors $B$ appartient au segment $[AC]$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Élève au carré et compare $\\|\\vec{AB}+\\vec{BC}\\|^2$ à $(AB+BC)^2$ : que vaut alors $\\vec{AB}\\cdot\\vec{BC}$ ?",
        "explication": "Vrai. Si $B=A$ ou $B=C$, c'est clair. Sinon, $AC^2=\\|\\vec{AB}+\\vec{BC}\\|^2=AB^2+2\\,\\vec{AB}\\cdot\\vec{BC}+BC^2$ et $(AB+BC)^2=AB^2+2\\,AB\\times BC+BC^2$. L'égalité donne $\\vec{AB}\\cdot\\vec{BC}=AB\\times BC$ : c'est le cas d'égalité de Cauchy-Schwarz, donc $\\vec{BC}=k\\,\\vec{AB}$ avec $k>0$. Alors $\\vec{AC}=(1+k)\\vec{AB}$, soit $\\vec{AB}=\\frac{1}{1+k}\\vec{AC}$ avec $0<\\frac{1}{1+k}<1$ : $B\\in[AC]$.",
        "retenir": "Cas d'égalité de l'inégalité triangulaire : $AB+BC=AC$ si et seulement si $B\\in[AC]$.",
        "id": "c7s-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans un repère orthonormé, la distance du point $M(x_0\\,;y_0)$ à la droite $d : ax+by+c=0$ est égale à $|ax_0+by_0+c|$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste la proposition avec l'axe des ordonnées, décrit par l'équation $2x=0$.",
        "explication": "Faux. La droite $d : 2x=0$ est l'axe des ordonnées, et $M(1\\,;0)$ en est à la distance 1, alors que $|2\\times1+0+0|=2$. En projetant $M$ selon le vecteur normal $\\vec{n}(a\\,;b)$, on obtient la formule correcte $\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$. Une même droite a une infinité d'équations : une distance ne peut pas dépendre de celle qu'on choisit.",
        "retenir": "Distance de $M(x_0\\,;y_0)$ à $ax+by+c=0$ : $\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$ ; sans le dénominateur, le résultat dépend de l'équation choisie.",
        "id": "c7s-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Soit $A$ et $B$ deux points du plan tels que $AB=2$. Proposition : « Pour tout réel $k$, l'ensemble des points $M$ du plan tels que $\\vec{MA}\\cdot\\vec{MB}=k$ est un cercle. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Introduis le milieu $I$ de $[AB]$ : $\\vec{MA}=\\vec{MI}+\\vec{IA}$ et $\\vec{MB}=\\vec{MI}-\\vec{IA}$. Développe, puis essaie une valeur de $k$ très négative.",
        "explication": "Faux. Avec $I$ milieu de $[AB]$, $\\vec{IB}=-\\vec{IA}$, donc $\\vec{MA}\\cdot\\vec{MB}=(\\vec{MI}+\\vec{IA})\\cdot(\\vec{MI}-\\vec{IA})=MI^2-IA^2=MI^2-1$. Pour $k=-2$, la condition devient $MI^2=-1$ : aucun point ne la vérifie, l'ensemble est vide, ce n'est pas un cercle. Pour $k=-1$, on obtient le seul point $I$ ; pour $k>-1$, le cercle de centre $I$ et de rayon $\\sqrt{k+1}$ (pour $k=0$, le cercle de diamètre $[AB]$).",
        "retenir": "$\\vec{MA}\\cdot\\vec{MB}=MI^2-\\frac{AB^2}{4}$ ($I$ milieu de $[AB]$) : l'ensemble $\\vec{MA}\\cdot\\vec{MB}=k$ est un cercle de centre $I$, un point ou l'ensemble vide.",
        "id": "c7s-b0-2"
       }
      ]
     }
    ]
   }
  }
 },
 {
  "niveau": "Semaine 8",
  "titre": "Probabilités et statistiques",
  "introduction": "Laplace l'a écrit : la théorie des probabilités n'est, au fond, que le bon sens réduit au calcul. Cette semaine, tu apprends à peser l'incertain : conditionner, c'est changer d'univers ; indépendant ne veut pas dire incompatible ; une moyenne cache autant qu'elle montre. Au concours, chaque probabilité se justifie : un arbre décrit, une formule nommée, une hypothèse vérifiée.",
  "conclusion": "Emporte trois réflexes : demander « sachant quoi ? » avant tout calcul, prouver l'indépendance par un produit et non par l'intuition, lire toute moyenne avec ses effectifs. Le hasard ne se devine pas : il se pèse.",
  "salles": [
   {
    "nom": "Le pari de Pascal",
    "fond": "bibliotheque",
    "athena": "Conditionner, c'est changer d'univers : avant tout calcul, demande-toi « sachant quoi ? ».",
    "notion": "Probabilités conditionnelles, arbres",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.............D............#",
     "#............###...........#",
     "#........................A.#",
     "#................###....####",
     "#..........................#",
     "#............###.....##....S",
     "#J.G..T...............T....S",
     "#########...################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Demi-pensionnaires",
        "enonce": "Un collège de Mamoudzou compte 400 élèves : 220 filles et 180 garçons. Parmi les filles, 120 sont demi-pensionnaires ; parmi les garçons, 80 le sont. On choisit un élève au hasard et l'on note $F$ : « l'élève est une fille » et $D$ : « l'élève est demi-pensionnaire ». Entrer $P_D(F)$, sous forme de fraction ou de décimal.",
        "reponse": 0.6,
        "indice": "Sachant $D$ : l'univers devient l'ensemble des demi-pensionnaires. Combien sont-ils, et combien de filles parmi eux ?",
        "explication": "Il y a $120 + 80 = 200$ demi-pensionnaires, dont 120 filles : $P_D(F) = \\frac{120}{200} = \\frac{3}{5}$. Ne pas confondre avec $P_F(D) = \\frac{120}{220} = \\frac{6}{11}$, qui est la proportion de demi-pensionnaires parmi les filles.",
        "retenir": "$P_D(F) = \\frac{P(D \\cap F)}{P(D)}$ : on divise par la probabilité de l'événement qui suit « sachant ».",
        "id": "c8r1-s0-0"
       },
       {
        "titre": "Le retard de la barge",
        "enonce": "Dans une entreprise de Mamoudzou, 40 % des salariés habitent en Petite-Terre et viennent par la barge. Un matin, 30 % de ces salariés arrivent en retard ; sur l'ensemble de l'entreprise, 20 % des salariés arrivent en retard ce matin-là. On choisit un salarié au hasard et l'on note $A$ : « il habite en Petite-Terre » et $R$ : « il est arrivé en retard ce matin-là ». Sachant qu'il est arrivé en retard, entrer la probabilité qu'il habite en Petite-Terre, sous forme décimale.",
        "reponse": 0.6,
        "indice": "On demande $P_R(A)$, pas $P_A(R)$. Calcule d'abord $P(A \\cap R)$.",
        "explication": "$P(A \\cap R) = P(A) \\times P_A(R) = 0{,}4 \\times 0{,}3 = 0{,}12$, d'où $P_R(A) = \\frac{P(A \\cap R)}{P(R)} = \\frac{0{,}12}{0{,}2} = 0{,}6$. La réponse 0,3 confond $P_R(A)$ et $P_A(R)$.",
        "retenir": "$P_A(R)$ et $P_R(A)$ ont le même numérateur $P(A \\cap R)$ mais pas le même dénominateur : si $P(A \\cap R) \\neq 0$, elles diffèrent dès que $P(A) \\neq P(R)$.",
        "id": "c8r1-s0-1"
       },
       {
        "titre": "Deux enfants",
        "enonce": "On choisit une famille au hasard parmi les familles de deux enfants. On admet que les quatre compositions possibles, l'aîné étant cité en premier (fille-fille, fille-garçon, garçon-fille, garçon-garçon), sont équiprobables. Sachant que la famille choisie compte au moins une fille, entrer la probabilité que ses deux enfants soient des filles, sous forme de fraction.",
        "reponse": 0.3333333333333333,
        "indice": "Parmi les quatre compositions équiprobables, lesquelles réalisent « au moins une fille » ? Sachant cela, l'univers se réduit à celles-là.",
        "explication": "L'arbre (aîné, puis cadet) donne quatre issues de probabilité $\\frac{1}{4}$ : fille-fille, fille-garçon, garçon-fille, garçon-garçon. Notons $A$ : « au moins une fille » et $D$ : « deux filles ». Alors $P(A) = \\frac{3}{4}$ et, comme $D \\subset A$, $P(D \\cap A) = P(D) = \\frac{1}{4}$. Donc $P_A(D) = \\frac{1/4}{3/4} = \\frac{1}{3}$. La réponse $\\frac{1}{2}$ serait celle de la question « sachant que l'aînée est une fille » : l'information reçue n'est pas la même.",
        "retenir": "Le conditionnement dépend exactement de l'information reçue : « au moins une fille » et « l'aînée est une fille » ne donnent pas la même probabilité.",
        "id": "c8r1-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Tortues du lagon",
        "enonce": "Parmi les plongeurs d'une sortie dans le lagon, 30 % sont débutants. Un débutant aperçoit une tortue avec probabilité $0{,}6$ ; un plongeur confirmé, avec probabilité $0{,}8$. On choisit un plongeur au hasard ; $D$ : « il est débutant », $T$ : « il aperçoit une tortue ». Entrer $P(D \\cap \\overline{T})$, sous forme décimale.",
        "reponse": 0.12,
        "indice": "Premier niveau de l'arbre : $D$ ou $\\overline{D}$ ; second niveau : $T$ ou $\\overline{T}$. Quelle est la branche qui va de $D$ vers $\\overline{T}$ ?",
        "explication": "L'arbre a un premier niveau $D$ (0,3) / $\\overline{D}$ (0,7), puis, après $D$ : $T$ (0,6) / $\\overline{T}$ (0,4), et après $\\overline{D}$ : $T$ (0,8) / $\\overline{T}$ (0,2). La probabilité d'un chemin est le produit des probabilités de ses branches : $P(D \\cap \\overline{T}) = P(D) \\times P_D(\\overline{T}) = 0{,}3 \\times 0{,}4 = 0{,}12$.",
        "retenir": "Sur un arbre pondéré, les branches issues d'un même nœud ont pour somme 1, et la probabilité d'un chemin est le produit de ses branches.",
        "id": "c8r1-s1-0"
       },
       {
        "titre": "Deux boules sans remise",
        "enonce": "Une urne contient 3 boules rouges et 5 boules noires, indiscernables au toucher. On tire au hasard une boule, on ne la remet pas, puis on en tire une seconde. Entrer la probabilité que les deux boules tirées soient de la même couleur, sous forme de fraction.",
        "reponse": 0.4642857142857143,
        "indice": "Après le premier tirage, il ne reste que 7 boules et la composition a changé. Deux chemins de l'arbre conviennent.",
        "explication": "Arbre : premier tirage rouge ($\\frac{3}{8}$) ou noir ($\\frac{5}{8}$) ; après une rouge, il reste 2 rouges et 5 noires ; après une noire, 3 rouges et 4 noires. Donc $P = \\frac{3}{8} \\times \\frac{2}{7} + \\frac{5}{8} \\times \\frac{4}{7} = \\frac{6}{56} + \\frac{20}{56} = \\frac{26}{56} = \\frac{13}{28}$. Avec remise, on aurait trouvé $\\frac{9}{64} + \\frac{25}{64} = \\frac{17}{32}$.",
        "retenir": "Sans remise, les probabilités du second niveau de l'arbre sont conditionnelles : elles dépendent du résultat du premier tirage.",
        "id": "c8r1-s1-1"
       },
       {
        "titre": "Arrivés avant 7 h",
        "enonce": "Une proportion $p$ des élèves d'un collège ($0 < p < 1$) vient en bus scolaire (événement $B$). Parmi eux, 50 % arrivent avant 7 h (événement $H$) ; parmi les autres élèves, 20 % arrivent avant 7 h. On constate que $P(B \\cap H) = P(\\overline{B} \\cap H)$. Entrer la valeur exacte de $p$, sous forme de fraction.",
        "reponse": 0.2857142857142857,
        "indice": "Écris, en fonction de $p$, les probabilités des deux chemins qui mènent à $H$, puis égale-les.",
        "explication": "Chemins : $P(B \\cap H) = 0{,}5p$ et $P(\\overline{B} \\cap H) = 0{,}2(1 - p)$. L'égalité donne $0{,}5p = 0{,}2 - 0{,}2p$, soit $0{,}7p = 0{,}2$ et $p = \\frac{2}{7}$. On en déduit d'ailleurs $P_H(B) = \\frac{1}{2}$ : la moitié des élèves arrivés avant 7 h viennent en bus, bien que seuls $\\frac{2}{7}$ des élèves le prennent.",
        "retenir": "Un arbre se lit dans les deux sens : avec une inconnue sur une branche, une égalité entre chemins devient une équation.",
        "id": "c8r1-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous événements $A$ et $B$ de probabilités non nulles, $P_A(B) = P_B(A)$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Teste avec un dé : $A$ : « obtenir 6 » et $B$ : « obtenir un nombre pair ».",
        "explication": "Faux. Contre-exemple : on lance un dé équilibré ; $A$ : « obtenir 6 », $B$ : « obtenir un nombre pair ». Alors $P_A(B) = 1$ (6 est pair) mais $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/6}{1/2} = \\frac{1}{3}$. En fait $P(A) \\times P_A(B) = P(B) \\times P_B(A) = P(A \\cap B)$ : les deux probabilités conditionnelles ne sont égales que si $P(A) = P(B)$ ou $P(A \\cap B) = 0$.",
        "retenir": "$P(A)\\,P_A(B) = P(B)\\,P_B(A) = P(A \\cap B)$ : on passe de l'une à l'autre par la formule de Bayes, jamais par simple échange.",
        "id": "c8r1-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous événements $A$ et $B$ tels que $P(A) > 0$, on a $P_A(B) \\geqslant P(A \\cap B)$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris la définition de $P_A(B)$ et pense à l'encadrement $0 < P(A) \\leqslant 1$.",
        "explication": "Vrai. Par définition, $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$. Comme $0 < P(A) \\leqslant 1$, on a $\\frac{1}{P(A)} \\geqslant 1$ ; et $P(A \\cap B) \\geqslant 0$. Donc $P_A(B) = \\frac{1}{P(A)} \\times P(A \\cap B) \\geqslant P(A \\cap B)$. Il y a égalité lorsque $P(A) = 1$ ou $P(A \\cap B) = 0$.",
        "retenir": "Diviser par une probabilité non nulle ne peut qu'agrandir : $P_A(B) \\geqslant P(A \\cap B)$. Sur un arbre, une branche vaut au moins le chemin qu'elle termine.",
        "id": "c8r1-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous événements $A$ et $B$ tels que $0 < P(B) < 1$, on a $P_B(A) + P_{\\overline{B}}(A) = 1$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "La formule juste est $P_B(A) + P_B(\\overline{A}) = 1$. Ici, le conditionnement n'est pas le même dans les deux termes.",
        "explication": "Faux. Contre-exemple : dé équilibré, $A$ : « obtenir 1 ou 2 », $B$ : « obtenir un nombre pair ». Sachant $B$, seul 2 convient parmi 2, 4, 6 : $P_B(A) = \\frac{1}{3}$ ; sachant $\\overline{B}$, seul 1 convient parmi 1, 3, 5 : $P_{\\overline{B}}(A) = \\frac{1}{3}$. La somme vaut $\\frac{2}{3} \\neq 1$. Ce qui est vrai : $P_B(A) + P_B(\\overline{A}) = 1$, car $P_B$ est une probabilité.",
        "retenir": "$P_B$ est une probabilité : $P_B(A) + P_B(\\overline{A}) = 1$. Mais changer de conditionnement ($B$ puis $\\overline{B}$) ne donne aucune somme connue.",
        "id": "c8r1-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le probable de Carnéade",
    "fond": "mer",
    "athena": "Incompatibles : ils s'excluent. Indépendants : l'un n'apprend rien sur l'autre. Ne confonds jamais ces deux mots.",
    "notion": "Probabilités totales, indépendance",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#.....................A....#",
     "#....................###...S",
     "#J.G..T...........T........S",
     "#########PPPPPP#############",
     "#########......#############",
     "#########......#############",
     "#########......#############",
     "#########......#############"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Fleurs d'ylang-ylang",
        "enonce": "Une distillerie d'ylang-ylang reçoit 40 % de ses fleurs d'une plantation de Combani et 60 % d'une plantation de Dembéni. 90 % des fleurs de Combani et 75 % de celles de Dembéni sont de première qualité. On choisit une fleur au hasard dans la distillerie. Entrer la probabilité qu'elle soit de première qualité, sous forme décimale.",
        "reponse": 0.81,
        "indice": "Deux chemins de l'arbre mènent à « première qualité » : additionne leurs probabilités.",
        "explication": "Notons $C$ : « la fleur vient de Combani » et $Q$ : « elle est de première qualité ». Les événements $C$ et $\\overline{C}$ forment une partition de l'univers. Formule des probabilités totales : $P(Q) = P(C)\\,P_C(Q) + P(\\overline{C})\\,P_{\\overline{C}}(Q) = 0{,}4 \\times 0{,}9 + 0{,}6 \\times 0{,}75 = 0{,}36 + 0{,}45 = 0{,}81$.",
        "retenir": "Probabilités totales : si $A$ et $\\overline{A}$ partitionnent l'univers, $P(B) = P(A)\\,P_A(B) + P(\\overline{A})\\,P_{\\overline{A}}(B)$.",
        "id": "c8r2-s0-0"
       },
       {
        "titre": "Briques défectueuses",
        "enonce": "Une briqueterie mahoraise fabrique des briques de terre comprimée avec deux presses : la presse A produit 60 % des briques, la presse B les 40 % restants. 2 % des briques de la presse A et 5 % de celles de la presse B sont défectueuses. Une brique prise au hasard est défectueuse. Entrer la probabilité qu'elle provienne de la presse B, sous forme de fraction ou de décimal.",
        "reponse": 0.625,
        "indice": "Avec $D$ : « la brique est défectueuse », calcule d'abord $P(D)$ par les probabilités totales, puis $P_D(B) = \\frac{P(B \\cap D)}{P(D)}$.",
        "explication": "Notons $A$, $B$ les événements « la brique vient de la presse A, de la presse B » et $D$ : « elle est défectueuse ». $P(D) = 0{,}6 \\times 0{,}02 + 0{,}4 \\times 0{,}05 = 0{,}012 + 0{,}02 = 0{,}032$. Puis $P_D(B) = \\frac{0{,}4 \\times 0{,}05}{0{,}032} = \\frac{0{,}02}{0{,}032} = \\frac{5}{8}$. La presse B ne produit que 40 % des briques, mais 62,5 % des briques défectueuses.",
        "retenir": "Formule de Bayes en pratique : $P_D(B) = \\frac{P(B)\\,P_B(D)}{P(D)}$, le dénominateur venant des probabilités totales.",
        "id": "c8r2-s0-1"
       },
       {
        "titre": "Deux urnes",
        "enonce": "On lance une pièce équilibrée. Si elle tombe sur pile, on tire une boule dans l'urne $U$, qui contient 2 boules blanches et 2 noires ; sinon, on tire une boule dans l'urne $V$, qui contient 3 boules blanches et $n$ boules noires ($n$ entier naturel). On sait que, sachant que la boule tirée est blanche, la probabilité qu'elle provienne de l'urne $U$ est $\\frac{3}{5}$. Entrer $n$.",
        "reponse": 6,
        "indice": "Avec $B$ : « la boule est blanche », écris $P_B(U) = \\frac{P(U \\cap B)}{P(B)}$ ; tu en déduis $P(B)$, puis $n$ par les probabilités totales.",
        "explication": "Notons $B$ : « la boule est blanche ». $P(U \\cap B) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$ et $P(V \\cap B) = \\frac{1}{2} \\times \\frac{3}{3+n}$. La condition $P_B(U) = \\frac{3}{5}$ s'écrit $\\frac{1}{4} = \\frac{3}{5}P(B)$, donc $P(B) = \\frac{5}{12}$, puis $P(V \\cap B) = \\frac{5}{12} - \\frac{1}{4} = \\frac{1}{6}$. Ainsi $\\frac{3}{2(3+n)} = \\frac{1}{6}$, soit $3 + n = 9$ et $n = 6$.",
        "retenir": "Bayes « à rebours » : connaître $P_B(U)$ donne $P(B) = \\frac{P(U \\cap B)}{P_B(U)}$, puis l'inconnue par les probabilités totales.",
        "effet": "passerelle",
        "id": "c8r2-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "La barge et le bus",
        "enonce": "Un matin, la barge est en retard avec probabilité $0{,}2$, et le bus scolaire que prend ensuite un élève est en retard avec probabilité $0{,}1$. On suppose ces deux événements indépendants. Entrer la probabilité qu'au moins l'un des deux soit en retard, sous forme décimale.",
        "reponse": 0.28,
        "indice": "Passe par le contraire : « aucun des deux n'est en retard ». Les contraires de deux événements indépendants sont indépendants.",
        "explication": "Notons $A$ et $B$ les deux retards. Comme $A$ et $B$ sont indépendants, $\\overline{A}$ et $\\overline{B}$ le sont aussi, donc $P(\\overline{A} \\cap \\overline{B}) = 0{,}8 \\times 0{,}9 = 0{,}72$ et $P(A \\cup B) = 1 - 0{,}72 = 0{,}28$. Autre voie : $P(A \\cup B) = P(A) + P(B) - P(A)\\,P(B) = 0{,}2 + 0{,}1 - 0{,}02 = 0{,}28$.",
        "retenir": "« Au moins un » : passer par le contraire. Indépendance : $P(A \\cap B) = P(A)\\,P(B)$ ; l'égalité $P(A \\cup B) = P(A) + P(B)$ est réservée aux événements incompatibles.",
        "id": "c8r2-s1-0"
       },
       {
        "titre": "Pair et multiple de 3",
        "enonce": "On lance un dé équilibré à six faces. On note $A$ : « obtenir un nombre pair » et $B$ : « obtenir un multiple de 3 ». Que peut-on affirmer ?",
        "reponse": 3,
        "choix": [
         "$A$ et $B$ sont incompatibles, donc ils ne sont pas indépendants.",
         "$A$ et $B$ ne sont ni indépendants, ni incompatibles.",
         "$A$ et $B$ sont indépendants, et ils ne sont pas incompatibles.",
         "$A$ et $B$ sont indépendants, car ils sont incompatibles."
        ],
        "indice": "Compare $P(A \\cap B)$ et $P(A) \\times P(B)$ ; regarde aussi si $A$ et $B$ ont une issue commune.",
        "explication": "$A \\cap B = \\{6\\}$ n'est pas vide : $A$ et $B$ ne sont pas incompatibles. Et $P(A \\cap B) = \\frac{1}{6} = \\frac{1}{2} \\times \\frac{1}{3} = P(A) \\times P(B)$ : ils sont indépendants. Savoir que le résultat est pair ne change pas la probabilité qu'il soit multiple de 3 : $P_A(B) = \\frac{1}{3} = P(B)$.",
        "retenir": "Indépendance : $P(A \\cap B) = P(A)\\,P(B)$, cela se calcule. Incompatibilité : $A \\cap B = \\emptyset$, cela se lit sur les issues. Deux notions différentes.",
        "id": "c8r2-s1-1"
       },
       {
        "titre": "Le pari du chevalier",
        "enonce": "On lance $n$ fois un dé équilibré, les lancers étant indépendants. Le chevalier de Méré veut parier sur l'événement « obtenir au moins un 6 » avec une probabilité de gagner strictement supérieure à $\\frac{1}{2}$. Entrer la plus petite valeur de $n$ qui convient.",
        "reponse": 4,
        "indice": "Le contraire de « au moins un 6 » est « aucun 6 », de probabilité $\\left(\\frac{5}{6}\\right)^n$ par indépendance. Calcule cette puissance pour $n = 3$ et $n = 4$.",
        "explication": "Par indépendance des lancers, la probabilité de n'obtenir aucun 6 est $\\left(\\frac{5}{6}\\right)^n$, donc celle d'obtenir au moins un 6 est $1 - \\left(\\frac{5}{6}\\right)^n$. Or $\\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216} \\approx 0{,}579 > \\frac{1}{2}$ et $\\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296} \\approx 0{,}482 < \\frac{1}{2}$. La suite $\\left(\\left(\\frac{5}{6}\\right)^n\\right)$ étant décroissante, le plus petit $n$ est 4 ; la probabilité de gagner vaut alors $\\frac{671}{1296} \\approx 0{,}518$.",
        "retenir": "« Au moins un succès en $n$ essais indépendants de probabilité $p$ » : $1 - (1-p)^n$, jamais $n \\times p$.",
        "id": "c8r2-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Deux événements incompatibles, de probabilités non nulles, ne sont jamais indépendants. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Que vaut $P(A \\cap B)$ pour des événements incompatibles ? Et $P(A) \\times P(B)$ ?",
        "explication": "Vrai. Si $A$ et $B$ sont incompatibles, $A \\cap B = \\emptyset$, donc $P(A \\cap B) = 0$. Or $P(A) > 0$ et $P(B) > 0$, donc $P(A) \\times P(B) > 0$. Ainsi $P(A \\cap B) \\neq P(A) \\times P(B)$ : $A$ et $B$ ne sont pas indépendants. Intuitivement, savoir que $A$ est réalisé apprend que $B$ ne l'est pas.",
        "retenir": "Incompatibles et de probabilités non nulles entraîne dépendants. L'hypothèse « non nulles » est indispensable : l'événement impossible est indépendant de tout événement.",
        "id": "c8r2-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Soit $A$ et $B$ deux événements avec $0 < P(A) < 1$. Proposition : « Si $P_A(B) = P_{\\overline{A}}(B)$, alors $A$ et $B$ sont indépendants. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule $P(B)$ par la formule des probabilités totales, en notant $q$ la valeur commune des deux probabilités conditionnelles.",
        "explication": "Vrai. Notons $q = P_A(B) = P_{\\overline{A}}(B)$. Par les probabilités totales, $P(B) = P(A)\\,q + P(\\overline{A})\\,q = q$. Donc $P(A \\cap B) = P(A)\\,P_A(B) = P(A)\\,q = P(A)\\,P(B)$ : $A$ et $B$ sont indépendants. Sur un arbre, des branches vers $B$ de même poids après $A$ et après $\\overline{A}$ traduisent l'indépendance.",
        "retenir": "Si $B$ a la même probabilité, que $A$ soit réalisé ou non, alors $B$ est indépendant de $A$ : c'est le sens même de l'indépendance.",
        "id": "c8r2-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour tous événements $A$ et $B$ tels que $0 < P(A) < 1$, on a $P(B) = P_A(B) + P_{\\overline{A}}(B)$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Compare avec la formule des probabilités totales : que sont devenues les probabilités $P(A)$ et $P(\\overline{A})$ ?",
        "explication": "Faux. Contre-exemple : on lance un dé équilibré, et $A$ et $B$ sont tous deux l'événement « obtenir 1, 2 ou 3 ». Alors $P_A(B) = 1$ et $P_{\\overline{A}}(B) = 0$, de somme 1, alors que $P(B) = \\frac{1}{2}$. La formule juste pondère : $P(B) = P(A)\\,P_A(B) + P(\\overline{A})\\,P_{\\overline{A}}(B)$, qui donne bien $\\frac{1}{2} \\times 1 + \\frac{1}{2} \\times 0 = \\frac{1}{2}$.",
        "retenir": "Probabilités totales : on additionne des chemins (des produits), pas des branches. Oublier les poids $P(A)$ et $P(\\overline{A})$ est l'erreur classique.",
        "id": "c8r2-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "Le doute de Montaigne",
    "fond": "jardin",
    "athena": "L'espérance n'est pas le gain d'une partie : c'est la moyenne des gains sur un très grand nombre de parties.",
    "notion": "Variables aléatoires, espérance",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#............A.............#",
     "#...........###............#",
     "#..........................#",
     "#........###...............S",
     "#J.G.T........H........R...S",
     "###############........#####"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Le jeu du dé",
        "enonce": "On lance un dé équilibré à six faces. On gagne 10 € si l'on obtient 6, on gagne 2 € si l'on obtient 4 ou 5, et l'on perd 3 € sinon. On note $X$ le gain algébrique, en euros. Entrer l'espérance $E(X)$, sous forme de fraction.",
        "reponse": 0.8333333333333334,
        "unite": "€",
        "indice": "Donne la loi de $X$ (ses valeurs $10$, $2$, $-3$ et leurs probabilités), puis calcule la somme des produits « valeur × probabilité ».",
        "explication": "Loi de $X$ : $P(X = 10) = \\frac{1}{6}$, $P(X = 2) = \\frac{2}{6}$, $P(X = -3) = \\frac{3}{6}$ (somme 1). Donc $E(X) = 10 \\times \\frac{1}{6} + 2 \\times \\frac{2}{6} - 3 \\times \\frac{3}{6} = \\frac{10 + 4 - 9}{6} = \\frac{5}{6}$. Sur un grand nombre de parties, on gagne en moyenne environ 0,83 € par partie : le jeu est favorable au joueur.",
        "retenir": "$E(X) = \\sum x_i\\,P(X = x_i)$ ; vérifier d'abord que les probabilités de la loi ont pour somme 1.",
        "id": "c8r3-s0-0"
       },
       {
        "titre": "Les tortues de N'Gouja",
        "enonce": "Lors d'une plongée à N'Gouja, le nombre $X$ de tortues aperçues prend les valeurs 0, 1, 2 ou 3. On sait que $P(X = 0) = 0{,}1$, $P(X = 1) = 0{,}3$ et $P(X = 2) = 2\\,P(X = 3)$. Entrer $E(X)$, sous forme décimale.",
        "reponse": 1.7,
        "indice": "La somme des probabilités vaut 1 : cela donne $P(X = 3)$.",
        "explication": "Notons $a = P(X = 3)$. Alors $0{,}1 + 0{,}3 + 2a + a = 1$, donc $3a = 0{,}6$ et $a = 0{,}2$ ; puis $P(X = 2) = 0{,}4$. Ainsi $E(X) = 0 \\times 0{,}1 + 1 \\times 0{,}3 + 2 \\times 0{,}4 + 3 \\times 0{,}2 = 0{,}3 + 0{,}8 + 0{,}6 = 1{,}7$.",
        "retenir": "Une loi de probabilité se complète grâce à la condition $\\sum P(X = x_i) = 1$.",
        "id": "c8r3-s0-1"
       },
       {
        "titre": "La mise équitable",
        "enonce": "Une urne contient 2 boules rouges et 3 boules vertes. Un joueur paie une mise de $m$ euros, puis tire successivement, sans remise, deux boules. Il reçoit 20 € s'il tire deux rouges, 5 € s'il tire exactement une rouge, rien sinon. Le jeu est équitable lorsque l'espérance du gain algébrique (somme reçue moins la mise) est nulle. Entrer la valeur de $m$ qui rend le jeu équitable.",
        "reponse": 5,
        "unite": "€",
        "indice": "Calcule l'espérance de la somme reçue $S$ à l'aide d'un arbre à deux niveaux ; le gain algébrique est $S - m$.",
        "explication": "Arbre sans remise : deux rouges, $\\frac{2}{5} \\times \\frac{1}{4} = \\frac{1}{10}$ ; exactement une rouge, $\\frac{2}{5} \\times \\frac{3}{4} + \\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{5}$ ; deux vertes, $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$. Donc $E(S) = 20 \\times \\frac{1}{10} + 5 \\times \\frac{3}{5} + 0 = 2 + 3 = 5$. Par linéarité, $E(S - m) = E(S) - m = 5 - m$, qui est nul pour $m = 5$.",
        "retenir": "Jeu équitable : espérance du gain algébrique nulle, c'est-à-dire mise égale à l'espérance de la somme reçue, car $E(S - m) = E(S) - m$.",
        "id": "c8r3-s0-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour toute variable aléatoire $X$ prenant un nombre fini de valeurs et pour tous réels $a$ et $b$, $E(aX + b) = a\\,E(X) + b$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Écris $E(aX + b)$ comme une somme sur les valeurs $x_i$ de $X$, puis sépare la somme en deux.",
        "explication": "Vrai. Si $X$ prend les valeurs $x_1, \\dots, x_n$ avec les probabilités $p_1, \\dots, p_n$, alors $aX + b$ prend les valeurs $a x_i + b$ avec ces mêmes probabilités (en regroupant les valeurs égales si $a = 0$). Donc $E(aX + b) = \\sum (a x_i + b)\\,p_i = a \\sum x_i p_i + b \\sum p_i = a\\,E(X) + b$, car $\\sum p_i = 1$.",
        "retenir": "Linéarité de l'espérance : $E(aX + b) = a\\,E(X) + b$. Changer d'unité ou ajouter un bonus fixe agit de la même façon sur l'espérance.",
        "id": "c8r3-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour toute variable aléatoire $X$ ne prenant que des valeurs strictement positives, $E\\left(\\frac{1}{X}\\right) = \\frac{1}{E(X)}$. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Essaie une variable qui prend deux valeurs, 1 et 3, avec la même probabilité.",
        "explication": "Faux. Contre-exemple : $X$ prend les valeurs 1 et 3 avec probabilité $\\frac{1}{2}$ chacune. Alors $E(X) = 2$, donc $\\frac{1}{E(X)} = \\frac{1}{2}$, alors que $E\\left(\\frac{1}{X}\\right) = \\frac{1}{2} \\times 1 + \\frac{1}{2} \\times \\frac{1}{3} = \\frac{2}{3}$. L'espérance passe à travers une fonction affine, pas à travers une fonction comme $x \\mapsto \\frac{1}{x}$.",
        "retenir": "En général $E(f(X)) \\neq f(E(X))$ : seules les fonctions affines passent à l'espérance. Même piège que « la vitesse moyenne n'est pas la moyenne des vitesses ».",
        "id": "c8r3-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si une variable aléatoire $X$ ne prend que des valeurs positives ou nulles et si $E(X) = 0$, alors $P(X = 0) = 1$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "$E(X)$ est une somme de termes $x_i\\,P(X = x_i)$ : quel est leur signe ?",
        "explication": "Vrai. $E(X) = \\sum x_i\\,P(X = x_i)$ est une somme de termes positifs ou nuls ; elle n'est nulle que si chaque terme l'est. Pour toute valeur $x_i > 0$, on obtient donc $P(X = x_i) = 0$. Il ne reste que la valeur 0, d'où $P(X = 0) = 1$. Sans l'hypothèse de positivité, c'est faux : si $X$ vaut $-1$ ou $1$ avec probabilité $\\frac{1}{2}$ chacun, $E(X) = 0$ mais $X$ ne prend jamais la valeur 0.",
        "retenir": "Une somme de termes positifs est nulle si et seulement si chaque terme est nul : un argument clé pour l'espérance et la variance.",
        "id": "c8r3-b0-2"
       }
      ]
     }
    ],
    "acrobaties": [
     {
      "titre": "Le problème des partis",
      "enonce": "En 1654, Pascal écrit à Fermat. Deux joueurs A et B ont misé chacun 32 pistoles ; chaque manche est gagnée par l'un ou l'autre avec probabilité $\\frac{1}{2}$, les manches étant indépendantes, et le premier qui gagne trois manches emporte les 64 pistoles. La partie est interrompue alors que A a gagné deux manches et B une. On partage l'enjeu selon l'espérance de ce que chacun aurait reçu si l'on avait continué. Entrer la part de A.",
      "reponse": 48,
      "unite": "pistoles",
      "indice": "Décris la suite de la partie : A gagne dès qu'il remporte une manche ; B doit en remporter deux de suite. Quelle est la probabilité que A l'emporte ?",
      "explication": "B n'emporte l'enjeu que s'il gagne les deux manches suivantes, avec probabilité $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$ ; A l'emporte donc avec probabilité $\\frac{3}{4}$. La somme reçue par A vaut 64 avec probabilité $\\frac{3}{4}$ et 0 sinon : son espérance est $64 \\times \\frac{3}{4} = 48$ pistoles, et B reçoit 16. C'est le partage proposé par Pascal : on raisonne sur ce qui reste à jouer, non sur les manches passées.",
      "retenir": "Partager équitablement un jeu interrompu, c'est donner à chacun l'espérance de ce qu'il aurait reçu : on regarde l'avenir, pas le passé.",
      "id": "c8r3-h0",
      "figure": "salto"
     }
    ]
   },
   {
    "nom": "La suspension de Pyrrhon",
    "fond": "brumes",
    "athena": "Une moyenne sans ses effectifs peut tromper : regarde toujours comment la population se répartit.",
    "notion": "Statistiques : moyenne, médiane, quartiles, écart-type",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#............A.............#",
     "#...........###............#",
     "#........T.................#",
     "#.......###................#",
     "#..........................#",
     "#.....##...................S",
     "#J.G.T.....................S",
     "################...#########"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Moyenne pondérée",
        "enonce": "Dans une classe de 3e, les notes d'un devoir se répartissent ainsi : la note 8 a pour effectif 3, la note 10 a pour effectif 5, la note 12 a pour effectif 8 et la note 15 a pour effectif 4. Entrer la moyenne de la classe.",
        "reponse": 11.5,
        "indice": "Multiplie chaque note par son effectif, additionne, puis divise par l'effectif total.",
        "explication": "Effectif total : $N = 3 + 5 + 8 + 4 = 20$. Somme des notes : $8 \\times 3 + 10 \\times 5 + 12 \\times 8 + 15 \\times 4 = 24 + 50 + 96 + 60 = 230$. Moyenne : $\\overline{x} = \\frac{230}{20} = 11{,}5$. La moyenne des quatre valeurs distinctes, $\\frac{8 + 10 + 12 + 15}{4} = 11{,}25$, ignore à tort les effectifs.",
        "retenir": "Moyenne pondérée : $\\overline{x} = \\frac{1}{N}\\sum n_i x_i$, avec $N = \\sum n_i$.",
        "id": "c8r4-s0-0"
       },
       {
        "titre": "Deux classes réunies",
        "enonce": "En 4e A, les 25 élèves ont obtenu une moyenne de 11 à un devoir commun ; en 4e B, les 15 élèves ont obtenu une moyenne de 13. Entrer la moyenne de l'ensemble des 40 élèves.",
        "reponse": 11.75,
        "indice": "Retrouve la somme des notes de chaque classe à partir de sa moyenne et de son effectif.",
        "explication": "Somme des notes : $25 \\times 11 = 275$ en 4e A et $15 \\times 13 = 195$ en 4e B. Moyenne de l'ensemble : $\\frac{275 + 195}{40} = \\frac{470}{40} = 11{,}75$. La moyenne des deux moyennes, 12, ne serait juste que pour deux classes de même effectif.",
        "retenir": "La moyenne d'une réunion de groupes est la moyenne des moyennes pondérée par les effectifs, pas leur moyenne simple.",
        "id": "c8r4-s0-1"
       },
       {
        "titre": "Deux collèges",
        "enonce": "Au collège A, 90 % des 100 élèves sans retard scolaire et 60 % des 300 élèves en retard ont obtenu le brevet. Au collège B, ces taux sont de 85 % pour les 400 élèves sans retard et de 55 % pour les 100 élèves en retard. Que peut-on affirmer ?",
        "reponse": 2,
        "choix": [
         "Le collège A a le meilleur taux global, puisqu'il fait mieux dans chacune des deux catégories.",
         "Le collège B a le meilleur taux global (79 % contre 67,5 %), car il compte bien plus d'élèves sans retard, catégorie où l'on réussit le mieux.",
         "Les deux collèges ont le même taux global, car les écarts de 5 points se compensent.",
         "On ne peut pas comparer les taux globaux sans connaître les notes des élèves."
        ],
        "indice": "Calcule le nombre de reçus dans chaque collège, puis le taux global de chacun.",
        "explication": "Collège A : $90 + 180 = 270$ reçus sur 400, soit 67,5 %. Collège B : $340 + 55 = 395$ reçus sur 500, soit 79 %. A fait mieux dans chaque catégorie, mais B a le meilleur taux global : 80 % de ses élèves sont sans retard, contre 25 % au collège A. C'est un effet de structure (paradoxe de Simpson) : un taux global est une moyenne des taux par catégorie, pondérée par la composition de la population.",
        "retenir": "Effet de structure : comparer des taux globaux sans regarder la composition des populations peut inverser la conclusion (paradoxe de Simpson).",
        "id": "c8r4-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Une médiane à trier",
        "enonce": "Huit élèves ont noté leur temps de trajet jusqu'au collège, en minutes : 14 ; 9 ; 21 ; 12 ; 9 ; 17 ; 30 ; 11. Pour un effectif pair, on prend pour médiane la demi-somme des deux valeurs centrales de la série rangée dans l'ordre croissant. Entrer la médiane.",
        "reponse": 13,
        "unite": "min",
        "indice": "Range d'abord les huit valeurs dans l'ordre croissant : les valeurs centrales sont la 4e et la 5e.",
        "explication": "Série rangée : 9 ; 9 ; 11 ; 12 ; 14 ; 17 ; 21 ; 30. Les 4e et 5e valeurs sont 12 et 14, donc la médiane vaut $\\frac{12 + 14}{2} = 13$ min. Sans tri, on prendrait à tort 12 et 9. La moyenne, $\\frac{123}{8} \\approx 15{,}4$ min, est tirée vers le haut par la valeur 30 ; la médiane n'y est pas sensible.",
        "retenir": "Médiane : on trie d'abord. Au moins la moitié des valeurs lui sont inférieures ou égales, au moins la moitié supérieures ou égales ; elle résiste aux valeurs extrêmes.",
        "id": "c8r4-s1-0"
       },
       {
        "titre": "Les quartiles de la barge",
        "enonce": "Durées de onze traversées de la barge, en minutes : 12 ; 15 ; 11 ; 18 ; 14 ; 13 ; 20 ; 16 ; 12 ; 17 ; 25. On rappelle que $Q_1$ est la plus petite valeur de la série telle qu'au moins 25 % des valeurs lui soient inférieures ou égales, et $Q_3$ la plus petite valeur telle qu'au moins 75 % des valeurs lui soient inférieures ou égales. Entrer l'écart interquartile $Q_3 - Q_1$.",
        "reponse": 6,
        "unite": "min",
        "indice": "Trie la série. Comme $25\\,\\%$ de 11 vaut $2{,}75$, $Q_1$ est la 3e valeur. Raisonne de même pour $Q_3$.",
        "explication": "Série triée : 11 ; 12 ; 12 ; 13 ; 14 ; 15 ; 16 ; 17 ; 18 ; 20 ; 25. Comme $0{,}25 \\times 11 = 2{,}75$, $Q_1$ est la 3e valeur : $Q_1 = 12$. Comme $0{,}75 \\times 11 = 8{,}25$, $Q_3$ est la 9e valeur : $Q_3 = 18$. Écart interquartile : $18 - 12 = 6$ min. Pour comparaison, l'étendue vaut $25 - 11 = 14$ min et la médiane (6e valeur) 15 min.",
        "retenir": "Quartiles : trier, calculer $\\frac{N}{4}$ et $\\frac{3N}{4}$, prendre le rang entier immédiatement supérieur ou égal. L'écart interquartile mesure la dispersion de la moitié centrale.",
        "id": "c8r4-s1-1"
       },
       {
        "titre": "Recalibrer une série",
        "enonce": "Une série de notes est : 2 ; 4 ; 4 ; 4 ; 5 ; 5 ; 7 ; 9. Son écart-type est $\\sigma = \\sqrt{\\frac{1}{N}\\sum (x_i - \\overline{x})^2}$. Un professeur transforme chaque note $x$ en $y = ax + b$, avec $a > 0$, pour que la nouvelle série ait pour moyenne 10 et pour écart-type 3. Entrer $b$.",
        "reponse": 2.5,
        "indice": "Calcule $\\overline{x}$ et $\\sigma_x$. Utilise ensuite $\\overline{y} = a\\overline{x} + b$ et $\\sigma_y = a\\,\\sigma_x$ (car $a > 0$).",
        "explication": "$\\overline{x} = \\frac{40}{8} = 5$. Écarts à la moyenne : $-3, -1, -1, -1, 0, 0, 2, 4$, dont les carrés ont pour somme $9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32$ ; donc $\\sigma_x = \\sqrt{\\frac{32}{8}} = 2$. Comme $\\sigma_y = a\\,\\sigma_x$, on obtient $a = \\frac{3}{2}$ ; comme $\\overline{y} = a\\overline{x} + b$, $10 = 7{,}5 + b$, d'où $b = 2{,}5$.",
        "retenir": "Pour $y = ax + b$ : $\\overline{y} = a\\overline{x} + b$ et $\\sigma_y = |a|\\,\\sigma_x$. Une translation des valeurs ne change pas leur dispersion.",
        "id": "c8r4-s1-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Dans toute série statistique, au moins la moitié des valeurs sont supérieures ou égales à la moyenne. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Cherche une petite série dont une valeur très grande tire la moyenne vers le haut.",
        "explication": "Faux. Contre-exemple : la série 1 ; 1 ; 1 ; 9 a pour moyenne $\\frac{12}{4} = 3$, et une seule valeur sur quatre (25 %) est supérieure ou égale à 3. C'est la médiane, et non la moyenne, qui partage la série en deux moitiés ; une valeur extrême déplace la moyenne mais pas la médiane (ici 1).",
        "retenir": "La médiane partage l'effectif en deux ; la moyenne, non. Une série dissymétrique éloigne l'une de l'autre.",
        "id": "c8r4-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "On considère une série statistique d'effectif $n \\geqslant 3$ ; pour un effectif pair, la médiane est la demi-somme des deux valeurs centrales de la série rangée. Proposition : « Si l'on remplace une valeur égale au maximum de la série par un nombre strictement plus grand, alors la moyenne et l'étendue augmentent, et la médiane ne change pas. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Range la série dans l'ordre croissant : la valeur modifiée reste en dernière position. Quels rangs la médiane utilise-t-elle ?",
        "explication": "Vrai. Rangeons la série : $x_1 \\leqslant x_2 \\leqslant \\dots \\leqslant x_n$ avec $n \\geqslant 3$, et remplaçons $x_n$ par $x_n' > x_n$. La somme augmente, donc la moyenne aussi ; le minimum $x_1$ ne change pas et le maximum augmente, donc l'étendue augmente. La série reste rangée et les valeurs de rangs 1 à $n - 1$ sont inchangées ; or la médiane n'utilise que le ou les rangs centraux, tous inférieurs ou égaux à $n - 1$ dès que $n \\geqslant 3$. Pour $n = 2$, ce serait faux : la médiane de 1 ; 3 est 2, celle de 1 ; 5 est 3.",
        "retenir": "La moyenne et l'étendue sont sensibles aux valeurs extrêmes ; la médiane et l'écart interquartile le sont beaucoup moins.",
        "id": "c8r4-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si, d'une année à l'autre, le salaire moyen des employés et le salaire moyen des cadres d'une entreprise augmentent tous les deux, alors le salaire moyen de l'ensemble du personnel augmente. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Fais varier la répartition entre employés et cadres d'une année à l'autre.",
        "explication": "Faux. Contre-exemple : l'année 1, 10 employés à 1 500 € et 10 cadres à 2 500 € : moyenne 2 000 €. L'année 2, 18 employés à 1 600 € et 2 cadres à 2 600 € : moyenne $\\frac{28\\,800 + 5\\,200}{20} = 1\\,700$ €. Les deux moyennes par catégorie ont augmenté de 100 €, mais la moyenne globale baisse, car la part de la catégorie la moins payée a augmenté. C'est un effet de structure.",
        "retenir": "Une moyenne globale dépend des moyennes des groupes et de leurs poids : si la structure change, elle peut évoluer en sens inverse de toutes les moyennes partielles.",
        "id": "c8r4-b0-2"
       }
      ]
     }
    ]
   },
   {
    "nom": "L'essai de Laplace",
    "fond": "crepuscule",
    "athena": "Décris l'arbre avec des mots et nomme chaque formule que tu utilises : chaque question se traite alors seule.",
    "notion": "Problème de probabilités (arbre, Bayes, espérance)",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#........................A.#",
     "#.......................####",
     "#..........................#",
     "#......##.............##...S",
     "#J.G...##........T.........S",
     "############################"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "Deux vertes d'affilée",
        "enonce": "Entrer $P(V_1 \\cap V_2)$, sous forme de fraction.",
        "reponse": 0.1,
        "indice": "Après une verte au premier tirage, que contient l'urne ?",
        "explication": "$P(V_1) = \\frac{1}{4}$. Si la première boule est verte, on la remet et l'on ajoute une verte : l'urne contient 2 vertes et 3 blanches, donc $P_{V_1}(V_2) = \\frac{2}{5}$. D'où $P(V_1 \\cap V_2) = P(V_1) \\times P_{V_1}(V_2) = \\frac{1}{4} \\times \\frac{2}{5} = \\frac{1}{10}$.",
        "retenir": "Probabilité d'un chemin : $P(A \\cap B) = P(A) \\times P_A(B)$, la branche conditionnelle se lisant sur l'état de l'urne après le premier tirage.",
        "id": "c8b-s0-0"
       },
       {
        "titre": "La deuxième boule",
        "enonce": "On admet que $P(V_1 \\cap V_2) = \\frac{1}{10}$. Entrer $P(V_2)$, sous forme de fraction.",
        "reponse": 0.25,
        "indice": "Probabilités totales avec la partition $V_1$, $\\overline{V_1}$. Que contient l'urne après une blanche au premier tirage ?",
        "explication": "Après une blanche, l'urne contient 1 verte et 4 blanches : $P_{\\overline{V_1}}(V_2) = \\frac{1}{5}$. Par les probabilités totales, $P(V_2) = P(V_1 \\cap V_2) + P(\\overline{V_1})\\,P_{\\overline{V_1}}(V_2) = \\frac{1}{10} + \\frac{3}{4} \\times \\frac{1}{5} = \\frac{2}{20} + \\frac{3}{20} = \\frac{1}{4}$. Remarquable : $P(V_2) = P(V_1)$, bien que $V_1$ et $V_2$ ne soient pas indépendants ($\\frac{1}{10} \\neq \\frac{1}{16}$).",
        "retenir": "Probabilités totales : additionner les probabilités de tous les chemins qui mènent à l'événement.",
        "id": "c8b-s0-1"
       },
       {
        "titre": "Remonter le temps",
        "enonce": "On admet que $P(V_2) = \\frac{1}{4}$ et $P(\\overline{V_1} \\cap V_2) = \\frac{3}{20}$. Sachant que la deuxième boule tirée est verte, entrer la probabilité que la première ait été blanche, sous forme de fraction.",
        "reponse": 0.6,
        "indice": "On cherche $P_{V_2}(\\overline{V_1})$ : on conditionne par l'événement le plus tardif, c'est la formule de Bayes.",
        "explication": "$P_{V_2}(\\overline{V_1}) = \\frac{P(\\overline{V_1} \\cap V_2)}{P(V_2)} = \\frac{3/20}{1/4} = \\frac{3}{5}$. Une probabilité conditionnelle n'a pas à suivre l'ordre chronologique : on peut conditionner le passé par le présent. Ici, $P_{V_2}(V_1) = \\frac{2}{5} > P(V_1)$ : voir une verte au second tirage rend plus plausible une verte au premier.",
        "retenir": "Formule de Bayes : $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$ ; elle permet de remonter de l'effet observé vers la cause.",
        "id": "c8b-s0-2"
       },
       {
        "titre": "Une seule verte",
        "enonce": "Entrer $P(X = 1)$, sous forme de fraction.",
        "reponse": 0.3,
        "indice": "Trois chemins réalisent $X = 1$ : la verte apparaît au 1er, au 2e ou au 3e tirage. Suis l'état de l'urne le long de chacun.",
        "explication": "Verte, blanche, blanche : $\\frac{1}{4} \\times \\frac{3}{5} \\times \\frac{4}{6} = \\frac{12}{120}$. Blanche, verte, blanche : $\\frac{3}{4} \\times \\frac{1}{5} \\times \\frac{4}{6} = \\frac{12}{120}$. Blanche, blanche, verte : $\\frac{3}{4} \\times \\frac{4}{5} \\times \\frac{1}{6} = \\frac{12}{120}$. Les trois chemins ont la même probabilité (mêmes facteurs au numérateur, dans un autre ordre), donc $P(X = 1) = \\frac{36}{120} = \\frac{3}{10}$.",
        "retenir": "Pour la loi d'une variable : lister tous les chemins qui réalisent l'événement, calculer chacun par produit, puis additionner.",
        "id": "c8b-s0-3"
       },
       {
        "titre": "L'espérance",
        "enonce": "On admet que $P(X = 0) = \\frac{1}{2}$, $P(X = 1) = \\frac{3}{10}$ et $P(X = 2) = \\frac{3}{20}$. Entrer l'espérance $E(X)$, sous forme de fraction.",
        "reponse": 0.75,
        "indice": "Commence par $P(X = 3)$ : la somme des probabilités vaut 1 (ou suis le chemin vert, vert, vert).",
        "explication": "$P(X = 3) = 1 - \\frac{1}{2} - \\frac{3}{10} - \\frac{3}{20} = \\frac{1}{20}$, ce que confirme le chemin $\\frac{1}{4} \\times \\frac{2}{5} \\times \\frac{3}{6} = \\frac{1}{20}$. Donc $E(X) = 0 \\times \\frac{1}{2} + 1 \\times \\frac{3}{10} + 2 \\times \\frac{3}{20} + 3 \\times \\frac{1}{20} = \\frac{6 + 6 + 3}{20} = \\frac{3}{4}$. C'est $3 \\times \\frac{1}{4}$ : chaque tirage donne une verte avec probabilité $\\frac{1}{4}$, malgré la dépendance entre les tirages.",
        "retenir": "Compléter la loi grâce à la somme des probabilités égale à 1, puis $E(X) = \\sum x_i\\,P(X = x_i)$.",
        "id": "c8b-s0-4"
       }
      ],
      "boss": "Les oiseaux du lac Stymphale",
      "monstre": "stymphale",
      "contexte": "D'après CAPES Mayotte 2022 (composition 1, problème 3 : urne de Pólya). Une urne contient au départ une boule verte et trois boules blanches. On répète trois fois l'opération suivante : tirer une boule au hasard, noter sa couleur, la remettre dans l'urne et ajouter une boule de la même couleur. Pour $k \\in \\{1, 2, 3\\}$, on note $V_k$ l'événement « la $k$-ième boule tirée est verte », et $X$ le nombre de boules vertes tirées au cours des trois tirages. L'arbre a trois niveaux ; à chaque nœud, la probabilité de tirer une verte est le nombre de boules vertes divisé par le nombre total de boules présentes à cet instant."
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Une maladie touche 1 % d'une population. Un test est positif chez 99 % des malades et négatif chez 99 % des personnes saines. Proposition : « Une personne dont le test est positif est malade avec une probabilité d'au moins 0,99. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Avec $M$ : « malade » et $T$ : « test positif », calcule $P(T)$ par les probabilités totales, puis $P_T(M)$.",
        "explication": "Faux. $P(M \\cap T) = 0{,}01 \\times 0{,}99 = 0{,}0099$ et $P(\\overline{M} \\cap T) = 0{,}99 \\times 0{,}01 = 0{,}0099$. Donc $P(T) = 0{,}0198$ et $P_T(M) = \\frac{0{,}0099}{0{,}0198} = \\frac{1}{2}$. Un test « fiable à 99 % » ne donne ici qu'une chance sur deux d'être malade quand il est positif : la maladie est rare, et les faux positifs sont aussi nombreux que les vrais.",
        "retenir": "$P_M(T)$ (sensibilité du test) n'est pas $P_T(M)$ : la probabilité d'être malade sachant le test positif dépend fortement de la proportion de malades.",
        "id": "c8b-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Soit $A$ et $B$ deux événements avec $0 < P(A) < 1$. Proposition : « Si $P_A(B) > P_{\\overline{A}}(B)$, alors $P_B(A) > P(A)$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Montre d'abord que $P(B) < P_A(B)$ : $P(B)$ est une moyenne pondérée de $P_A(B)$ et $P_{\\overline{A}}(B)$.",
        "explication": "Vrai. Par les probabilités totales, $P(B) = P(A)\\,P_A(B) + (1 - P(A))\\,P_{\\overline{A}}(B) < P(A)\\,P_A(B) + (1 - P(A))\\,P_A(B) = P_A(B)$, car $1 - P(A) > 0$. Comme $P(A) > 0$, on en déduit $P(A \\cap B) = P(A)\\,P_A(B) > P(A)\\,P(B) \\geqslant 0$. En particulier $P(B) > 0$, car $P(B) \\geqslant P(A \\cap B) > 0$, et en divisant par $P(B)$ : $P_B(A) > P(A)$.",
        "retenir": "$P(B)$ est une moyenne pondérée de $P_A(B)$ et $P_{\\overline{A}}(B)$. Si $A$ favorise $B$, alors $B$ favorise $A$ : la dépendance positive est symétrique.",
        "id": "c8b-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si l'espérance du gain algébrique d'un jeu est strictement positive, alors le joueur a plus d'une chance sur deux de gagner de l'argent lors d'une partie. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Imagine un jeu où l'on perd souvent un peu et où l'on gagne rarement beaucoup.",
        "explication": "Faux. Contre-exemple : un jeu dont le gain $G$ vaut 10 € avec probabilité $\\frac{1}{4}$ et $-1$ € avec probabilité $\\frac{3}{4}$. Alors $E(G) = \\frac{10}{4} - \\frac{3}{4} = \\frac{7}{4} > 0$, mais $P(G > 0) = \\frac{1}{4} < \\frac{1}{2}$. L'espérance est une moyenne sur un grand nombre de parties ; elle ne dit pas ce qui se produit le plus souvent lors d'une partie.",
        "retenir": "Espérance positive ne signifie pas gain probable : comme la moyenne et la médiane d'une série, $E(X)$ et « le cas le plus fréquent » peuvent être éloignés.",
        "id": "c8b-b0-2"
       }
      ]
     }
    ]
   }
  ],
  "sanctuaire": {
   "sceauxOr": 3,
   "salle": {
    "nom": "Le sanctuaire de Hume",
    "fond": "sanctuaire",
    "athena": "Hume doutait que le passé garantisse l'avenir. Toi, mesure l'incertitude au lieu de la subir, et prépare-toi à l'expliquer.",
    "notion": "Problèmes plus difficiles et regard de futur professeur",
    "plan": [
     "############################",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................#",
     "#..........................S",
     "#..........T...............S",
     "#.........##PPPPPPPPP#######",
     "#..A.....T##.........#######",
     "#.###...####.........#######",
     "#......T####.........#######",
     "#.....######.........#######",
     "#J.G..######.........#######",
     "############.........#######"
    ],
    "guides": [
     {
      "nom": "",
      "portrait": "grec",
      "texte": ""
     }
    ],
    "steles": [
     {
      "exercices": [
       {
        "titre": "La roue de loterie",
        "enonce": "Une roue est partagée en quatre secteurs de même aire : sur un secteur on perd 1 €, sur un autre on ne gagne rien, sur les deux derniers on gagne 2 €. On note $X$ le gain algébrique, en euros. On admet la formule $V(X) = E(X^2) - \\big(E(X)\\big)^2$. Entrer la variance $V(X)$, sous forme de fraction.",
        "reponse": 1.6875,
        "indice": "Loi de $X$ : $-1$, $0$, $2$ avec les probabilités $\\frac{1}{4}$, $\\frac{1}{4}$, $\\frac{1}{2}$. Calcule $E(X)$, puis $E(X^2)$.",
        "explication": "$E(X) = -\\frac{1}{4} + 0 + 2 \\times \\frac{1}{2} = \\frac{3}{4}$ et $E(X^2) = \\frac{1}{4} + 0 + 4 \\times \\frac{1}{2} = \\frac{9}{4}$. Donc $V(X) = \\frac{9}{4} - \\frac{9}{16} = \\frac{27}{16}$. Vérification par la définition : $\\frac{1}{4}\\left(\\frac{7}{4}\\right)^2 + \\frac{1}{4}\\left(\\frac{3}{4}\\right)^2 + \\frac{1}{2}\\left(\\frac{5}{4}\\right)^2 = \\frac{49 + 9 + 50}{64} = \\frac{108}{64} = \\frac{27}{16}$.",
        "retenir": "Formule de König-Huygens : $V(X) = E(X^2) - \\big(E(X)\\big)^2$ ; l'écart-type est $\\sigma(X) = \\sqrt{V(X)}$.",
        "id": "c8s-s0-0"
       },
       {
        "titre": "Écart-type d'une transformée",
        "enonce": "Programme de Terminale (variance de $aX + b$). Une variable aléatoire $X$ vérifie $E(X) = 3$ et $E(X^2) = 13$. On pose $Y = 5 - 3X$. Entrer l'écart-type $\\sigma(Y)$.",
        "reponse": 6,
        "indice": "Calcule $V(X)$ par la formule de König-Huygens, puis utilise $V(aX + b) = a^2\\,V(X)$.",
        "explication": "$V(X) = E(X^2) - \\big(E(X)\\big)^2 = 13 - 9 = 4$. Comme $V(aX + b) = a^2\\,V(X)$, on a $V(Y) = (-3)^2 \\times 4 = 36$, donc $\\sigma(Y) = 6$. Le signe de $a$ disparaît, $\\sigma(aX + b) = |a|\\,\\sigma(X)$, et la constante $b$ ne change pas la dispersion. Réponse fausse classique : $-3 \\times 2 = -6$, alors qu'un écart-type est positif.",
        "retenir": "$V(aX + b) = a^2\\,V(X)$ et $\\sigma(aX + b) = |a|\\,\\sigma(X)$ : décaler ne disperse pas, multiplier par $a$ disperse d'un facteur $|a|$.",
        "id": "c8s-s0-1"
       },
       {
        "titre": "Le dispensaire",
        "enonce": "Cinq villages sont situés le long d'une route rectiligne, aux abscisses 1, 4, 6, 14 et 20 (en km). On veut placer un dispensaire au point d'abscisse $x$ de la route qui rend minimale la somme des carrés des distances aux villages : $f(x) = (x-1)^2 + (x-4)^2 + (x-6)^2 + (x-14)^2 + (x-20)^2$. Entrer l'abscisse qui minimise $f$.",
        "reponse": 9,
        "unite": "km",
        "indice": "Développe $f(x)$ : c'est un trinôme $ax^2 + bx + c$ avec $a > 0$, minimal en $-\\frac{b}{2a}$.",
        "explication": "$f(x) = 5x^2 - 2(1 + 4 + 6 + 14 + 20)x + c = 5x^2 - 90x + c$, où $c$ est une constante : trinôme de coefficient dominant positif, minimal en $x = \\frac{90}{10} = 9$, qui est la moyenne des abscisses. Le minimum $f(9) = 64 + 25 + 9 + 25 + 121 = 244$ vaut $5\\sigma^2$, où $\\sigma$ est l'écart-type de la série (division par l'effectif 5). Piège : la médiane, 6, minimise la somme des distances, pas celle de leurs carrés.",
        "retenir": "La moyenne minimise $\\sum (x - x_i)^2$, et ce minimum vaut $N\\sigma^2$ ; la médiane, elle, minimise $\\sum |x - x_i|$.",
        "effet": "passerelle",
        "id": "c8s-s0-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Deux tests valent mieux qu'un",
        "enonce": "Une maladie touche 1 % d'une population. Un test est positif chez 90 % des malades et chez 5 % des personnes saines. Une personne passe deux fois ce test ; on admet que les deux tests sont positifs avec probabilité $0{,}9^2$ pour un malade et $0{,}05^2$ pour une personne saine. Les deux tests de cette personne sont positifs. Entrer la probabilité qu'elle soit malade, sous forme de fraction.",
        "reponse": 0.7659574468085106,
        "indice": "Arbre : malade ou non, puis « deux tests positifs » ou non. Applique la formule de Bayes.",
        "explication": "Avec $M$ : « malade » et $D$ : « deux tests positifs » : $P(M \\cap D) = 0{,}01 \\times 0{,}81 = 0{,}0081$ et $P(\\overline{M} \\cap D) = 0{,}99 \\times 0{,}0025 = 0{,}002475$. Donc $P_D(M) = \\frac{0{,}0081}{0{,}010575} = \\frac{8100}{10575} = \\frac{36}{47} \\approx 0{,}77$. Après un seul test positif, on n'aurait que $\\frac{0{,}009}{0{,}0585} = \\frac{2}{13} \\approx 0{,}15$ : confirmer un dépistage change tout.",
        "retenir": "Bayes : la probabilité a posteriori dépend de la probabilité a priori ; un premier test positif sert de nouvel a priori pour le second.",
        "id": "c8s-s1-0"
       },
       {
        "titre": "Les trois portes",
        "enonce": "Un jeu télévisé propose trois portes : une voiture est cachée au hasard derrière l'une d'elles, une chèvre derrière chacune des deux autres. Le candidat choisit une porte au hasard. L'animateur, qui sait où est la voiture, ouvre alors toujours une porte non choisie par le candidat et cachant une chèvre (si deux portes conviennent, il en ouvre une au hasard), puis propose au candidat de changer pour la porte restée fermée. Le candidat change toujours. Entrer la probabilité qu'il gagne la voiture, sous forme de fraction.",
        "reponse": 0.6666666666666666,
        "indice": "Premier niveau de l'arbre : le premier choix est-il la bonne porte ? Que se passe-t-il ensuite, en changeant, dans chacun des deux cas ?",
        "explication": "Premier niveau : le candidat a d'abord choisi la voiture (probabilité $\\frac{1}{3}$) ou une chèvre ($\\frac{2}{3}$). S'il a choisi la voiture, changer le fait perdre à coup sûr. S'il a choisi une chèvre, l'animateur ouvre l'autre porte à chèvre, et la porte restante cache la voiture : changer le fait gagner à coup sûr. Donc la probabilité de gagner est $\\frac{1}{3} \\times 0 + \\frac{2}{3} \\times 1 = \\frac{2}{3}$. L'intuition « une chance sur deux » oublie que le choix de l'animateur dépend de la position de la voiture.",
        "retenir": "Une information n'est pas neutre quand sa production dépend de l'inconnue : modéliser qui sait quoi, puis décrire l'arbre.",
        "id": "c8s-s1-1"
       },
       {
        "titre": "Au plus trois lancers",
        "enonce": "On lance un dé équilibré au plus trois fois, en s'arrêtant dès que l'on obtient un 6 ; les lancers sont indépendants. On note $N$ le nombre de lancers effectués ($N$ vaut donc 1, 2 ou 3). Entrer $E(N)$, sous forme de fraction.",
        "reponse": 2.5277777777777777,
        "indice": "$N = 3$ dès que les deux premiers lancers ne donnent pas 6, quel que soit le résultat du troisième.",
        "explication": "$P(N = 1) = \\frac{1}{6}$ ; $P(N = 2) = \\frac{5}{6} \\times \\frac{1}{6} = \\frac{5}{36}$ ; $P(N = 3) = \\left(\\frac{5}{6}\\right)^2 = \\frac{25}{36}$, car le troisième lancer a lieu quel que soit son résultat. Vérification : $\\frac{6 + 5 + 25}{36} = 1$. Donc $E(N) = \\frac{6}{36} + 2 \\times \\frac{5}{36} + 3 \\times \\frac{25}{36} = \\frac{6 + 10 + 75}{36} = \\frac{91}{36} \\approx 2{,}53$.",
        "retenir": "Pour un temps d'attente tronqué, la dernière valeur regroupe tous les cas restants : vérifier que la somme des probabilités vaut 1.",
        "id": "c8s-s1-2"
       }
      ]
     },
     {
      "exercices": [
       {
        "titre": "Une erreur de sens",
        "enonce": "Exercice de classe : une maladie touche 2 % d'une population ; un test est positif chez 95 % des malades et chez 10 % des personnes saines. On demande la probabilité qu'une personne testée positive soit malade. Un élève répond : « 0,95, car le test détecte 95 % des malades. » Quel diagnostic porter ?",
        "reponse": 2,
        "choix": [
         "Il n'y a pas d'erreur : 0,95 est bien la probabilité demandée.",
         "Il confond $P_M(T)$ et $P_T(M)$ ; la réponse est $\\frac{19}{117}$, environ 0,16, obtenue par la formule de Bayes.",
         "Il a oublié de multiplier par 0,02 ; la réponse est $0{,}02 \\times 0{,}95 = 0{,}019$.",
         "Il suppose à tort que les événements $M$ et $T$ sont incompatibles."
        ],
        "indice": "Écris, avec la notation $P_A(B)$, la probabilité donnée par l'énoncé et celle qui est demandée.",
        "explication": "L'énoncé donne $P_M(T) = 0{,}95$ ; la question demande $P_T(M)$. Par les probabilités totales, $P(T) = 0{,}02 \\times 0{,}95 + 0{,}98 \\times 0{,}1 = 0{,}117$, puis $P_T(M) = \\frac{0{,}019}{0{,}117} = \\frac{19}{117} \\approx 0{,}16$. La réponse 0,019 est $P(M \\cap T)$, une autre confusion. En classe, un tableau d'effectifs fictifs (sur 10 000 personnes : 190 malades positifs, 980 sains positifs) rend l'écart frappant.",
        "retenir": "Lire « sachant » : le conditionnement de la question n'est pas toujours celui de l'énoncé. Des effectifs fictifs aident les élèves à le voir.",
        "id": "c8s-s2-0"
       },
       {
        "titre": "Choisir le bon exemple",
        "enonce": "Pour convaincre une classe que deux événements incompatibles ne sont pas, en général, indépendants, on lance un dé équilibré à six faces. Quel couple d'événements choisir ?",
        "reponse": 4,
        "choix": [
         "$A = \\{1 ; 2\\}$ et $B = \\{2 ; 3\\}$",
         "$A = \\emptyset$ et $B = \\{1\\}$",
         "$A = \\{2 ; 4 ; 6\\}$ et $B = \\{3 ; 6\\}$",
         "$A = \\{1 ; 2\\}$ et $B = \\{5 ; 6\\}$"
        ],
        "indice": "Il faut deux événements incompatibles, de probabilités non nulles, tels que $P(A \\cap B) \\neq P(A)\\,P(B)$.",
        "explication": "$\\{1 ; 2\\}$ et $\\{5 ; 6\\}$ sont incompatibles et $P(A \\cap B) = 0 \\neq \\frac{1}{3} \\times \\frac{1}{3}$ : ils ne sont pas indépendants. Le premier couple n'est pas incompatible (2 est commun). Le deuxième est un piège : $\\emptyset$ est incompatible avec tout événement, mais aussi indépendant de tout événement, car $0 = 0 \\times P(B)$. Le troisième couple est indépendant ($\\frac{1}{6} = \\frac{1}{2} \\times \\frac{1}{3}$) et non incompatible.",
        "retenir": "Un bon contre-exemple pour une classe vérifie toutes les hypothèses de l'énoncé : ici, incompatibles et de probabilités non nulles.",
        "id": "c8s-s2-1"
       },
       {
        "titre": "La médiane d'un tableau",
        "enonce": "Quinze élèves indiquent le nombre de livres lus pendant les vacances : la valeur 0 a pour effectif 8, la valeur 1 a pour effectif 3, la valeur 2 a pour effectif 2, et les valeurs 3 et 4 ont chacune pour effectif 1. Un élève annonce : « la médiane est 2, c'est la valeur du milieu. » Quel diagnostic porter ?",
        "reponse": 1,
        "choix": [
         "Il prend le milieu des valeurs distinctes sans tenir compte des effectifs ; la médiane est 0.",
         "Il a calculé la moyenne au lieu de la médiane ; la médiane est 1.",
         "Il n'a pas trié les valeurs ; la médiane est 1.",
         "Il n'y a pas d'erreur : 2 est bien la valeur centrale du tableau."
        ],
        "indice": "Écris la série complète des quinze valeurs rangées dans l'ordre croissant : quelle est la 8e ?",
        "explication": "La série rangée compte 15 valeurs ; la médiane est la 8e. Or les 8 premières valeurs valent 0 : la médiane est 0. L'élève a pris la valeur centrale de la liste 0, 1, 2, 3, 4 des valeurs distinctes, comme si chacune avait le même effectif. La moyenne, $\\frac{14}{15} \\approx 0{,}93$, ne vaut pas 2 non plus. Remède : faire calculer les effectifs cumulés croissants (8, 11, 13, 14, 15).",
        "retenir": "Médiane d'un tableau d'effectifs : chercher le rang central à l'aide des effectifs cumulés croissants, jamais le milieu des valeurs distinctes.",
        "id": "c8s-s2-2"
       }
      ]
     }
    ],
    "bonus": [
     {
      "exercices": [
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Pour toute variable aléatoire $X$ prenant un nombre fini de valeurs, $E(X^2) \\geqslant \\big(E(X)\\big)^2$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Développe $\\sum p_i (x_i - m)^2$, avec $m = E(X)$ et $p_i = P(X = x_i)$ : que reconnaît-on ?",
        "explication": "Vrai. Notons $m = E(X)$ et $p_i = P(X = x_i)$. Alors $0 \\leqslant \\sum p_i (x_i - m)^2 = \\sum p_i x_i^2 - 2m \\sum p_i x_i + m^2 \\sum p_i = E(X^2) - 2m^2 + m^2 = E(X^2) - m^2$. C'est la formule de König-Huygens : la variance, somme de termes positifs, est positive. L'égalité a lieu si et seulement si $P(X = m) = 1$.",
        "retenir": "$V(X) = E(X^2) - \\big(E(X)\\big)^2 \\geqslant 0$ : la moyenne des carrés dépasse toujours le carré de la moyenne.",
        "id": "c8s-b0-0"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "Proposition : « Si $A$ et $B$ sont deux événements indépendants tels que $P(A \\cup B) = 1$, alors $P(A) = 1$ ou $P(B) = 1$. »",
        "reponse": 1,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "Calcule $P(\\overline{A} \\cap \\overline{B})$ de deux façons.",
        "explication": "Vrai. D'une part, $P(\\overline{A} \\cap \\overline{B}) = 1 - P(A \\cup B) = 0$. D'autre part, $P(\\overline{A} \\cap \\overline{B}) = 1 - P(A \\cup B) = 1 - P(A) - P(B) + P(A \\cap B)$, et par indépendance $P(A \\cap B) = P(A)\\,P(B)$, d'où $P(\\overline{A} \\cap \\overline{B}) = (1 - P(A))(1 - P(B))$. Un produit nul a un facteur nul : $P(A) = 1$ ou $P(B) = 1$.",
        "retenir": "Si $A$ et $B$ sont indépendants, leurs contraires le sont aussi : $P(\\overline{A} \\cap \\overline{B}) = P(\\overline{A})\\,P(\\overline{B})$.",
        "id": "c8s-b0-1"
       },
       {
        "titre": "Vrai ou faux ?",
        "enonce": "L'écart-type d'une série de $N$ valeurs est $\\sigma = \\sqrt{\\frac{1}{N}\\sum (x_i - \\overline{x})^2}$. Proposition : « Si l'on ajoute à une série statistique une nouvelle valeur égale à sa moyenne, ni la moyenne ni l'écart-type de la série ne changent. »",
        "reponse": 2,
        "choix": [
         "Vrai",
         "Faux"
        ],
        "indice": "La moyenne ne change pas, c'est exact. Teste l'écart-type sur la série 0 ; 2.",
        "explication": "Faux. Contre-exemple : la série 0 ; 2 a pour moyenne 1 et pour écart-type $\\sqrt{\\frac{1 + 1}{2}} = 1$. La série 0 ; 1 ; 2 a toujours pour moyenne 1, mais pour écart-type $\\sqrt{\\frac{1 + 0 + 1}{3}} = \\sqrt{\\frac{2}{3}} < 1$. En général, la somme des carrés des écarts est inchangée mais l'effectif passe de $N$ à $N + 1$ : $\\sigma'^2 = \\frac{N}{N+1}\\,\\sigma^2$.",
        "retenir": "Une valeur égale à la moyenne ne déplace pas la moyenne mais resserre la série : l'écart-type diminue (sauf s'il est nul).",
        "id": "c8s-b0-2"
       }
      ]
     }
    ]
   }
  }
 }
];

// Le temple de Mnémosyne : le buste et les maximes des salles de révision
var MNEMOSYNE = {
 "buste": null,
 "maximes": []
};
