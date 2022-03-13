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
    while (firstCharacter.lifePoints > 0 && secondCharacter.lifePoints > 0) {
      firstCharacter.attack(secondCharacter);
      secondCharacter.attack(firstCharacter);
    }

    return firstCharacter.lifePoints > 0 ? 1 : -1;
  }
}