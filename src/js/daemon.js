import Characters from './characters';

export default class Daemon extends Characters {
  constructor(name) {
    super(name, 150);
    this.maxAttack = 150;
  }
}
