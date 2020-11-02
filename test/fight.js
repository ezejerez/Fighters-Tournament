const fight = require("./../src/fight");

const expect = require("chai").expect;

describe("Fight suite", () => {
  it("Deberá ganar Pepe y deberá perder Juan", () => {
    const pepe = {
      name: "Pepe",
      hp: 100,
      damage: [3, 4],
    };

    const juan = {
      name: "Juan",
      hp: 50,
      damage: [1, 2],
    };

    expect(fight(pepe, juan)).to.deep.equal({
      winner: "Pepe",
      loser: "Juan",
      tie: false,
    });
  }); // Gana solo uno o el otro.

  /*-----------------------*/

  it("La pelea entre Pepe y Juan deberá resultar en empate", () => {
    const pepe = {
      name: "Pepe",
      hp: 100,
      damage: [10, 10],
    };

    const juan = {
      name: "Juan",
      hp: 100,
      damage: [10, 10],
    };

    expect(fight(pepe, juan)).to.deep.equal({
      winner: null,
      loser: null,
      tie: true,
    });
  }); // Empate.
});
