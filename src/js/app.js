import Magician from './magician';
import Daemon from './daemon';

const mag = new Magician('Ariela');
console.log(mag);
mag.stoned = true;
console.log('Воздействие дебафа: ', mag.stoned);
mag.setAttack(5);
console.log(mag.getAttack());

const daemon = new Daemon('Dizi');
console.log(daemon);
console.log('Воздействие дебафа: ', daemon.stoned);
daemon.setAttack(15);
console.log(daemon.getAttack());
daemon.stoned = false;
daemon.setAttack(2);
console.log(daemon.getAttack());
