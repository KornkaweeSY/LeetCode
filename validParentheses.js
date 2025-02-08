var isValid = function(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    } // สร้าง object ชื่อ map ที่มี key (ช่องแรก สามารถเก็บเป็น string หรือ symbol) เป็นตัวเลข และ value เป็นตัวอักษร

    for (let i = 0 ; i < s.length; i++) { // วนลูปตามความยาวของ s
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') { // ถ้า s[i] เป็น ( หรือ [ หรือ { ให้ push ค่า s[i] เข้าไปใน stack
            stack.push(s[i]); // ใช้ push เพื่อเพิ่มค่าใน stack (push คือการเพิ่มค่าใน stack)
        } else {
            let last = stack.pop(); // ถ้าไม่ใช่ให้ pop ค่าสุดท้ายออกมาเก็บไว้ในตัวแปร last (pop คือการลบค่าสุดท้ายออกจาก stack)
            if (s[i] !== map[last]) { // ถ้า s[i] ไม่เท่ากับ map[last] ให้ return false
                return false;
            }
        }
    }
    return stack.length === 0; // ถ้า stack มีค่าเท่ากับ 0 ให้ return true
}

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid("{[]}")); // true
console.log(isValid("{[}]")); // false


/* function isValid(s) {
    let stack = [];
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// ทดสอบฟังก์ชัน
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("{[]}"));      // true
console.log(isValid("{[}]"));      // false */


