var searchInsert = function(nums, target) {
    let left = 0 ;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // คำนวนค่า mid โดยใช้ Math.floor ให้ได้ค่าจำนวนเต็ม แล้วไปเช็คเงื่อนไขต่อ
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}


console.log(searchInsert([1, 3, 5, 6], 5));


