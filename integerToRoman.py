class solution:
    def intToRoman(num):
        roman_numbers = { 1 : 'I', 4 : 'IV', 5 : 'V', 9 : 'IX', 10 : 'X', 40 : 'XL', 50 : 'L', 90 : 'XC', 100 : 'C', 400 : 'CD', 500 : 'D', 900 : 'CM', 1000 : 'M'}
        result = ""
        for i in sorted(roman_numbers.keys(), reverse = True):
            while num >= i:
                result += roman_numbers[i]
                num -= i
        return result
# Test
#solution 1
print(solution.intToRoman(3)) # "III"
print(solution.intToRoman(4)) # "IV"
print(solution.intToRoman(1998)) # "IX"
print(solution.intToRoman(58)) # "LVIII"