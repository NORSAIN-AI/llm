# Actions Library

Dette er et delt bibliotek med gjenbrukbare Actions (OpenAPI/tool-definisjoner) for GPT-pakker. Innholdet er ment som en single-source-of-truth, ikke som template-spesifikt innhold.

Rolle i templatesystemet:
- `_library/actions` tilbyr standard Actions som kan inkluderes av flere templates.
- Per-template overrides plasseres i `gpt-packages/templates/<template>/actions`.

Hva som finnes her:
- OpenAPI-stubber, schemaer og små action-definisjoner som kan gjenbrukes.
