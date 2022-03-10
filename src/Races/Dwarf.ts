import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints = 80;
  name: string;
  dexterity: number;
  static numberOfInstances = 0;

  constructor(name: string, dextery: number) {
    super(name, dextery);
    this.name = name;
    this.dexterity = dextery;
    Dwarf.numberOfInstances += 1;
  }

  static createdRacesInstances():number {
    // a resposta da kariane.Langworth54 me ajudou
    // https://helperbyte.com/questions/461240/how-to-create-a-counter-class-to-count-how-many-times-it-is-called
    return this.numberOfInstances;
  }
}
