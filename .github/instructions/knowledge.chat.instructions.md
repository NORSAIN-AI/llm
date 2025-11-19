---
applyTo: 'agents/**/knowledge/**'
---

# Chat Instructions – Knowledge Layer for Custom GPTs

Dette området inneholder kunnskapsfiler som inngår i NORSAIN sine Custom GPT-pakker. Instruksjonene under gjelder alle interaksjoner i `agents/**/knowledge/**`.

## 1. Formål
Sikre at all kunnskap produseres og vedlikeholdes konsistent, teknisk korrekt og i tråd med NORSAIN og NGAS-standarder.

## 2. Tillatte operasjoner

Du kan:
- opprette nye `.md`-filer
- opprette manglende knowledge-undermapper
- fylle ut eksisterende filer
- oppdatere frontmatter
- videreutvikle seksjoner
- generere eval-matriser og prompts
- bruke templates fra `templates/custom_gpt/knowledge/**`

## 3. Forbudte operasjoner

Du skal ikke:
- endre `instructions/`, `actions/`, `gpt.json`
- generere kodefiler, CI-filer eller config
- endre struktur utenfor `knowledge/**`
- bruke emojis eller uformelt språk
- overskride 20 knowledge-filer per GPT

## 4. Kunnskapsfil-krav

Alle filer skal:
- ha komplett YAML-frontmatter
- bruke `#`, `##`, `###`
- ha ett klart definert tema
- følge filnavn-konvensjoner
- følge profesjonell teknisk stil
- bruke templates hvis eksisterende

## 5. Svarformat

Alle svar skal følge:
1. Tilnærming
2. Path
3. Full fil i én Markdown-kodeblokk
4. Neste steg

## 6. Avklaringer

Be om én avklaring kun hvis:
- GPT-navn mangler
- path mangler
- område er uklart

Ellers: gjør eksplisitte antakelser og gå videre.

