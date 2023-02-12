const snumbers = [5,10,15,20,25];

const players = [
    {id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true,},
    {id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true,},
    {id: 'player-4', name: 'ajax', timePlayed: 150, points: 0, online: false,},
    {id: 'player-5', name: 'chelsey', timePlayed: 80, points: 48, online: true,},
  ];
  // console.table(players)

  const userStatistics = {
    users : [
   
        {
          name: "Moore Hensley",
          email: "moorehensley@indexia.com",
          eyeColor: "blue",
          friends: ["Sharron Pace"],
          isActive: false,  
          balance: 2811,
          gender: "male"
        },
        {
          name: "Sharlene Bush",
          email: "sharlenebush@tubesys.com",
          eyeColor: "blue",
          friends: ["Briana Decker", "Sharron Pace"],
          isActive: true,
          balance: 3821,
          gender: "female"
        },
        {
          name: "Ross Vazquez",
          email: "rossvazquez@xinware.com",
          eyeColor: "green",
          friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
          isActive: false,
          balance: 3793,
          gender: "male"
        },
        {
          name: "Elma Head",
          email: "elmahead@omatom.com",
          eyeColor: "green",
          friends: ["Goldie Gentry", "Aisha Tran"],
          isActive: true,
          balance: 2278,
          gender: "female"
        },
        {
          name: "Carey Barr",
          email: "careybarr@nurali.com",
          eyeColor: "blue",
          friends: ["Jordan Sampson", "Eddie Strong"],
          isActive: true,
          balance: 3951,
          gender: "male"
        },
        {
          name: "Blackburn Dotson",
          email: "blackburndotson@furnigeer.com",
          eyeColor: "brown",
          friends: ["Jacklyn Lucas", "Linda Chapman"],
          isActive: false,
          balance: 1498,
          gender: "male"
        },
        {
          name: "Sheree Anthony",
          email: "shereeanthony@kog.com",
          eyeColor: "brown",
          friends: ["Goldie Gentry", "Briana Decker"],
          isActive: true,
          balance: 2764,
          gender: "female"
        },
      ],
 
      getUserName() {
        const narray = []
        narray.push(this.users['name'])
        // console.log(this);
        return narray
},
}

 


//  const filteredSnumbers = snumbers.filter(num => {
//     console.log(num);
//     return num <10 || num > 20
//  })
// console.log(filteredSnumbers);

const filteredSnumbers2 = snumbers.filter(num => num < 10 || num > 20 );
// console.log(filteredSnumbers2);

 const onlinePlayers = players.filter(pla => pla.online)
//  console.table(onlinePlayers);

 const filteredpoints = players.filter(pla => pla.points >= 50)
//  console.table(filteredpoints)

 const filteredpoints2 = players.filter(pla => pla.points > 50 || pla.points <= 10)
//  console.table(filteredpoints2)

 const hardcorePlayers = players.filter(play  => play.timePlayed > 250)
//  console.table(hardcorePlayers);


//  ============================================
const atTheOldToad = {
	potions: [
		{ name: "Speed potion", price: 460 },
		{ name: "Dragon breath", price: 780 },
		{ name: "Stone skin", price: 520 },
	],
	// Change code below this line
	getPotions() {
		return this.potions;
	},

	addPotion(newPotion) {
		for (let i = 0; i < this.potions.length; i += 1) {
			const potion = this.potions[i];
			if (newPotion.name === potion.name) {
				return `Error! Potion ${newPotion.name} is already in your inventory!`;
			}
		}
		this.potions.push(newPotion);
		return this.potions;
	},

	removePotion(potionName) {
		for (let i = 0; i < this.potions.length; i += 1) {
			const potion = this.potions[i];
			if (potionName === potion.name) {
				this.potions.splice(i, 1);
				return this.potions;
			}
		}
		return `Potion ${potionName} is not in your inventory!`;
	},

	updatePotionName(oldName, newName) {
		for (let i = 0; i < this.potions.length; i += 1) {
			const potion = this.potions[i];
			if (oldName === potion.name) {
				potion.name = newName;
				return this.potions;
			}
		}
		return `Potion ${oldName} is not in your inventory`;
    },
    // Change code above this line
};


// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.table(atTheOldToad.getPotions());

// =============findIndex()=========================


const findUnFriends = [userStatistics.users.flatMap(u => u.friends)]

// const unFriends = findUnFriends.filter((friend,index,array) => array.indexOf(friend) === index)
// console.log(findUnFriends );


const countFriends = findUnFriends.reduce((acc,tag) => {

	if(acc[tag]) {
		        acc[tag] =0
		
		    }
		    acc[tag] += 1
		    return acc;
	
}, {} )
console.table(countFriends);

//const tagStats = allTags3.reduce((acc, tag) => {
    // console.log(acc);

//     if(acc[tag]) {
//         acc[tag] += 1;

