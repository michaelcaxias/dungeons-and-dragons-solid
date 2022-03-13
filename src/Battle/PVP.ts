import Battle from './Battle';
import Character from '../Character';
import Fighter from '../Fighter/Fighter';

type Champion = Character | Fighter;

export default class PVP extends Battle {
  firstCharacter: Champion;
  secondCharacter: Champion;
  constructor(firstCharacter: Champion, secondCharacter: Champion) {
    super(firstCharacter);
    this.firstCharacter = firstCharacter;
    this.secondCharacter = secondCharacter;
  }

  fight(): number {
    const { firstCharacter, secondCharacter } = this;
    // if both characters lifes are greather than  0, the fight happens
    while (firstCharacter.lifePoints > 0 && secondCharacter.lifePoints > 0) {
      firstCharacter.attack(secondCharacter);
      secondCharacter.attack(firstCharacter);
    }
    // if firstCharacter life are greater than 0, firstCharacter wins with 1, otherwise loses with -1
    return firstCharacter.lifePoints > 0 ? 1 : -1;
  }
}