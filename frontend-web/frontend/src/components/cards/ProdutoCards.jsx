export default function ProductCard({ nome, preco }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>R$ {preco}</p>

      <button>Adicionar</button>
    </div>
  );
}

