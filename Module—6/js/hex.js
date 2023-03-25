export {getRandomHexColor,generator}

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
      
      let hexValue  =  getRandomHexColor()
      let rgbValue = hexToRgb(hexValue)

      console.log('hex:',hexValue,'rgb:',rgbValue);

      const car = []

function generator (amount) {
console.log(amount);

const ary = [...Array(amount)]
      .map(el => el = {
        hex: `${hexValue}`,
        rgb: `${rgbValue}`,
      })
console.log(ary);
}      


export const cards = [
      {
        hex: '222222',
        rgb: '000',
      },
      {
        hex:'777777',
        rgb: '000',
      },
      {
        hex: 'a1a1a1',
        rgb: '000',
      }
     ]