// promocaoIfood.test.js
const promocaoIfood = require('./exercicios');

describe('Testes para a função promocaoIfood', () => {
  
  test('Deve aplicar 20% de desconto se o valor for maior que 100', () => {
    const valor = 150;
    const resultado = promocaoIfood(valor);

    expect(resultado).toBe(120);
  });

  test('Deve retornar o valor sem alteração se for igual a 100', () => {
    const valor = 100;
    const resultado = promocaoIfood(valor);
    expect(resultado).toBe(100);
  });

  test('Deve retornar o valor sem alteração se for menor que 100', () => {
    const valor = 50;
    const resultado = promocaoIfood(valor);
    expect(resultado).toBe(50);
  });

  test('Deve funcionar com valores decimais', () => {
    const valor = 120.50;
    const resultado = promocaoIfood(valor);
    const esperado = 120.50 - (120.50 * 0.2);  // 96.40
    expect(resultado).toBeCloseTo(esperado, 2); // comparação com 2 casas decimais
  });

  test('Deve retornar 0 se o valor for 0', () => {
    const valor = 0;
    const resultado = promocaoIfood(valor);
    expect(resultado).toBe(0);
  });

  test('Deve retornar o mesmo valor para valores negativos', () => {
    const valor = -50;
    const resultado = promocaoIfood(valor);
    expect(resultado).toBe(-50);
  });
});
