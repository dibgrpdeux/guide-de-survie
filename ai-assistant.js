<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المساعد الذكي</title>
    <!-- السطر الأهم: استدعاء مكتبة Puter -->
    <script src="https://js.puter.com/v2/"></script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; background: #f8fafc; }
        .box { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 500px; margin: auto; }
        button { padding: 12px 24px; font-size: 16px; background: #4f46e5; color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 15px; }
        button:hover { background: #4338ca; }
        #result { margin-top: 20px; font-size: 16px; color: #333; text-align: right; white-space: pre-wrap; }
    </style>
</head>
<body>
    <div class="box">
        <h2>جرب المساعد الذكي</h2>
        <p>اضغط على الزر أدناه لبدء المحادثة.</p>
        
        <!-- زر التشغيل -->
        <button onclick="askAI()">اضغط هنا للتحدث مع AI</button>
        
        <!-- مكان ظهور الإجابة -->
        <div id="result"></div>
    </div>

    <script>
        async function askAI() {
            const resultDiv = document.getElementById('result');
            resultDiv.innerText = "جاري التفكير...";
            
            try {
                // استدعاء Puter
                const response = await puter.ai.chat("مرحباً! ما هو أفضل تخصص هندسي في ENSTP؟ أجب بالعربية.");
                resultDiv.innerText = response;
            } catch (error) {
                // إذا حدث خطأ، سيظهر هنا
                resultDiv.innerText = "حدث خطأ: " + error.message + "\n\nتأكد من السماح بالنوافذ المنبثقة.";
                console.error(error);
            }
        }
    </script>
</body>
</html>
