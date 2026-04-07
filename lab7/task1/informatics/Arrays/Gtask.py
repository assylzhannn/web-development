n=int(input())
arr=[]
for i in range(n):
    element=int(input())
    arr.append(element)
for i in range(n-1,-1,-1):
    print(arr[i])