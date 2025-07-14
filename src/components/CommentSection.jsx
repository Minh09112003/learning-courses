// src/components/CommentSection.jsx
import { useState, useEffect } from "react";
import commentsData from "../data/comments";

const CommentSection = ({ productId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const productComments =
      commentsData.find((item) => item.productId === productId)?.comments || [];
    setComments(productComments);
  }, [productId]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Nhận xét</h3>

      {comments.length === 0 ? (
        <p className="text-gray-500">Chưa có nhận xét nào cho sản phẩm này.</p>
      ) : (
        <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2">
          {comments.map((cmt) => (
            <div key={cmt.id} className="flex gap-3 items-start">
              <img
                src={cmt.avatar}
                alt={cmt.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="bg-gray-100 rounded-lg px-4 py-2 flex-1">
                <div className="text-sm font-semibold">{cmt.name}</div>
                <p className="text-sm text-gray-700 mt-0.5">{cmt.text}</p>
                <div className="text-xs text-gray-400 mt-1">{cmt.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
