# App Mobile - Sabor & Cia

Aplicativo mobile do projeto Lanchonete Sabor & Cia, criado com Expo e React Native.

## Objetivo

O app mobile foi criado para representar a versao para celular da lanchonete, permitindo evoluir futuramente para listagem de produtos, carrinho, login e envio de pedidos.

## Tecnologias

- Expo
- React Native
- Expo Router
- TypeScript
- JavaScript

## Funcionalidades atuais

- Estrutura inicial com Expo Router
- Navegacao por abas
- Tela inicial com cardapio visual
- Produtos com imagens, categorias, descricao, preco e botao de adicionar
- Tela de produto com imagem, descricao, preco e botao de adicionar ao carrinho
- Tela de pedido com selecao de pagamento por Pix, cartao ou dinheiro
- Estrutura separada para telas, navegacao, servicos e contexto de carrinho

## Estrutura principal

```text
app-mobile/
├── app/                  # Rotas principais do Expo Router
│   ├── (tabs)/           # Telas exibidas em abas
│   └── _layout.tsx       # Layout principal
├── assets/               # Imagens e icones do app
│   └── products/         # Imagens dos produtos do cardapio
├── components/           # Componentes reutilizaveis
├── constants/            # Tema e constantes visuais
├── hooks/                # Hooks auxiliares
├── src/
│   ├── context/          # Contexto do carrinho
│   ├── screens/          # Telas criadas para o app
│   └── services/         # Configuracao de API
├── app.json              # Configuracao do Expo
└── package.json          # Dependencias e scripts
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

Ou:

```powershell
npx expo start
```

Depois escolha uma das opcoes:

- Pressione `a` para abrir no emulador Android.
- Use o aplicativo Expo Go no celular e leia o QR Code.
- Rode `npm run web` para abrir a versao web do app.

## Scripts disponiveis

| Comando | Descricao |
| --- | --- |
| `npm start` | Inicia o Expo |
| `npm run android` | Abre no Android |
| `npm run ios` | Abre no iOS |
| `npm run web` | Abre no navegador |
| `npm run lint` | Verifica o codigo |

## Observacoes

- A configuracao de API esta em `src/services/api.js`.
- A URL atual da API e `http://192.168.15.8:5000`.
- Caso o backend rode em outra porta ou computador, essa URL precisa ser atualizada.
- O app mobile ja possui cardapio com imagens e resumo de pedido.
- As formas de pagamento aparecem na interface, mas ainda nao processam pagamento real.
- A tela `app/(tabs)/produto.tsx` existe, mas nao aparece no menu de abas principal.
- As telas antigas em `Screens/` estao vazias e podem ser removidas ou substituidas depois.

## Proximos passos

- Conectar a lista de produtos com o backend.
- Exibir a tela de produto na navegacao principal.
- Fazer o botao "Adicionar ao Carrinho" atualizar o contexto do carrinho.
- Criar fluxo de login/cadastro.
- Enviar pedidos para o backend.
- Enviar a forma de pagamento escolhida junto com o pedido.
