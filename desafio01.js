// Desafio 01 - Verificar Elegibilidade para Voto
// Receba através do prompt:
// ● idade
// ● nacionalidade
// Então deve retornar true se a pessoa for elegível para votar, o que ocorre
// quando a idade for maior ou igual a 16 e a nacionalidade for "brasileira",
// caso contrário, retorna false.
// Entrada: idade: 16 - brasileira => saída: true
// idade: 15 - brasileira => saída: false
// idade: 18 - brasileira => saída: true
// idade: 16 - eua => saída: false
// idade: 15 - eua => saída: false
// idade: 18 - eua => saída: false

var idade = parseInt(prompt("Digite a idade:"));
var nacionalidade = prompt("Digite a nacionalidade:");

var elegivel = idade >= 16 && nacionalidade.toLowerCase() === "brasileira";

alert(elegivel);
