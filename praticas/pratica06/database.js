const { MongoClient } = require("mongodb");
const url = "mongodb+srv://userTarefas:Sam7568@cluster0.md049.mongodb.net/";

const client = new MongoClient(url);

async function conectarDb() {
  try {
    await client.connect();
    return client.db("agenda");
  } catch (e) {
    console.log("Erro ao conectar no MongoDB", e.message);
  }
}

module.exports = conectarDb;
