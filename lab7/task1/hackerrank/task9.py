s = input()
is_true= False
for i in range(len(s)-1):
    if (s[i]=="." or s[i]=="_"):continue
    if s[i]==s[i+1]:
        print(s[i])
        is_true = True
        break

if (is_true== False): print(-1)
    