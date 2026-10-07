#!/usr/bin/env python3
"""Fabrique niveaux/niveaux.js du jeu à partir du contenu (JSON).

Entrées (dossier contenu/) : plan.json, cartes.json, prologue.json,
chapitres/chN.json, mnemosyne.json (facultatif).
Sortie : le fichier donné en argument (par défaut ../niveaux/niveaux.js, le
contenu étant rangé dans jeu/contenu/).

Chaque exercice reçoit un identifiant stable (« c3r2-s0-2 » : salle c3r2,
stèle de pierre 0, exercice 2 ; « -b » stèle d'or ; « -h » Hermès) qui sert
à la répétition espacée. Les fractions "7/12" deviennent des nombres.
"""
import json, sys, pathlib
from fractions import Fraction

BASE = pathlib.Path(__file__).resolve().parent.parent
args = [a for a in sys.argv[1:] if not a.startswith("--")]
sortie = pathlib.Path(args[0]) if args else BASE.parent / "niveaux" / "niveaux.js"
partiel = "--partiel" in sys.argv   # accepte des chapitres manquants (essais)

plan = json.loads((BASE / "plan.json").read_text())
cartes = json.loads((BASE / "cartes.json").read_text())

def nombre(r):
    if isinstance(r, str):
        return float(Fraction(r))
    return r

CHAMPS = ["titre", "enonce", "reponse", "choix", "tolerance", "unite", "indice", "explication", "retenir", "effet", "temps", "maxime", "figure"]

def exercice(ex, ident):
    e = {k: ex[k] for k in CHAMPS if k in ex}
    e["reponse"] = nombre(e["reponse"])
    if ident:
        e["id"] = ident
    return e

def salle(r, avec_id=True):
    carte = cartes[r["carte"]]
    sid = r.get("id") if avec_id else None
    out = {"nom": r["nom"], "fond": r["fond"], "athena": r.get("athena", "")}
    if r.get("notion"):
        out["notion"] = r["notion"]
    out["plan"] = carte["plan"]
    out["guides"] = r.get("guides") or ([{"nom": r.get("philosophe", ""), "portrait": "grec", "texte": ""}] if carte["G"] else [])
    steles = []
    for i, st in enumerate(r.get("steles", [])):
        s = {"exercices": [exercice(ex, f"{sid}-s{i}-{k}" if sid else None) for k, ex in enumerate(st["exercices"])]}
        for k in ("boss", "monstre", "contexte", "maxime"):
            if st.get(k):
                s[k] = st[k]
        steles.append(s)
    out["steles"] = steles
    bonus = []
    for i, st in enumerate(r.get("bonus", [])):
        s = {"exercices": [exercice(ex, f"{sid}-b{i}-{k}" if sid else None) for k, ex in enumerate(st["exercices"])]}
        if st.get("maxime"):
            s["maxime"] = st["maxime"]
        bonus.append(s)
    out["bonus"] = bonus
    if carte["H"]:
        acro = []
        for i, ex in enumerate(r.get("acrobaties", [])):
            e = exercice(ex, f"{sid}-h{i}" if sid else None)
            e["figure"] = carte["figures"][i]
            acro.append(e)
        out["acrobaties"] = acro
    if r.get("inscriptions"):
        out["inscriptions"] = r["inscriptions"]
    return out

chapitres = []
pro = json.loads((BASE / "prologue.json").read_text())
chapitres.append({"prologue": True, "titre": pro["titre"], "introduction": pro["introduction"],
                  "conclusion": pro["conclusion"], "salles": [salle(r, avec_id=False) for r in pro["salles"]]})

manquants = []
for p in plan:
    f = BASE / "chapitres" / f"{p['id']}.json"
    if not f.exists():
        manquants.append(p["id"])
        continue
    ch = json.loads(f.read_text())
    chapitres.append({
        "niveau": f"Semaine {p['semaine']}",
        "titre": ch["titre"],
        "introduction": ch["introduction"],
        "conclusion": ch.get("conclusion", ""),
        "salles": [salle(r) for r in ch["salles"]],
        "sanctuaire": {"sceauxOr": ch["sanctuaire"]["sceauxOr"], "salle": salle(ch["sanctuaire"]["salle"])},
    })
if manquants and not partiel:
    sys.exit("Chapitres manquants : " + ", ".join(manquants) + " (ajouter --partiel pour un essai)")

mn = BASE / "mnemosyne.json"
mnemo = json.loads(mn.read_text()) if mn.exists() else {"buste": None, "maximes": []}

entete = """// =====================================================================
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
"""
# Une seule apostrophe dans tout le jeu (les extraits avaient la typographique)
def apostrophes(o):
    if isinstance(o, str):
        return o.replace("\u2019", "'")
    if isinstance(o, list):
        return [apostrophes(x) for x in o]
    if isinstance(o, dict):
        return {k: apostrophes(v) for k, v in o.items()}
    return o
chapitres = apostrophes(chapitres)
mnemo = apostrophes(mnemo)
js = entete + "var CHAPITRES = " + json.dumps(chapitres, ensure_ascii=False, indent=1) + ";\n\n"
js += "// Le temple de Mnémosyne : le buste et les maximes des salles de révision\n"
js += "var MNEMOSYNE = " + json.dumps(mnemo, ensure_ascii=False, indent=1) + ";\n"
sortie.write_text(js)
nb = sum(1 for _ in json.dumps(chapitres).split('"reponse"')) - 1
print(f"{sortie} : {len(chapitres)} chapitres (prologue compris), {nb} exercices" + (f", manquants : {manquants}" if manquants else ""))
