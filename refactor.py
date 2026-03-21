import re

file_path = r'd:\موقع تيم بتاعنا\index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix infinite loop
content = content.replace(
    'saveRegisteredNames(validUsers); // نظّف القديم',
    'if (validUsers.length !== users.length) saveRegisteredNames(validUsers); // نظّف القديم فقط'
)

# 2. Fix the Headers
content = content.replace(
'''              <th># المحاضرة</th>
              <th>Section</th>
              <th>المادة</th>
              <th>رابط الملخص</th>
              <th>رابط الريكورد</th>''',
'''              <th>م.</th>
              <th>المادة</th>
              <th>فولدر الماتيريال والملخصات</th>
              <th>فولدر ريكوردات المحاضرات</th>'''
)

# 3. Replace the massive 40-lecture body
pattern = r'<!-- Programming 2 - 10 محاضرات -->.*?<!-- Discrete Math - 10 محاضرات -->.*?</tr>'
replacement = r'''<tr>
              <td>1</td>
              <td style="font-weight: bold; color: #1d4ed8;">Programming 2 (OOP)</td>
              <td><a href="https://drive.google.com/drive/folders/1q6Pj04kaE-6e2rE2eKPbs9hPoliHaXsH" target="_blank" style="display:inline-block; background: #10b981; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(16,185,129,0.3);">تحميل الماتيريال 📁</a></td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #3b82f6; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(59,130,246,0.3);">بلاي ليست الريكوردات 📺</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td style="font-weight: bold; color: #1d4ed8;">Logic Design</td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #10b981; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(16,185,129,0.3);">تحميل الماتيريال 📁</a></td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #3b82f6; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(59,130,246,0.3);">بلاي ليست الريكوردات 📺</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td style="font-weight: bold; color: #1d4ed8;">Math 2</td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #10b981; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(16,185,129,0.3);">تحميل الماتيريال 📁</a></td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #3b82f6; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(59,130,246,0.3);">بلاي ليست الريكوردات 📺</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td style="font-weight: bold; color: #1d4ed8;">Operation Research</td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #10b981; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(16,185,129,0.3);">تحميل الماتيريال 📁</a></td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #3b82f6; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(59,130,246,0.3);">بلاي ليست الريكوردات 📺</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td style="font-weight: bold; color: #1d4ed8;">Discrete Math</td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #10b981; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(16,185,129,0.3);">تحميل الماتيريال 📁</a></td>
              <td><a href="#" target="_blank" style="display:inline-block; background: #3b82f6; color: white; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(59,130,246,0.3);">بلاي ليست الريكوردات 📺</a></td>
            </tr>'''
content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixes applied successfully.")
