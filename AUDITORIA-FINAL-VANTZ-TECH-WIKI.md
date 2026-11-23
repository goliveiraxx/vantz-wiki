# Auditoria final — VANTZ Tech Wiki

A auditoria cobre a Fase 2, com testes locais em Chromium a 1280 × 900 e 320 × 760. A cópia de segurança foi criada antes das correções. Os arquivos executáveis testados ficaram em uma pasta isolada durante a auditoria e não fazem parte do projeto distribuído.

## Resultados

| Medida | Resultado |
| --- | ---: |
| Rotas válidas verificadas nos dois tamanhos | 227 |
| Destinos internos distintos encontrados na varredura | 190 |
| Fichas de ferramentas revisadas | 109 |
| Fichas de impressoras revisadas | 27 |
| Registros de pacotes e portais de drivers analisados | 7 pacotes + 15 portais |
| Comandos testados na interface | 39 |
| Roteiros revisados | 21 |
| Checklists testados | 8 |
| URLs externas distintas consultadas no inventário do CSV | 147 |
| URLs distintas para páginas de download, releases e pacotes | 107 |
| Downloads concluídos e arquivos com estrutura validada | 40 concluídos, 40 válidos |
| Downloads concluídos de pacotes de driver | 2 |
| Registros de download validados até a página oficial | 70 registros (63 URLs distintas) |
| Registros de download com URL cujo destino e arquivo ficaram sem confirmação | 4 |
| Registros sem URL oficial cadastrada | 16 |
| Registros com falha confirmada no estado final | 0 |
| Comparações bem-sucedidas com SHA-256 publicado | 17 |
| Assinaturas Authenticode verificadas | 9 válidas em 11 executáveis consultados |

O CSV tem 172 registros, incluindo fichas sem URL, manuais e portais. A mesma URL pode aparecer em mais de um modelo. Os totais de página e arquivo usam os critérios acima. Não houve execução de instaladores ou de comandos de reparo.

## Correções e retestes

| Problema | Causa e correção | Reteste |
| --- | --- | --- |
| Código de erro ausente na busca de sintomas | O índice local ignorava os termos da busca global. As duas buscas usam agora os mesmos termos técnicos. | 0x0000007B encontra o roteiro de inicialização. |
| Impressora sem pacote exibia mensagem genérica | A ficha e o kit usavam o aviso de programas. A mensagem passou a informar “Driver não verificado” quando falta pacote confirmado, inclusive quando há apenas um portal genérico. | Ficha Tomate MDK-006 e comportamento do catálogo. |
| Dados locais malformados podiam travar páginas | Dados do navegador eram usados sem validar o formato. O carregamento agora saneia o progresso e as seleções. | JSON com tipos inválidos em checklist e kit. |
| Checklist sem reinicialização isolada | O progresso só podia ser zerado por alterações manuais. O botão de reiniciar afeta apenas o checklist aberto. | Oito checklists preenchidos, recarregados e reiniciados individualmente. |
| Erro HTTP 404 no console | O navegador solicitava o ícone ausente. O favicon passou a ser servido com a identidade existente. | Varredura de todas as rotas sem erros de console. |
| Ficha de SQLiteStudio desatualizada | A página antiga redirecionava para Letos. A ficha registra a mudança de nome e aponta para os lançamentos oficiais. | Página oficial e ZIP Windows x64 verificados. |
| Referências de DDU e iPerf3 imprecisas | O DDU apontava para a página geral, e a documentação de iPerf3 era rotulada como download. As duas referências agora apontam para as páginas específicas com o rótulo adequado. | Destino, produto e classificação conferidos. |
| Compatibilidade e cuidados incompletos | A ficha de PnPUtil registra o requisito de versão para enumerar dispositivos. O roteiro de RAM orienta isolar a alimentação e a bateria conforme o manual. A instalação de Windows pede confirmação de que o backup pode ser restaurado. | Conteúdo inspecionado, fichas e roteiros carregados sem erros. |

## Resultado dos testes automatizados

- todas as rotas e links internos, console e largura — desktop e mobile aprovados.
- pesquisa global, links antigos e filtros combinados — desktop e mobile aprovados.
- busca de erro no diagnóstico por sintomas — desktop e mobile aprovados.
- todos os registros de drivers e filtros nas duas centrais — desktop e mobile aprovados.
- 39 comandos, filtros e cópia para a área de transferência — desktop e mobile aprovados.
- oito checklists, etapas, isolamento, reinicialização e PDF — desktop e mobile aprovados.
- estado local malformado recupera sem tela em branco — desktop e mobile aprovados.
- kit filtra, salva, remove, limpa, baixa TXT e gera PDF — desktop e mobile aprovados.

A suíte passou nos 16 testes. O teste de impressão conferiu a chamada do botão e gerou 18 PDFs pelo Chromium, um por checklist e kit em cada perfil. O diálogo nativo de impressão e impressoras físicas ficaram fora do teste. TypeScript e build de produção aprovados. O projeto não tem ESLint configurado.

