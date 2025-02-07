var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''; // ถ้าไม่มีค่าให้ return '' ค่าว่าง

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) { // วนลูปตามความยาวของ strs
        while (!strs[i].startsWith(prefix)) {  // ตรวจสอบค่า prefix ว่าตรงกับค่าของ strs ที่ index i หรือไม่ ถ้าไม่ตรงให้เข้าไปทำใน while เช่น กรณี "flower" กับ "flow" ไม่ตรงกัน จะเข้าไปทำใน while check flower ว่าตรงกับ flow หรือไม่ 
            prefix = prefix.slice(0, prefix.length - 1); // check แล้วไม่ตรงกัน ให้ลบตัวสุดท้ายออก
            if (!prefix.length) return '';
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

/* อธิบายการทำงาน
    1. ถ้าไม่มีค่าให้ return ''
    2. สร้างตัวแปร prefix มาเก็บค่าของ strs ที่ index 0
    3. วนลูปตามความยาวของ strs
    4. ตรวจสอบค่า prefix ว่าตรงกับค่าของ strs ที่ index i หรือไม่ ถ้าไม่ตรงให้เข้าไปทำใน while เช่น กรณี "flower" กับ "flow" ไม่ตรงกัน จะเข้าไปทำใน while check flower ว่าตรงกับ flow หรือไม่ ถ้าไม่ต้องจะ ลบ r ออก เหลือ flowe แล้วเช็คว่า flowe ตรงกับ flow หรือไม่ ถ้าไม่ต้องจะลบ e ออก เหลือ flow แล้วเช็คว่า flow ตรงกับ flow หรือไม่ ถ้าตรงกันจะออกจาก while
    5. return prefix
*/