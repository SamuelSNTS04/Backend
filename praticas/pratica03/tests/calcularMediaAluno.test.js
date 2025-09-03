const { calcularMediaAluno } = require("../src/calcularMediaAluno");

describe("TESTES PRÁTICA 03", () => {
  test("Média dos alunos", () => {
    expect(calcularMediaAluno).toBeDefined();
  });

  test("Notas indefinidas", () => {
    expect(calcularMediaAluno).toBeDefined();
    expect(() => calcularMediaAluno()).toThrow("Notas a1 ou a2 não informadas");
    expect(() => calcularMediaAluno(undefined, 1, 2)).toThrow(
      "Nota a1 não informada"
    );
    expect(() => calcularMediaAluno(1, undefined, 2)).toThrow(
      "Nota a2 não informada"
    );
  });

  test("Notas negativas", () => {
    expect(calcularMediaAluno).toBeDefined();
    expect(() => calcularMediaAluno(-1, -2, 3)).toThrow(
      "Notas a1 ou a2 não podem ser negativas"
    );
    expect(() => calcularMediaAluno(-1, 1, 2)).toThrow(
      "Nota a1 não pode ser negativa"
    );
    expect(() => calcularMediaAluno(1, -2, 2)).toThrow(
      "Nota a2 não pode ser negativa"
    );
  });

  test("Nota A3 indefinida", () => {
    expect(calcularMediaAluno).toBeDefined();
    expect(calcularMediaAluno(6, 7, undefined)).toBeCloseTo(6.6, 2);
  });

  test("Nota A3 negativa", () => {
    expect(calcularMediaAluno).toBeDefined();
    expect(() => calcularMediaAluno(1, 2, -3)).toThrow(
      "Nota a3 não pode ser negativa"
    );
  });

  test("Melhor combinação", () => {
    expect(calcularMediaAluno).toBeDefined();
    expect(calcularMediaAluno(10, 0, 10)).toBeCloseTo(10, 2);
    expect(calcularMediaAluno(0, 10, 10)).toBeCloseTo(10, 2);
  });
});
