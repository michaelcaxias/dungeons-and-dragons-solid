import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints = 60;
  name: string;
  dexterity: number;
  constructor(name: string, dextery: number) {
    super(name, dextery);
    this.name = name;
    this.dexterity = dextery;
  }
}