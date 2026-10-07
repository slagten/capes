#!/usr/bin/env python3
"""Répartit les maximes vérifiées entre les chapitres (sans doublon).

Entrées : citations/maximes-ok-*.json, citations/extraits-ok-*.json
Sorties : citations/pool-chN.json (maximes du chapitre N),
          citations/reserve.json (maximes « mémoire » et restes),
          citations/extraits.json (un extrait vérifié par salle).
"""
import json, pathlib, collections, re

BASE = pathlib.Path(__file__).resolve().parent.parent
C = BASE / "citations"
plan = json.loads((BASE / "plan.json").read_text())

groupes = []
for f in sorted(C.glob("maximes-ok-*.json")):
    groupes.append(json.loads(f.read_text()))
# Un même passage pris par deux lots : on garde une seule fiche (celle
# qui porte le thème « memoire » s'il y en a une, sinon la première).
garder = {}
for g in groupes:
    for m in g:
        a = garder.get(m["id"])
        if a is None or ("memoire" in (m.get("themes") or []) and "memoire" not in (a.get("themes") or [])):
            garder[m["id"]] = m
groupes = [[m for m in g if garder[m["id"]] is m] for g in groupes]
toutes = [m for g in groupes for m in g]

# Les extraits des bustes (un par salle)
extraits = {}
for f in sorted(C.glob("extraits-ok-*.json")):
    for e in json.loads(f.read_text()):
        extraits[e["salle"]] = e

# Une maxime qui redit un extrait de buste, ou une autre maxime (même
# auteur, même référence), est écartée : chaque texte n'apparaît qu'une fois.
def mots(t):
    return {w for w in re.findall(r"[a-zàâçéèêëîïôûùüÿœ]{4,}", t.lower())}
def norm(ref):
    return re.sub(r"[\s.()]", "", (ref or "").lower())
def meme_dk(a, b):
    a, b = norm(a), norm(b)
    return bool(set(re.findall(r"\bb\d+[a-z]?", a)) & set(re.findall(r"\bb\d+[a-z]?", b)))
def meme_auteur(a, b):
    a, b = a.lower(), b.lower()
    return a in b or b in a
doublons = []
for m in toutes:
    for e in extraits.values():
        auteurs = [e.get("philosophe", ""), e.get("auteur_du_texte", "")]
        if not any(x and meme_auteur(m["auteur"], x) for x in auteurs):
            continue
        mm = mots(m["texte"])
        commun = len(mm & mots(e["texte"])) / max(1, len(mm))
        if commun >= 0.5 or meme_dk(m.get("ref"), e.get("ref")):
            doublons.append((m["id"], e["salle"]))
            break
gardees = []
for m in toutes:
    if any(d == m["id"] for d, _ in doublons):
        continue
    mm = mots(m["texte"])
    for a in gardees:
        if meme_auteur(m["auteur"], a["auteur"]) and len(mm & mots(a["texte"])) / max(1, min(len(mm), len(mots(a["texte"])))) >= 0.5:
            doublons.append((m["id"], a["id"]))
            break
    else:
        gardees.append(m)
ecartees = {i for i, _ in doublons}
toutes = [m for m in toutes if m["id"] not in ecartees]
groupes = [[m for m in g if m["id"] not in ecartees] for g in groupes]

# Les maximes sur la mémoire vont au temple de Mnémosyne
MOTS_MEMOIRE = re.compile(r"m[ée]moire|souven|rappel|oubli|retien|reten|empreint|r[ée]miniscence|cire|par c[œo]eur", re.I)
memoire = [m for m in toutes if "memoire" in (m.get("themes") or [])]
memoire.sort(key=lambda m: 0 if MOTS_MEMOIRE.search(m["texte"]) else 1)
memoire = memoire[:15]
reste_groupes = [[m for m in g if m not in memoire] for g in groupes]

# On mêle les groupes (un de chaque, à tour de rôle) puis on distribue
melange = []
while any(reste_groupes):
    for g in reste_groupes:
        if g:
            melange.append(g.pop(0))
besoin = {}
cartes = json.loads((BASE / "cartes.json").read_text())
for p in plan:
    n = 0
    for r in p["salles"] + [p["boss"]["salle"], p["sanctuaire"]["salle"]]:
        c = cartes[r["carte"]]
        n += c["T"] + c["A"] + c["H"]
    besoin[p["id"]] = n
pools = {p["id"]: [] for p in plan}
ordre = [p["id"] for p in plan]
k = 0
for m in melange:
    # on donne d'abord à chaque chapitre ce qu'il lui faut, plus 3 de marge
    cands = [c for c in ordre if len(pools[c]) < besoin[c] + 3]
    if not cands:
        break
    c = cands[k % len(cands)]
    pools[c].append(m)
    k += 1
utilisees = {m["id"] for p in pools.values() for m in p}
reserve = memoire + [m for m in melange if m["id"] not in utilisees]
for c, p in pools.items():
    (C / f"pool-{c}.json").write_text(json.dumps(p, ensure_ascii=False, indent=1))
(C / "reserve.json").write_text(json.dumps(reserve, ensure_ascii=False, indent=1))

(C / "extraits.json").write_text(json.dumps(extraits, ensure_ascii=False, indent=1))
salles = [r["id"] for p in plan for r in p["salles"] + [p["boss"]["salle"], p["sanctuaire"]["salle"]]] + ["mnemosyne"]
manque = [s for s in salles if s not in extraits]
print("doublons écartés :", doublons)
print("maximes :", len(toutes), "dont mémoire", len(memoire))
print("pools :", {c: f"{len(p)}/{besoin[c]}" for c, p in pools.items()})
print("réserve :", len(reserve))
print("extraits :", len(extraits), "manquants :", manque)
