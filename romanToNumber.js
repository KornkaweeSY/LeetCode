var romanToInt = function(s) {
    const romanNumber = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (i >0 && romanNumber[s[i]] > romanNumber[s[i - 1]]) {
            result += romanNumber[s[i]] - 2 * romanNumber[s[i - 1]];
        } else {
            result += romanNumber[s[i]];
        }
    }
    return result;
};

console.log(romanToInt('III')); // ans = 3
console.log(romanToInt('IV')); // ans = 4
console.log(romanToInt('LVIII')); // ans = 58
console.log(romanToInt('MCMXCIV')); // ans = 1994

/* อธิบายการทำงาน
    1. สร้าง object ชื่อ romanNumber ที่มี key เป็นตัวอักษร และ value เป็นตัวเลข
    2. สร้างตัวแปร result มาเก็บค่า
    3. วนลูปตามความยาวของ s
    4. ถ้า i มากกว่า 0 และ romanNumber[s[i]] มากกว่า romanNumber[s[i - 1]] ให้ result เพิ่มขึ้นด้วยค่า romanNumber[s[i]] ลบด้วย 2 ครั้งของ romanNumber[s[i - 1]]
    4.1 เช่น กรณี 'IV' ค่า I มีค่า 1 จะเก็บใน result = 1 และ V มีค่า 5 จะเก็บใน result = 5 แต่ต้องลบ 2 ครั้งของ I ออก จะได้ 4 คือ 1 + (5 - 2 * 1) = 4
    5. ถ้าไม่ใช่ให้ result เพิ่มขึ้นด้วยค่า romanNumber[s[i]]
    6. return result
*/


