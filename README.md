# VANTZ Tech Wiki

Enciclopédia gratuita para suporte N1/N2, manutenção de computadores e TI. O site publicado é HTML, CSS e JavaScript estático: não precisa de Node.js nem de compilação no GitHub.

**Endereço de publicação:** <https://goliveiraxx.github.io/vantz-wiki/>

## Publicar no GitHub Pages

1. Envie esta pasta para o repositório (não envie `node_modules/` nem `dist/`).
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Em **Branch**, selecione a branch principal e a pasta **/ (root)**. Salve.
5. Abra o endereço do Pages e confira a página inicial e um link direto, por exemplo `/#/sintoma/corte-papel`.

Os arquivos que o navegador usa são `index.html`, `favicon.png`, `assets/` e `.nojekyll`. As rotas usam `#` no endereço e os caminhos dos arquivos são relativos, então o site funciona na raiz ou em uma subpasta como `/vantz-wiki/`.

O site funciona sem banco de dados ou API.

## Catálogo e dados locais

- `src/tools.ts`, `src/phase2-tools.ts` e `src/wiki-data.ts` mantêm as fichas e referências cruzadas entre categorias.
- `src/devices.ts` mantém modelos de impressoras, interfaces documentadas, portais e pacotes de drivers.
- `src/sources.ts` mantém as referências oficiais encontradas na revisão editorial.
- `src/guides.ts`, `src/catalog.ts` e `src/commands.ts` contêm roteiros, checklists, tutoriais e comandos.
- As observações e os estados de checklist, bem como a seleção do Kit do Técnico, ficam no armazenamento local da origem no navegador. Limpar os dados do site apaga essas informações.
- As páginas de checklist e do kit usam **Imprimir / Salvar PDF** para abrir o diálogo de impressão do navegador. O kit também gera um TXT local com a lista e as referências.
- A arquitetura já distingue referências oficiais, documentação e o tipo reservado para um instalador redistribuível. Antes de cadastrar um binário futuramente, confirme autorização, versão, licença e origem. A Fase 2 usa referências externas.

Consulte `RELATORIO-FASE-2.md` para o escopo e testes e `PENDENCIAS-DE-VERIFICACAO.md` para lacunas editoriais.

## Repetir a auditoria de interface

Com as dependências instaladas, gere o build e execute a suíte Playwright:

```sh
npx playwright install chromium
npm run build
npm test
```

A suíte testa o build estático nas larguras desktop e mobile. Para usar Chromium ou Chrome já instalado, defina `VANTZ_CHROMIUM_PATH` com o caminho do executável. Para usar um servidor de teste já aberto, defina `VANTZ_TEST_BASE_URL` com a origem do preview. O relatório JSON fica em `test-results/audit.json` e os PDFs de teste em `test-results/`.

Consulte `AUDITORIA-FINAL-VANTZ-TECH-WIKI.md` e `RESULTADO-DOWNLOADS.csv` para os resultados da revisão. Os instaladores usados durante os testes de download não são distribuídos com o projeto.
