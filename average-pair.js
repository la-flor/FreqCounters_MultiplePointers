function averagePair(arr, avg) {
    // first return false if the length of the array does not allow for a pair
    if (arr.length < 2) return false;
    /* since the average of a pair is the sum divided by 2
        we will calculate the sum, and look for that to find the pair that matches */
    const total = avg * 2
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === total) return true;
        if (sum < total) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

module.exports = { averagePair }