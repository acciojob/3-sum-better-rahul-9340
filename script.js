function threeSum(arr,target) {
  const n = arr.length;
  let closestdiff = Infinity;
  let closestsum;
arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

   while (left < right) {
  let sum = arr[i] + arr[left] + arr[right];
  let currentdiff = Math.abs(sum - target);

  if (sum === target) {
    return target; 
  }
		
  if (currentdiff < closestdiff) {
    closestdiff = currentdiff;
    closestsum = sum;
  }

  if (sum < target) {
    left++;
  } else {
    right--; 
  }
}
}


  return closestsum;
}
 module.exports = threeSum;
