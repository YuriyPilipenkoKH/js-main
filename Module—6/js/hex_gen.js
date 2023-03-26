export { generator}

function getRandomHexColor() {
    return `${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)
     }`;
}

function hexToRgb(hex){
      const converter = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)];
      const keep = [];
      let i = 0;
      
      converter.forEach(element => {
      keep[i] = parseInt(element, 16);
      i+=1; 
      });
      
      return (keep.join()); 
}    

function getValues() {
        let hexValue  =  getRandomHexColor()
        let rgbValue = hexToRgb(hexValue)

       const ary = [hexValue, rgbValue]
       return ary
}

// console.log(getValues());


function generator (amount) {
console.log(amount);

const cards = [...Array(amount)]
      .map(el =>{ 
       const ary = getValues()

        return el = {
        hex: `${ary[0]}`,
        rgb: `${ary[1]}`,

      }})
// console.log(cards);
return cards
}      


