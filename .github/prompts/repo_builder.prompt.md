---
agent: repo_builder
---

# Bygg eller oppdater GPT-pakke i `agents/`

Du skal utføre en konkret strukturoppgave i NORSAIN GPT Platform knyttet til en GPT-pakke
(som enten skal opprettes, forbedres eller oppdateres).

## Krav

- Følg NGAS-konvensjoner for GPT-struktur
- Filer skal ligge i følgende mapper:
  - `instructions/`
  - `knowledge/`
  - `actions/`
  - `gpt.json` i rot av GPT-mappen
- Knowledge-filer:
  - Maks 20 filer
  - Filnavn: `NN.NN_snake_case.md`
  - Skal være separat tematisert
- Actions:
  - OpenAPI 3.1 JSON, minimal og riktig struktur
- Instructions:
  - Skal være ren systemrolle med struktur: Identity → Scope → Rules → Signals → Output
- Output skal alltid kunne limes direkte inn i repoet uten opprydding

## Success Criteria

- Korrekt mappestruktur returnert i kodeblokk
- Hver fil vises i korrekt format (Markdown/JSON/TS)
- Ingen avvik fra repo-strukturen eller NGAS
- “Neste steg” inkluderes til slutt
