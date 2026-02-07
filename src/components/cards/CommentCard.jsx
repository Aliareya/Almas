import { Icon } from "@iconify/react";

export default function CommentCard() {
  return (
    <div className="w-full max-w-md bg-[#efe7e2] rounded-2xl shadow-lg p-5 border border-gray-100">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="user"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">Ali Ahmadi</h4>
          <p className="text-xs text-gray-500">2 days ago</p>
        </div>

        <div className="flex gap-1 text-yellow-400">
          <Icon icon="mdi:star" width="18" />
          <Icon icon="mdi:star" width="18" />
          <Icon icon="mdi:star" width="18" />
          <Icon icon="mdi:star" width="18" />
          <Icon icon="mdi:star-outline" width="18" />
        </div>
      </div>

      {/* Comment */}
      <p className="text-sm text-gray-600 leading-relaxed">
        کیفیت لباس واقعاً عالی بود، هم دوخت تمیز داشت هم سایز دقیق بود.
        ارسال هم سریع انجام شد. قطعاً دوباره خرید می‌کنم 👍
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        <span>Verified Purchase</span>
        <button className="hover:text-gray-600 transition">
          Reply
        </button>
      </div>
    </div>
  );
}
