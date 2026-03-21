const quizData = {
  'C++': [
    {q:'Which line is correct to start a C++ program?', options:['#include <iostream>','using namespace std;','int main()','cout << "Hello";'], answer:'#include <iostream>'},
    {q:'What statement enables cout without std:: prefix?', options:['#include <iostream>','using namespace std;','std::cout','namespace std;'], answer:'using namespace std;'},
    {q:'What is the correct signature for the main function?', options:['main() {}','int main() {}','void main[]','function main()'], answer:'int main() {}'},
    {q:'How do you print text to the console?', options:['print("hi");','cout << "hi";','console.log("hi");','printf("hi");'], answer:'cout << "hi";'},
    {q:'The correct way to declare an integer variable x is:', options:['int x;','x int;','int = x;','int(x);'], answer:'int x;'},
    {q:'How to assign value 5 to variable x?', options:['x = 5;','int x = 5','x <- 5','5 = x;'], answer:'x = 5;'},
    {q:'Which is a float variable declaration?', options:['float y;','int y;','string y;','double y;'], answer:'float y;'},
    {q:'How to read user input into variable a?', options:['cin >> a;','cout >> a;','scanf("%d", &a);','cin << a;'], answer:'cin >> a;'},
    {q:'Which symbol ends a statement in C++?', options:[';','.',':','?'], answer:';'},
    {q:'How do you write a single-line comment?', options:['// comment','/* comment */','# comment','<!-- comment -->'], answer:'// comment'},
    {q:'How to declare a function named add that takes two ints?', options:['int add(int a, int b);','function add(int a, int b);','add(int a, int b);','int add(a, b);'], answer:'int add(int a, int b);'},
    {q:'How to define the function add that returns a+b?', options:['int add(int a, int b) { return a + b; }','int add(int a, int b) => a + b;','function add(int a, int b){return a+b;}','add(int a, int b){return a+b;}'], answer:'int add(int a, int b) { return a + b; }'},
    {q:'How to call function add with 2 and 3?', options:['add(2,3);','add 2, 3;','add{2,3};','add(2 3);'], answer:'add(2,3);'},
    {q:'How does function return value to caller?', options:['return value;','end value;','stop value;','output value;'], answer:'return value;'},
    {q:'Which is correct to define a void function?', options:['void printMessage() { cout << "Hi"; }','void printMessage[] { cout << "Hi"; }','void printMessage() : cout << "Hi";','printMessage() { cout << "Hi"; }'], answer:'void printMessage() { cout << "Hi"; }'},
    {q:'Which is call by value example?', options:['int r = add(x, y);','int &r = add(x,y);','int r = &add(x,y);','int r = add(&x,&y);'], answer:'int r = add(x, y);'},
    {q:'How to declare a constant int MAX with value 100?', options:['const int MAX = 100;','int const MAX=100','#define MAX 100','const MAX = 100;'], answer:'const int MAX = 100;'},
    {q:'Which is correct array declaration?', options:['int arr[5];','int arr();','arr int[5];','int arr{5};'], answer:'int arr[5];'},
    {q:'How to initialize array values at declaration?', options:['int arr[3] = {1,2,3};','int arr = {1,2,3};','int arr[3] = [1,2,3];','int arr(3)={1,2,3};'], answer:'int arr[3] = {1,2,3};'},
    {q:'How to loop over array of 5 ints using for?', options:['for(int i=0;i<5;i++) cout<<arr[i];','for(i=0;i<=5;i++) cout<<arr[i];','for(int i=1;i<=5;i++) cout<<arr[i];','for(int i=5;i>0;i--) cout<<arr[i];'], answer:'for(int i=0;i<5;i++) cout<<arr[i];'},
    {q:'How to declare a function that returns double?', options:['double avg(int a,int b);','int avg(int a,int b);','void avg(int a,int b);','avg(int a,int b) -> double;'], answer:'double avg(int a,int b);'},
    {q:'What is the correct include for string type?', options:['<string>','<iostream>','<vector>','<sstream>'], answer:'<string>'},
    {q:'How to use the string type?', options:['string name;','String name;','str name;','char name;'], answer:'string name;'},
    {q:'Which is right to define function that returns square of n?', options:['int square(int n) { return n * n; }','int square(int n) { return n + n; }','square(int n) { return n*n; }','int square(n) => n*n;'], answer:'int square(int n) { return n * n; }'},
    {q:'Which is correct default return for main?', options:['return 0;','return 1;','exit(0);','None;'], answer:'return 0;'},
    {q:'Function with no parameter and no return should be declared as:', options:['void hello()','int hello()','hello()','function hello()'], answer:'void hello()'},
    {q:'Which option declares a reference parameter?', options:['void update(int &x)','void update(int x)','void update(int *x)','void update(reference x)'], answer:'void update(int &x)'},
    {q:'How to pass argument by value?', options:['add(2, 3);','add(&a, &b);','add(a, b);','add(*a, *b);'], answer:'add(a, b);'},
    {q:'How to declare a pointer to an integer?', options:['int *ptr;','int ptr*;','pointer<int> ptr;','int ^ptr;'], answer:'int *ptr;'},
    {q:'What is the valid C++ header include syntax?', options:['#include <iostream>','#include "iostream"','import iostream;','using <iostream>;'], answer:'#include <iostream>'}
  ],
  'Logic Design': [
    {q:'ماذا يعني boolean algebra؟', options:['حساب حقيقي','حساب دوائي','حساب ضرب','حساب قوى'], answer:'حساب دوائي'},
    {q:'البوابة NOT ينتج:', options:['0 عندما الإدخال 1','1 عندما الإدخال 1','0 دائما','1 دائما'], answer:'0 عندما الإدخال 1'},
    {q:'بوابة AND تعطي 1 عندما:', options:['كل الإدخالات 1','إدخال واحد 1','كل الإدخالات 0','إدخال واحد 0'], answer:'كل الإدخالات 1'},
    {q:'بوابة OR تعطي 0 عندما:', options:['كل المدخلات 0','مدخل واحد 1','كل المدخلات 1','مدخلات مختلفة'], answer:'كل المدخلات 0'},
    {q:'التمثيل المبدئي ل XOR هو:', options:['A•B + A•¬B','A+B','A•B','¬A + B'], answer:'A•B + A•¬B'},
    {q:'في جدول الحقيقة A OR B إذا A=1 B=0 النتيجة=', options:['0','1','غير معرف','A'], answer:'1'},
    {q:'الـ De Morgan يعبر عن:', options:['مُركب','حقيقة','قواعد تحويل','نقطة التوصيل'], answer:'قواعد تحويل'},
    {q:'تقليل التعبير المنطقي هدفه:', options:['زيادة التعقيد','تبسيط الدارة','إلغاء القرارات','تغيير الإدخالات'], answer:'تبسيط الدارة'},
    {q:'بوابة NAND هي:', options:['عكس AND','عكس OR','AND و OR','لا شيء'], answer:'عكس AND'},
    {q:'بوابة NOR تنتج 1 عندما:', options:['كلها 0','كلها 1','واحد 1 فقط','مزيج غير محدد'], answer:'كلها 0'}
  ],
  'Math 2': [
    {q:'العلاقة المثلثية sin(π/2)=', options:['0','1','-1','غير معرف'], answer:'1'},
    {q:'d/dx x^2 =', options:['x','2x','x^2','2'], answer:'2x'},
    {q:'مجموع الأعداد من 1 إلى 10 هو', options:['50','55','45','60'], answer:'55'},
    {q:'إذا f(x)=x+1 فـ f(2)=', options:['1','2','3','4'], answer:'3'},
    {q:'التكامل ∫1 dx =', options:['x + C','1','0','2x'], answer:'x + C'},
    {q:'جذر 16 هو', options:['2','3','4','5'], answer:'4'},
    {q:'2^3 =', options:['5','6','7','8'], answer:'8'},
    {q:'المتسلسلة 1+1+1 =', options:['1','2','3','غير منتهية'], answer:'3'},
    {q:'الزاوية القائمة درجة', options:['45','90','180','30'], answer:'90'},
    {q:'إذا x=3 و y=4 فـ x^2+y^2 =', options:['5','12','25','7'], answer:'25'}
  ],
  'Operation Research': [
    {q:'الهدف في linear programming هو', options:['زيادة أو تقليل دالة هدف','إنشاء مخطط','كتابة معادلات فقط','حل دروس'], answer:'زيادة أو تقليل دالة هدف'},
    {q:'أداة simplex تستخدم لـ', options:['حل معادلات غير خطية','تحسين خطي','رسم المربعات','حساب المشتقات'], answer:'تحسين خطي'},
    {q:'قيود problem تسمى', options:['constraints','variables','objective','outcome'], answer:'constraints'},
    {q:'متغيرات القرار عادة تكون', options:['ثابتة','قابلة للتغيير','بحجم ثابت','خارجية'], answer:'قابلة للتغيير'},
    {q:'حلfeasible يعني', options:['قابل للتطبيق','غير قابل للتطبيق','مثالي','أولي'], answer:'قابل للتطبيق'},
    {q:'المنطقة المسموح بها تسمى', options:['feasible region','objective area','core set','base'], answer:'feasible region'},
    {q:'انتهى من memilih', options:['لا شيء','حل أمثل','خطأ','متداخل'], answer:'حل أمثل'},
    {q:'متغير slack يُضاف لتحويل', options:['= إلى ≤','≤ إلى =','≥ إلى ≤','< إلى >'], answer:'≤ إلى ='},
    {q:'زيادة في d تابع بالأحرى تؤثر على', options:['الحل','المتغيرات','القيود','المدخلات'], answer:'الحل'},
    {q:'إذا objective = max 2x+3y فإن القيمة الأكبر تعتمد على', options:['x و y',' فقط x',' فقط y','الثوابت'], answer:'x و y'}
  ]
};

