def is_leap(year):
    leap = False  # ตั้งค่าเริ่มต้นให้เป็น False

    if year % 4 == 0:  # หาร 4 ลงตัว
        if year % 100 == 0:  # หาร 100 ลงตัว
            if year % 400 == 0:  # หาร 400 ลงตัว (เป็น leap year)
                leap = True
        else:
            leap = True  # หาร 4 ลงตัว แต่ไม่หาร 100 ลงตัว (เป็น leap year)

    return leap  # คืนค่า True หรือ False

year = int(input())  # รับค่าปีจากผู้ใช้
print(is_leap(year))  # แสดงผล
