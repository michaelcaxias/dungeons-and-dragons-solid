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
}