const WEBHOOK_URL = "https://discord.com/api/webhooks/1484167207687557153/Tc61jKdrPxVPuItINgmBomuQcmuqq0EYWgZWA5RQ3-Rzdo_JPe2A_-sSsL6RJpJS74ZK";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const subject = urlParams.get('subject');

  if (!name || !subject) {
    alert("بيانات الكويز ناقصة، سيتم إعادتك للرئيسية.");
    window.location.href = "index.html";
    return;
  }

  let activeQuiz;
  if (subject === 'MockExam') {
    // Generate mock exam questions from all subjects
    const allQuestions = [];
    Object.keys(quizData).forEach(subj => {
      quizData[subj].forEach(q => {
        allQuestions.push({ ...q, q: `[${subj}] ${q.q}` });
      });
    });
    // Pick 15 random
    activeQuiz = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 15);
  } else if (!quizData[subject]) {
    alert("المادة غير موجودة، سيتم إعادتك للرئيسية.");
    window.location.href = "index.html";
    return;
  } else {
    activeQuiz = quizData[subject].slice();
  }

  // Prevent retaking the quiz
  let existingData;
  try { existingData = JSON.parse(localStorage.getItem('surveyLeaderboard') || '[]'); } catch(e) { existingData = []; }
  if (existingData.find(item => item.name === name && item.subject === subject) && name !== 'Ahmed Elshahat') {
    alert('لقد قمت باختبار هذه المادة من قبل، لا يمكنك إعادتها لتعديل النتيجة!');
    window.location.href = "index.html";
    return;
  }
  let currentQ = 0;
  let currentScore = 0;
  let wrongAnswers = [];
  let userAnswers = Array(activeQuiz.length).fill(null);

  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const nextQuestion = document.getElementById('nextQuestion');
  const prevQuestion = document.getElementById('prevQuestion');
  const quizProgressText = document.getElementById('quizProgressText');
  const progressBar = document.getElementById('progressBar');
  
  const quizContainer = document.getElementById('quizContainer');
  const resultContainer = document.getElementById('resultContainer');
  
  const resName = document.getElementById('resName');
  const resSubject = document.getElementById('resSubject');
  const progressCircle = document.getElementById('progressCircle');
  const scoreText = document.getElementById('scoreText');
  const scoreTotal = document.getElementById('scoreTotal');
  const feedbackMsg = document.getElementById('feedbackMsg');
  const resRank = document.getElementById('resRank');
  const resPoints = document.getElementById('resPoints');
  const returnHome = document.getElementById('returnHome');
  const viewMistakesBtn = document.getElementById('viewMistakesBtn');
  const mistakesArea = document.getElementById('mistakesArea');

  function renderQuestion() {
    if (currentQ >= activeQuiz.length) {
      finishQuiz();
      return;
    }
    const item = activeQuiz[currentQ];
    quizQuestion.innerText = `${currentQ + 1}. ${item.q}`;
    quizOptions.innerHTML = item.options.map((opt) => {
      const isChecked = userAnswers[currentQ] === opt ? 'checked' : '';
      const selectedClass = userAnswers[currentQ] === opt ? 'selected' : '';
      return `<label class="option-label ${selectedClass}" dir="auto" style="unicode-bidi: plaintext;"><input type="radio" name="quizOption" value="${opt.replace(/"/g, '&quot;')}" ${isChecked}> <span dir="auto">${opt}</span></label>`;
    }).join('');

    // Add active state styles
    document.querySelectorAll('input[name="quizOption"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        document.querySelectorAll('.option-label').forEach(lbl => lbl.classList.remove('selected'));
        if(e.target.checked) e.target.closest('.option-label').classList.add('selected');
      });
    });

    if (currentQ > 0) {
      prevQuestion.style.display = 'inline-block';
    } else {
      prevQuestion.style.display = 'none';
    }
    
    if (currentQ === activeQuiz.length - 1) {
      nextQuestion.innerText = 'إنهاء الكويز';
    } else {
      nextQuestion.innerText = 'التالي';
    }

    quizProgressText.innerText = `سؤال ${currentQ + 1} من ${activeQuiz.length}`;
    
    // Smooth progress bar update
    setTimeout(() => {
      progressBar.style.width = `${((currentQ) / activeQuiz.length) * 100}%`;
    }, 50);
  }

  nextQuestion.addEventListener('click', () => {
    const selected = document.querySelector('input[name="quizOption"]:checked');
    if (!selected) {
      alert('رجاءً اختر إجابة قبل الانتقال للسؤال التالي.');
      return;
    }
    userAnswers[currentQ] = selected.value;

    if (currentQ < activeQuiz.length - 1) {
      currentQ++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  });

  prevQuestion.addEventListener('click', () => {
    const selected = document.querySelector('input[name="quizOption"]:checked');
    if (selected) userAnswers[currentQ] = selected.value;
    
    if (currentQ > 0) {
      currentQ--;
      renderQuestion();
    }
  });

  function finishQuiz() {
    // Calculate final score based on stored answers
    currentScore = 0;
    wrongAnswers = [];
    activeQuiz.forEach((item, i) => {
      if (userAnswers[i] === item.answer) {
        currentScore++;
      } else {
        wrongAnswers.push({
          q: item.q,
          user: userAnswers[i] || 'لم يُجب',
          correct: item.answer
        });
      }
    });

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    // Update variables
    resName.innerText = name;
    resSubject.innerText = subject;
    scoreText.innerText = currentScore;
    scoreTotal.innerText = `من ${activeQuiz.length}`;
    
    // Set circle progress
    const percentage = (currentScore / activeQuiz.length) * 100;
    progressCircle.style.setProperty('--progress', `${percentage}%`);

    let rankName = "";
    let earnedPoints = currentScore; // السؤال بنقطة واحدة

    if (percentage === 100) {
      feedbackMsg.innerText = "ممتاز، أداء مثالي! ✨";
      rankName = "Legend (أسطورة)";
    } else if (percentage >= 80) {
      feedbackMsg.innerText = "رائع جداً! 👏";
      rankName = "Master (خبير)";
    } else if (percentage >= 50) {
      feedbackMsg.innerText = "جيد، واصل تقدمك! 👍";
      rankName = "Pro (محترف)";
    } else {
      feedbackMsg.innerText = "لا بأس، حاول مرة أخرى وستنجح بالتأكيد 💪";
      rankName = "Beginner (مبتدئ)";
    }

    resRank.innerText = rankName;
    resPoints.innerText = `+${earnedPoints} نقطة`;

    // Render mistakes
    if (wrongAnswers.length > 0) {
      viewMistakesBtn.style.display = 'inline-block';
      mistakesArea.innerHTML = wrongAnswers.map((m, i) => `
        <div class="mistake-card" dir="auto" style="unicode-bidi: plaintext;">
          <div class="mistake-q" dir="auto">${i+1}. <span dir="auto">${m.q}</span></div>
          <div class="mistake-wrong" dir="auto">❌ إجابتك: <span dir="auto">${m.user}</span></div>
          <div class="mistake-correct" dir="auto">✅ الصحيحة: <span dir="auto">${m.correct}</span></div>
        </div>
      `).join('');
    } else {
      viewMistakesBtn.style.display = 'none';
      mistakesArea.innerHTML = '';
    }

    // Save to LocalStorage for index.html leaderboard
    saveToLeaderboard(name, subject, currentScore);

    // Send to Discord
    sendToDiscord(name, subject, currentScore, activeQuiz.length, rankName, earnedPoints);
  }

  viewMistakesBtn.addEventListener('click', () => {
    if (mistakesArea.style.display === 'none') {
      mistakesArea.style.display = 'block';
      viewMistakesBtn.innerText = 'إخفاء الأخطاء';
    } else {
      mistakesArea.style.display = 'none';
      viewMistakesBtn.innerText = 'مراجعة الأخطاء';
    }
  });

  function saveToLeaderboard(name, subject, score) {
    let existing;
    try {
      existing = JSON.parse(localStorage.getItem('surveyLeaderboard') || '[]');
    } catch(e) {
      existing = [];
    }
    const found = existing.find(item => item.name === name && item.subject === subject);
    if (found) {
      found.score = Math.max(found.score, score);
      found.updated = new Date().toISOString();
    } else {
      existing.push({name, subject, score, updated: new Date().toISOString()});
    }
    localStorage.setItem('surveyLeaderboard', JSON.stringify(existing));
    localStorage.setItem('surveyLeaderboardSync', Date.now().toString());
  }

  function sendToDiscord(name, subject, score, total, rankName, earnedPoints) {
    if (!WEBHOOK_URL || WEBHOOK_URL === "<YOUR_DISCORD_WEBHOOK_URL>") return;
    
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: "🎉 نتيجة كويز جديدة",
          color: 16766720, // Gold colored embed
          fields: [
            { name: "👤 الطالب", value: name, inline: true },
            { name: "📚 المادة", value: subject, inline: true },
            { name: "🎯 النتيجة", value: `${score} / ${total}`, inline: false },
            { name: "⭐ الرتبة", value: rankName, inline: true },
            { name: "🪙 النقاط", value: `+${earnedPoints}`, inline: true }
          ],
          timestamp: new Date().toISOString()
        }]
      })
    }).catch(console.error);
  }

  returnHome.addEventListener('click', () => {
    window.location.href = "index.html";
  });

  // Start
  renderQuestion();
});
