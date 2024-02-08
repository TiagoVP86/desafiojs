// Criar um dicionário de sinônimos usando Array e Objs
// Exemplo: dicionarioDeSinonimos.feliz, deve retornar ["alegre", "contente",
// "satisfeito"]
// dicionarioDeSinonimos.triste, retorna ["melancólico", "abatido", "deprimido"],
// dicionarioDeSinonimos.bom, retorna ["ótimo", "excelente", "maravilhoso"],

const dicionarioDeSinonimos = {
  feliz: ["alegre", "contente", "satisfeito"],
  triste: ["melancólico", "abatido", "deprimido"],
  bom: ["ótimo", "excelente", "maravilhoso"],
};

function buscarSinonimos(palavra) {
  if (dicionarioDeSinonimos.hasOwnProperty(palavra)) {
    return dicionarioDeSinonimos[palavra];
  } else {
    return "Palavra não encontrada no dicionário de sinônimos.";
  }
}

console.log(buscarSinonimos("feliz"));
console.log(buscarSinonimos("triste"));
console.log(buscarSinonimos("bom"));
console.log(buscarSinonimos("alegre"));
