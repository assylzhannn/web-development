def make_tags(tag,text):
    return f"'<{tag}>{text}</{tag}>'"

print(make_tags("i",'Yay'))