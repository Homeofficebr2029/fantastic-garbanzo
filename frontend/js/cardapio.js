/* =========================
   LISTA PRODUTOS
========================= */

const listaProdutos =
document.getElementById(
    "lista-produtos"
);

/* =========================
   BUSCA PRODUTOS
========================= */

const campoBusca =
document.getElementById(
    "buscarProduto"
);

/* =========================
   CATEGORIAS
========================= */

const botoesCategoria =
document.querySelectorAll(
    ".categoria"
);

/* =========================
   ARRAY PRODUTOS
========================= */

let produtos = [

    {
        id:1,

        nome:"X-Burger",

        descricao:
        "Hambúrguer artesanal com cheddar e bacon.",

        preco:"29,90",

        categoria:"Hambúrguer",

        imagem:
        "../assets/xburguer.png"
    },

    {
        id:2,

        nome:"Batata Frita",

        descricao:
        "Porção de batata frita crocante.",

        preco:"39,90",

        categoria:"Combos",

        imagem:
        "../assets/batata.png"
    },

    {
        id:3,

        nome:"Cerveja 600ml",

        descricao:
        "Cerveja garrafa 600ml gelada.",

        preco:"27,90",

        categoria:"Hambúrguer",

        imagem:
        "../assets/xburguer.png"
    },

    {
        id:4,

        nome:"Refrigerante",

        descricao:
        "Lata 350ml gelada.",

        preco:"7,90",

        categoria:"Bebidas",

        imagem:
        "../assets/cerveja.png"
    }

];

/* =========================
   RENDERIZAR PRODUTOS
========================= */

function renderizarProdutos(
    lista
){

    listaProdutos.innerHTML = "";

    lista.forEach((produto)=>{

        listaProdutos.innerHTML += `

            <div class="card-produto">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <div class="info">

                    <h3>
                        ${produto.nome}
                    </h3>

                    <p>
                        ${produto.descricao}
                    </p>

                    <div class="preco">

                        R$ ${produto.preco}

                    </div>

                    <button
                        class="btn-comprar"
                        onclick="adicionarCarrinho(
                            '${produto.nome}',
                            '${produto.preco}'
                        )"
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

campoBusca.addEventListener(
    "input",
    ()=>{

        const valor =
        campoBusca.value.toLowerCase();

        const filtrados =
        produtos.filter((produto)=>{

            return produto.nome
            .toLowerCase()
            .includes(valor);

        });

        renderizarProdutos(
            filtrados
        );

    }
);

/* =========================
   FILTRO CATEGORIA
========================= */

botoesCategoria.forEach((botao)=>{

    botao.addEventListener(
        "click",
        ()=>{

            botoesCategoria.forEach(
                (item)=>{

                    item.classList.remove(
                        "active"
                    );

                }
            );

            botao.classList.add(
                "active"
            );

            const categoria =
            botao.innerText;

            if(categoria === "Todos"){

                renderizarProdutos(
                    produtos
                );

                return;

            }

            const filtrados =
            produtos.filter((produto)=>{

                return (
                    produto.categoria ===
                    categoria
                );

            });

            renderizarProdutos(
                filtrados
            );

        }
    );

});

/* =========================
   CARRINHO
========================= */

function adicionarCarrinho(
    nome,
    preco
){

    let carrinho =
    JSON.parse(
        localStorage.getItem(
            "carrinho"
        )
    ) || [];

    carrinho.push({

        nome,
        preco

    });

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarCarrinho();

    mostrarMensagem(
        "Produto adicionado 🛒"
    );

}

/* =========================
   ATUALIZAR CARRINHO
========================= */

function atualizarCarrinho(){

    const btnCarrinho =
    document.querySelector(
        ".btn-carrinho"
    );

    const carrinho =
    JSON.parse(
        localStorage.getItem(
            "carrinho"
        )
    ) || [];

    btnCarrinho.innerHTML =

    `🛒 Carrinho (${carrinho.length})`;

}

/* =========================
   TOAST
========================= */

function mostrarMensagem(
    texto
){

    const toast =
    document.createElement(
        "div"
    );

    toast.classList.add(
        "toast"
    );

    toast.innerHTML = texto;

    document.body.appendChild(
        toast
    );

    setTimeout(()=>{

        toast.classList.add(
            "show"
        );

    },100);

    setTimeout(()=>{

        toast.classList.remove(
            "show"
        );

        setTimeout(()=>{

            toast.remove();

        },300);

    },2500);

}

/* =========================
   SCROLL HEADER
========================= */

const header =
document.querySelector(
    "header"
);

window.addEventListener(
    "scroll",
    ()=>{

        if(window.scrollY > 50){

            header.style.background =
            "#0d0d0d";

        }else{

            header.style.background =
            "#111111";

        }

    }
);

/* =========================
   ANIMAÇÃO ENTRADA
========================= */

function animarCards(){

    const cards =
    document.querySelectorAll(
        ".card-produto"
    );

    const topoTela =
    window.innerHeight * 0.85;

    cards.forEach((card)=>{

        const posicao =
        card.getBoundingClientRect().top;

        if(posicao < topoTela){

            card.classList.add(
                "show"
            );

        }

    });

}

window.addEventListener(
    "scroll",
    animarCards
);

/* =========================
   CARREGAR PRODUTOS API
========================= */

async function carregarProdutosAPI(){

    try{

        const resposta =
        await fetch(
            "http://localhost:3000/api/produtos"
        );

        const dados =
        await resposta.json();

        console.log(dados);

    }catch(erro){

        console.log(
            "Erro API"
        );

    }

}

/* =========================
   INICIAR
========================= */

renderizarProdutos(
    produtos
);

atualizarCarrinho();

animarCards();

carregarProdutosAPI();

/* =========================
   CONSOLE
========================= */

console.log(
    "Cardápio carregado 🚀"