import {
  Clock,
  CreditCard,
  DollarSign,
  MapPin,
  Minus,
  Plus,
  QrCode,
  Search,
  ShoppingCart,
  Star,
  Trash2,
} from "lucide-react";
import { useMemo, useState } from "react";
import "./styles/style.css";
import logo from "./assets/logo/logo.png";
import xBurgerImage from "./assets/cardapio/comidas/x-burguer/free-photo-of-delicioso-cheeseburger-gourmet-no-prato.jpeg";
import xBaconImage from "./assets/cardapio/comidas/smash burguer/photo-1571091718767-18b5b1457add.avif";
import batataImage from "./assets/cardapio/comidas/batata-frita/photo-1573080496219-bb080dd4f877.avif";
import comboImage from "./assets/cardapio/combos/photo-1550547660-d9450f859349.avif";
import refrigeranteImage from "./assets/cardapio/bebidas/refrigerante.svg";
import sucoImage from "./assets/cardapio/bebidas/suco-natural.svg";

const menuItems = [
  {
    id: 1,
    name: "X-Burger da Casa",
    category: "Lanches",
    description: "Hambúrguer artesanal, queijo, alface, tomate e molho especial.",
    price: 18,
    tag: "Mais pedido",
    rating: "4.9",
    image: xBurgerImage,
  },
  {
    id: 2,
    name: "X-Bacon Crocante",
    category: "Lanches",
    description: "Carne suculenta, bacon, cheddar, cebola caramelizada e maionese verde.",
    price: 24,
    tag: "Especial",
    rating: "4.8",
    image: xBaconImage,
  },
  {
    id: 3,
    name: "Batata Frita",
    category: "Porções",
    description: "Batata sequinha com sal da casa. Ideal para dividir.",
    price: 12,
    tag: "Crocante",
    rating: "4.7",
    image: batataImage,
  },
  {
    id: 4,
    name: "Combo Universitário",
    category: "Combos",
    description: "X-Burger, batata pequena e refrigerante lata.",
    price: 31,
    tag: "Econômico",
    rating: "4.9",
    image: comboImage,
  },
  {
    id: 5,
    name: "Refrigerante Lata",
    category: "Bebidas",
    description: "Lata gelada 350 ml. Escolha o sabor no atendimento.",
    price: 7,
    tag: "Gelado",
    rating: "4.6",
    image: refrigeranteImage,
  },
  {
    id: 6,
    name: "Suco Natural",
    category: "Bebidas",
    description: "Feito na hora com fruta fresca. Laranja, limão ou maracujá.",
    price: 10,
    tag: "Natural",
    rating: "4.8",
    image: sucoImage,
  },
];

const categories = ["Todos", "Lanches", "Combos", "Porções", "Bebidas"];

const paymentMethods = [
  {
    id: "pix",
    label: "Pix",
    description: "Pagamento instantâneo",
    icon: QrCode,
  },
  {
    id: "cartao",
    label: "Cartão",
    description: "Crédito ou débito",
    icon: CreditCard,
  },
  {
    id: "dinheiro",
    label: "Dinheiro",
    description: "Pagar na retirada",
    icon: DollarSign,
  },
];

const formatPrice = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("pix");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "Todos" || item.category === selectedCategory;
      const normalizedSearch = search.trim().toLowerCase();
      const matchesSearch =
        normalizedSearch.length === 0 ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([id, quantity]) => {
        const item = menuItems.find((menuItem) => menuItem.id === Number(id));
        return item ? { ...item, quantity } : null;
      })
      .filter(Boolean);
  }, [cart]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id, amount) => {
    setCart((currentCart) => {
      const nextQuantity = (currentCart[id] || 0) + amount;
      const nextCart = { ...currentCart };

      if (nextQuantity <= 0) {
        delete nextCart[id];
      } else {
        nextCart[id] = nextQuantity;
      }

      return nextCart;
    });
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Sabor e Cia">
          <img src={logo} alt="" className="brand-logo" />
          <span>
            <strong>Sabor & Cia</strong>
            <small>Lanchonete artesanal</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          <a href="#pedido">Pedido</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Aberto hoje até 23h</span>
            <h1>Lanchonete Sabor & Cia</h1>
            <p>
              Lanches caprichados, porções crocantes e bebidas geladas para
              montar seu pedido em poucos cliques.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#cardapio">
                Ver cardápio
              </a>
              <a className="secondary-action" href="#pedido">
                <ShoppingCart size={18} />
                Pedido: {itemCount} item{itemCount === 1 ? "" : "s"}
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Resumo da lanchonete">
            <img src={logo} alt="Logo da Sabor e Cia" className="hero-logo" />
            <div className="hero-stats">
              <span>
                <Star size={18} />
                4.8 avaliação
              </span>
              <span>
                <Clock size={18} />
                25 a 40 min
              </span>
              <span>
                <MapPin size={18} />
                Retirada no balcão
              </span>
            </div>
          </div>
        </section>

        <section className="menu-section" id="cardapio">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Cardápio</span>
              <h2>Escolha seus favoritos</h2>
            </div>

            <label className="search-field">
              <Search size={18} />
              <input
                type="search"
                placeholder="Buscar no cardápio"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          <div className="category-tabs" aria-label="Categorias do cardapio">
            {categories.map((category) => (
              <button
                className={selectedCategory === category ? "active" : ""}
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article className="menu-card" key={item.id}>
                <img
                  className="menu-card-image"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="menu-card-top">
                  <span className="item-tag">{item.tag}</span>
                  <span className="rating">
                    <Star size={15} />
                    {item.rating}
                  </span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="item-footer">
                  <strong>{formatPrice(item.price)}</strong>
                  <button
                    className="icon-action"
                    type="button"
                    aria-label={`Adicionar ${item.name}`}
                    title={`Adicionar ${item.name}`}
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="order-panel" id="pedido">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">Pedido</span>
              <h2>Resumo</h2>
            </div>
            <ShoppingCart size={24} />
          </div>

          {cartItems.length === 0 ? (
            <p className="empty-cart">
              Seu pedido ainda está vazio. Adicione um item do cardápio para
              começar.
            </p>
          ) : (
            <div className="cart-list">
              {cartItems.map((item) => (
                <div className="cart-row" key={item.id}>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>

                  <div className="quantity-control">
                    <button
                      type="button"
                      aria-label={`Remover ${item.name}`}
                      title={`Remover ${item.name}`}
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label={`Adicionar ${item.name}`}
                      title={`Adicionar ${item.name}`}
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="order-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <div className="payment-section">
            <span className="payment-title">Forma de pagamento</span>
            <div className="payment-options">
              {paymentMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <button
                    className={
                      paymentMethod === method.id
                        ? "payment-option active"
                        : "payment-option"
                    }
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                  >
                    <Icon size={18} />
                    <span>
                      <strong>{method.label}</strong>
                      <small>{method.description}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="order-actions">
            <button
              className="clear-order"
              type="button"
              disabled={cartItems.length === 0}
              onClick={() => setCart({})}
            >
              <Trash2 size={18} />
              Limpar
            </button>
            <button
              className="finish-order"
              type="button"
              disabled={cartItems.length === 0}
            >
              Finalizar pedido
            </button>
          </div>
        </aside>
      </main>

      <footer className="footer" id="contato">
        <span>Rua das Flores, 120 - Centro</span>
        <span>Pedidos: (11) 99999-1234</span>
      </footer>
    </div>
  );
}

export default App;
