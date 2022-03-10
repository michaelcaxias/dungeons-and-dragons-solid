import Race from './index';

export default class Halfling extends Race {
  maxLifePoints = 60;
  constructor() {
    super('Halfling', 5);
  }
}