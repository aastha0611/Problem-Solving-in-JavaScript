var findPairs = function(arr, k) {
//given an array of random integers, output all the pairs that add to a given sum k.
    var left = 0,
        length = arr.length;
        right = length - 1,
        arrReturn = [];

    arr.sort();

    while (left < right) {
        var currentSum = arr[left] + arr[right];
        if (currentSum === k) {
            arrReturn.push(arr[left] + " + " + arr[right]);
            left += 1;
            right-=1
        } else if ( currentSum < k) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return arrReturn;
}


findPairs([1,2,3,4,5,6,7,8,9,0], 10);