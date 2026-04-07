n=int(input())
cnt=0
for i in range(0,n,1):
    x=int(input())
    if(x==0):
        cnt+=1
print(cnt)