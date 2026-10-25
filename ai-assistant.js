<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تجربة المساعد الذكي</title>
    <!-- 1. استدعاء مكتبة Puter (ضروري جداً) -->
    <script src="https://js.puter.com/v2/"></script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; background: #f4f4f9; }
        button { padding: 15px 30px; font-size: 18px; background: #4f46e5; color: white; border: none; border-radius: 8px; cursor: pointer; }
        button:hover { background: #4338ca; }
        #response { margin-top: 20px; font-size: 18px; color: #333; max-width: 600px; margin-left: auto; margin-right: auto; }
    </style>
</head>
<body>

    <h2>اضغط على الزر لاختبار الذكاء الاصطناعي</h2>
    <button onclick="askAI()">اسأل الذكاء الاصطناعي</button>
    <div id="response"></div>

    <script>
        async function askAI() {
            const resDiv = document.getElementById('response');
            resDiv.innerText = "جاري التفكير...";
            
            try {
                // 2. إرسال السؤال (بدون مفاتيح API)
                const response = await puter.ai.chat("مرحباً، أعطني معلومة مفيدة عن الهندسة المدنية.");
                
                // 3. عرض النتيجة
                resDiv.innerText = response;
            } catch (error) {
                resDiv.innerText = "حدث خطأ: " + error.message;
                console.error(error);
            }
        }
    </script>
</body>
</html>
