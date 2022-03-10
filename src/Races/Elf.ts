import Race from './index';

export default class Elf extends Race {
  maxLifePoints = 99;
  constructor() {
    super('Elf', 5);
  }
}