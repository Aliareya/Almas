import { Icon } from "@iconify/react";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#4B2E2E] text-white lg:px-16 max-sm:px-4 md:px-5 max-md:px-9 py-10 max-sm:py-4">
      <div className="max-w-7xl max-sm:flex flex-col mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 max-md:grid-cols-4 gap-10">

        {/* لوگو و توضیحات */}
        <div className="w-full max-sm:flex flex-col items-center ">
          <Logo/>
          <p className="text-sm mb-4 max-sm:text-center">
            فروشگاه آنلاین پوشاک با جدیدترین مدل‌های لباس زنانه و مردانه،
            کیفیت بالا و قیمت مناسب.
          </p>

          <div className="flex gap-3 mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:instagram" width="22" height="22" color="#fff" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:telegram" width="22" height="22" color="#fff" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon icon="mdi:facebook" width="22" height="22" color="#fff" />
            </a>
          </div>
        </div>

        {/* فروشگاه */}
        <div className="max-sm:text-center">
          <h3 className="font-semibold mb-4">فروشگاه</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">درباره ما</li>
            <li className="hover:text-gray-300 cursor-pointer">محصولات</li>
            <li className="hover:text-gray-300 cursor-pointer">وبلاگ</li>
            <li className="hover:text-gray-300 cursor-pointer">تماس با ما</li>
          </ul>
        </div>

        {/* خدمات مشتریان */}
        <div className="max-sm:text-center">
          <h3 className="font-semibold mb-4">خدمات مشتریان</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">سوالات متداول</li>
            <li className="hover:text-gray-300 cursor-pointer">شرایط بازگشت کالا</li>
            <li className="hover:text-gray-300 cursor-pointer">راهنمای خرید</li>
            <li className="hover:text-gray-300 cursor-pointer">پیگیری سفارش</li>
          </ul>
        </div>

        {/* اطلاعات ما */}
        <div className="max-sm:text-center">
          <h3 className="font-semibold mb-4">اطلاعات ما</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Icon icon="entypo:address" width="20" height="20" color="#fff" />
              <p className="text-[12px]">
                کابل، چهارراهی صدارت، پلاک ۱۲
              </p>
            </li>

            <li className="flex items-center gap-2">
              <Icon icon="line-md:email" width="22" height="22" color="#fff" />
              <p>info@poshak.com</p>
            </li>

            <li className="flex items-center gap-2">
              <Icon icon="line-md:phone" width="22" height="22" color="#fff" />
              <p>(+93) 700 123 456</p>
            </li>
          </ul>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex justify-center text-sm">
        <p>تمامی حقوق © 2024 طراحی وب‌سایت محفوظ است.</p>
      </div>
    </footer>
  );
}
