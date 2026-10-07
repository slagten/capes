// Validateur du contenu du jeu. Usage :
//   node valider.js ../chapitres/ch3.json            (phase contenu)
//   node valider.js ../chapitres/ch3.json --final    (exige aussi bustes et maximes)
// Affiche les ERREURS (à corriger) et les AVERTISSEMENTS (à regarder).
const fs = require("fs"), path = require("path");
// KaTeX : la copie du jeu (vendor/katex), sinon une copie locale (outils/katex)
const katex = require([path.join(__dirname, "..", "..", "vendor", "katex", "katex.min.js"),
  path.join(__dirname, "katex", "dist", "katex.js")].find(p => fs.existsSync(p)));
const BASE = path.join(__dirname, "..");
const plan = JSON.parse(fs.readFileSync(path.join(BASE, "plan.json"), "utf8"));
const cartes = JSON.parse(fs.readFileSync(path.join(BASE, "cartes.json"), "utf8"));
const fichier = process.argv[2];
const final = process.argv.includes("--final");
const erreurs = [], avis = [];
const E = (ou, m) => erreurs.push(ou + " : " + m), W = (ou, m) => avis.push(ou + " : " + m);

let ch;
try { ch = JSON.parse(fs.readFileSync(fichier, "utf8")); }
catch (e) { console.log("ERREUR : JSON illisible : " + e.message); process.exit(1); }
const p = plan.find(c => c.id === ch.id);
if (!p) { console.log("ERREUR : id de chapitre inconnu « " + ch.id + " » (attendu ch1 … ch8)"); process.exit(1); }

const PORTRAITS = ["grec", "casque", "turban", "chignon", "renaissance", "perruque", "xixe", "lettre", "eveque", "moderne", "femme19"];

