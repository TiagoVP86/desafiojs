// 12 - Fazer um simulador de rolagem de dados, que receba como input N
// dados e N lados e quantidade de tentativas e mostre as rolagens
// individuais e a soma dos valores?
// Entradas:
// Quantidade de dados: 3
// Quantidade de lados: 9
// Quantidade de tentativas: 3

function simularRolagemDeDados(
  quantidadeDados,
  quantidadeLados,
  quantidadeTentativas
) {
  for (let tentativa = 1; tentativa <= quantidadeTentativas; tentativa++) {
    let soma = 0;
    let rolagens = [];

    for (let i = 0; i < quantidadeDados; i++) {
      let resultado = Math.floor(Math.random() * quantidadeLados) + 1;
      rolagens.push(resultado);
      soma += resultado;
    }

    console.log(`Tentativa ${tentativa}:`);
    console.log("Rolagens individuais:", rolagens.join(", "));

    console.log("Soma dos valores:", soma);
    console.log("\n");
  }
}

let quantidadeDados = parseInt(prompt("Quantidade de dados:"));
let quantidadeLados = parseInt(prompt("Quantidade de lados:"));
let quantidadeTentativas = parseInt(prompt("Quantidade de tentativas:"));

simularRolagemDeDados(quantidadeDados, quantidadeLados, quantidadeTentativas);
