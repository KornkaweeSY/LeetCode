/* var intToRoman = function (num) {
    const intToRomanNumber = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        14: 'XIV',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }

    let result = '';
    const sortkey = Object.keys(intToRomanNumber).map(Number).sort((a, b) => b - a);
    for (let key of sortkey) {
        {
            while (num >= key) {
                result += intToRomanNumber[key];
                num -= key;
            }
        }
        return result;
    }
}

console.log(intToRoman(3)); // ans = "III"
console.log(intToRoman(4)); // ans = "IV"
console.log(intToRoman(9)); // ans = "IX"
console.log(intToRoman(58)); // ans = "LVIII"
console.log(intToRoman(1994)); // ans = "MCMXCIV"
 */

var intToRoman = function(num) {
    const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let roman = "";

    for (let i = 0; i < value.length; i++) {
        while (num >= value[i]) {
            roman += symbol[i];
            num -= value[i];
        }
    }
    return roman;
};

// 🔥 ทดสอบโค้ด
console.log(intToRoman(3));      // "III"
console.log(intToRoman(4));      // "IV"
console.log(intToRoman(9));      // "IX"
console.log(intToRoman(58));     // "LVIII"
console.log(intToRoman(1994));   // "MCMXCIV"
console.log(intToRoman(3999));   // "MMMCMXCIX"