const isAnagram = (word, otherWord) => word.split('').sort().join('') === otherWord.split('').sort().join('');

const anagrams = (word, words) => words.filter(isAnagram.bind(null, word));

module.exports.anagrams = anagrams;
module.exports.isAnagram = isAnagram;
