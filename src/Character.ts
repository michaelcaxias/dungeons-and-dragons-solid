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

  receiveDamage(attackPoints: number) {
    let { lifePoints } = this;
    if (attackPoints > 0) {
      lifePoints -= 1;
      if (lifePoints <= 0) {
        lifePoints = -1;
      }
      return lifePoints;
    }
    return lifePoints;
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
    enemy.energy = { type_: 'mana', amount: 500 };
    console.log(`Olá, ${this.race}, sua energia foi revigorada!`);
  }
} 