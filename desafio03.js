// Receba através do prompt dois argumentos:
// ● navegador
// ● sistemaOperacional
// Deve retornar true se o navegador for "Chrome" ou "Firefox" e o sistema
// operacional for "Windows" ou "Mac".
// Entrada: navegador: Chrome - sistemaOperacional: Windows => Saída: true
// navegador: Chrome - sistemaOperacional: Mac => Saída: true
// navegador: Firefox - sistemaOperacional: Windows => Saída: true
// navegador: Firefox - sistemaOperacional: Mac => Saída: true
// navegador: Firefox - sistemaOperacional: Sony => Saída: false
// navegador: Safari - sistemaOperacional: Mac => Saída: false

var navegador = prompt("Digite o navegador:");
var sistemaOperacional = prompt("Digite o sistema operacional:");

navegador = navegador.toLowerCase();
sistemaOperacional = sistemaOperacional.toLowerCase();

var atendeCondicoes =
  (navegador === "chrome" || navegador === "firefox") &&
  (sistemaOperacional === "windows" || sistemaOperacional === "mac");

alert(atendeCondicoes);
