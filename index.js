const tournament = require("./src/tournament")

const fighters = [
  {
    name: "WOS",
    hp: 10,
    damage: [1, 2],
  },

  {
    name: "Trueno",
    hp: 20,
    damage: [2, 3],
  },

  {
    name: "Lit Killah",
    hp: 30,
    damage: [3, 4],
  },

  {
    name: "Neo Pistea",
    hp: 40,
    damage: [2, 3],
  },

  {
    name: "PussyDestroyer666",
    hp: 1000,
    damage: [5, 6],
  },

  {
    name: "YSY a",
    hp: 50,
    damage: [1, 2],
  },
  {
    name: "C.R.O",
    hp: 60,
    damage: [2, 3],
  },

  {
    name: "Duki",
    hp: 70,
    damage: [3, 4],
  },
];

const result = tournament(fighters);