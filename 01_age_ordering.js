data = [
  ['Frank', 33],
  ['Stacy', 15],
  ['Juan', 24],
  ['Dom', 32],
  ['Steve', 24],
  ['Jill', 24]
];

var sortedPairs = data.sort(function(pairone, pairtwo){
  return pairone[1] - pairtwo[1];
});

var namesWithAges = sortedPairs.map(function(pair){
  return pair[0] + ' (' + pair[1] + ')';
});

var sortedByName = sortedPairs.sort(function(a, b){
  return a[0] - b[0];
});

var sortedObj = {};
data.forEach(function(pair){
  if (sortedHash[pair[1]] === undefined){
    sortedHash[pair[1]] = [];
    sortedHash[pair[1]].push(pair[0])
  } else {
    sortedHash[pair[1]].push(pair[0])
  }
});
