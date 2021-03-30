const tournament = require('./../src/tournament');

const expect = require('chai').expect;

describe('Tournament suite', () => {
  it('Must return error when entering a number of fighters other than 2 raised to x (x must be an integer> = 0)', () => {
    const fighters = [
      {
        name: 'Pepe',
        hp: 100,
        damage: [3, 4],
      },

      {
        name: 'Juan',
        hp: 50,
        damage: [1, 2],
      },

      {
        name: 'Leo',
        hp: 100,
        damage: [2, 5],
      },
    ];

    expect(tournament.bind(tournament, fighters)).to.throw(
      'The number of players of the tournament must be 2 raised to the x',
    );
  }); // 3 fighters.

  /*-----------------------*/

  it('If fighters array = 0 the test must return error', () => {
    expect(tournament.bind(tournament, [])).to.throw(
      'There must be a minimun of 1 fighter in the tournament',
    );
  }); // 0 fighters.

  /*-----------------------*/

  it("It should win the tournament the only fighter who's there", () => {
    const fighter = {
      name: 'Juan',
      hp: 100,
      damage: [3, 4],
    };

    expect(tournament([fighter])).to.deep.equal({
      winner: fighter.name,
    });
  }); // 1 fighter.

  /*-----------------------*/

  it('In a tournament of 8 fighters, the test must return only 1 winner', () => {
    const fighters = [
      {
        name: 'WOS',
        hp: 10,
        damage: [1, 2],
      },

      {
        name: 'Trueno',
        hp: 20,
        damage: [2, 3],
      },

      {
        name: 'Lit Killah',
        hp: 30,
        damage: [3, 4],
      },

      {
        name: 'Neo Pistea',
        hp: 40,
        damage: [2, 3],
      },

      {
        name: 'Ezequiel Jerez',
        hp: 1000,
        damage: [5, 6],
      },

      {
        name: 'YSY a',
        hp: 50,
        damage: [1, 2],
      },
      {
        name: 'C.R.O',
        hp: 60,
        damage: [2, 3],
      },

      {
        name: 'Duki',
        hp: 70,
        damage: [3, 4],
      },
    ];

    expect(tournament(fighters)).to.deep.equal({
      winner: 'Ezequiel Jerez',
    });
  }); // 8 fighters.
});
