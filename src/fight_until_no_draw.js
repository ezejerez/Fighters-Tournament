const fight = require("./fight");

module.exports = function (fighter1, fighter2, randomFunction = Math.random) {
  let fightResult;

  let i = 0;

  function randomWinner() {
    const theFighters = [fighter1.name, fighter2.name];

    return theFighters[Math.floor(randomFunction() * theFighters.length)];
  }

  //---------------

  do {
    fightResult = fight(fighter1, fighter2);
    i++;
    if (i === 5) { break; };
  } while (fightResult.tie);

  if (fightResult.tie) {
    const winner = randomWinner();
    return {
      winner: winner,
      loser: winner === fighter1.name ? fighter2.name : fighter1.name,
      fights: i,
    }
  }

  return {
    winner: fightResult.winner,
    loser: fightResult.loser,
    fights: i,
  }
};
