import React from "react";
import img2 from '../../../images/img2.jpg'
import img5 from '../../../images/img5.jpg'
import img6 from '../../../images/img6.jpg'
import img7 from '../../../images/img7.jpg'

export default function CategorySection() {
  return (
    <section className="w-full mx-auto xl:px-16 lg:px-14 max-sm:px-3 md:px-6 max-md:px-6 max-sm:py-5  py-12">
      <div className="flex flex-row max-sm:flex-col gap-10">

        {/* Women */}
        <div
          className="w-3/5 max-sm:w-full relative rounded-3xl overflow-hidden h-[420px] max-sm:h-[250px] bg-cover bg-top"
          style={{
            backgroundImage:
              `url(${img2})`,
          }}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative h-full p-6 flex flex-col justify-end text-right">
            <span className="text-sm text-gray-200 mb-2">۲۵۰۰+ محصول</span>
            <h2 className="text-3xl font-bold text-white mb-3">
              لباس زنانه
            </h2>
            <ul className="text-sm text-gray-100 space-y-1">
              <li>پیراهن</li>
              <li>مانتو</li>
              <li>کت و کاپشن</li>
              <li>لباس مجلسی</li>
              <li>اکسسوری</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[40%] max-sm:w-full flex items-end flex-col gap-6">

          {/* Men */}
          <div
            className="w-full relative rounded-3xl overflow-hidden h-[200px] bg-cover bg-center"
            style={{
              backgroundImage:
                `url(${img7})`,
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative h-full p-5 flex flex-col justify-end text-right">
              <span className="text-sm text-gray-200 mb-1">
                ۱۵۰۰+ محصول
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                لباس مردانه
              </h2>
              <p className="text-sm text-gray-100">
                تی‌شرت، پیراهن، کت و شلوار
              </p>
            </div>
          </div>

          {/* Accessories */}
          <div
            className="w-full relative rounded-3xl overflow-hidden h-[200px] bg-cover bg-center"
            style={{
              backgroundImage:
                `url(${img6})`,
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative h-full p-5 flex flex-col justify-end text-right">
              <span className="text-sm text-gray-200 mb-1">
                ۸۰۰+ محصول
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                اکسسوری
              </h2>
              <p className="text-sm text-gray-100">
                کیف، ساعت، عینک، کلاه
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
