import Characters from './characters';

export default class Daemon extends Characters {
  constructor(name) {
    super(name);
    this.attack = 150;
  }
}
