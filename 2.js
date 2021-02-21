const express = require('express');

const app = express();


app.get('/palindrom/:value', function (req, res) { 
  res.send(longestPalindrome(req.params.value));
})


app.listen('8080',() => {console.log('app listen on port 8080')} );

function longestPalindrome(s) {
  if (s.length < 1) {
    return "";
  } else {
    s = s.replace(/ /g,"");
  };
  let maxSubStart = 0;
  let maxSubLength = 0;
  for (let i = 0; i < s.length; i++) {
    const lengthCenteredAtChar = expandAroundCenter(s, i, i);
    const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
    const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
    if (longestSubAtChar > maxSubLength) {
      maxSubLength = longestSubAtChar;
      maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
    }
  }
  return s.substr(maxSubStart, maxSubLength);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
