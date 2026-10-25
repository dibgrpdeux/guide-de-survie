<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>اختبار المساعد</title>
    <!-- هذا السطر مهم جداً -->
    <script src="https://js.puter.com/v2/"></script>
</head>
<body style="text-align: center; padding: 50px; font-family: sans-serif;">
    <h1>المساعد الذكي</h1>
    <button onclick="askAI()" style="padding: 15px 30px; font-size: 18px; cursor: pointer; background: #4f46e5; color: white; border: none; border-radius: 8px;">
        اسأل الذكاء الاصطناعي
    </button>
    <p id="result" style="margin-top: 20px; color: #333;"></p>

    <script>
        async function askAI() {
            const result = document.getElementById('result');
            result.innerText = "جاري التفكير...";
            try {
                // هذا هو الاستدعاء
                const response = await puter.ai.chat("مرحباً، من أنت؟");
                result.innerText = response;
            } catch (error) {
                result.innerText = "خطأ: " + error.message;
                console.error(error);
            }
        }
    </script>
</body>
</html>
