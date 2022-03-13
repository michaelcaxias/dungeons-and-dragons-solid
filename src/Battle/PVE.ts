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
    eviroment.forEach((monster) => {
      monster.receiveDamage(this.firstCharacter.strength);
      monster.attack(this.firstCharacter);
    });
    return player1LifePoints > 0 ? 1 : -1;
  }
}