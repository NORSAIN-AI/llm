# Evals Library

Delt bibliotek med eval-/testkonfigurasjoner og scenario-malene som kan brukes på tvers av templates. Dette er felles infrastruktur, ikke template-spesifikt innhold.

Rolle i templatesystemet:
- `_library/evals` er single-source-of-truth for delte eval-scenarier.
- Template-spesifikke evals plasseres i `gpt-packages/templates/<template>/evals`.

Hva som finnes her:
- Scenarioer, input/expected-output-par og maskinvennlige eval-snippets.
