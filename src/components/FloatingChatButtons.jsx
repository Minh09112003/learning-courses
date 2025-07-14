import { SiZalo } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const FloatingChatButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-5">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/minh.diep.972802" 
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button bg-white rounded-full p-4 shadow-lg cursor-pointer"
      >
        <FaFacebookF className="text-blue-600 text-2xl" />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0918305220" 
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button bg-white rounded-full p-4 shadow-lg cursor-pointer"
      >
        <SiZalo className="text-blue-600 text-2xl" />
      </a>
    </div>
  );
};

export default FloatingChatButtons;
