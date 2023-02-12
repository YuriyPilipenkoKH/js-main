const snumbers = [5,10,15,20,25];

const players = [
    {id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true,},
    {id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true,},
    {id: 'player-4', name: 'ajax', timePlayed: 150, points: 0, online: false,},
    {id: 'player-5', name: 'chelsey', timePlayed: 80, points: 48, online: true,},
  ];
  console.table(players)


  const isAllOnline = players.every(pla => pla.online)
  console.log(isAllOnline);

  const isAnyOnline = players.some(pla => pla.online)
  console.log(isAnyOnline);

const anyHardcoredPlayers = players.some(pla => pla.timePlayed > 400)
console.log(anyHardcoredPlayers);