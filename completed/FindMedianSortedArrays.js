function mergeSortedArrays(nums1, nums2) {
	let mergedArr = [];

	let i = 0;
	let j = 0;

	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) {
			mergedArr.push(nums1[i]);
			i++;
		} else {
			mergedArr.push(nums2[j]);
			j++;
		}
	}

	while (i < nums1.length) {
		mergedArr.push(nums1[i]);
		i++;
	}

	while (j < nums2.length) {
		mergedArr.push(nums2[j]);
		j++;
	}

	return mergedArr;
}

function findMedianSortedArrays(nums1, nums2) {
	// write your code here
	let mergedArr = mergeSortedArrays(nums1, nums2);

	if (mergedArr.length % 2 === 0) {
		return (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) / 2;
	}

	return mergedArr[Math.floor(mergedArr.length / 2)];
}

module.exports.findMedianSortedArrays = findMedianSortedArrays;
