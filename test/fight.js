const fight = require('./../src/fight');

const expect = require('chai').expect;

describe('Fight suite', () => {
  it('Pepe must win and Juan must lose', () => {
    const pepe = {
      name: 'Pepe',
      hp: 100,
      damage: [3, 4],
    };

    const juan = {
      name: 'Juan',
      hp: 50,
      damage: [1, 2],
    };

    expect(fight(pepe, juan)).to.deep.equal({
      winner: 'Pepe',
      loser: 'Juan',
      tie: false,
    });
  }); // Win just one or the other.

  /*-----------------------*/

  it('The fight between Pepe and Juan must result in a draw', () => {
    const pepe = {
      name: 'Pepe',
      hp: 100,
      damage: [10, 10],
    };

    const juan = {
      name: 'Juan',
      hp: 100,
      damage: [10, 10],
    };

    expect(fight(pepe, juan)).to.deep.equal({
      winner: null,
      loser: null,
      tie: true,
    });
  }); // Draw.
});
