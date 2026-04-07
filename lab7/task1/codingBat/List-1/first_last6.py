def first_last6(nums):
    return(nums[0]==6 or nums[len(nums)-1]==6)
user_input = input()
nums = list(map(int, user_input.split()))
print(first_last6(nums))