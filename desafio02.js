// Desafio 02 - Aprovação de Empréstimo
// Receba através do prompt:
// ● salario
// ● scoreDeCredito
// ● idade
// Então deve retornar true se a pessoa for aprovada para um empréstimo nas
// seguintes condições:
// ● O salário for maior ou igual a 5000.
// ● O score de crédito for maior ou igual a 700.
// ● A idade for maior ou igual a 18.
// Entrada: Salário: 5001 - Score: 701 - idade: 19 => Saída: true
// Salário: 5000 - Score: 700 - idade: 18 => Saída: true
// Salário: 4999 - Score: 700 - idade: 18 => Saída: false
// Salário: 5000 - Score: 699 - idade: 18 => Saída: false
// Salário: 5000 - Score: 700 - idade: 17 => Saída: false

let salario = parseFloat(prompt("Digite o salário:"));
let scoreDeCredito = parseInt(prompt("Digite o score de crédito:"));
let idade = parseInt(prompt("Digite a idade:"));

let emprestimoAprovado =
  salario >= 5000 && scoreDeCredito >= 700 && idade >= 18;

alert(emprestimoAprovado);
