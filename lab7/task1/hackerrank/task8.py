import re
text = input()
numbers = re.split(r'[, .]', text)
for number in numbers:
    print(number)