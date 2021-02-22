const express = require('express');

const app = express();


app.get('/decimalToBiner/:value', function (req, res) { 
  res.send(decimalToBiner(req.params.value));
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
