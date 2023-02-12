const snumbers = [5,10,15,20,25];

const players = [
    {id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true,},
    {id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true,},
    {id: 'player-4', name: 'ajax', timePlayed: 150, points: 0, online: false,},
    {id: 'player-5', name: 'chelsey', timePlayed: 80, points: 48, online: true,},
  ];
  console.table(players)

   const sNum = snumbers.find(num => num >10)
   console.log(sNum);

   const playerToFind = 'player-2'
//    const playerWithId = players.find(pla => pla.id === playerToFind)
//   console.log(playerWithId);

// const playerWithId2 = players.find(({id}) => id === playerToFind)
// console.log(playerWithId2);

const playerNameToFind = 'kiwi'
// const playerWithName = players.find(pla => pla.name = playerNameToFind)
// console.log(playerWithName);

// const findPlayerByID = (onePlayer, playerId) => {
//     return onePlayer.find(pla => pla.id === playerId);

// };
// console.log(findPlayerByID(players, 'player-1'));
// console.log(findPlayerByID(players, 'player-2'));


const findPlayerByName  = (onePlayer) => {
    onePlayer.find(pla => pla.name === playerNameToFind);
};
console.log(findPlayerByName(players));