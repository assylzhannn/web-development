a=int(input())
b=int(input())
for i in range(a,b,1):
    for j in range(1,i,1):
        if (j*j==i):
            print(i)