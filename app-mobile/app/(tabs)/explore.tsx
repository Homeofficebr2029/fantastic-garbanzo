import { useContext, useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { CarrinhoContext } from "@/src/context/carrinhoContext";

const formasPagamento = [
  {
    id: "pix",
    nome: "Pix",
    descricao: "Pagamento instantâneo",
  },
  {
    id: "cartao",
    nome: "Cartão",
    descricao: "Crédito ou débito",
  },
  {
    id: "dinheiro",
    nome: "Dinheiro",
    descricao: "Pagar na retirada",
  },
];

function formatarPreco(valor: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export default function PedidoScreen() {
  const [formaPagamento, setFormaPagamento] = useState("pix");
  const {
    itens,
    total,
    quantidadeTotal,
    adicionarProduto,
    removerProduto,
    limparCarrinho,
  } = useContext(CarrinhoContext);

  function finalizarPedido() {
    if (itens.length === 0) {
      return;
    }

    Alert.alert(
      "Pedido recebido",
      "Seu pedido foi montado. O próximo passo é conectar com o backend.",
    );
  }

  return (
    <View style={styles.tela}>
      <View style={styles.cabecalho}>
        <Text style={styles.etiqueta}>Pedido</Text>
        <Text style={styles.titulo}>Resumo</Text>
        <Text style={styles.subtitulo}>
          {quantidadeTotal === 0
            ? "Seu pedido ainda está vazio."
            : `${quantidadeTotal} item${quantidadeTotal === 1 ? "" : "s"} no pedido.`}
        </Text>
      </View>

      {itens.length === 0 ? (
        <View style={styles.vazio}>
          <Text style={styles.vazioTitulo}>Adicione itens do cardápio</Text>
          <Text style={styles.vazioTexto}>
            Volte para a aba Cardápio e toque em Adicionar para montar o pedido.
          </Text>
        </View>
      ) : (
        <FlatList
          data={itens}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.lista}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemInfo}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>
                  {formatarPreco(item.preco * item.quantidade)}
                </Text>
              </View>

              <View style={styles.quantidade}>
                <Pressable
                  style={styles.quantidadeBotao}
                  onPress={() => removerProduto(item.id)}
                >
                  <Text style={styles.quantidadeTexto}>-</Text>
                </Pressable>
                <Text style={styles.quantidadeNumero}>{item.quantidade}</Text>
                <Pressable
                  style={styles.quantidadeBotao}
                  onPress={() => adicionarProduto(item)}
                >
                  <Text style={styles.quantidadeTexto}>+</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      )}

      <View style={styles.rodape}>
        <View style={styles.totalLinha}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValor}>{formatarPreco(total)}</Text>
        </View>

        <View style={styles.pagamento}>
          <Text style={styles.pagamentoTitulo}>Forma de pagamento</Text>

          <View style={styles.pagamentoLista}>
            {formasPagamento.map((forma) => (
              <Pressable
                key={forma.id}
                style={[
                  styles.pagamentoOpcao,
                  formaPagamento === forma.id && styles.pagamentoAtivo,
                ]}
                onPress={() => setFormaPagamento(forma.id)}
              >
                <Text
                  style={[
                    styles.pagamentoNome,
                    formaPagamento === forma.id && styles.pagamentoTextoAtivo,
                  ]}
                >
                  {forma.nome}
                </Text>
                <Text
                  style={[
                    styles.pagamentoDescricao,
                    formaPagamento === forma.id && styles.pagamentoTextoAtivo,
                  ]}
                >
                  {forma.descricao}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.acoes}>
          <Pressable
            disabled={itens.length === 0}
            style={[styles.limpar, itens.length === 0 && styles.desabilitado]}
            onPress={limparCarrinho}
          >
            <Text style={styles.limparTexto}>Limpar</Text>
          </Pressable>

          <Pressable
            disabled={itens.length === 0}
            style={[styles.finalizar, itens.length === 0 && styles.desabilitado]}
            onPress={finalizarPedido}
          >
            <Text style={styles.finalizarTexto}>Finalizar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#f7f4ee",
    paddingHorizontal: 18,
    paddingTop: 54,
  },
  cabecalho: {
    marginBottom: 18,
  },
  etiqueta: {
    color: "#9e2b20",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  titulo: {
    color: "#12462f",
    fontSize: 38,
    fontWeight: "900",
    marginTop: 6,
  },
  subtitulo: {
    color: "#756b62",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 8,
  },
  vazio: {
    backgroundColor: "#fffdf8",
    borderColor: "#e4d8ca",
    borderRadius: 12,
    borderStyle: "dashed",
    borderWidth: 1,
    padding: 18,
  },
  vazioTitulo: {
    color: "#241d18",
    fontSize: 18,
    fontWeight: "900",
  },
  vazioTexto: {
    color: "#756b62",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
  lista: {
    gap: 12,
    paddingBottom: 18,
  },
  item: {
    alignItems: "center",
    backgroundColor: "#fffdf8",
    borderColor: "#e4d8ca",
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  itemInfo: {
    flex: 1,
    paddingRight: 12,
  },
  nome: {
    color: "#241d18",
    fontSize: 17,
    fontWeight: "900",
  },
  preco: {
    color: "#9e2b20",
    fontSize: 16,
    fontWeight: "900",
    marginTop: 6,
  },
  quantidade: {
    alignItems: "center",
    borderColor: "#e4d8ca",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  quantidadeBotao: {
    alignItems: "center",
    backgroundColor: "#fffaf2",
    height: 38,
    justifyContent: "center",
    width: 38,
  },
  quantidadeTexto: {
    color: "#12462f",
    fontSize: 22,
    fontWeight: "900",
  },
  quantidadeNumero: {
    color: "#241d18",
    fontSize: 16,
    fontWeight: "900",
    minWidth: 34,
    textAlign: "center",
  },
  rodape: {
    backgroundColor: "#fffdf8",
    borderColor: "#e4d8ca",
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 18,
    marginTop: "auto",
    padding: 16,
  },
  totalLinha: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  totalLabel: {
    color: "#756b62",
    fontSize: 16,
    fontWeight: "900",
  },
  totalValor: {
    color: "#9e2b20",
    fontSize: 22,
    fontWeight: "900",
  },
  pagamento: {
    marginBottom: 14,
  },
  pagamentoTitulo: {
    color: "#756b62",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 10,
  },
  pagamentoLista: {
    gap: 8,
  },
  pagamentoOpcao: {
    backgroundColor: "#fffaf2",
    borderColor: "#e4d8ca",
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
  },
  pagamentoAtivo: {
    backgroundColor: "#1f6d4a",
    borderColor: "#1f6d4a",
  },
  pagamentoNome: {
    color: "#241d18",
    fontSize: 15,
    fontWeight: "900",
  },
  pagamentoDescricao: {
    color: "#756b62",
    fontSize: 13,
    marginTop: 3,
  },
  pagamentoTextoAtivo: {
    color: "#fff",
  },
  acoes: {
    flexDirection: "row",
    gap: 10,
  },
  limpar: {
    alignItems: "center",
    backgroundColor: "#efe4d5",
    borderRadius: 10,
    flex: 1,
    paddingVertical: 14,
  },
  limparTexto: {
    color: "#12462f",
    fontSize: 15,
    fontWeight: "900",
  },
  finalizar: {
    alignItems: "center",
    backgroundColor: "#1f6d4a",
    borderRadius: 10,
    flex: 1,
    paddingVertical: 14,
  },
  finalizarTexto: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
  },
  desabilitado: {
    opacity: 0.45,
  },
});
