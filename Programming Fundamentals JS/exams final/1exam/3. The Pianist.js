function demo(arr) {

  let numPieces = arr.shift();

  class Piece {
    constructor(name, composer, key) {
      this.name = name
      this.composer = composer
      this.key = key
    }
  }

  let listPieces = arr.slice(0, numPieces)
  let arrPieces = []
  let allNamesInList = []

  listPieces.forEach(element => {
    let [name, composer, key] = element.split('|')
    let newObj = new Piece(name, composer, key)
    arrPieces.push(newObj)
  });

  for (let el of arrPieces) {
    allNamesInList.push(el.name)
  }

  let arrCommands = arr.slice(numPieces)
  let index = 0
  let command = arrCommands[index];

  while (command !== 'Stop') {

    let pieceInfo = command.split("|")

    let commandWord = pieceInfo.shift()

    if (commandWord === 'Add') {
      let [name, composer, key] = pieceInfo
      if (!allNamesInList.includes(name)) {
        let obj = new Piece(name, composer, key);
        arrPieces.push(obj)
        allNamesInList.push(name)
        console.log(`${name} by ${composer} in ${key} added to the collection!`);
      } else {
        console.log(`${name} is already in the collection!`);
      }
    }
    else if (commandWord === "Remove") {
      let name = pieceInfo.join('')
      if (allNamesInList.includes(name)) {
        for (let el of arrPieces) {
          if (el.name === name) {
            let indexOfEl = arrPieces.indexOf(el);
            arrPieces.splice(indexOfEl, 1)
            let indexInAllName = allNamesInList.indexOf(name);
            allNamesInList.splice(indexInAllName, 1)
            console.log(`Successfully removed ${name}!`);
          }
        }
      } else {
        console.log(`Invalid operation! ${name} does not exist in the collection.`);
      }
    }
    else if (commandWord === 'ChangeKey') {
      let counter = 0
      let [name, key] = pieceInfo
      for (let el of arrPieces) {
        isValid = false
        if (el.name === name) {
          el.key = key
          // console.log(`Changed the key of ${name} to ${key}!`);
          isValid = true
          break;
        }  //else {

        // counter++
        // if (counter === arrPieces.length) {
        //   console.log(`Invalid operation! ${name} does not exist in the collection.`);
        // } else {
        //   continue;
        // }
        //}
        
      }
      if (isValid) {
        console.log(`Changed the key of ${name} to ${key}!`);
      } else {
        console.log(`Invalid operation! ${name} does not exist in the collection.`);
      }
    }
    index++;
    command = arrCommands[index];
  }
  if (command === 'Stop') {
    for (let el of arrPieces) {
      console.log(`${el.name} -> Composer: ${el.composer}, Key: ${el.key}`);
    }
  }
}

demo([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|ferteMoonlight Sonata|C# Major',
  'Stop'
])