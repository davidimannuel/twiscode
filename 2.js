const express = require('express');

const app = express();


app.get('/:function/:value', function (req, res) { 
  switch (req.params.function) {
    case "decimalToBiner":
      res.send(decimalToBiner(req.params.value));
      break;
    case "binerToDecimal":
      res.send(binerToDecimal(req.params.value));
      break;
  
    default:
      res.status(404).send();
      break;
  }
})


app.listen('8080',() => {console.log('app listen on port 8080')} );

function decimalToBiner(decNum) {
  let binaryText = '';
  while (decNum != 0) {
    binaryText = binaryText.concat((decNum % 2).toString());
    decNum = parseInt(decNum / 2);
  }
  return binaryText.split('').reverse().join('');
}

function binerToDecimal(binNum) {
  return  binNum.split('').reverse()
    .map( (val,idx) => ( val * Math.pow(2,idx) ) )
      .reduce( (acc,curr) => (acc+curr) );
}

function palindromWord (word) {
  let clearWord = word.replace(/ /g,"");
  return ( clearWord === clearWord.split('').reverse().join('') ? "it is palindrom word" : "it isn't palindrom word");
    
}