import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';
import Battle from './Battle/Battle';

const player1 = new Character('');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const player2 = new Character('');
const player3 = new Character('');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { runBattles, pve, pvp, monster1, monster2, player1, player2, player3 };
