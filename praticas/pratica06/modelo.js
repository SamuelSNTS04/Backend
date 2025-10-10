const conectarDb = require("./database.js");

class Tarefa {
  db = null;
  collection = null;

  async init() {
    this.db = await conectarDb();
    this.collection = this.db.collection("tarefas");
  }

  constructor(nome) {
    this.nome = nome;
    this.concluida = false;
    this.id = null;
  }

  async inserir() {
    const resultado = await this.collection.insertOne({
      nome: this.nome,
      concluida: this.concluida,
    });
    this.id = resultado.insertedId;
  }

  async alterar() {
    const resultado = await this.collection.updateOne(
      { _id: this.id },
      { $set: { nome: this.nome, concluida: this.concluida } }
    );
  }

  async deletar() {
    const resultado = await this.collection.deleteOne({ nome: this.nome });
  }

  async buscar() {
    const resultado = await this.collection.findOne({ nome: this.nome });

    console.log(resultado)
    this.nome = resultado.nome;
    this.concluida = resultado.concluida;
    this.id = resultado._id;
  }
}

module.exports = Tarefa;
