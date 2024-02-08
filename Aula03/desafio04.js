// Criar um dicionário de sinônimos usando Map
// Exemplo: dicionarioDeSinonimos.get(Feliz) , deve retornar ["alegre",
// "contente", "satisfeito"]
// dicionarioDeSinonimos.get(triste), retorna ["melancólico", "abatido",
// "deprimido"],
// dicionarioDeSinonimos.get(bom), retorna ["ótimo", "excelente", "maravilhoso"],

const dicionarioDeSinonimos = new Map();

dicionarioDeSinonimos.set("feliz", ["alegre", "contente", "satisfeito"]);
dicionarioDeSinonimos.set("triste", ["melancólico", "abatido", "deprimido"]);
dicionarioDeSinonimos.set("bom", ["ótimo", "excelente", "maravilhoso"]);

function buscarSinonimos(palavra) {
  if (dicionarioDeSinonimos.has(palavra)) {
    return dicionarioDeSinonimos.get(palavra);
  } else {
    return "Palavra não encontrada no dicionário de sinônimos.";
  }
}

console.log(buscarSinonimos("feliz"));
console.log(buscarSinonimos("triste"));
console.log(buscarSinonimos("bom"));
console.log(buscarSinonimos("alegre"));
