#!/usr/bin/env python3
"""Répartit les maximes vérifiées entre les chapitres (sans doublon).

Entrées : citations/maximes-ok-*.json, citations/extraits-ok-*.json
Sorties : citations/pool-chN.json (maximes du chapitre N),
          citations/reserve.json (maximes « mémoire » et restes),
          citations/extraits.json (un extrait vérifié par salle).
"""
import json, pathlib, collections

BASE = pathlib.Path(__file__).resolve().parent.parent
C = BASE / "citations"
plan = json.loads((BASE / "plan.json").read_text())

groupes = []
for f in sorted(C.glob("maximes-ok-*.json")):
    groupes.append(json.loads(f.read_text()))
toutes = [m for g in groupes for m in g]
ids = collections.Counter(m["id"] for m in toutes)
assert not [i for i, n in ids.items() if n > 1], "id en double : " + str([i for i, n in ids.items() if n > 1])

# Les maximes sur la mémoire vont au temple de Mnémosyne
memoire = [m for m in toutes if "memoire" in (m.get("themes") or [])]
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

extraits = {}
for f in sorted(C.glob("extraits-ok-*.json")):
    for e in json.loads(f.read_text()):
        extraits[e["salle"]] = e
(C / "extraits.json").write_text(json.dumps(extraits, ensure_ascii=False, indent=1))
salles = [r["id"] for p in plan for r in p["salles"] + [p["boss"]["salle"], p["sanctuaire"]["salle"]]] + ["mnemosyne"]
manque = [s for s in salles if s not in extraits]
print("maximes :", len(toutes), "dont mémoire", len(memoire))
print("pools :", {c: f"{len(p)}/{besoin[c]}" for c, p in pools.items()})
print("réserve :", len(reserve))
print("extraits :", len(extraits), "manquants :", manque)
