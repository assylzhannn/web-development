n=int(input())
arr=[]
cnt=0
for i in range(n):
    element=int(input())
    arr.append(element)
for i in range(1,n-1):
    if(arr[i-1]<arr[i] and arr[i]>arr[i+1]):
        cnt+=1
print(cnt)