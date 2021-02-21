const express = require('express');

const app = express();


app.get('/binerToDecimal/:value', function (req, res) { 
 let result = binerToDecimal(req.params.value);
 console.log(result);
 res.send('hello');
})


app.listen('8080',() => {console.log('app listen on port 8080')} );

function binerToDecimal(binNum) {
  return  binNum.split('').reverse()
    .map( (val,idx) => ( val * Math.pow(2,idx) ) ).reduce( (acc,curr) => (acc+curr) );
    ;
}
