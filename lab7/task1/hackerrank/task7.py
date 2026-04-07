import re
def is_valid_float(s):
    pattern = r'^[+-]?\d*\.\d+$'
    return re.match(pattern, s) is not None

def main():
    t = int(input().strip())
    for _ in range(t):
        s = input().strip()
        print("True" if is_valid_float(s) else "False")
if __name__=="__main__":
    main()