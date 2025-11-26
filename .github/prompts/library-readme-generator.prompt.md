---
agent: norsain-repo-builder-agent
---

# Task: Generate README.md files for `_library` folders in the template system

## 1. Goal

Opprett og/eller oppdater korte, strukturerte `README.md`-filer i de delte bibliotekmappene under:

- `gpt-packages/templates/_library/actions`
- `gpt-packages/templates/_library/evals`
- `gpt-packages/templates/_library/instructions`
- `gpt-packages/templates/_library/prompts`

Målet er å dokumentere rolle, formål og bruk av disse mappene slik at templatesystemet er:

- lettere å forstå for utviklere
- enklere å vedlikeholde
- i tråd med NGAS-/repo-struktur og NORSAIN-konvensjoner

Dette er en **struktur-/dokumentasjonsoppgave**, ikke innholdsbygging for GPT-instruksjoner eller domene-knowledge.

---

## 2. Repo- og kontekstinformasjon

- Repo: `norsain-gpt-platform`
- Templatesystem: `gpt-packages/templates/**`
- `_library/` fungerer som **felles bibliotek** for gjenbrukbare byggesteiner:
  - `actions/`  → delte Actions/tool-definisjoner
  - `evals/`    → delte eval-/testkonfigurasjoner
  - `instructions/` → delte instruksjonsblokker/systemtekst
  - `prompts/`  → delte prompt-snutter og komponenter

Struktur og beskrivelser skal støtte NGAS og eksisterende templates, ikke endre selve arkitekturen.

---

## 3. Scope (hva du KAN gjøre)

Du kan:

- lese mappestruktur og eksisterende filer under:

  - `gpt-packages/templates/_library/actions`
  - `gpt-packages/templates/_library/evals`
  - `gpt-packages/templates/_library/instructions`
  - `gpt-packages/templates/_library/prompts`

- opprette eller overskrive **kun**:

  - `gpt-packages/templates/_library/actions/README.md`
  - `gpt-packages/templates/_library/evals/README.md`
  - `gpt-packages/templates/_library/instructions/README.md`
  - `gpt-packages/templates/_library/prompts/README.md`

Dette er innenfor mandatet til Repo Builder Agent: struktur, skeleton-filer og dokumentasjon av templatesystemet.

---

## 4. Constraints (hva du IKKE skal gjøre)

Du skal **ikke**:

- endre, flytte eller slette andre filer
- endre struktur eller innhold i:
  - `gpt-packages/templates/custom_gpt/**`
  - `gpt-packages/<slug>/` eller `gpt-packages/.sandbox/**`
- røre andre mapper med samme navn utenfor `_library`, for eksempel:
  - `gpt-packages/templates/knowledge`
  - `gpt-packages/templates/*/knowledge`
  - `gpt-packages/templates/prompts`
  - `gpt-packages/templates/actions`
  - `gpt-packages/templates/instructions`
  - `gpt-packages/templates/evals`
- skrive eller endre innhold i NGAS-instruksjoner eller domene-knowledge
  (det håndteres av egne Instruction/Knowledge Builder-agenter)

Dersom en operasjon ville påvirke filer utenfor `_library`-paths over, skal du stoppe.

---

## 5. Krav til README-innhold

For hver av disse mappene:

- `gpt-packages/templates/_library/actions`
- `gpt-packages/templates/_library/evals`
- `gpt-packages/templates/_library/instructions`
- `gpt-packages/templates/_library/prompts`

skal `README.md` inneholde:

1. **Tittel (H1)**  
   `# <Folder Name> Library`  
   f.eks. `# Actions Library`, `# Prompts Library`.

2. **Kort formålsbeskrivelse (1–2 korte avsnitt)**  
   Forklar at dette er en **delt bibliotekmappe** (`_library`) med gjenbrukbare byggesteiner for GPT-pakker, ikke en template-spesifikk mappe.

3. **Rolle i templatesystemet**  
   Forklar at:
   - `_library/*` er **Single Source of Truth** for delte komponenter.
   - per-template overrides/tilpasninger lever under:
     - `gpt-packages/templates/<template>/actions`
     - `gpt-packages/templates/<template>/prompts`
     - osv.

4. **Mappe-spesifikk beskrivelse:**

   - `_library/actions`  
     - Inneholder delte Actions/tool-definisjoner som kan brukes av flere GPT-pakker.
   - `_library/evals`  
     - Inneholder delte eval-/testkonfigurasjoner for prompts/templates.
   - `_library/instructions`  
     - Inneholder delte instruksjonsblokker/systemtekst som kan gjenbrukes på tvers av GPT-pakker.
   - `_library/prompts`  
     - Inneholder delte prompt-snutter, komponenter og mønstre som kan inkluderes i templates.

5. **Formatstandarder**
   - README skal være kort (6–12 linjer).
   - Bruk overskrifter + punktlister.
   - Ingen trailing spaces, gyldig Markdown (markdownlint-vennlig).

---

## 6. Arbeidsflyt

1. Les mappestruktur under:
   - `gpt-packages/templates/_library/actions`
   - `gpt-packages/templates/_library/evals`
   - `gpt-packages/templates/_library/instructions`
   - `gpt-packages/templates/_library/prompts`

2. Utarbeid forslag til `README.md` for hver mappe, i tråd med kravene over.

3. Presenter alle fire utkast i svaret (som forhåndsvisning) **uten å skrive til disk**.

4. Etter eksplisitt bekreftelse fra brukeren, skriv filene til:

   - `gpt-packages/templates/_library/actions/README.md`
   - `gpt-packages/templates/_library/evals/README.md`
   - `gpt-packages/templates/_library/instructions/README.md`
   - `gpt-packages/templates/_library/prompts/README.md`

---

## 7. Suksesskriterier

Oppgaven er vellykket når:

- Det finnes fire nye/oppdaterte README.md-filer i:
  - `gpt-packages/templates/_library/actions/`
  - `gpt-packages/templates/_library/evals/`
  - `gpt-packages/templates/_library/instructions/`
  - `gpt-packages/templates/_library/prompts/`
- Ingen andre filer eller mapper er endret.
- Innholdet er:
  - kort, konsistent og lett å forstå
  - i tråd med repoets templatesystem og NGAS-filosofi
  - umiddelbart nyttig for utviklere som navigerer `_library/`.
