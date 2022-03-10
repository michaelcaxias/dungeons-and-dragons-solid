import Race from './Race';

export default class Elf extends Race {
  maxLifePoints = 99;
  constructor() {
    super('Elf', 5);
  }
}