def xor(x,y):
    if((x==1 and y==0) or (x==0 and y==1)):
        return(1)
    else: return(0)
x=int(input())
y=int(input())
print(xor(x,y))