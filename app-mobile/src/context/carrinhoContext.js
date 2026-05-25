import React, { createContext, useMemo, useState } from "react";

export const CarrinhoContext = createContext({});

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState({});

  function adicionarProduto(produto) {
    setCarrinho((atual) => {
      const itemAtual = atual[produto.id];

      return {
        ...atual,
        [produto.id]: {
          ...produto,
          quantidade: itemAtual ? itemAtual.quantidade + 1 : 1,
        },
      };
    });
  }

  function removerProduto(id) {
    setCarrinho((atual) => {
      const itemAtual = atual[id];

      if (!itemAtual) {
        return atual;
      }

      const proximoCarrinho = { ...atual };

      if (itemAtual.quantidade <= 1) {
        delete proximoCarrinho[id];
      } else {
        proximoCarrinho[id] = {
          ...itemAtual,
          quantidade: itemAtual.quantidade - 1,
        };
      }

      return proximoCarrinho;
    });
  }

  function limparCarrinho() {
    setCarrinho({});
  }

  const itens = useMemo(() => Object.values(carrinho), [carrinho]);

  const total = itens.reduce(
    (acc, item) => acc + Number(item.preco) * item.quantidade,
    0,
  );

  const quantidadeTotal = itens.reduce(
    (acc, item) => acc + item.quantidade,
    0,
  );

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        total,
        quantidadeTotal,
        adicionarProduto,
        removerProduto,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
