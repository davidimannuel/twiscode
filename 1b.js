const { response } = require('express');
const express = require('express');

const app = express();


app.get('/binerToDecimal/:value', function (req, res) { 
  let response = binerToDecimal(req.params.value)
  res.json(response);
})


app.listen('8080',() => {console.log('app listen on port 8080')} );

function binerToDecimal(binNum) {
  return  binNum.split('').reverse()
    .map( (val,idx) => ( val * Math.pow(2,idx) ) ).reduce( (acc,curr) => (acc+curr) );
    ;
}
