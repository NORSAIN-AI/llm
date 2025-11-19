---
agent: knowledge_builder
---
# Opprett eller oppdater en Custom GPT knowledge-fil

Du skal generere eller utvide en kunnskapsfil i `agents/<gpt>/knowledge/**`.
Bruk maler i `templates/custom_gpt/knowledge/**` når de finnes.

## Inndata fra bruker
Brukeren skal gi (minst):

- GPT-mappenavn: f.eks. `agents/norsain_devarchitect_gpt/`
- Knowledge-område/mappe: f.eks. `02.architecture`
- Tema eller filnavn: f.eks. `webapp_architecture_patterns`
- Kort formål eller beskrivelse

Hvis noe mangler, gjør en sikker antakelse og si hva den er.

---

## Krav til oppgaven

1. **Finn riktig mappe**
   - f.eks. `agents/<name>/knowledge/02.architecture/`

2. **Opprett mappen hvis den mangler**

3. **Finn template hvis den finnes**
   - `templates/custom_gpt/knowledge/<område>/*.template.md`

4. **Generer filen**
   - korriger filnavn til korrekt format:
     - `NN.NN_<snake_case>.md` eller eksisterende mønster i mappen
   - bruk YAML-frontmatter
   - lag H1, H2, H3 struktur
   - fyll inn nødvendig faglig innhold

5. **Ikke rør**
   - instructions/
   - gpt.json
   - actions/
   - andre GPT-pakker

---

## Output-regler

Svar alltid i dette formatet:

1. **Tilnærming**
2. **Path**
3. **Full fil** i én Markdown-kodeblokk
4. **Neste steg**

---

## Success Criteria

- Fil navngitt korrekt
- Riktig mappe
- Riktig frontmatter
- Brukt template hvis tilgjengelig
- Konsistent med NGAS og NORSAIN-praksis
