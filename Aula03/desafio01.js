// Crie um mapa para representar uma lista de compras
// const listaDeCompras = new Map()
// 1. Adicione itens à lista de compras com a quantidade desejada
// Maçã - 5
// Banana - 3
// Leite - 4
// Pão - 10
// 2. Verifique se um item específico está na lista de compras
// 3. Verifique a quantidade de um item específico da lista
// 4. Modifique a quantidade de um item específico da lista
// 5. Remova um item específico da lista

const listaDeCompras = new Map();

listaDeCompras.set("Maçã", 5);
listaDeCompras.set("Banana", 3);
listaDeCompras.set("Leite", 4);
listaDeCompras.set("Pão", 10);

function verificarItem(item) {
  return listaDeCompras.has(item);
}

function verificarQuantidade(item) {
  if (listaDeCompras.has(item)) {
    return listaDeCompras.get(item);
  } else {
    return "Item não encontrado na lista de compras.";
  }
}

function modificarQuantidade(item, novaQuantidade) {
  if (listaDeCompras.has(item)) {
    listaDeCompras.set(item, novaQuantidade);
    return `Quantidade de ${item} modificada para ${novaQuantidade}.`;
  } else {
    return "Item não encontrado na lista de compras.";
  }
}

function removerItem(item) {
  if (listaDeCompras.has(item)) {
    listaDeCompras.delete(item);
    return `${item} removido da lista de compras.`;
  } else {
    return "Item não encontrado na lista de compras.";
  }
}

console.log(verificarItem("Maçã"));
console.log(verificarQuantidade("Pão"));
console.log(modificarQuantidade("Leite", 6));
console.log(removerItem("Banana"));
console.log(listaDeCompras);
