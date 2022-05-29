function inBounds(s, left, right) {
	return left >= 0 && right < s.length;
}

function findEvenPalindrome(s, left, right) {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left--;
		right++;
	}
	return s.slice(left + 1, right);
}

function longestPalindrome(s) {
	if (s.length === 0) return '';
	if (s.length === 1) return s;

	let longest = '';

	let mid = Math.floor(s.length / 2);

	// for even searches
	let lIdx = mid - 1;
	let rIdx = mid;
	while (lIdx >= 0 && rIdx < s.length) {
		if (longest.length > lIdx * 2) break;
		if (inBounds(s, lIdx, lIdx + 1) && s[lIdx] === s[lIdx + 1]) {
			let palindrome = findEvenPalindrome(s, lIdx, lIdx + 1);
			if (palindrome.length > longest.length) {
				longest = palindrome;
			}
		}
		lIdx--;

		if (inBounds(s, rIdx - 1, rIdx) && s[rIdx] === s[rIdx - 1]) {
			let palindrome = findEvenPalindrome(s, rIdx - 1, rIdx);
			if (palindrome.length > longest.length) {
				longest = palindrome;
			}
		}
		rIdx++;
	}
}

longestPalindrome('cbbd');

// function isPalindrome(s) {
// 	let lIdx = 0;
// 	let rIdx = s.length - 1;

// 	while (lIdx < rIdx) {
// 		if (s[lIdx] !== s[rIdx]) {
// 			return false;
// 		}
// 		lIdx++;
// 		rIdx--;
// 	}

// 	return true;
// }

// function longestPalindrome(s) {
// 	if (!s || s.length === 0) {
// 		return '';
// 	}

// 	let longest = '';
// 	for (let i = 0; i < s.length; i++) {
// 		for (let j = i + 1; j <= s.length; j++) {
// 			const sub = s.slice(i, j);
// 			if (isPalindrome(sub) && sub.length > longest.length) {
// 				longest = sub;
// 			}
// 		}
// 	}

// 	return longest;
// }

module.exports.longestPalindrome = longestPalindrome;
