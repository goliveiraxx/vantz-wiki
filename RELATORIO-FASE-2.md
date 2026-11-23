# Relatório da Fase 2 — VANTZ Tech Wiki

## O que foi implementado

| Área | Entrega |
| --- | --- |
| Catálogo | 109 fichas em 9 categorias. São 84 novas fichas com indicação de uso, limitações e referências. Ferramentas em mais de uma categoria apontam para a mesma ficha. |
| Central de Drivers | 15 referências por fabricante e 7 registros de pacotes. Filtros por fabricante, tipo, sistema, arquitetura e modelo, além do tutorial de VEN/DEV e VID/PID. |
| Central de Impressoras | 27 fichas, com 18 registros novos. Filtros por fabricante, modelo, tipo e interface documentada. As fichas incluem instalação, mídia, teste e diagnóstico. |
| Diagnóstico por Sintomas | 21 roteiros, incluindo os 20 solicitados e o de falha no corte de papel. Cada um reúne causas possíveis, sequência de testes, interpretação, ferramentas, risco e condição de parada. |
| Checklists | 8 checklists com três estados por etapa, observações locais e página de impressão. |
| Kit do Técnico | Seleção de categorias e itens, referências oficiais, TXT, impressão e limpeza da seleção. |
| Biblioteca de Comandos | 39 comandos, 24 novos, com sintaxe, exemplo, privilégios, risco e cópia. |
| Busca | Programas, drivers, impressoras, tutoriais, comandos, checklists, sintomas e códigos de erro, com filtros por tipo e categoria. |

As fichas e rotas da primeira versão continuam acessíveis. O layout usa tema claro, navegação lateral, links roxos e tabelas. Checklists, seleção do kit e busca funcionam no navegador. A impressão usa o diálogo do navegador para escolher a impressora ou Salvar como PDF.

## Verificações realizadas

- Compilação de produção com verificação de tipos TypeScript.
- Auditoria do catálogo com unicidade de identificadores, nomes e sintaxes, preservação dos registros anteriores e verificação das referências internas de dados.
- Busca por “HD lento”, “impressora não corta papel” e “0x0000007B”. Filtros por tipo e categoria, abertura de fichas e navegação cruzada.
- Filtros combinados para AMD B550 e TSC TE210. Abertura do tutorial de ID de Hardware e das seções USB, rede, serial, papel e diagnóstico de uma impressora.
- Pesquisa de roteiro por categoria e sintoma do Firebird. Filtro de PowerShell e DNS, com leitura de `Resolve-DnsName` na área de transferência.
- Mudança de estados do checklist, edição de observações e confirmação após recarregar.
- Seleção, restauração e limpeza do Kit do Técnico. Download do TXT e conferência do conteúdo com o nome e a URL de CrystalDiskInfo.
- Larguras de teste de 390 e 1280 px na página inicial, drivers, comandos e kit. As páginas verificadas não tiveram transbordamento horizontal.
- Disponibilidade dos controles de impressão e revisão das regras de impressão. A gravação de um PDF pelo diálogo do sistema ficou fora do teste.

As verificações de fontes e compatibilidade pendentes estão em `PENDENCIAS-DE-VERIFICACAO.md`. As instruções de execução e publicação estão no `README.md`.

