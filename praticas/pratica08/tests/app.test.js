const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

test("GET/produtos", async () => {
  const url = "/produtos";
  const response = await request.get(url);
  expect(response.status).toBe(401);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body.msg).toBe("Não autorizado");
});

test("GET/produtos", async () => {
  const url = "/produtos";
  const invalidToken = "123456789";
  const response = await request.get(url).set("authorization", invalidToken);
  expect(response.status).toBe(401);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body.msg).toBe("Token inválido");
});

test("POST /usuarios/login", async () => {
  const url = "/usuarios/login";
  const response = await request
    .post(url)
    .send({ usuario: "email@exemplo.com", senha: "abcd1234" });
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body.token).toBeDefined();
  token = response.body.token;
});

test("GET/produtos", async () => {
  const url = "/produtos";
  const response = await request.get(url).set("authorization", token);
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
});

test("POST /usuarios/renovar", async () => {
  const url = "/usuarios/renovar";
  const response = await request.post(url).set("authorization", token);
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body.token).toBeDefined();
  token = response.body.token;
});

test("GET/produtos", async () => {
  const url = "/produtos";
  const response = await request.get(url).set("authorization", token);
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
});