## Como foram avaliadas as fontes

- A auditoria inspecionou destino, título, tipo de conteúdo e redirecionamentos. O HTTP 200 sozinho não foi usado para aprovar um binário.
- ZIPs foram descomprimidos para checagem de CRC e tamanho. Executáveis foram avaliados pelo cabeçalho PE e pelos limites das seções. SHA-256 foi calculado para cada arquivo concluído e comparado ao digest publicado quando disponível. Authenticode foi consultado para executáveis soltos. Isso mede integridade e procedência observáveis, sem executar o arquivo.
- A leitura por ficha comparou os campos cadastrados com a página disponível. Encontrou menções a sistemas cadastrados em 85 fichas e ao tipo de licença em 17. Menções não bastam para confirmar toda versão, edição, arquitetura ou condição de uso. O CSV registra a evidência e as lacunas por ficha.
- A sintaxe, exemplos, privilégios e riscos dos 39 comandos foram revisados. 31 itens têm referência direta acessível da Microsoft. Os atalhos ou referências indiretas que pedem confirmação em Windows estão listados abaixo.

## Pendências

- HWiNFO (403)
- Kingston SSD Manager (403)
- Fing (403)
- AnyDesk (403)
- Bematech MP-2500 TH — especificação ou manual (403)
- Conversores FTDI compatíveis com VCP (403)
- HP (200)
- Positivo (403)
- FTDI (403)
- Ferramentas sem fonte cadastrada para teste: FurMark, TestMem5, Diagnóstico de Memória do Windows.
- Comandos com referência indireta, indisponível ou sem artigo direto confirmado: devmgmt.msc, diskmgmt.msc, services.msc, eventvwr.msc, ncpa.cpl, control printers, mdsched.exe, resmon. A execução do comando ou a presença de módulos no Windows precisa de validação no sistema alvo.
- As 27 fichas de impressoras foram revisadas quanto a fabricante, modelo, interfaces registradas, instruções e limites. Instalação, compatibilidade exata, revisão física e teste de impressão dependem do equipamento. Portais de fabricante são referências de suporte e não certificam um pacote para todo modelo.
- Páginas com seleção manual de versão, produto, região, CAPTCHA ou autenticação ficaram no estágio descrito no CSV. Downloads acima do limite operacional aplicado ou sem binário direto identificado também estão marcados no CSV.
- Em arquivos com CRC ou estrutura válida mas sem hash publicado ou assinatura válida, a integridade estrutural foi registrada e o status ficou pendente. Nenhum resultado garante funcionamento de instalação em todas as versões do Windows.

## Referências técnicas

- Mudança de nome do SQLiteStudio: [site do Letos](https://letos.org/) e [lançamentos do projeto](https://github.com/pawelsalawa/letos/releases).
- Referências de utilitários: [Wagnardsoft DDU](https://www.wagnardsoft.com/content/Download-Display-Driver-Uninstaller-DDU-18080) e [ESnet iPerf3](https://software.es.net/iperf/obtaining.html).
- [msinfo32 | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/msinfo32).
- [Manage Certificate Stores in Windows Server | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/identity/ad-cs/inspect-certificates-manage-certificate-stores).
- [sfc | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sfc).
- [Repair a Windows Image | Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/repair-a-windows-image).
- [ipconfig | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig).
- [ping | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ping).
- [tracert | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert).
- [chkdsk | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk).
- [systeminfo | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/systeminfo).
- [Get-ComputerInfo (Microsoft.PowerShell.Management) - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-computerinfo).
- [Get-NetIPConfiguration (NetTCPIP) | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/nettcpip/get-netipconfiguration).
- [Test-NetConnection (NetTCPIP) | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/nettcpip/test-netconnection).
- [netsh wlan | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netsh-wlan).
- [nslookup | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup).
- [Resolve-DnsName (DnsClient) | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/dnsclient/resolve-dnsname).
- [Get-Disk (Storage) | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/storage/get-disk).
- [Get-Volume (Storage) | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/storage/get-volume).
- [certutil | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/certutil).
- [Get-Printer (PrintManagement) | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/printmanagement/get-printer).
- [Get-PrintJob (PrintManagement) | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/printmanagement/get-printjob).
- [Get-Service (Microsoft.PowerShell.Management) - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-service).
- [BCDEdit /enum - Windows drivers | Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/drivers/devtest/bcdedit--enum).
- [How to perform a clean boot in Windows | Microsoft Support](https://support.microsoft.com/en-us/topic/how-to-perform-a-clean-boot-in-windows-da2f9573-6eec-00ad-2f8a-a97a1807f3dd).
- [PnPUtil Command Syntax - Windows drivers | Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/drivers/devtest/pnputil-command-syntax).
- [Powercfg command-line options | Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options).

Os resultados por registro estão em RESULTADO-DOWNLOADS.csv. Para repetir os testes, consulte o README.
