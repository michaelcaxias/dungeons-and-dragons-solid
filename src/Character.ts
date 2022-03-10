import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';

export default class Character implements Fighter {
  private race: Race;
  private archetype: Archetype;
  private maxLifePoints: number;
  private lifePoints: number;
  private strength: number;
  private defense: number;
  private dexterity: number;
  private energy: Energy;

  constructor() {
    this.race = new Elf('', 0);
    this.archetype = new Mage('');
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this.lifePoints = this.race.maxLifePoints;
    this.strength = 0;
    this.defense = 0;
    this.dexterity = this.race.dexterity;
    this.energy = {
      type_: this.archetype.energyType,
      amount: 0,
    };
  }
} 