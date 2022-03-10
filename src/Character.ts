import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  readonly race: Race;
  readonly archetype: Archetype;
  private maxLifePoints: number;
  readonly lifePoints: number;
  readonly strength: number;
  readonly defense: number;
  readonly dexterity: number;
  readonly energy: Energy;

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
      amount: getRandomInt(1, 10),
    };
  }

  // receiveDamage(attackPoints: number): void {

  // }

  // attack(enemy: Fighter): void {
      
  // }

  // levelUp(): void {
      
  // }

  // special(): void {

  // }
} 