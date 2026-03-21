import os

path = r"d:\موقع تيم بتاعنا\index.html"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the LAST occurrence of 'updateUI();' that is inside a script tag.
# We want the one that is part of our GOOD block.
target_line = -1
for i, line in enumerate(lines):
    if "updateUI();" in line and "</script>" in lines[i+1] and "</body>" in lines[i+2]:
        target_line = i
        break

if target_line != -1:
    # We want to keep up to i+3 (the first </html>)
    good_lines = lines[:target_line + 4]
    # Ensure the last line transitions correctly
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        f.writelines(good_lines)
    print(f"SUCCESS: Truncated at line {target_line + 4}")
else:
    print("ERROR: Could not find the structural markers for truncation.")
