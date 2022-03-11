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
    const player1LifePoints = this.firstCharacter.lifePoints;
    const player2LifePoints = this.secondCharacter.lifePoints;
    // if player 1 wins, returns 1
    if (player1LifePoints > player2LifePoints) return 1;
    // if player 2 wins, returns -1
    if (player2LifePoints > player1LifePoints) return -1;
    // otherwise returns 0
    return 0;
  }
}