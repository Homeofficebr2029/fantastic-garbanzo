# Documentacao do Projeto - Lanchonete Sabor & Cia

## 1. Apresentacao

O projeto Lanchonete Sabor & Cia foi desenvolvido como uma aplicacao para simular o atendimento digital de uma lanchonete. A proposta e permitir que o cliente visualize o cardapio, escolha produtos, acompanhe o resumo do pedido e veja o valor total antes de finalizar.

O sistema foi dividido em tres partes principais:

- Frontend web
- App mobile
- Backend/API

Essa separacao ajuda a organizar o projeto e permite que a mesma ideia seja usada tanto em navegador quanto em celular.

## 2. Objetivo do Sistema

O objetivo principal e criar uma experiencia simples e visual para pedidos de lanchonete, com foco em:

- apresentar os produtos de forma clara;
- organizar o cardapio por categorias;
- permitir busca por produtos;
- adicionar itens ao pedido;
- controlar quantidades;
- calcular o total automaticamente;
- escolher a forma de pagamento;
- preparar a estrutura para futura integracao com banco de dados.

## 3. Tecnologias Utilizadas

### Frontend web

- React
- Vite
- JavaScript
- CSS
- Lucide React para icones

### App mobile

- Expo
- React Native
- Expo Router
- TypeScript
- Context API para carrinho

### Backend

- Node.js
- Express
- CORS
- dotenv
- MongoDB/Mongoose

## 4. Estrutura do Projeto

```text
sabor_e_cia/
├── frontend-web/
│   └── frontend/              # Interface web em React + Vite
├── app-mobile/                # Aplicativo mobile em Expo + React Native
├── controllers/               # Controladores da API
├── models/                    # Modelos do banco de dados
├── routes/                    # Rotas da API
├── database/                  # Configuracoes do banco
├── server.js                  # Arquivo principal do backend
├── package.json               # Dependencias do backend
├── README.md                  # Documentacao resumida
└── DOCUMENTACAO.md            # Documentacao completa
```

## 5. Frontend Web

O frontend web esta localizado em:

```text
frontend-web/frontend
```

Ele representa a tela principal da lanchonete para uso em navegador.

### Funcionalidades

- Tela inicial com identidade visual da Sabor & Cia
- Logo da lanchonete
- Cardapio com produtos e imagens
- Categorias: Lanches, Combos, Porcoes e Bebidas
- Campo de busca
- Botao para adicionar produtos
- Resumo do pedido
- Controle de quantidade
- Botao para limpar pedido
- Selecao de forma de pagamento: Pix, cartao ou dinheiro
- Botao para finalizar pedido
- Layout responsivo

### Produtos cadastrados na interface

| Produto | Categoria | Preco |
| --- | --- | --- |
| X-Burger da Casa | Lanches | R$ 18,00 |
| X-Bacon Crocante | Lanches | R$ 24,00 |
| Batata Frita | Porcoes | R$ 12,00 |
| Combo Universitario | Combos | R$ 31,00 |
| Refrigerante Lata | Bebidas | R$ 7,00 |
| Suco Natural | Bebidas | R$ 10,00 |

### Como rodar o frontend web

```powershell
cd D:\Projetos\lanchonete\sabor_e_cia\frontend-web\frontend
npm install
npm run dev
```

Depois acessar:

```text
http://127.0.0.1:5173
```

## 6. App Mobile

O app mobile esta localizado em:

```text
app-mobile
```

Ele foi desenvolvido com Expo e React Native, seguindo a mesma proposta visual do frontend web.

### Funcionalidades

- Aba de cardapio
- Produtos com imagens
- Busca por produto
- Categorias de produtos
- Botao para adicionar ao pedido
- Aba de pedido
- Controle de quantidade
- Calculo do valor total
- Selecao de forma de pagamento: Pix, cartao ou dinheiro
- Botao para limpar o pedido
- Botao para finalizar o pedido

### Estrutura do app mobile

```text
app-mobile/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Tela de cardapio
│   │   ├── explore.tsx        # Tela de pedido
│   │   └── _layout.tsx        # Menu inferior
│   └── _layout.tsx            # Provider e layout principal
├── assets/
│   └── products/              # Imagens dos produtos
├── src/
│   └── context/
│       └── carrinhoContext.js # Controle do carrinho
└── package.json
```

### Como rodar o app mobile

```powershell
cd D:\Projetos\lanchonete\sabor_e_cia\app-mobile
npm install
npm start
```

Depois, no terminal do Expo:

- pressionar `a` para abrir no Android;
- usar Expo Go no celular para ler o QR Code;
- ou rodar `npm run web` para testar no navegador.

## 7. Backend/API

O backend fica na raiz do projeto.

Arquivo principal:

```text
server.js
```

### Funcionalidades atuais

- Inicializacao do servidor Express
- Leitura de variaveis de ambiente com dotenv
- Habilitacao de CORS
- Recebimento de JSON nas requisicoes
- Rota principal de teste
- Rota de produtos

### Rotas iniciais

| Metodo | Rota | Funcao |
| --- | --- | --- |
| GET | `/` | Verifica se o servidor esta funcionando |
| GET | `/produtos` | Lista produtos |
| POST | `/produtos` | Cria um produto |

### Como rodar o backend

```powershell
cd D:\Projetos\lanchonete\sabor_e_cia
npm install
npm run dev
```

Ou:

```powershell
npm start
```

Endereco:

```text
http://localhost:3000
```

## 8. Fluxo de Uso

1. O usuario acessa o cardapio.
2. O usuario busca ou filtra os produtos.
3. O usuario adiciona produtos ao pedido.
4. O sistema atualiza o resumo.
5. O usuario ajusta as quantidades.
6. O sistema calcula o total.
7. O usuario escolhe a forma de pagamento.
8. O usuario pode limpar ou finalizar o pedido.

## 9. Estado Atual do Projeto

O projeto ja possui:

- interface web visual e funcional;
- produtos com imagens;
- app mobile seguindo a mesma proposta do web;
- carrinho visual no web e no mobile;
- selecao visual de pagamento por Pix, cartao ou dinheiro;
- documentacao inicial;
- estrutura de backend preparada para produtos.

Ainda falta:

- conectar o frontend web ao backend;
- conectar o app mobile ao backend;
- salvar pedidos no banco de dados;
- implementar autenticacao/login;
- criar painel administrativo completo;
- processar pagamento real ou enviar a forma de pagamento para o backend.

## 10. Conclusao

O projeto Sabor & Cia demonstra a criacao de uma aplicacao full stack organizada em frontend web, app mobile e backend. A interface permite simular a experiencia de montar um pedido em uma lanchonete, enquanto a estrutura do backend prepara o sistema para evoluir com banco de dados, cadastro de produtos, pedidos e usuarios.

O sistema ainda pode ser expandido, mas ja apresenta uma base funcional, visualmente organizada e adequada para demonstracao academica.

## 11. Autora

Aline
