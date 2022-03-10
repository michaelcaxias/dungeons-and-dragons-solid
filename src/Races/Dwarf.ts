import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints = 80;
  name: string;
  dexterity: number;
  constructor(name: string, dextery: number) {
    super(name, dextery);
    this.name = name;
    this.dexterity = dextery;
  }
}