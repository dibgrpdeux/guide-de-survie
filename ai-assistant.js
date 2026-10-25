<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المساعد الذكي - ENSTP</title>
    
    <!-- السطر الأهم: استدعاء مكتبة Puter (هي كل ما تحتاجه للذكاء الاصطناعي) -->
    <script src="https://js.puter.com/v2/"></script>
    
    <!-- تصميم الواجهة باستخدام Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    
    <style> 
        body { font-family: 'Cairo', sans-serif; } 
        /* حركة النقاط أثناء التفكير */
        .typing-dots span { animation: bounce 1.4s infinite ease-in-out both; }
        .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
        .typing-dots span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
    </style>
</head>
<body class="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">

    <!-- الزر الذي يفتح المساعد -->
    <div class="text-center space-y-4">
        <h1 class="text-3xl font-black text-gray-800">مرحباً بك في دليل ENSTP</h1>
        <p class="text-gray-600">هل تحتاج إلى مساعدة؟ تحدث مع مساعدنا الذكي.</p>
        
        <button id="aiToggleBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition flex items-center gap-2 mx-auto">
            <i class="fa-solid fa-robot text-xl"></i>
            اسأل المساعد الذكي
        </button>
    </div>

    <!-- نافذة الدردشة (مخفية في البداية) -->
    <div id="aiChatBox" class="hidden fixed bottom-4 right-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex-col overflow-hidden z-50">
        
        <!-- ترويسة النافذة -->
        <div class="bg-indigo-600 text-white p-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-robot"></i>
                <span class="font-bold">مساعد ENSTP الذكي</span>
            </div>
            <button id="closeAiBtn" class="text-white hover:text-gray-200 text-xl">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- منطقة الرسائل -->
        <div id="aiMessages" class="flex-1 p-4 overflow-y-auto h-64 space-y-3 bg-gray-50 flex flex-col">
            <div class="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[85%] ml-auto text-right">
                مرحباً! أنا المساعد الذكي لطلبة ENSTP. كيف يمكنني مساعدتك اليوم؟
            </div>
        </div>

        <!-- منطقة الإدخال -->
        <div class="p-3 bg-white border-t flex gap-2">
            <input type="text" id="aiInput" placeholder="اكتب سؤالك هنا..." class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <button id="sendAiBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold transition">
                <i class="fa-solid fa-paper-plane"></i>
            </button>
        </div>
    </div>

    <!-- الكود البرمجي للمنطق -->
    <script>
        // 1. جلب العناصر من HTML
        const aiToggleBtn = document.getElementById('aiToggleBtn');
        const aiChatBox = document.getElementById('aiChatBox');
        const closeAiBtn = document.getElementById('closeAiBtn');
        const sendAiBtn = document.getElementById('sendAiBtn');
        const aiInput = document.getElementById('aiInput');
        const aiMessages = document.getElementById('aiMessages');

        // 2. فتح وإغلاق النافذة
        aiToggleBtn.addEventListener('click', () => {
            aiChatBox.classList.remove('hidden');
            aiChatBox.classList.add('flex');
            aiInput.focus();
        });

        closeAiBtn.addEventListener('click', () => {
            aiChatBox.classList.add('hidden');
            aiChatBox.classList.remove('flex');
        });

        // 3. إرسال الرسالة
        sendAiBtn.addEventListener('click', handleSend);
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });

        // 4. الدالة الرئيسية التي تتصل بالذكاء الاصطناعي
        async function handleSend() {
            const userText = aiInput.value.trim();
            if (!userText) return;

            // عرض رسالة المستخدم
            appendMessage(userText, 'user');
            aiInput.value = '';

            // عرض مؤشر التحميل (النقاط المتحركة)
            const loadingDiv = appendMessage('...', 'bot');
            loadingDiv.innerHTML = '<div class="typing-dots flex gap-1"><span class="w-2 h-2 bg-gray-500 rounded-full"></span><span class="w-2 h-2 bg-gray-500 rounded-full"></span><span class="w-2 h-2 bg-gray-500 rounded-full"></span></div>';

            try {
                // استدعاء الذكاء الاصطناعي عبر Puter.js
                // الموديل gpt-5-nano سريع ومجاني
                const response = await puter.ai.chat(
                    `أنت مساعد ذكي لطلبة المدرسة الوطنية العليا للأشغال العمومية ENSTP. أجب باختصار ووضوح باللغة العربية على السؤال التالي: ${userText}`,
                    { model: 'gpt-5-nano' } 
                );

                // عرض الإجابة
                loadingDiv.innerText = response;
                
            } catch (error) {
                console.error("خطأ في الذكاء الاصطناعي:", error);
                loadingDiv.innerText = "عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.";
            }
        }

        // 5. دالة مساعدة لإضافة الرسائل إلى الشاشة
        function appendMessage(text, sender) {
            const msg = document.createElement('div');
            if (sender === 'user') {
                msg.className = "bg-indigo-600 text-white p-3 rounded-lg max-w-[85%] mr-auto text-right whitespace-pre-line";
            } else {
                msg.className = "bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[85%] ml-auto text-right whitespace-pre-line";
            }
            msg.innerText = text;
            aiMessages.appendChild(msg);
            aiMessages.scrollTop = aiMessages.scrollHeight;
            return msg;
        }
    </script>
</body>
</html>
