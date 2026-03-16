n=int(input())
arr=[]
for i in range(n):
    element=int(input())
    arr.append(element)
for i in range(n):
    if(arr[i]%2==0):
        print(arr[i])