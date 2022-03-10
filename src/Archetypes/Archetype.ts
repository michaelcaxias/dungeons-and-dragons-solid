import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;
  static numberOfInstances = 0;

  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
    Archetype.numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  abstract get energyType(): EnergyType;
}