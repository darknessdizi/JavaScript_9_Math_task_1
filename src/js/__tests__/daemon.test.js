import Daemon from '../daemon';

test('Создание объекта класса Daemon', () => {
  const daemon = new Daemon('Dizi');
  expect(daemon).toEqual({
    name: 'Dizi',
    attack: 150,
    debaff: false,
    maxAttack: 150,
  });
});
