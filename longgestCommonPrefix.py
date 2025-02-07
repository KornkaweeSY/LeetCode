class solution: 
    @staticmethod
    def longestCommonPrefix(strs):
        if not strs:
            return ""
        prefix = strs[0] # set the first string as the prefix
        for i in strs[1:]:
            while not i.startswith(prefix):
                prefix = prefix[: -1]
                if not prefix:
                    return ""
        return prefix


# Test
#solution 1
strs = ["flower", "flow", "flight"]
print(solution.longestCommonPrefix(strs)) # "fl"