class solution:
    def romanToInt(x):
        roman_numbers = { 'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}
        result = 0
        for i in range(len(x)):
            if i > 0 and roman_numbers[x[i]] > roman_numbers[x[i-1]]:
                result += roman_numbers[x[i]] - 2 * roman_numbers[x[i-1]]
            else:
                result += roman_numbers[x[i]]
        return result
# Test
#solution 1
roman = "III"
print(solution.romanToInt(roman)) # 3

#solution 2
roman = "IV"
print(solution.romanToInt(roman)) # 4

#solution 3
roman = "LVIII"
print(solution.romanToInt(roman)) # 58

#solution 4
roman = "MCMXCIV"
print(solution.romanToInt(roman)) # 1994