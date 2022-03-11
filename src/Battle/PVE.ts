import Battle from './Battle';
import Character from '../Character';
import Fighter from '../Fighter/Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';
import Monster from '../Monster';

type Champion = Character | Fighter;
type Environment = Monster | SimpleFighter | Fighter;

export default class PVE extends Battle {
  firstCharacter: Champion;
  secondCharacter: Environment[];
  constructor(firstCharacter: Champion, secondCharacter: Environment[]) {
    super(firstCharacter);
    this.firstCharacter = firstCharacter;
    this.secondCharacter = secondCharacter;
  }

  fight(): number {
    const player1LifePoints = this.firstCharacter.lifePoints;
    const eviroment: Environment[] = this.secondCharacter;
    let eviromentLifePoints = 0;
    if (this.secondCharacter.length > 0) {
      eviromentLifePoints = eviroment
        .reduce((acc, curr) => acc + curr.lifePoints, 0);
    }
    if (player1LifePoints > eviromentLifePoints) return 1;
    if (eviromentLifePoints > player1LifePoints) return -1;
    return 0;
  }
}