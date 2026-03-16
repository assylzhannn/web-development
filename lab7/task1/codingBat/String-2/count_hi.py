def count_hi(str):
    cnt=0
    for char in range(len(str)-1):
        if str[char]=='h' and str[char+1]=='i':
            cnt+=1
    return cnt

print(count_hi("abs hi"))