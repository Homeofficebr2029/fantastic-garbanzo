# Lanchonete Sabor & Cia

Projeto final de faculdade desenvolvido para simular uma lanchonete com cardapio digital, montagem de pedido e estrutura inicial de backend.

## Objetivo

O sistema tem como objetivo apresentar uma interface web para clientes visualizarem produtos de uma lanchonete, adicionarem itens ao pedido e acompanharem o resumo com quantidades e valor total.

O projeto tambem possui uma estrutura de aplicativo mobile em Expo/React Native para representar a versao para celular da lanchonete.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- Node.js
- Express
- MongoDB/Mongoose
- Expo
- React Native

## Funcionalidades do frontend

- Tela inicial com identidade visual da lanchonete
- Cardapio com produtos organizados por categorias
- Campo de busca por produto
- Botao para adicionar produtos ao pedido
- Controle de quantidade no resumo do pedido
- Calculo automatico do total
- Selecao de forma de pagamento: Pix, cartao ou dinheiro
- Layout responsivo para computador e celular

## Funcionalidades do backend

- Servidor Node.js com Express
- Configuracao para receber JSON
- CORS habilitado
- Rota inicial de teste
- Rota de produtos em `/produtos`

## Funcionalidades do app mobile

- Estrutura inicial em Expo
- Navegacao com Expo Router
- Tela inicial com cardapio visual
- Produtos com imagens, categorias, descricao, preco e botao de adicionar
- Tela de pedido com itens, quantidades e valor total
- Selecao de forma de pagamento: Pix, cartao ou dinheiro
- Estrutura preparada para contexto de carrinho e conexao com API

## Estrutura principal

```text
sabor_e_cia/
├── frontend-web/
│   └── frontend/        # Aplicacao web em React + Vite
├── app-mobile/          # Aplicativo mobile em Expo + React Native
├── controllers/         # Controladores do backend
├── models/              # Modelos de dados
├── routes/              # Rotas da API
├── database/            # Configuracoes de banco de dados
├── server.js            # Servidor principal do backend
└── package.json         # Dependencias e scripts do backend
```

## Como rodar o frontend

Entre na pasta do frontend:

```powershell
cd D:\Projetos\lanchonete\sabor_e_cia\frontend-web\frontend
```

Instale as dependencias, se ainda nao estiverem instaladas:

```powershell
npm install
```

Inicie o servidor local:

```powershell
npm run dev
```

Depois acesse no navegador:

```text
http://127.0.0.1:5173
```

## Como rodar o backend

Entre na pasta principal do projeto:

```powershell
cd D:\Projetos\lanchonete\sabor_e_cia
```

Instale as dependencias:

```powershell
npm install
```

Inicie o backend:

```powershell
npm run dev
```

Ou:

```powershell
npm start
```

O backend abre em:

```text
http://localhost:3000
```

## Como rodar o app mobile

Entre na pasta do app:

```powershell
cd D:\Projetos\lanchonete\sabor_e_cia\app-mobile
```

Instale as dependencias:

```powershell
npm install
```

Inicie o Expo:

```powershell
npm start
```

Depois use uma das opcoes:

- Pressione `a` para abrir no emulador Android.
- Leia o QR Code com o aplicativo Expo Go no celular.
- Use `npm run web` para abrir no navegador.

## Rotas iniciais

| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/` | Testa se o servidor esta funcionando |
| GET | `/produtos` | Lista produtos |
| POST | `/produtos` | Cria um produto |

## Observacoes

- O frontend atual permite montar o pedido visualmente.
- O botao "Finalizar pedido" ainda nao envia o pedido para o backend.
- As formas de pagamento ja aparecem na interface, mas ainda nao processam pagamento real.
- O app mobile ainda esta em fase inicial e precisa ser conectado ao backend.
- Um proximo passo seria conectar o frontend com a API e salvar pedidos no banco de dados.

## Documentacao complementar

- Documentacao do app mobile: `app-mobile/README.md`
- Documentacao completa do projeto: `DOCUMENTACAO.md`

## Autora

Aline
