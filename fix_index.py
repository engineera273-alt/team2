import os

file_path = "index.html"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

bad_code = """      const exist = reg.findIndex(u => u.name === n && u.subject === ms);
      if (exist === -1) reg.push({
        name: n, subject: ms, time: n    document.getElementById('startMockExam').onclick = () => { alert('تجهيز امتحان 15 سؤال...'); window.location.href = `quiz.html?name=${encodeURIComponent((JSON.parse(localStorage.getItem('teamUser')) || {}).name || 'Guest')}&subject=MockExam`; };"""

good_code = """      const exist = reg.findIndex(u => u.name === n && u.subject === ms);
      if (exist === -1) {
        reg.push({ name: n, subject: ms, time: now });
      }
      saveRegisteredNames(reg);
      showRegisteredNames();
      window.location.href = `quiz.html?name=${encodeURIComponent(n)}&subject=${encodeURIComponent(ms)}`;
    });

    document.getElementById('startMockExam').onclick = () => { alert('تجهيز امتحان 15 سؤال...'); window.location.href = `quiz.html?name=${encodeURIComponent((JSON.parse(localStorage.getItem('teamUser')) || {}).name || 'Guest')}&subject=MockExam`; };"""

if bad_code in text:
    text = text.replace(bad_code, good_code)
    print("Code successfully replaced.")
else:
    print("Could not find the target corrupted block.")

end_idx = text.find('</html>')
if end_idx != -1:
    text = text[:end_idx + len('</html>')] + '\\n'
    print("File properly truncated at </html>")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)