//         return acc;
//     }
//     acc[tag] = 1
//     return acc;
// },{})



const lowBalance = userStatistics.users.filter(function(el,index,array) {
	// console.log(index);
	// console.log(array.indexOf(el));
	if (el.balance < 2300){
		return el['name'] 
	}

	// console.log(el['name']);
	// console.log(el['gender']);
	// console.log(el['eyeColor']);
	// console.log(el['email']);
	
	// console.log(el['isActive']);
    // console.log(el['balance']);
    // console.log(el['friends']);

	// console.log(name);
	// console.log(balance);
	
	
})
// console.table(lowBalance);

const allUsersNames = userStatistics.users.map(function(el,index,array) {
        return el.name
})
// console.log(allUsersNames);

const allUsersEmails = userStatistics.users.map(function(el,index,array) {
	return el.email
})
// console.log(allUsersEmails);

const allUsesrsBals = userStatistics.users.map(function(el,index,array) {
	return el['balance']
})
// console.log(allUsesrsBals);


const namePlusBalSelection = userStatistics.users.map(function({name,balance}, index,array){
	return {n: name, bal: balance}

},{})
// console.table(namePlusBalSelection);
// console.log((userStatistics.users[0]['friends']) );
// console.log(Object.keys(userStatistics.users[0]) );

const selectionOne =  userStatistics.users.filter(function(el,index,array){
    return	el['gender'] === 'male' &&  el.balance > 3000
	//    

})
// console.log(selectionOne);

   
const selectionSecond =  userStatistics.users.filter(function({name,gender,isActive},index) {
	// console.log(gender);
	return gender === 'male' && isActive === false
})
// console.table(selectionSecond);

const selectionNEB = userStatistics.users.map(function(el,index,array){
	return {n: el.name, e: el.email, bal: el.balance, }
})
// console.table(selectionNEB)

const selectionTwo = userStatistics.users.map(function(el,index,array){
	return {n: el.name, e: el.email, bal: el.balance, s: el.gender, city: 'Kharkiv'}
		
})
const selectionOfMen = selectionTwo.filter(function(el,index,array) {
	return el.s === 'male'
})
// console.table(selectionTwo);
// console.table(selectionOfMen);
//===========================friends========================================

const selectionOfFriends = function() {
	const allNewFriends = userStatistics.users.flatMap(function(el,index,array) {
		// console.log(el);
		return [...el.friends]
	})
	const uniqueFriends = allNewFriends.filter(function(el,index,array) {
		// console.log(index);
		// console.log(allNewFriends.indexOf(el));
	   return	index === allNewFriends.indexOf(el)
	 })

	return uniqueFriends
}        
// console.table(selectionOfFriends());

const firstNamePlusLastName = selectionOfFriends().map(function (el) {
	// console.log(el);
	return  el.split(' ')
})
// console.table(firstNamePlusLastName);//.join(' ')

const devidedFriendsNames = firstNamePlusLastName.map(function(el,index,array) {
	// console.log(el);
	return {firstName: el[0], lastName: el[1]}
})

// console.log(devidedFriendsNames);

console.log('========================');
//========================update users name=============================

const updateUsersName = function() {

	const splitedArray = userStatistics.users.map(function (el) {
		// console.log(el['name']);
		return  el['name'].split(' ')
	} )
	// console.log(splitedArray);
	const devidedNames = splitedArray.map(function (el,index,array) {
		// console.log(el);
		return {firstName: el[0], lastName: el[1]}
		// console.log(splitedArray);
		// return {firstName: el[0], lastName: el[1]}
	})
// console.log(devidedNames);
	
// const upnames = userStatistics.users.forEach(element => {
// 	const u = Object.assign(userStatistics.users, devidedNames)
// 	return u
// });
const upnames =[]
for (let i = 0; i < userStatistics.users.length; i+= 1 ) {
	
	const up = Object.assign(userStatistics.users[i], devidedNames[i])
	upnames.push(up)  //success 
}

	// console.log(upnames);
	return upnames
}//  return Object.assign(devidedNames, userStatistics.users )


// console.table(updateUsersName());   // splitedArray
// updateUsersName();   // splitedArray
// console.table(updateUsersName());
// console.log(updateUsersName());


// console.log(updateUsersName());
// console.table(updateUsersName());
//=============================================================== 

const checkEyeColor = userStatistics.users.filter(function(el,index,array){
	return (el.eyeColor === 'green')
}) 
// console.table(checkEyeColor);

const  {friends: fr} = userStatistics.users[0] 
// console.log(fr);

//    
// console.log(players[0]);
// console.log(devidedFriendsNames[1]);

const tempObj = Object.assign(players[1], devidedFriendsNames[1] )

// console.log(userStatistics.users[0])

const tag = new Set()
tag.add(5)
tag.add(5)
tag.add({g:5})
// console.log(tag);

