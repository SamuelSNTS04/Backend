const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

let token = null;

test("POST /usuarios/login", async () => {
  const response = await request
    .post("/usuarios/login")
    .send({ usuario: "email@exemplo.com", senha: "abcd1234" });
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body.token).toBeDefined();
  token = response.body.token;
});

test("POST /usuarios/renovar", async () => {
  const response = await request.post("/usuarios/renovar").set("authorization", `Bearer ${token}`);
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body.token).toBeDefined();
});

test("GET/produtos", async () => {
  const response = await request.get("/produtos");
  expect(response.status).toBe(401);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body.msg).toBe("Não autorizado");
});

test("GET/produtos", async () => {
  const invalidToken = "123456789";
  const response = await request.get("/produtos").set("authorization", `Bearer ${invalidToken}`);
  expect(response.status).toBe(401);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body.msg).toBe("Token inválido");
});

test("GET/produtos", async () => {
  const response = await request.get("/produtos").set("authorization", `Bearer ${token}`);
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("GET/produtos", async () => {
  const response = await request.get("/produtos").set("authorization", `Bearer ${token}`);
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
});
