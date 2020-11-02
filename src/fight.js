module.exports = function (fighter1, fighter2) {
  let hpOfFighter1 = fighter1.hp;
  let hpOfFighter2 = fighter2.hp;

  const fighter1Wins = {
    winner: fighter1.name,
    loser: fighter2.name,
    tie: false,
  };

  const fighter2Wins = {
    winner: fighter2.name,
    loser: fighter1.name,
    tie: false,
  };

  const tie = {
    winner: null,
    loser: null,
    tie: true,
  };

  //----------------

  function dmg(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  } // It's the damage that the fighters make.

  //----------------

  function isMultiple(value, multiple) {
    return value % multiple == 0;
  } // Returns if the number of the turn is multiple of 5. Returns true or false.

  //----------------

  let i = 1; // The turns.

  while (hpOfFighter1 > 0 && hpOfFighter2 > 0) {
    if (isMultiple(i, 5)) {
      /*   console.log(
        "Fin del round. Los jugadores recuperan 2 de vida y no sufren daño hasta el próximo turno."
      ); */
      hpOfFighter1 += 2;
      hpOfFighter2 += 2;
    } else {
      hpOfFighter1 = hpOfFighter1 - dmg(fighter2.damage[0], fighter2.damage[1]);
      hpOfFighter2 = hpOfFighter2 - dmg(fighter1.damage[0], fighter1.damage[1]);
    }

    i++;
  } // The combat and the rounds. Every 5 turns the players recover 5hp and they not suffer any damage until the next turn.

  if (hpOfFighter1 <= 0 && hpOfFighter2 <= 0) {
    return tie;
  } else if (hpOfFighter1 > hpOfFighter2) {
    return fighter1Wins;
  } else {
    return fighter2Wins;
  } // The winner or the tie.
};
