import Magician from '../magician';
import Daemon from '../daemon';

test('Тест 1 класс Daemon', () => {
  const daemon = new Daemon('Dizi');
  expect(daemon.stoned).toBeFalsy();
  daemon.stoned = true;
  expect(daemon.stoned).toBeTruthy();
  expect(daemon.getAttack()).toBe(150);
  daemon.setAttack(2);
  expect(daemon.getAttack()).toBe(130);
  daemon.setAttack(11);
  expect(daemon.getAttack()).toBe(0);
  daemon.stoned = false;
  daemon.setAttack(2);
  expect(daemon.getAttack()).toBe(135);
});

test('Тест 2 класс Magician', () => {
  const mage = new Magician('Liza');
  expect(mage.stoned).toBeFalsy();
  mage.stoned = true;
  expect(mage.stoned).toBeTruthy();
  expect(mage.getAttack()).toBe(100);
  mage.setAttack(2);
  expect(mage.getAttack()).toBe(85);
  mage.setAttack(11);
  expect(mage.getAttack()).toBe(0);
  mage.stoned = false;
  mage.setAttack(2);
  expect(mage.getAttack()).toBe(90);
});
