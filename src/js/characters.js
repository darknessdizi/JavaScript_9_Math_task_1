const power = {
  1: 100,
  2: 90,
  3: 80,
  4: 70,
  5: 60,
  6: 50,
  7: 40,
  8: 30,
  9: 20,
  10: 10,
};

export default class Characters {
  constructor(name) {
    this.name = name;
    this.attack = undefined;
    this.debaff = false;
  }

  get stoned() {
    return this.debaff;
  }

  set stoned(status) {
    this.debaff = status;
  }

  getAttack() {
    return this.attack;
  }

  setAttack(value) {
    let result;
    if (value > 10) {
      result = 0;
    } else if (!this.stoned) {
      result = (power[value] * this.attack) / 100;
    } else {
      result = (power[value] * this.attack) / 100 - (Math.log2(value) * 5);
    }
    this.attack = Math.floor(result);
  }
}
