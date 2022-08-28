function secondsToRemoveOccurences(s) {
  let count = 0;
  while (/(01)/g.test(s)) {
    count++;
    s = s.replace(/(01)/g, '10');
  }
  return count;
}

secondsToRemoveOccurences('0110101');

module.exports.secondsToRemoveOccurences = secondsToRemoveOccurences;
