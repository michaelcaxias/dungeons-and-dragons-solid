import Race from './Race';

export default class Orc extends Race {
  maxLifePoints = 74;
  name: string;
  dexterity: number;
  constructor(name: string, dextery: number) {
    super(name, dextery);
    this.name = name;
    this.dexterity = dextery;
  }
}