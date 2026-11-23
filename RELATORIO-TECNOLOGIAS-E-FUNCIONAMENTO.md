# VANTZ TECH WIKI

## Relatório de tecnologias e funcionamento

**Projeto:** VANTZ TECH WIKI  
**Versão analisada:** 2.0  
**Data:** 20 de novembro de 2026

## 1. O que é a VANTZ TECH WIKI

A VANTZ TECH WIKI é uma enciclopédia técnica gratuita voltada a pessoas que estudam, trabalham ou têm interesse em tecnologia e manutenção de computadores. O site reúne ferramentas, comandos, drivers, informações de impressoras, guias de diagnóstico, checklists e tutoriais em uma interface inspirada no estilo clássico da Wikipédia.

O objetivo é centralizar informações técnicas confiáveis e facilitar tarefas como identificar programas úteis, localizar fontes oficiais de drivers, consultar comandos do Windows e seguir etapas de diagnóstico de problemas.

## 2. Linguagens utilizadas

| Linguagem | Onde é usada | Função no projeto |
| --- | --- | --- |
| **HTML** | Estrutura exibida no navegador | Organiza o conteúdo da página, como títulos, menus, textos, botões, tabelas e links. No React, grande parte do HTML é escrita no formato JSX. |
| **CSS** | Arquivo de estilos | Define cores, fontes, espaçamentos, responsividade, aparência clássica da wiki e a versão para impressão. |
| **JavaScript** | Funcionamento interativo | Permite pesquisar, filtrar listas, copiar comandos, salvar seleções e responder às ações do usuário. |
| **TypeScript** | Código principal do sistema | É uma extensão do JavaScript que adiciona tipos. Ajuda a evitar erros ao organizar ferramentas, comandos, dispositivos e telas. |
| **JSX/TSX** | Componentes visuais do React | Une a marcação visual semelhante ao HTML com a lógica TypeScript dentro dos componentes da interface. |

## 3. Tecnologias e bibliotecas usadas

| Tecnologia | Para que serve | Como funciona na VANTZ TECH WIKI |
| --- | --- | --- |
| **React 19** | Construção da interface | Divide o site em componentes reutilizáveis, como cabeçalho, menu, páginas de ferramentas, cards, filtros e tabelas. Quando o usuário interage com uma tela, o React atualiza somente o necessário. |
| **React DOM** | Exibição do React no navegador | Faz a ligação entre os componentes React e a página web que o usuário visualiza. |
| **React Router 7** | Navegação entre páginas | Cria as rotas internas, por exemplo páginas de ferramentas, comandos, impressoras, sintomas e checklists. A navegação ocorre sem recarregar o site inteiro. |
| **HashRouter** | Navegação em hospedagem estática | Usa o trecho após `#` no endereço, como `#/ferramentas`, para que o site funcione em serviços estáticos, incluindo Vercel, sem exigir um servidor configurado para redirecionar rotas. |
| **Vite 7** | Desenvolvimento e geração do site | Fornece um servidor local rápido durante o desenvolvimento e transforma o código em arquivos otimizados para publicação na pasta `dist`. |
| **TypeScript 5.8** | Verificação do código | Confere os tipos antes da publicação, ajudando a detectar campos ausentes ou dados inválidos no catálogo técnico. |
| **localStorage** | Armazenamento local do navegador | Guarda no próprio navegador o progresso dos checklists e a seleção do Kit do Técnico. Não envia essas informações para um servidor. |
| **Clipboard API** | Cópia de comandos | Permite que o botão de copiar coloque um comando técnico na área de transferência do usuário. |
| **Blob e URL do navegador** | Exportação de texto | Gera arquivos TXT para baixar a lista montada no Kit do Técnico, diretamente no navegador. |
| **API de impressão do navegador** | Geração de documento físico ou PDF | Abre a janela de impressão para imprimir páginas, checklists ou salvar como PDF usando a impressora virtual do sistema. |
| **Playwright** | Testes automatizados | Simula o uso do site em computador e celular para verificar rotas, busca, filtros, cópia de comandos, checklists, Kit do Técnico e impressão. |
| **npm** | Gerenciamento de pacotes | Instala e controla as dependências do projeto, como React, Vite e Playwright. |

## 4. Como a arquitetura funciona

```text
Usuário no navegador
        |
        v
React + React Router
        |
        +--> Componentes da interface
        |     (menu, busca, cards, tabelas, páginas e filtros)
        |
        +--> Catálogos em arquivos TypeScript
        |     (ferramentas, comandos, impressoras, guias e fontes)
        |
        +--> Recursos do navegador
              (localStorage, copiar, exportar TXT e imprimir/PDF)
        |
        v
Vite gera a pasta dist
        |
        v
Hospedagem estática, como Vercel
```

O projeto é um **front-end estático**. Isso significa que, depois de publicado, o navegador baixa os arquivos do site e executa a maior parte das funcionalidades localmente. Não há banco de dados, login, sistema de pagamento ou servidor próprio processando dados dos usuários.

## 5. Organização do conteúdo técnico

Os dados do site são mantidos em arquivos TypeScript. Essa escolha facilita a atualização do catálogo e reduz duplicação de informações.

