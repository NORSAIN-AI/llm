# Instructions Library

Delt bibliotek for korte, gjenbrukbare instruksjonsblokker (systemtekst) brukt av flere GPT-pakker. Dette er ikke domain-knowledge eller template-spesifikt innhold.

Rolle i templatesystemet:
- `_library/instructions` fungerer som single-source-of-truth for felles instrukser.
- Per-template instrukser lever i `gpt-packages/templates/<template>/instructions`.

Hva som finnes her:
- Modulære instruction-snippets for gjenbruk i NGAS 01–09-filer.
