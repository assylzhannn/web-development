def min_of_4(numbers):
    min=numbers[0]
    for number in numbers:
        if(min>number):
            min=number
    return min
arr=[]
for i in range(4):
    element=int(input())
    arr.append(element)
print(min_of_4(arr))