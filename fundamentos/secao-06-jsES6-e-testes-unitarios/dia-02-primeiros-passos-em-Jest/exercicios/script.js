// myRemove.js

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
  // myFizzBuzz.js
  
  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

  // encodeDecode.js

const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join('');
}

const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

const techList = (arrayTechs, name) => {
  if(arrayTechs.length === 0) return 'Vazio!';

  const ordemArray = arrayTechs.sort(); 
  let listaTecnologia = [];

  for (let index = 0; index < ordemArray.length; index += 1) {
    listaTecnologia.push({
      tech: ordemArray[index],
      name,
    });
  }
  return listaTecnologia;
}

const hydrate = (string) => {
  if (string === '1 cerveja') {
    return '1 copo de água'
  }
}

module.exports = {
  myRemove, 
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate
};
