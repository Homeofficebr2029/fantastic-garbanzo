# Documentação da Recuperação do Frontend

Projeto: Lanchonete Sabor & Cia

Data: 29/05/2026

## Objetivo

Nesta etapa foram iniciados os ajustes do frontend, sem alterar o backend que já está funcionando.

Regra principal:

- não mexer no backend;
- não mexer no server.js;
- não mexer no banco SQLite;
- trabalhar somente em HTML, CSS, JavaScript e imagens do frontend.

## Caminho oficial

C:\Users\DevToolsUser\OneDrive\Projetos\app_lanchonete\lanchonete_sabor_e_cia

## Backend usado como base

API funcionando em:

http://localhost:3000
http://localhost:3000/produtos

Rotas do backend já funcionando:

GET    /produtos
POST   /produtos
PUT    /produtos/:id
DELETE /produtos/:id

## Servidor local do frontend

Para testar o frontend:

cd frontend
python -m http.server 5500

Home:

http://localhost:5500/pages/index.html

Cardápio:

http://localhost:5500/pages/cardapio.html

## Correção das imagens

Foi identificado que o frontend chamava imagens em caminhos que não existiam:

../public/images/burger1.jpg
../public/images/burger2.jpg
../public/images/burger3.jpg
../public/images/refrigerante.jpg

As imagens reais encontradas foram:

frontend/assets/xburguer.png
frontend/assets/batata.png
frontend/assets/refrigerante.png

Foram corrigidos caminhos em:

frontend/pages/cardapio.html
frontend/js/cardapio.js
frontend/pages/index.html

Os caminhos passaram a usar:

../assets/xburguer.png
../assets/batata.png
../assets/refrigerante.png

## Correção da Home

A página inicial verdadeira é:

frontend/pages/index.html

O CSS principal da Home é:

frontend/css/index.css

A Home passou a carregar o CSS com versão para evitar cache:

<link rel="stylesheet" href="../css/index.css?v=4">

Foi confirmado pelo servidor local que o CSS e as imagens carregaram com status 200.

## Teste visual

Foi usado um fundo vermelho apenas como teste para confirmar que o CSS estava sendo lido.

Depois o teste vermelho foi removido.

O fundo correto voltou a ser:

#0f0f0f

Esse tom é um cinza quase preto.

## Situação atual

Concluído até agora:

- CSS da Home voltou a carregar;
- caminhos das imagens foram corrigidos;
- cardápio passou a carregar imagens dos assets;
- Home foi parcialmente melhorada;
- servidor local do frontend funcionando na porta 5500.

## Problema pendente

A imagem de bebidas ainda não está boa:

frontend/assets/refrigerante.png

Ela aparece com fundo quadriculado/falso transparente.

Ainda falta:

- trocar ou redesenhar a imagem da Coca-Cola/Bebidas;
- melhorar o visual final da Home;
- revisar o CSS;
- conectar Home/Cardápio com a API real do backend;
- salvar no Git quando o visual estiver aprovado.

## Observação

Esta etapa ainda está em andamento.

Não fazer commit definitivo antes de revisar visualmente a Home e o Cardápio.
