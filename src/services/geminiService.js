// src/services/geminiService.js

const API_URL = "https://gemini-backend-ten.vercel.app/api/gemini"; // Đường dẫn đến backend đã deploy trên Vercel

export async function getGeminiResponse(chatHistory) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // ✅ Gửi đúng key: messages, khớp với backend
      body: JSON.stringify({ messages: chatHistory }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Lỗi phản hồi từ server");
    }

    return data.text;
  } catch (err) {
    console.error("Lỗi gọi API Gemini:", err.message);
    throw err;
  }
}
