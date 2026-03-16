import math;
a=int(input("enter a:"))
b=int(input("enter b:"))
if (a<1000 and b<1000):
    print((a*a+b*b)**0.5)
else:
    print("a and b should be under 100")
