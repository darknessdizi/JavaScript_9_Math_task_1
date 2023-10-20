import Characters from './characters';

export default class Magician extends Characters {
  constructor(name) {
    super(name, 100);
    this.maxAttack = 100;
  }
}
