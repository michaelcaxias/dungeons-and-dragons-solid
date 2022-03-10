import Race from './Race';

export default class Elf extends Race {
  maxLifePoints = 99;
  name: string;
  dexterity: number;
  constructor(name: string, dextery: number) {
    super(name, dextery);
    this.name = name;
    this.dexterity = dextery;
  }
}