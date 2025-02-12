


var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1, 2, _]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]

