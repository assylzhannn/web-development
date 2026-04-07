n=int(input())
arr=[]
cnt=0
for i in range(n):
    element=int(input())
    arr.append(element)
for i in range(n-1):
    if(arr[i]==arr[i+1]):
        cnt+=1
if(cnt>0):print("YES")
else:print("NO")