const supertest = require("supertest");
const app = require("../app.js");
const request = supertest(app);

const url = "/produtos";

let id = null;

describe("Testes do recurso /produtos", () => {
  test("POST/produtos", async () => {
    const response = await request
      .post(url)
      .send({ nome: "Laranja", preco: 10.0 });
    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body._id).toBeDefined();
    expect(response.body.nome).toBe("Laranja");
    expect(response.body.preco).toBe(10.0);
    id = response.body._id;
  });

  test("POST/produtos", async () => {
    const response = await request.post(url);
    expect(response.status).toBe(422);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Nome e preço do produto são obrigatórios");
  });

  test("GET/produtos", async () => {
    const response = await request.get(url);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET/produtos/${id}", async () => {
    const response = await request.get(`${url}/${id}`);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body._id).toBeDefined();
    expect(response.body.nome).toBe("Laranja");
    expect(response.body.preco).toBe(10.0);
  });

  test("GET/produtos/0", async () => {
    const response = await request.get(`${url}/0`);
    expect(response.status).toBe(400);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Parâmetro inválido");
  });

  test("GET/produtos/000000000000000000000000", async () => {
    const response = await request.get(`${url}/000000000000000000000000`);
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Produto não encontrado");
  });

  test("PUT/produtos/${id}", async () => {
    const response = await request
      .put(`${url}/${id}`)
      .send({ nome: "Laranja Pera", preco: 18.0 });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body._id).toBeDefined();
    expect(response.body.nome).toBe("Laranja Pera");
    expect(response.body.preco).toBe(18.0);
  });

  test("PUT/produtos/0", async () => {
    const response = await request.put(`${url}/0`);
    expect(response.status).toBe(400);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Parâmetro inválido");
  });

  test("PUT/produtos/000000000000000000000000", async () => {
    const response = await request.put(`${url}/000000000000000000000000`);
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Produto não encontrado");
  });

  test("PUT/produtos/${id}", async () => {
    const response = await request
    .put(`${url}/${id}`);
    expect(response.status).toBe(422);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Nome e preço do produto são obrigatórios");
  });

  test("DELETE/produtos/${id}", async () => {
    const response = await request.delete(`${url}/${id}`);
    expect(response.status).toBe(204);
  });

  test("DELETE/produtos/0", async () => {
    const response = await request.delete(`${url}/0`);
    expect(response.status).toBe(400);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Parâmetro inválido");
  });

  test("DELETE/produtos/${id}", async () => {
    const response = await request.delete(`${url}/${id}`);
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Produto não encontrado");
  });


});
