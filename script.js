function threeSum(arr,target) {
  const n = arr.length;
  let closestdiff = Infinity;
  let closestsum;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      let currentdiff = Math.abs(sum - target);

      if (currentdiff < closestdiff) {
        closestdiff = currentdiff;
        closestsum = sum;
      }

      if (sum === target) {
        return target; // Return the target sum instantly when found
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestsum; // Return the closest sum when target sum is not found
}

let arr = [1, 2, 5, 2, 2];
console.log(threeSum(arr, 5)); // Returns 5 because it found the target sum

