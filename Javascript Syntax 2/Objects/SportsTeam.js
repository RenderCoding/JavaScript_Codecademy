// Create, Retrieve, Add
const team = {
    _players: [
      { firstname: "Shahid", lastname: "Afridi", age: 45 },
      { firstname: "Waqar", lastname: "Yonus", age: 55 },
      { firstname: "Wasim", lastname: "Akram", age: 50 },
    ],
    _games: [
      { opponent: "Virat", teamPoints: 2, opponentPoints: 1 },
      { opponent: "Koli", teamPoints: 3, opponentPoints: 4 },
      { opponent: "Raj", teamPoints: 5, opponentPoints: 2 },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this.games.push(game);
    },
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.players);
  team.addGame("Titans", 100, 98);
  