function verifierTexte(ou, t, oblig = true, max = 0) {
  if (t === undefined || t === null || t === "") { if (oblig) E(ou, "texte manquant"); return; }
  if (typeof t !== "string") { E(ou, "doit être une chaîne"); return; }
  if (max && t.length > max) W(ou, "long (" + t.length + " caractères, conseillé ≤ " + max + ")");
  if (/\\\(|\\\)|\\\[|\\\]/.test(t)) E(ou, "délimiteurs \\( \\) ou \\[ \\] interdits : utiliser $…$ (ou $$…$$)");
  // découpe en morceaux texte / maths
  const morceaux = [];
  let i = 0, enMath = false, debut = 0, disp = false;
  while (i < t.length) {
    if (t[i] === "\\" && t[i + 1] === "$") { i += 2; continue; }
    if (t[i] === "$") {
      const double = t[i + 1] === "$";
      if (!enMath) { morceaux.push({ math: false, s: t.slice(debut, i) }); enMath = true; disp = double; i += double ? 2 : 1; debut = i; continue; }
      if (disp && !double) { i++; continue; }
      morceaux.push({ math: true, s: t.slice(debut, i), disp }); enMath = false; i += disp ? 2 : 1; debut = i; continue;
    }
    i++;
  }
  if (enMath) { E(ou, "un $ n'est pas refermé"); return; }
  morceaux.push({ math: false, s: t.slice(debut) });
  morceaux.forEach(m => {
    if (m.math) {
      if (!m.s.trim()) { E(ou, "formule vide $$"); return; }
      try { katex.renderToString(m.s, { throwOnError: true, displayMode: !!m.disp, strict: "ignore" }); }
      catch (e) { E(ou, "LaTeX invalide dans « $" + m.s + "$ » : " + e.message.replace(/\s+/g, " ").slice(0, 160)); }
    } else {
      if (/\\(frac|sqrt|left|right|times|leq|geq|neq|in|forall|exists|infty|cdot|mathbb|text)\b/.test(m.s)) E(ou, "commande LaTeX hors de $…$ : « " + m.s.slice(0, 80) + " »");
      if (/[A-Za-z0-9)]\^[0-9A-Za-z{(]/.test(m.s) || /[A-Za-z]_\{?[0-9a-z]/.test(m.s)) W(ou, "exposant ou indice hors de $…$ ? « " + m.s.slice(0, 80) + " »");
    }
  });
}

function valeurReponse(ou, ex) {
  const r = ex.reponse;
  if (ex.choix !== undefined) {
    if (!Array.isArray(ex.choix) || ex.choix.length < 2 || ex.choix.length > 4) { E(ou, "choix : 2 à 4 options"); return; }
    ex.choix.forEach((c, k) => verifierTexte(ou + ".choix[" + (k + 1) + "]", c, true, 220));
    if (new Set(ex.choix).size !== ex.choix.length) E(ou, "deux options identiques");
    if (!Number.isInteger(r) || r < 1 || r > ex.choix.length) E(ou, "avec choix, reponse = numéro de la bonne option (1 à " + ex.choix.length + ")");
    if (ex.tolerance !== undefined) E(ou, "pas de tolerance avec choix");
    if (ex.unite) E(ou, "pas d'unite avec choix");
    return;
  }
  if (typeof r === "number") { if (!isFinite(r)) E(ou, "reponse non finie"); return; }
  if (typeof r === "string" && /^-?\d+(\.\d+)?\/\d+$/.test(r)) { if (Number(r.split("/")[1]) === 0) E(ou, "division par 0"); return; }
  E(ou, "reponse doit être un nombre (2.5) ou une fraction en chaîne (\"7/12\"), ou un numéro d'option avec choix");
}

const CHAMPS_EX = ["titre", "enonce", "reponse", "choix", "tolerance", "unite", "indice", "explication", "retenir", "effet", "temps", "maxime", "figure"];
function verifierExercice(ou, ex, opts) {
  if (!ex || typeof ex !== "object") { E(ou, "exercice manquant"); return; }
  Object.keys(ex).forEach(k => { if (!CHAMPS_EX.includes(k)) E(ou, "champ inconnu « " + k + " »"); });
  verifierTexte(ou + ".titre", ex.titre, true, 70);
  verifierTexte(ou + ".enonce", ex.enonce, true, opts.boss ? 520 : 600);
  verifierTexte(ou + ".indice", ex.indice, true, 300);
  verifierTexte(ou + ".explication", ex.explication, true, 750);
  verifierTexte(ou + ".retenir", ex.retenir, true, 200);
  valeurReponse(ou, ex);
  if (ex.tolerance !== undefined && (typeof ex.tolerance !== "number" || ex.tolerance < 0 || ex.tolerance > 1)) E(ou, "tolerance : nombre entre 0 et 1");
  if (ex.temps !== undefined && (typeof ex.temps !== "number" || ex.temps < 60 || ex.temps > 900)) E(ou, "temps : secondes entre 60 et 900");
  if (ex.effet !== undefined) {
    if (ex.effet !== "passerelle") E(ou, "effet : seul \"passerelle\" est permis");
    else if (!opts.passerelle) E(ou, "effet passerelle interdit ici");
    else if (ex.choix || Number(ex.reponse) !== opts.passerelle) E(ou, "la passerelle exige reponse = " + opts.passerelle + " (nombre, sans choix)");
  } else if (opts.passerelle) E(ou, "cet exercice doit porter effet: \"passerelle\" et reponse = " + opts.passerelle);
  if (opts.vf) {
    if (!Array.isArray(ex.choix) || ex.choix.length !== 2 || ex.choix[0] !== "Vrai" || ex.choix[1] !== "Faux") E(ou, "stèle d'or : choix exactement [\"Vrai\", \"Faux\"]");
    if (typeof ex.explication === "string" && !/^(Vrai|Faux)\b/.test(ex.explication)) E(ou, "l'explication d'un Vrai–Faux commence par « Vrai. » ou « Faux. »");
    if (Array.isArray(ex.choix) && typeof ex.explication === "string") {
      const dit = /^Vrai/.test(ex.explication) ? 1 : 2;
      if (ex.reponse !== dit) E(ou, "reponse (" + ex.reponse + ") contredit l'explication (« " + ex.explication.slice(0, 5) + " »)");
    }
  }
  if (final && opts.maxime) verifierMaxime(ou + ".maxime", ex.maxime);
  if (!final && ex.maxime !== undefined) {} // toléré
}

function verifierMaxime(ou, m) {
  if (!m || typeof m !== "object") { E(ou, "maxime manquante"); return; }
  ["id", "texte", "auteur", "ref"].forEach(k => { if (typeof m[k] !== "string" || !m[k]) E(ou, "maxime." + k + " manquant"); });
  Object.keys(m).forEach(k => { if (!["id", "texte", "auteur", "ref", "note"].includes(k)) E(ou, "maxime : champ inconnu « " + k + " »"); });
  if (typeof m.texte === "string") verifierTexte(ou + ".texte", m.texte, true, 260);
  if (typeof m.texte === "string" && m.texte.length > 260) W(ou, "maxime longue (" + m.texte.length + ")");
}

const maximesVues = {};
function verifierSalle(ou, s, attendu, sorte) {
  if (!s) { E(ou, "salle manquante"); return; }
  const carte = cartes[attendu.carte];
  if (s.id !== attendu.id) E(ou, "id attendu « " + attendu.id + " »");
  if (s.carte !== attendu.carte) E(ou, "carte attendue « " + attendu.carte + " »");
  if (s.nom !== attendu.nom) E(ou, "nom attendu « " + attendu.nom + " » (garder le nom du plan)");
  if (!["temple", "jardin", "crepuscule", "nuit", "bibliotheque", "orient", "mer", "brumes", "sanctuaire"].includes(s.fond)) E(ou, "fond inconnu");
  verifierTexte(ou + ".notion", s.notion, true, 90);
  verifierTexte(ou + ".athena", s.athena, true, 200);
  const steles = s.steles || [], bonus = s.bonus || [], acro = s.acrobaties || [];
  if (steles.length !== carte.T) E(ou, "il faut " + carte.T + " stèle(s) de pierre (steles), pas " + steles.length);
  if (bonus.length !== carte.A) E(ou, "il faut " + carte.A + " stèle(s) d'or (bonus), pas " + bonus.length);
  if (acro.length !== carte.H) E(ou, "il faut " + carte.H + " stèle(s) d'Hermès (acrobaties), pas " + acro.length);
  steles.forEach((st, i) => {
    const o = ou + ".steles[" + i + "]";
    const boss = sorte === "boss";
    const n = boss ? 5 : 3;
    Object.keys(st).forEach(k => { if (!["exercices", "boss", "monstre", "contexte", "maxime"].includes(k)) E(o, "champ inconnu « " + k + " »"); });
    if (!Array.isArray(st.exercices) || st.exercices.length !== n) { E(o, "il faut exactement " + n + " exercices"); return; }
    if (boss) {
      if (st.boss !== attendu.bossNom) E(o, "boss attendu « " + attendu.bossNom + " »");
      if (st.monstre !== attendu.monstre) E(o, "monstre attendu « " + attendu.monstre + " »");
      verifierTexte(o + ".contexte", st.contexte, true, 900);
    } else if (st.boss || st.contexte) E(o, "boss/contexte réservés au boss");
    st.exercices.forEach((ex, k) => {
      const pas = (i === carte.passerelle_stele && k === n - 1) ? carte.passerelle_longueur : 0;
      verifierExercice(o + ".ex" + (k + 1), ex, { boss, passerelle: pas });
    });
    if (final) verifierMaxime(o + ".maxime", st.maxime);
  });
  bonus.forEach((b, i) => {
    const o = ou + ".bonus[" + i + "]";
    if (!Array.isArray(b.exercices) || b.exercices.length !== 3) { E(o, "il faut exactement 3 Vrai–Faux"); return; }
    b.exercices.forEach((ex, k) => verifierExercice(o + ".vf" + (k + 1), ex, { vf: true }));
    if (final) verifierMaxime(o + ".maxime", b.maxime);
  });
  acro.forEach((a, i) => {
    const o = ou + ".acrobaties[" + i + "]";
    if (a && a.exercices) { E(o, "une stèle d'Hermès est UN exercice (pas de liste exercices)"); return; }
    verifierExercice(o, a, { maxime: true });
  });
  if (final) {
    const g = s.guides;
    if (!Array.isArray(g) || g.length !== 1) E(ou, "guides : exactement 1 buste");
    else {
      verifierTexte(ou + ".guides[0].nom", g[0].nom, true, 90);
      verifierTexte(ou + ".guides[0].texte", g[0].texte, true, 800);
      verifierTexte(ou + ".guides[0].source", g[0].source, true, 200);
      verifierTexte(ou + ".guides[0].glose", g[0].glose, true, 450);
      Object.keys(g[0]).forEach(k => { if (!["nom", "portrait", "texte", "source", "glose"].includes(k)) E(ou, "guides[0] : champ inconnu « " + k + " »"); });
      if (!PORTRAITS.includes(g[0].portrait)) E(ou, "portrait inconnu");
    }
  }
  // VF : équilibre
  return bonus.flatMap(b => (b.exercices || []).map(e => e.reponse));
}

if (ch.titre !== p.titre) E("chapitre", "titre attendu « " + p.titre + " »");
verifierTexte("chapitre.introduction", ch.introduction, true, 500);
verifierTexte("chapitre.conclusion", ch.conclusion, true, 400);
const salles = ch.salles || [];
if (salles.length !== 5) E("chapitre", "salles : 4 salles puis la salle du boss (5 au total)");
let vf = [];
p.salles.forEach((r, i) => { vf = vf.concat(verifierSalle("salle " + r.id, salles[i], r, "normale") || []); });
const rb = Object.assign({}, p.boss.salle, { bossNom: p.boss.nom, monstre: p.boss.monstre });
vf = vf.concat(verifierSalle("salle " + rb.id, salles[4], rb, "boss") || []);
if (!ch.sanctuaire || ch.sanctuaire.sceauxOr !== p.sanctuaire.sceauxOr) E("chapitre", "sanctuaire.sceauxOr attendu " + p.sanctuaire.sceauxOr);
vf = vf.concat(verifierSalle("salle " + p.sanctuaire.salle.id, ch.sanctuaire && ch.sanctuaire.salle, p.sanctuaire.salle, "sanctuaire") || []);
const nV = vf.filter(x => x === 1).length, nF = vf.filter(x => x === 2).length;
if (vf.length && (nV < vf.length * 0.3 || nF < vf.length * 0.3)) W("chapitre", "Vrai–Faux déséquilibrés : " + nV + " Vrai, " + nF + " Faux");
// positions des bonnes réponses dans les QCM non Vrai-Faux
const pos = [0, 0, 0, 0, 0];
JSON.stringify(ch, (k, v) => { if (v && Array.isArray(v.choix) && v.choix[0] !== "Vrai" && Number.isInteger(v.reponse)) pos[v.reponse]++; return v; });
const totQ = pos.reduce((a, b) => a + b, 0);
if (totQ >= 6 && Math.max(...pos) > totQ * 0.5) W("chapitre", "QCM : la bonne réponse est trop souvent à la même place " + JSON.stringify(pos.slice(1)));
// maximes en double dans le chapitre
if (final) {
  const ids = [];
  JSON.stringify(ch, (k, v) => { if (k === "maxime" && v && v.id) ids.push(v.id); return v; });
  const dbl = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dbl.length) E("chapitre", "maximes utilisées deux fois : " + [...new Set(dbl)].join(", "));
}
console.log(erreurs.length ? erreurs.map(x => "ERREUR " + x).join("\n") : "Aucune erreur.");
if (avis.length) console.log(avis.map(x => "AVERTISSEMENT " + x).join("\n"));
console.log("Bilan : " + erreurs.length + " erreur(s), " + avis.length + " avertissement(s). Vrai–Faux : " + nV + " Vrai / " + nF + " Faux. QCM : " + totQ + ".");
process.exit(erreurs.length ? 1 : 0);
