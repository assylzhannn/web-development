def big_diff(nums):
    max=nums[0]
    min=nums[0]

    for num in nums:
        if max<num:
            max=num
        if min>num:
            min=num
    return max-min

print(big_diff([1,2,3,4]))