/* function ispalindromeNumber(x) {
    let str = x.toString();
    return str === str.split('').reverse().join('');
}

console.log(ispalindromeNumber(121)); // true
console.log(ispalindromeNumber(123)); // false
console.log(ispalindromeNumber(-121)); // false */

var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false; // ตัวเลขติดลบและเลขลงท้ายด้วย 0 (ยกเว้น 0 เอง) ไม่ใช่ palindrome

    let reversed = 0, original = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;  // ดึงหลักสุดท้ายมาต่อท้ายตัวเลขที่กลับด้าน
        x = Math.floor(x / 10);  // ตัดหลักสุดท้ายออก
    }
    return original === reversed; // เปรียบเทียบกับค่าต้นฉบับ
};

console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false
