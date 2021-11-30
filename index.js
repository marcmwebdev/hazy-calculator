const operations = ['+', '*', '-', '/'];



const cook = () => {}



const fanOut = (arr, cb) => {
  const output = [];

  for (var i = 0; i < array.length; i++) {
    output.push(cb(array[i]));
  }

  return output;
}

const isVegitarian = () => {}


const eat = () => {}
// reduce(['🍔', '🍟', '🍗', '🍿'], eat) => 💩

function calculator(arr) {
   
    const end = arr[arr.length - 1]; // => 4

  
    let operation = null; 
    arr.filter((item) => {
      operations.forEach(x => {
        if (x === item) {
          operation = item; 
        }
      });
    });

   

    
    let cleanArray = [...arr]; // cleanArray => ['2', '*', 4] <= clean copy

   
    cleanArray.pop(); 

   
    let cleanNumbers = cleanArray.filter(x => x !== operation);

    
    if (operation === '*') { 
      let firstNumber; 
      cleanNumbers.forEach(x => {
        
        const currentIndex = parseInt(x);

        if (!isNaN(currentIndex)) {
          firstNumber = currentIndex;
        }

      });
     

      return firstNumber * end;
    } 

    if (operation === '+') { 
      let firstNumber;
      let endNumber = end || 0;
      cleanNumbers.forEach(x => {
        const currentIndex = parseInt(x);

        if (!isNaN(currentIndex)) {
          firstNumber = currentIndex;
        }

      });

      return firstNumber += endNumber;
    } // code block end

    if (operation === '-') { // code block start for our subtraction
      let firstNumber;
      let endNumber = end || 0;
      cleanNumbers.forEach(x => {
        const currentIndex = parseInt(x);

        if (!isNaN(currentIndex)) {
          firstNumber = currentIndex;
        }

      });

      return firstNumber - endNumber;
    }

    if (operation === '/') { 
      let firstNumber;
      let endNumber = end || 0;
      cleanNumbers.forEach(x => {
        const currentIndex = parseInt(x);

        if (!isNaN(currentIndex)) {
          firstNumber = currentIndex;
        }

      });

      return firstNumber / endNumber;
    } 
   
    return NaN;
}

module.exports = calculator;