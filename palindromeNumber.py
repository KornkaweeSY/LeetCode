class solution:
    def isPalindrome(x):
        if x < 0:
            return False
        else:
            return str(x) == str(x)[::-1]
# Test
#solution 1
num = 12321
print(solution.isPalindrome(num)) # True