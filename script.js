function threeSum(arr, target)  {
	let closestsum  = Infinity;
	let finalsum;
  for (let i = 0; i < arr.length - 2; i++) {
    let sum = 0;
    for (let j = i; j <= i + 2; j++) {
      sum += arr[j];
    }
    if (sum === target) {
      return sum;
    }

   let currentDiff = Math.abs(sum - target);

    if (currentDiff < Math.abs(closestSum - target)) {
      closestSum = sum;
    }
  }

  return closestSum; // Return the closest sum found when the exact target sum is not found.
}

module.exports = threeSum;

  

// let arr = [1, 2, 4, 3];
// console.log(threeSum(arr, 5));
