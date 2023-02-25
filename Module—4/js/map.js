// ========================MAP==========================

const players = [
    {id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true,},
    {id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true,},
    {id: 'player-4', name: 'ajax', timePlayed: 150, points: 71, online: false,},
    {id: 'player-5', name: 'chelsey', timePlayed: 80, points: 48, online: true,},
  ];
  console.table(players)
  
  const playersNames = players.map(player => {
    // console.log(player);
    return player.name
  })
  // console.log('playersNames',playersNames);
  
  const playersNames2 = players.map(player => player.name);
  // console.log(playersNames2);
  
  const playerIds = players.map(player => player.id)
  // console.log(playerIds);
  
   const sample1 = players.map(player => {
    return {
      name: player.name,
      online: player.online,
    };
   }) ;
  //  console.table(sample1);
  
   const sample2 = players.map(({name, online}) => ({ name,online, }));
  //  console.table(sample2);
  
    const updatedPlayers = players.map(player => {
      // console.log(player);
      return  {
        ...player,
        points:player.points*1.1,
      }
    })
    // console.table(updatedPlayers);
  
    // update 1 player of all
    const playerIdToUpdate = 'player-3';
  
  // const updatedPlayers2 = players.map(player => {
  //   console.log(player.id);
  
  //   if (playerIdToUpdate === player.id) {
  //     console.log('found our player');  
  
  //     return 'new obj'
  //   }
  //   return player
  // })
  // console.table(updatedPlayers2)
  
  const updatedPlayers3 = players.map(player => {
    // console.log(player.id);
  
    if (playerIdToUpdate === player.id) {
      // console.log('found our player');  
  
      return {
        ...player,
        timePlayed: player.timePlayed+1000,
      }
    }
    return player
  })
  // console.table(updatedPlayers3)
  
  const updatedPlayers4 = players.map(player => {
  
    return playerIdToUpdate === player.id
    ? {
      ...player,
      timePlayed: player.timePlayed + 1000
    }
    : player
  });
   
  // console.table(updatedPlayers4)