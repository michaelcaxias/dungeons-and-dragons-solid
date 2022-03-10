import Race from './index';

export default class Orc extends Race {
  maxLifePoints = 74;
  constructor() {
    super('Orc', 5);
  }
}