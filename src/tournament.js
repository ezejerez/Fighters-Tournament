const fightUntilNoDraw = require("./../src/fight_until_no_draw");

function isExponentOf2(number) {

  while (number > 1 && number % 1 === 0) {
    number /= 2;
  }

  if (number === 1) {
    return true;
  }

  return false;

};

module.exports = function (fighters) {
  if (fighters.length === 0) {
    throw new Error("There must be a minimun of 1 fighter in the tournament")
  };

  if (!isExponentOf2(fighters.length)) {
    throw new Error("The number of players of the tournament must be 2 raised to the x");
  };

  if (fighters.length === 1) {
    return { winner: fighters[0].name }
  };

  while (fighters.length > 1) {

    let winnerFighters = [];

    for (let i = 0; i < fighters.length; i += 2) {


      const fighter1 = fighters[i];
      const fighter2 = fighters[i + 1];

      const result = fightUntilNoDraw(fighter1, fighter2);

      const winner = result.winner === fighter1.name ? fighter1 : fighter2;

      winnerFighters.push(winner);
    }

    fighters = winnerFighters;
  };

  return {
    winner: fighters[0].name
  }
};
