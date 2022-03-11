import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  readonly race: Race;
  readonly archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this.race = new Elf(name, getRandomInt(1, 10));
    this.archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this.race.dexterity;
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
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
      return this._lifePoints;
    }
    if (this.defense <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): number {
    const { strength } = this;
    const damage = this.receiveDamage(strength);
    const reduceLife = enemy.lifePoints - damage;
    return reduceLife;
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += 1;
    this._energy.amount = 10;
    if (this._maxLifePoints < this.race.maxLifePoints) {
      this._maxLifePoints = this._lifePoints;
    } else {
      this._maxLifePoints = this.race.maxLifePoints;
    }
  }

  special(enemy: Fighter): void {
    console.log(`${this._maxLifePoints} ${enemy}`);
  }
} 