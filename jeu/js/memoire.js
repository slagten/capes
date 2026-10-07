// =====================================================================
//  MÉMOIRE : la répétition espacée (les boîtes de Leitner)
// =====================================================================
//  Chaque exercice du jeu porte un identifiant (« id », ajouté par le
//  programme qui fabrique niveaux.js). La première réponse du jour à un
//  exercice le classe dans une boîte :
//   - réussi du premier coup : il monte d'une boîte ;
//   - raté (ou sablier vide) : il retombe dans la boîte 1.
//  Chaque boîte a son délai avant la prochaine révision (en jours) :
//  boîte 1 → demain, 2 → 3 jours, 3 → 7 jours, 4 → 16 jours, 5 → 35 jours.
//  Un exercice est « dû » quand son délai est écoulé : il revient alors
//  dans le temple de Mnémosyne, mélangé aux exercices des autres
//  chapitres (alterner les sujets aide à retenir).
//  Un exercice est « maîtrisé » à partir de la boîte 4.
// =====================================================================

var Memoire = (function () {

  var INTERVALLES = [1, 3, 7, 16, 35];
  var BOITE_MAITRISE = 4;

  var INDEX = {};      // id → { ex, c (numéro du chapitre), salle, sorte, ordre }
  var ORDRE = [];      // les id dans l'ordre du jeu

  // Le numéro du jour (heure locale) : change à minuit.
  function aujourdhui() {
    var d = new Date();
    return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  }

  // Range tous les exercices des chapitres (salles et sanctuaires).
  function indexer(chapitres) {
    INDEX = {};
    ORDRE = [];
    chapitres.forEach(function (chap, c) {
      var salles = (chap.salles || []).slice();
      if (chap.sanctuaire && chap.sanctuaire.salle) salles.push(chap.sanctuaire.salle);
      salles.forEach(function (salle) {
        function ajouter(ex, sorte, k, total, contexte) {
          if (!ex || !ex.id || INDEX[ex.id]) return;
          INDEX[ex.id] = { ex: ex, c: c, salle: salle.nom, sorte: sorte, k: k, total: total, ordre: ORDRE.length,
                           contexte: contexte || "" };
          ORDRE.push(ex.id);
        }
        (salle.steles || []).forEach(function (st) {
          var liste = st.exercices || [st];
          liste.forEach(function (ex, k) { ajouter(ex, st.boss ? "boss" : "pierre", k, liste.length, st.contexte); });
        });
        (salle.bonus || []).forEach(function (st) {
          (st.exercices || [st]).forEach(function (ex, k) { ajouter(ex, "or", k, 3); });
        });
        (salle.acrobaties || []).forEach(function (ex) { ajouter(ex, "hermes", 0, 1); });
      });
    });
  }

  function infos(id) { return INDEX[id] || null; }
  function existe(id) { return !!INDEX[id]; }

  function noterJour(p, t) {
    if (!Array.isArray(p.jours)) p.jours = [];
    if (p.jours.indexOf(t) === -1) {
      p.jours.push(t);
      p.jours.sort(function (a, b) { return a - b; });
      if (p.jours.length > 400) p.jours = p.jours.slice(-400);
    }
  }

  // La première réponse du jour à un exercice. Renvoie la fiche de
  // l'exercice, ou null si l'exercice n'a pas d'identifiant.
  function noter(p, id, juste) {
    if (!id || !INDEX[id]) return null;
    if (!p.memoire || typeof p.memoire !== "object") p.memoire = {};
    var t = aujourdhui();
    var f = p.memoire[id];
    if (f && f.j === t) return f;          // déjà noté aujourd'hui
    if (!f) f = { b: 0, d: t, n: 0, r: 0, j: -1 };
    f.n += 1;
    if (juste) { f.r += 1; f.b = Math.min(INTERVALLES.length, Math.max(1, f.b) + 1); }
    else f.b = 1;
    f.d = t + INTERVALLES[f.b - 1];
    f.j = t;
    p.memoire[id] = f;
    noterJour(p, t);
    return f;
  }

  // Les exercices dont la révision est due (aujourd'hui ou en retard).
  function dues(p) {
    var t = aujourdhui(), liste = [];
    var m = p.memoire || {};
    for (var id in m) if (INDEX[id] && m[id].d <= t) liste.push(id);
    return liste;
  }

  // Mélange : un exercice de chaque chapitre à tour de rôle.
  function entrelacer(ids) {
    var paquets = {}, ordreChap = [];
    ids.forEach(function (id) {
      var c = INDEX[id].c;
      if (!paquets[c]) { paquets[c] = []; ordreChap.push(c); }
      paquets[c].push(id);
    });
    var res = [], reste = true;
    while (reste) {
      reste = false;
      ordreChap.forEach(function (c) {
        if (paquets[c].length) { res.push(paquets[c].shift()); reste = true; }
      });
    }
    return res;
  }

  // Choisit les exercices d'une séance de révision.
  // Renvoie { ids, avance } : avance = true quand rien n'était dû et
  // qu'on révise en avance les exercices les moins sûrs.
  function choisir(p, max) {
    max = max || 15;
    var m = p.memoire || {};
    var liste = dues(p).sort(function (a, b) { return (m[a].d - m[b].d) || (m[a].b - m[b].b) || (INDEX[a].ordre - INDEX[b].ordre); });
    var avance = false;
    if (liste.length === 0) {
      var t = aujourdhui();
      avance = true;
      for (var id in m) if (INDEX[id] && m[id].j !== t) liste.push(id);
      liste.sort(function (a, b) { return (m[a].b - m[b].b) || (m[a].d - m[b].d); });
      max = Math.min(max, 9);
    }
    liste = liste.slice(0, max * 2);
    return { ids: entrelacer(liste).slice(0, max), avance: avance };
  }

  // Le bilan par chapitre : exercices au total, vus, maîtrisés, dus.
  function maitrise(p, nbChapitres) {
    var t = aujourdhui(), m = p.memoire || {};
    var res = [];
    for (var c = 0; c < nbChapitres; c++) res.push({ total: 0, vus: 0, maitrises: 0, dus: 0, reussis: 0, essais: 0 });
    ORDRE.forEach(function (id) {
      var r = res[INDEX[id].c];
      if (!r) return;
      r.total += 1;
      var f = m[id];
      if (!f) return;
      r.vus += 1;
      r.essais += f.n;
      r.reussis += f.r;
      if (f.b >= BOITE_MAITRISE) r.maitrises += 1;
      if (f.d <= t) r.dus += 1;
    });
    return res;
  }

  // Les jours d'affilée où l'on a révisé (jusqu'à aujourd'hui, ou hier
  // si l'on n'a pas encore joué aujourd'hui).
  function serieJours(p) {
    var jours = Array.isArray(p.jours) ? p.jours : [];
    if (!jours.length) return 0;
    var t = aujourdhui();
    var present = {};
    jours.forEach(function (j) { present[j] = true; });
    var d = present[t] ? t : t - 1, n = 0;
    while (present[d]) { n += 1; d -= 1; }
    return n;
  }

  // Les règles « À retenir » des exercices déjà rencontrés, par chapitre.
  function tablettes(p, nbChapitres) {
    var m = p.memoire || {};
    var res = [];
    for (var c = 0; c < nbChapitres; c++) res.push([]);
    var vues = {};
    ORDRE.forEach(function (id) {
      var info = INDEX[id];
      if (!m[id] || !info.ex.retenir || !res[info.c]) return;
      var cle = info.c + "|" + info.ex.retenir;
      if (vues[cle]) return;
      vues[cle] = true;
      res[info.c].push({ texte: info.ex.retenir, salle: info.salle, maitrise: m[id].b >= BOITE_MAITRISE });
    });
    return res;
  }

  function nombreTotal() { return ORDRE.length; }

  return {
    INTERVALLES: INTERVALLES, aujourdhui: aujourdhui, indexer: indexer, infos: infos, existe: existe,
    noter: noter, dues: dues, choisir: choisir, maitrise: maitrise, serieJours: serieJours,
    tablettes: tablettes, nombreTotal: nombreTotal
  };
})();
