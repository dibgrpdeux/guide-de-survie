// استبدل هذا المفتاح بمفتاح Gemini API الخاص بك
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY"; 

const aiToggleBtn = document.getElementById('aiToggleBtn');
const aiChatBox = document.getElementById('aiChatBox');
const closeAiBtn = document.getElementById('closeAiBtn');
const sendAiBtn = document.getElementById('sendAiBtn');
const aiInput = document.getElementById('aiInput');
const aiMessages = document.getElementById('aiMessages');

// فتح وإغلاق النافذة
aiToggleBtn.addEventListener('click', () => {
  aiChatBox.classList.toggle('hidden');
  aiChatBox.classList.toggle('flex');
});

closeAiBtn.addEventListener('click', () => {
  aiChatBox.classList.add('hidden');
  aiChatBox.classList.remove('flex');
});

// إرسال السؤال
sendAiBtn.addEventListener('click', handleSend);
aiInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSend();
});

async function handleSend() {
  const userText = aiInput.value.trim();
  if (!userText) return;

  // إظهار رسالة المستخدم
  appendMessage(userText, 'user');
  aiInput.value = '';

  // إظهار مؤشر الانتظار
  const loadingDiv = appendMessage('جاري التفكير...', 'bot');

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `أنت مساعد ذكي مخصص لطلبة المدرسة الوطنية العليا للأشغال العمومية ENSTP القبة. أجب باختصار ووضوح باللغة العربية على السؤال التالي: ${userText}`
          }]
        }]
      })
    });

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "عذراً، لم أستطع معالجة الإجابة حالياً.";
    
    loadingDiv.innerText = replyText;
  } catch (error) {
    console.error("AI Error:", error);
    loadingDiv.innerText = "حدث خطأ في الاتصال بالمساعد الذكي.";
  }
}

function appendMessage(text, sender) {
  const msg = document.createElement('div');
  if (sender === 'user') {
    msg.className = "bg-blue-600 text-white p-3 rounded-lg max-w-[85%] mr-auto text-right";
  } else {
    msg.className = "bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[85%] ml-auto text-right";
  }
  msg.innerText = text;
  aiMessages.appendChild(msg);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  return msg;
}
