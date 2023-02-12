const snumbers = [5,10,15,20,25];

const players = [
    {id: 'player-1', name: 'mango', timePlayed: 310, points: 54, online: false,},
    {id: 'player-2', name: 'poly', timePlayed: 470, points: 92, online: true,},
    {id: 'player-3', name: 'kiwi', timePlayed: 230, points: 48, online: true,},
    {id: 'player-4', name: 'ajax', timePlayed: 150, points: 0, online: false,},
    {id: 'player-5', name: 'chelsey', timePlayed: 80, points: 48, online: true,},
  ];
//   console.table(players) 

//    const total = snumbers.reduce((acc, num) => {
//     console.log('number', num);
//     console.log('acc', acc);

//     return 100
//    }, 2)

//    console.log(total);

const total2 = snumbers.reduce((acc, num) => {
    // console.log('number', num);
    // console.log('acc', acc);

    return acc + num
   }, 0)
   console.log(total2);

const total3 = snumbers.reduce((acc,num) => acc + num ,0)
// console.log(total3);

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
}

console.log(Object.values(salary));
const totalSalary = Object.values(salary).reduce((acc,value) => {
    return acc + value
},0)
console.log(totalSalary);

 const totalTimePlayed = players.reduce((totaltime,player) => 
 totaltime + player.timePlayed, 0
 );
 console.log(totalTimePlayed);

 const totalTimePlayed2 = players.reduce((totalTime,{timePlayed}) =>
 totalTime + timePlayed, 0,
 )
 console.log(totalTimePlayed2);


 const cart = [
    {label: 'apples', price: 100, quantity: 2 },
    {label: 'bananas', price: 120, quantity: 3 },
    {label: 'lemons', price: 70, quantity: 4 },
 ]

 const totalAmount = cart.reduce((total,item) => {
    return total + item.price * item.quantity;
 },0)
 console.log(totalAmount);

const totalAmount2 = cart.reduce((total,{price,quantity}) => 
     total + price * quantity ,0)
//  console.log(totalAmount2);
 
const tweets = [
    {id: '001', likes: 5, tags: ['js','nodejs',]},
    {id: '002', likes: 2, tags: ['html','css',]},
    {id: '003', likes: 17, tags: ['html','js', 'nodejs']},
    {id: '004', likes: 8, tags: ['css','react',]},
    {id: '005', likes: 0, tags: ['js','nodejs','react',]},
];

const allTags = tweets.reduce((tag,tweet) => {
    tag.push(tweet.tags);
    return tag
}, []); 

console.log(allTags);

const allTags2 = tweets.reduce((tag,tweet) => {
    tag.push(...tweet.tags);
    return tag
}, []); 

// console.log(allTags2);

//================== apropreate way================
const allTags3 = tweets.reduce((tag,tweet) => [...tag, ...tweet.tags], []); 

console.log(allTags3);

const tagStats = allTags3.reduce((acc, tag) => {
    // console.log(acc);

    if(acc[tag]) {
        acc[tag] += 1;

        return acc;
    }
    acc[tag] = 1
    return acc;
},{})

// console.table(tagStats)

//===========immutable================
const tagStats2 = allTags3.reduce(
    (acc, tag) => ({
 
        ...acc,
        [tag]: acc[tag] 
        ? acc[tag] + 1 
        : 1

}), {})

console.table(tagStats2)