// 11 - Fazer um simulador de rolagem de dados, que receba como input N
// dados e N lados e mostre as rolagens individuais e a soma dos
// valores?
// Entradas:
// Quantidade de dados: 2
// Quantidade de lados: 9

function simularRolagemDeDados(quantidadeDados, quantidadeLados) {
  let soma = 0;
  let rolagens = [];

  for (let i = 0; i < quantidadeDados; i++) {
    let resultado = Math.floor(Math.random() * quantidadeLados) + 1;
    rolagens.push(resultado);
    soma += resultado;
  }

  console.log("Rolagens individuais:", rolagens.join(", "));

  console.log("Soma dos valores:", soma);
}

let quantidadeDados = parseInt(prompt("Quantidade de dados:"));
let quantidadeLados = parseInt(prompt("Quantidade de lados:"));
simularRolagemDeDados(quantidadeDados, quantidadeLados);
