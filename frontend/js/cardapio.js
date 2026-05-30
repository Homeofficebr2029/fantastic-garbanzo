/* =========================
   ELEMENTOS DA PÁGINA
========================= */

const listaProdutos = document.getElementById("lista-produtos");
const campoBusca = document.getElementById("buscarProduto");
const botoesCategoria = document.querySelectorAll(".categoria");

/* =========================
   PRODUTOS DO CARDÁPIO
========================= */

const produtos = [
    {
        id: 1,
        nome: "X-Burger",
        descricao: "Hambúrguer artesanal com queijo, molho da casa e pão macio.",
        preco: "18,00",
        categoria: "Hambúrguer",
        imagem: "../assets/xburguer.png"
    },
    {
        id: 2,
        nome: "Batata Frita",
        descricao: "Porção de batata frita crocante, sequinha e servida quentinha.",
        preco: "12,00",
        categoria: "Combos",
        imagem: "../assets/batata.png"
    },
    {
        id: 3,
        nome: "Cerveja 600ml",
        descricao: "Cerveja garrafa 600ml bem gelada.",
        preco: "15,00",
        categoria: "Bebidas",
        imagem: "../assets/cerveja.png"
    }
];

/* =========================
   RENDERIZAR PRODUTOS
========================= */

function renderizarProdutos(lista) {
    listaProdutos.innerHTML = "";

    lista.forEach((produto) => {
        listaProdutos.innerHTML += `
            <div class="card-produto">
                <img src="${produto.imagem}" alt="${produto.nome}">

                <div class="info">
                    <h3>${produto.nome}</h3>

                    <p>${produto.descricao}</p>

                    <div class="preco">
                        R$ ${produto.preco}
                    </div>

                    <button
                        class="btn-comprar"
                        onclick="adicionarCarrinho('${produto.nome}', '${produto.preco}')"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        `;
    });
}

/* =========================
   BUSCA PRODUTOS
========================= */

campoBusca.addEventListener("input", () => {
    const valor = campoBusca.value.toLowerCase();

    const filtrados = produtos.filter((produto) => {
        return produto.nome.toLowerCase().includes(valor);
    });

    renderizarProdutos(filtrados);
});

/* =========================
   FILTRO POR CATEGORIA
========================= */

botoesCategoria.forEach((botao) => {
    botao.addEventListener("click", () => {
        botoesCategoria.forEach((item) => {
            item.classList.remove("active");
        });

        botao.classList.add("active");

        const categoria = botao.innerText;

        if (categoria === "Todos") {
            renderizarProdutos(produtos);
            return;
        }

        const filtrados = produtos.filter((produto) => {
            return produto.categoria === categoria;
        });

        renderizarProdutos(filtrados);
    });
});

/* =========================
   CARRINHO
========================= */

function adicionarCarrinho(nome, preco) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push({
        nome,
        preco,
        quantidade: 1
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert(`${nome} foi adicionado ao carrinho!`);
}

/* =========================
   INICIAR CARDÁPIO
========================= */

renderizarProdutos(produtos);
