import Magician from '../magician';

test('Создание объекта класса Magician', () => {
  const demon = new Magician('Dizi');
  expect(demon).toEqual({
    name: 'Dizi',
    attack: 100,
    debaff: false,
    maxAttack: 100,
  });
});
