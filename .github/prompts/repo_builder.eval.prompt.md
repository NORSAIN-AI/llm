---
agent: repo_builder
---
# Evaluer Repo Builder Agent på gitt oppgave

Du skal evaluere hvordan Repo Builder Agent løste en spesifikk oppgave.

## Oppgave som ble gitt
> Lim inn oppgaven her før kjøring.

## Hva du skal gjøre

Evaluer agentens output basert på følgende kriterier:

### Relevans
- Forsto agenten oppgaven?
- Løste den riktig område (`agents/`, `scripts/`, `.github/...`)?

### Struktur
- Fulgte agenten riktig GPT-pakke-struktur?
- Var mappene og filene korrekt plassert?

### Kvalitet
- Var filene korrekt formatert (Markdown/JSON/TS)?
- Fulgt NGAS-regler: filnavn, metadata, numerikk, limits?
- Ingen sikkerhetsbrudd?

### Svarstruktur
- Inneholdt svaret:
  - Tilnærming
  - Struktur
  - Konkrete filer
  - Neste steg

### Robusthet
- Var svaret brukbart uten ekstra opprydding?

## Output Format

Rapporter slik:

Relevans: X/5
Struktur: X/5
Kvalitet: X/5
Svarstruktur: X/5
Robusthet: X/5
Total: snitt

Kommentarer:

Det viktigste som fungerte

Det viktigste som må forbedres
