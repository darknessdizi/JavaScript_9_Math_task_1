import Magician from './magician';
import Daemon from './daemon';

const mag = new Magician('Ariela', 100);
console.log(mag);
mag.stoned = true;
console.log('Воздействие дебафа: ', mag.stoned);
mag.setAttack(5);
console.log(mag.getAttack());

const demon = new Daemon('Dizi', 100);
console.log(demon);
console.log('Воздействие дебафа: ', demon.stoned);
demon.setAttack(15);
console.log(demon.getAttack());
