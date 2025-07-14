import { useState, useRef } from "react";
import { getGeminiResponse } from "../services/geminiService";
import { BsChatDotsFill } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import products from "../data/products";

const ChatbotGemini = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const chatBodyRef = useRef();

  const findCoursesFromInput = (input) => {
    const normalizedInput = input.toLowerCase();
    return products
      .filter(
        (course) =>
          course.name.toLowerCase().includes(normalizedInput) ||
          course.category.toLowerCase().includes(normalizedInput) ||
          course.shortDesc.toLowerCase().includes(normalizedInput) ||
          course.longDesc.toLowerCase().includes(normalizedInput)
      )
      .slice(0, 3);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input, // ✅ Đúng định dạng cho backend
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setThinking(true);

    try {
      const matchedCourses = findCoursesFromInput(input);

      if (matchedCourses.length > 0) {
        const courseReply = matchedCourses
          .map(
            (course) =>
              `📘 *${course.name}*\n➡ ${course.shortDesc}\n💸 Giá: ${course.price.toLocaleString()}đ`
          )
          .join("\n\n");

        const botMessage = {
          role: "model",
          content: `Mình tìm thấy một số khóa học phù hợp với bạn:\n\n${courseReply}`,
        };

        setMessages([...newMessages, botMessage]);
      } else {
        const botText = await getGeminiResponse(newMessages);
        const botMessage = {
          role: "model",
          content: botText,
        };
        setMessages([...newMessages, botMessage]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: "model",
          content: "Xin lỗi, tôi không thể xử lý yêu cầu lúc này.",
        },
      ]);
    } finally {
      setThinking(false);
      setTimeout(() => {
        chatBodyRef.current?.scrollTo({
          top: chatBodyRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 200);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 text-sm font-sans">
      {isOpen ? (
        <div className="w-full max-w-[360px] max-h-[80vh] bg-white shadow-2xl border border-gray-200 rounded-xl flex flex-col sm:w-[320px] md:w-[360px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white font-bold p-3 rounded-t-xl flex justify-between items-center">
            <span>Chatbot AI</span>
            <button
              className="text-white text-xl hover:opacity-80"
              onClick={() => setIsOpen(false)}
              title="Thu gọn"
            >
              <FiMinus className="cursor-pointer" />
            </button>
          </div>

          {/* Chat body */}
          <div
            ref={chatBodyRef}
            className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[240px] bg-white"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className="flex items-start gap-2">
                {msg.role === "model" && (
                  <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full text-xs font-bold">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-xl relative text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white self-end ml-auto rounded-br-none"
                      : "bg-gray-100 text-gray-800 self-start mr-auto rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {thinking && (
              <div className="bg-gray-100 p-3 rounded-xl max-w-[80%] self-start mr-auto animate-pulse text-sm text-gray-500">
                Đang phản hồi...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-300 bg-white flex gap-2">
            <textarea
              rows={1}
              placeholder="Nhập tin nhắn..."
              spellCheck={false}
              className="flex-1 border border-gray-300 p-2 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
            >
              Gửi
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-700 cursor-pointer"
          onClick={() => setIsOpen(true)}
          title="Mở lại chatbot"
        >
          <BsChatDotsFill size={20} />
        </button>
      )}
    </div>
  );
};

export default ChatbotGemini;
