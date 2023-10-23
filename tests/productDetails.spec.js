const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([{ name: 'Alcool gel', details: { productId: 'Alcool gel123' } }, { name: 'Máscara', details: { productId: 'Máscara123' } }]);
  });
  // Teste se productDetails é uma função.
  it('productDetails deve ser uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  // Teste se o retorno da função é um array.
  it.todo('o retorno deve ser um array')
  // Teste se o array retornado pela função contém dois itens dentro.
  it('array de retorno deve conter 2 ítems dentro', () => {
    const arrayReturned = productDetails;
    expect(arrayReturned).toHaveLength(2);
  });
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Os 2 ítems retornardos no array devem ser obj', () => {
    const arrayReturned = productDetails('teste1', 'teste2');
    for (let i = 0; i < arrayReturned.length; i += 1) {
      expect(typeof arrayReturned[i]).toBe('object');
    }
  })
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('se passado 2 parâmetros diferentes os 2 objetos devem ser também diferentes', () => {
    const arrayReturned = productDetails('maçã', 'banana');
    expect(arrayReturned[0].name).not.toBe(arrayReturned[1].name);
    expect(arrayReturned[0].details.productId).not.toBe(arrayReturned[1].details.productId);
  });
  // Teste se os dois productIds terminam com 123.
  it('os 2 productIds devem terminar com 123', () => {
    const arrayReturned = productDetails('maçã', 'banana');
    for (let i = 0; i < arrayReturned.length; i += 1) {
      expect(arrayReturned[i].details.productId).toMatch('123');
    }
  })
});
