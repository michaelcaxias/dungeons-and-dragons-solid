import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints = 60;
  constructor() {
    super('Halfling', 5);
  }
}