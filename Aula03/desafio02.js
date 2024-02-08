// Crie uma agenda de contatos que armazene vários contatos em um array,
// modelando o "contato" como um objeto: (Nome, telefone, email) (Não utilizar
// Map)

const agendaDeContatos = [];

function adicionarContato(nome, telefone, email) {
  const contato = {
    Nome: nome,
    Telefone: telefone,
    Email: email,
  };
  agendaDeContatos.push(contato);
}

adicionarContato("João", "123456789", "joao@example.com");
adicionarContato("Maria", "987654321", "maria@example.com");

console.log(agendaDeContatos);
