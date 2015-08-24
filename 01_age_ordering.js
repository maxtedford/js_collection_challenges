data = [
  ['Frank', 33],
  ['Stacy', 15],
  ['Juan', 24],
  ['Dom', 32],
  ['Steve', 24],
  ['Jill', 24]
]

var sortedPairs = data.sort(function(pairone, pairtwo){
  return pairone[1] - pairtwo[1];
});

var finalList = sortedPairs.map(function(pair){
  return pair[0];
});
