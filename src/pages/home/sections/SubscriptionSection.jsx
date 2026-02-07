import { Icon } from "@iconify/react";

export default function SubscriptionSection() {
  return (
    <section className="w-full bg-[#532b10c4] text-white py-10 mt-10">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Icon icon="mdi:email-newsletter" width="48" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-3">
          عضو خبرنامه ما شوید
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-200 mb-6">
          از جدیدترین محصولات، تخفیف‌ها و پیشنهادات ویژه باخبر شوید
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full sm:w-80 px-4 py-3 rounded-xl text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-[#4B2E2E] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            عضویت
          </button>
        </form>

        {/* Note */}
        <p className="text-xs text-gray-300 mt-4">
          با عضویت، قوانین و مقررات را می‌پذیرید.
        </p>
      </div>
    </section>
  );
}
