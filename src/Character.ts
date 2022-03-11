import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  readonly race: Race;
  readonly archetype: Archetype;
  readonly maxLifePoints: number;
  readonly lifePoints: number;
  readonly strength: number;
  readonly defense: number;
  readonly dexterity: number;
  readonly energy: Energy;

  constructor(name: string) {
    this.race = new Elf(name, 0);
    this.archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this.lifePoints = this.race.maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this.dexterity = this.race.dexterity;
    this.energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  receiveDamage(attackPoints: number) {
    const damage = Math.abs(this.defense - attackPoints);
    if (damage > 0) {
      this.defense -= attackPoints;
      if (this.defense <= 0) {
        this.defense = -1;
      }
      return this.defense;
    }
    return this.defense;
  }

  attack(enemy: Fighter): number {
    const { strength } = this;
    enemy.receiveDamage(strength);
    return enemy.lifePoints;
  }

  levelUp(): void {
    let { maxLifePoints, strength, dexterity, defense } = this;
    maxLifePoints += 1;
    strength += 1;
    dexterity += 1;
    defense += 1;
    console.log(`
      Sua vida: ${maxLifePoints},
      Força: ${strength}
      Destresa: ${dexterity}
      Defesa: ${defense}
    `);
  }

  special(enemy: Fighter): void {
    console.log(`${this.maxLifePoints} ${enemy}`);
  }
} 