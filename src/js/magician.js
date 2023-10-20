import Characters from './characters';

export default class Magician extends Characters {
  constructor(name) {
    super(name);
    this.attack = 100;
  }
}
