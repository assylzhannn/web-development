def n_string(number):
    a=""
    for i in range(1,int(number)+1):
        a+=str(i)
        
    return a
number=input()
print(n_string(number))