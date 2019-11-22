var dictionary = require('./dictionary.json');

var sampleSize = 10;
var i = 0;
var sample = {};
for (var p in dictionary) {
  if (i < sampleSize) {
    sample[p] = dictionary[p];
    i++;
  } else {
    break;
  }
}

console.log(JSON.stringify(sample));
