const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

const url = "http://localhost:3000/tarefas";
let id = null;

describe("Testes do recurso /terefas", () => {
  test("POST / deve retornar 201", async () => {
    const response = await request(url);
  });
});
