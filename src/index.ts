import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';

const player1 = new Character('');
player1.levelUp();
player1.levelUp();
player1.levelUp();
const player2 = new Character('');
const player3 = new Character('');

export { player1, player2, player3 };

const monster1 = new Monster();
const monster2 = new Dragon();

export { monster1, monster2 };

const pvp = new PVP(player2, player3);

export { pvp };

const pve = new PVE(player1, [monster1, monster2]);

export { pve };
