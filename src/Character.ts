import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 0);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }

  public get defense() : number {
    return this._defense;
  }

  public get dexterity() : number {
    return this._dexterity;
  }

  public get energy() : Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number) {
    const damage = Math.abs(this._defense - attackPoints);
    if (damage > 0) {
      this._defense -= attackPoints;
      if (this.defense <= 0) {
        this._defense = -1;
      }
      return this._defense;
    }
    return this._defense;
  }

  attack(enemy: Fighter): number {
    const { strength } = this;
    enemy.receiveDamage(strength);
    return enemy.lifePoints;
  }

  levelUp(): void {
    this._maxLifePoints += 1;
    this._strength += 1;
    this._dexterity += 1;
    this._defense += 1;
    console.log(`
      Sua vida: ${this._maxLifePoints},
      Força: ${this._strength}
      Destresa: ${this._dexterity}
      Defesa: ${this._defense}
    `);
  }

  special(enemy: Fighter): void {
    console.log(`${this.maxLifePoints} ${enemy}`);
  }
} 