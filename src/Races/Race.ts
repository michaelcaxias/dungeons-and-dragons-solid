export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;

  constructor(name: string, dextery: number) {
    this.name = name;
    this.dexterity = dextery;
  }

  static createdRacesInstances():number {
    throw Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}