| Área de conteúdo | O que contém |
| --- | --- |
| Ferramentas | 109 programas técnicos organizados em 9 categorias. |
| Impressoras | 27 registros com dados técnicos e referências de suporte. |
| Comandos | 39 comandos úteis para tarefas de diagnóstico e manutenção. |
| Diagnóstico | 21 scripts ou fluxos de diagnóstico e 8 checklists. |
| Drivers | Central com fabricantes e pacotes de referência oficiais. |
| Fontes | Links para páginas oficiais de download, suporte ou documentação. |

O site não hospeda ou redistribui instaladores de terceiros. Ele direciona o visitante para fontes oficiais ou documentação indicada no catálogo.

## 6. Funcionalidades e como usar

| Funcionalidade | Como o usuário usa | O que acontece internamente |
| --- | --- | --- |
| **Busca global** | Digita uma palavra no campo de pesquisa. | O React compara o termo com títulos, descrições, categorias e palavras-chave dos catálogos e exibe resultados relacionados. |
| **Catálogo de ferramentas** | Escolhe uma categoria ou abre uma ferramenta. | A página lê os dados do catálogo e mostra descrição, utilidade, sistema operacional, licença e link de referência. |
| **Biblioteca de comandos** | Filtra por categoria e usa o botão copiar. | O comando é mostrado com explicação e o texto é enviado para a área de transferência do navegador. |
| **Central de drivers** | Seleciona fabricante e tipo de equipamento. | O filtro reduz a lista para o fabricante ou pacote desejado e apresenta a página de suporte correspondente. |
| **Impressoras** | Pesquisa marca ou modelo. | A lista é filtrada pelos dados cadastrados, com informações do equipamento e orientação sobre drivers. |
| **Guias por sintoma** | Abre um problema, como lentidão ou falha de rede. | A página organiza possíveis causas, verificações e passos recomendados para diagnóstico. |
| **Checklists** | Marca os itens concluídos em uma rotina. | Cada marcação é salva no `localStorage`, portanto permanece ao atualizar ou reabrir o navegador no mesmo dispositivo. |
| **Kit do Técnico** | Seleciona ferramentas importantes para uma atividade. | A seleção fica salva localmente e pode ser exportada em TXT ou impressa em PDF. |
| **Impressão/PDF** | Usa o botão de imprimir. | O navegador abre a tela de impressão e o usuário pode escolher uma impressora ou a opção “Salvar como PDF”. |

## 7. Exemplo prático de uso

Uma pessoa precisa resolver um computador lento:

1. Acessa a área de **Diagnóstico por Sintoma** e procura por “lentidão”.
2. Lê as verificações sugeridas, como espaço em disco, programas na inicialização e memória RAM.
3. Consulta a **Biblioteca de Comandos** para copiar comandos de verificação, quando necessário.
4. Adiciona ferramentas úteis ao **Kit do Técnico**.
5. Marca as etapas concluídas no checklist.
6. Ao terminar, pode imprimir ou salvar a lista em PDF para registrar o atendimento.

## 8. Segurança e limites do sistema

- Os comandos são apenas exibidos e copiados. O site não executa comandos no computador do usuário.
- Links externos devem ser conferidos antes do download, pois disponibilidade, versão e compatibilidade podem mudar.
- A compatibilidade de drivers depende do modelo exato do equipamento e da versão do sistema operacional.
- O progresso de checklists e o Kit do Técnico são salvos apenas no navegador local. Se os dados do navegador forem apagados, essas informações podem ser perdidas.
- Como não existe conta de usuário nem banco de dados, o site não coleta cadastro ou armazena o histórico de uso em servidor próprio.

## 9. Como executar e publicar o projeto

Na pasta do projeto, os comandos principais são:

```bash
npm install
npm run dev
```

O primeiro instala as dependências. O segundo inicia o ambiente local de desenvolvimento e mostra um endereço para abrir no navegador.

Para gerar a versão de produção:

```bash
npm run build
```

Esse comando verifica o TypeScript e gera a pasta `dist`, que contém os arquivos prontos para hospedar.

Para executar os testes automatizados:

```bash
npm test
```

Na Vercel, a configuração é simples: selecionar o framework **Vite**, usar `npm run build` como comando de build e `dist` como diretório de saída. Não há variáveis de ambiente obrigatórias.

## 10. Qualidade e validação da versão auditada

A versão atual passou por uma auditoria técnica de conteúdo e funcionamento. Foram validados, entre outros pontos:

- 227 rotas internas e 190 destinos de links internos;
- busca global, filtros, cópia dos 39 comandos e páginas responsivas;
- 8 checklists com persistência local e opção de reiniciar o checklist ativo;
- exportação e impressão do Kit do Técnico;
- funcionamento em visualização de computador e celular;
- 16 testes automatizados com Playwright;
- geração de build sem erros de TypeScript.

## 11. Conclusão

A VANTZ TECH WIKI foi desenvolvida como uma plataforma web estática, rápida e fácil de publicar. React e TypeScript organizam a interface e os dados, o Vite prepara os arquivos para produção, React Router controla a navegação e o navegador fornece recursos como armazenamento local, cópia, exportação e impressão.

O resultado é uma enciclopédia técnica que pode servir tanto para consulta de estudantes quanto para apoio ao trabalho de técnicos de informática, sem exigir cadastro ou instalação para ser utilizada.
