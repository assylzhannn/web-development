def front_times(str, n):
    result=""
    if len(str)>3:
        str=str[:3]
    for i in range(n):
        result+=str
    return result
print(front_times('Hihhh',2))
print(front_times('Abc',3))