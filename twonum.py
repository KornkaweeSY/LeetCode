
# Nested for loop solution (O(n^2))
class solution:
    def twoSum(nums, target):
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
                

# Hash table solution (O(n))
# class solution:
#     def twoSum(nums, target):
#         hash_table = {}
#         for i in range(len(nums)):
#             if nums[i] in hash_table:
#                 return [hash_table[nums[i]], i]
#             else:
#                 hash_table[target - nums[i]] = i       


# Test
#solution 1
nums = [2, 7, 11, 15]
target = 9
result = solution.twoSum(nums, target)
# print(solution.twoSum(nums, target))
print(f"Input: {nums}, Target: {target} => Output: {result}")

#solution 2
nums = [3, 2, 4]
target = 6
result = solution.twoSum(nums, target)
# print(solution.twoSum(nums, target))
print(f"Input: {nums}, Target: {target} => Output: {result}")

#solution 3
nums = [3, 3]
target = 6
print(solution.twoSum(nums, target))

#solution 4
nums = [3, 2, 3, 4]
target = 6
print(solution.twoSum(nums, target))

