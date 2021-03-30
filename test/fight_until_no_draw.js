const fightUntilNoDraw = require('./../src/fight_until_no_draw');

const expect = require('chai').expect;

describe('fight_until_no_draw suite', () => {
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

    expect(
      fightUntilNoDraw(pepe, juan, function () {
        return 0.2;
      }),
    ).to.deep.equal({
      winner: 'Pepe',
      loser: 'Juan',
      fights: 1,
    });
  });

  /*-----------------------*/

  it('it must win a random fighter among those who fought in case of tying 5 times', () => {
    const pepe = {
      name: 'Pepe',
      hp: 50,
      damage: [4, 4],
    };

    const juan = {
      name: 'Juan',
      hp: 50,
      damage: [4, 4],
    };

    expect(
      fightUntilNoDraw(pepe, juan, function () {
        return 0.2;
      }),
    ).to.deep.equal({
      winner: 'Pepe',
      loser: 'Juan',
      fights: 5,
    });

    expect(
      fightUntilNoDraw(pepe, juan, function () {
        return 0.8;
      }),
    ).to.deep.equal({
      winner: 'Juan',
      loser: 'Pepe',
      fights: 5,
    });
  });
});
