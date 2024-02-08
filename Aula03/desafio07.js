// Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores
// são seus preços.
// Verifique se a maçã é mais cara que a banana
// Verifique se a pêra não custa o mesmo que a uva.

const frutas = new Map();

frutas.set("maçã", 2.5);
frutas.set("banana", 1.8);
frutas.set("pêra", 3.0);
frutas.set("uva", 3.0);

const macaMaisCaraQueBanana =
  frutas.get("maçã") > frutas.get("banana") ? "Sim" : "Não";

const peraNaoCustaIgualAUva =
  frutas.get("pêra") == frutas.get("uva") ? "Sim" : "Não";

console.log("A maçã é mais cara que a banana?", macaMaisCaraQueBanana);
console.log("A pêra não custa o mesmo que a uva?", peraNaoCustaIgualAUva);
