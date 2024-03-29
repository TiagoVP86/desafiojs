// Desafio 04 - Verificar Elegibilidade para Desconto em Compra
// Receba através do prompt:
// ● idade
// ● compraMinima.
// ● isNewClient
// A função deve retornar true se a pessoa for elegível para um desconto, o que
// ocorre quando:
// ● A idade for maior ou igual a 60 anos.
// ● E a compra for maior ou igual a R$ 100.
// ● E se isNewClient for False
// Entrada: idade: 65 - compraMinima: 100 - isNewClient: false => Saída: true
// idade: 45 - compraMinima: 120 - isNewClient: true => Saída: false
// idade: 45 - compraMinima: 120 - isNewClient: false => Saída: false
// idade: 55 - compraMinima: 50 - isNewClient: false => Saída: false

let idade = parseInt(prompt("Digite a idade:"));
let compraMinima = parseFloat(prompt("Digite o valor da compra mínima:"));
let isNewClient =
  prompt("O cliente é novo? (true/false)").toLowerCase() === "true";

let possuiDesconto = idade >= 60 && compraMinima >= 100 && !isNewClient;

alert(possuiDesconto);
