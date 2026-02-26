import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import ProductCard from '../../components/cards/Product';
import ReviewSection from './sections/ReviewSection';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(4);
  const [selectedSize, setSelectedSize] = useState('XXL');
  const [activeTab, setActiveTab] = useState('additional');

  const productImages = [
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop'
  ];

  const colors = [
    { name: 'قهوه‌ای', class: 'bg-amber-800' },
    { name: 'خاکستری', class: 'bg-gray-500' },
    { name: 'سبز', class: 'bg-green-700' },
    { name: 'قرمز', class: 'bg-red-700' },
    { name: 'آبی', class: 'bg-blue-700' }
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  const relatedProducts = [
    {
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop',
      discount: '۴۰٪ تخفیف',
      category: 'کت',
      rating: 4.8,
      title: 'کت زمستانی قهوه‌ای',
      price: 60.00,
      originalPrice: 100.00
    },
    {
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
      discount: '۲۵٪ تخفیف',
      category: 'کت‌ها',
      rating: 4.9,
      title: 'کت روشن شیک',
      price: 165.00,
      originalPrice: 220.00
    },
    {
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
      discount: '۱۰٪ تخفیف',
      category: 'کت و شلوار',
      rating: 4.9,
      title: 'کت و شلوار سفید مدرن',
      price: 90.00,
      originalPrice: 100.00
    },
    {
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
      discount: '۱۰٪ تخفیف',
      category: 'لباس‌ها',
      rating: 4.9,
      title: 'لباس مدرن',
      price: 90.00,
      originalPrice: 100.00
    }
  ];

  const additionalInfo = [
    { feature: 'جنس', description: 'پنبه' },
    { feature: 'سایز', description: 'S,M,L,XL,XXL,XXXL' },
    { feature: 'رنگ', description: 'قهوه‌ای، خاکستری، سبز، قرمز، آبی' },
    { feature: 'کشور سازنده', description: 'ایالات متحده' },
    { feature: 'برند', description: 'طراحی KD' }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl" lang="fa">
      {/* Breadcrumb */}
      <div className='w-full bg-gray-100'>
        <div className="container mx-auto px-4 max-sm:px-5 py-16 max-sm:py-10">
          <h1 className="text-3xl max-sm:text-2xl font-semibold text-center mb-2">جزئیات محصول</h1>
          <div className="flex justify-center gap-2 text-sm text-gray-600">
            <span>صفحه اصلی</span>
            <span>/</span>
            <span>فروشگاه</span>
            <span>/</span>
            <span>کت‌ها</span>
            <span>/</span>
            <span className="text-amber-900">جزئیات محصول</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto max-sm:px-3 px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-50 rounded-lg overflow-hidden max-sm:max-h-[330px] max-h-[500px]">
              <img 
                src={productImages[selectedImage]} 
                alt="محصول" 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={prevImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-400 p-2 rounded hover:bg-amber-500"
              >
                <Icon icon="lucide:chevron-right" className="w-5 h-5" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-amber-400 p-2 rounded hover:bg-amber-500"
              >
                <Icon icon="lucide:chevron-left" className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`border-2 rounded-lg overflow-hidden aspect-square ${
                    selectedImage === idx ? 'border-amber-600' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`تصویر کوچک ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="max-sm:w-full">
            <div className='max-sm:w-full'>
              <p className="text-gray-500 mb-1">کت‌ها</p>
              <h2 className="text-3xl font-semibold mb-2">کت قهوه‌ای ترند</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      icon={i < 4 ? "lucide:star" : "lucide:star-off"} 
                      className={`w-4 h-4 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="font-medium">۴.۸</span>
                <span className="text-gray-500">(۲۴۵ نظر)</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-amber-900">۷۵,۰۰۰ تومان</span>
                <span className="text-xl text-gray-400 line-through">۱۵۰,۰۰۰ تومان</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
              </p>
            </div>

            {/* Color Selection */}
            <div className='space-y-4'>
              <p className="font-medium mb-2">رنگ: <span className="font-normal">قهوه‌ای</span></p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full ${color.class} border-2 border-white shadow-md hover:scale-110 transition-transform`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className='space-y-5'>
              <p className="font-medium mb-2">سایز: <span className="font-normal">{selectedSize}</span></p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-16 h-10 border-2 rounded font-medium transition-colors ${
                      selectedSize === size 
                        ? 'bg-amber-400 border-amber-400 text-white' 
                        : 'border-gray-300 hover:border-amber-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button className="text-amber-700 underline mt-2 text-sm">مشاهده راهنمای سایز</button>
            </div>

            {/* Clear and Stock */}
            <div className="flex my-4 items-center gap-4">
              <button className="px-4 py-1 border border-gray-300 rounded text-sm">پاک کردن ×</button>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">موجود در انبار</span>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex space-y-1 max-sm:flex-col max-sm:w-full items-center gap-4">
              <div className="flex items-center max-sm:justify-center max-sm:w-full border-2 border-gray-300 rounded">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Icon icon="lucide:minus" className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Icon icon="lucide:plus" className="w-4 h-4" />
                </button>
              </div>
              <button className="flex-1 max-sm:w-full lg:text-base  bg-amber-900 text-white py-3 px-8  rounded font-medium hover:bg-amber-950 transition-colors">
               سبد خرید
              </button>
              <button className=" max-sm:w-full bg-amber-400 text-white py-3 px-8 rounded font-medium hover:bg-amber-500 transition-colors">
                خرید الآن
              </button>
              
            </div>

            {/* Product Meta */}
            <div className="space-y-2 mt-4 text-sm">
              <p><span className="font-medium">کد محصول:</span> GHFT95245AAA</p>
              <p><span className="font-medium">برچسب‌ها:</span> زنان، کت، مد، ژاکت</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">اشتراک‌گذاری:</span>
                <div className="flex gap-2">
                  <Icon icon="lucide:facebook" className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                  <Icon icon="lucide:instagram" className="w-4 h-4 cursor-pointer hover:text-pink-600" />
                  <Icon icon="lucide:linkedin" className="w-4 h-4 cursor-pointer hover:text-blue-700" />
                  <Icon icon="lucide:twitter" className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-sm:px-3 lg:px-16 md:px-6 max-md:px-6 py-5">
        <div className="flex justify-center gap-8 max-sm:gap-2 mb-8 border-b">
          <button 
            onClick={() => setActiveTab('description')}
            className={`pb-4 px-4 font-medium transition-colors ${
              activeTab === 'description' ? 'border-b-2 border-amber-900 text-amber-900' : 'text-gray-500'
            }`}
          >
            توضیحات
          </button>
          <button 
            onClick={() => setActiveTab('additional')}
            className={`pb-4 px-4 font-medium transition-colors ${
              activeTab === 'additional' ? 'border-b-2 border-amber-900 text-amber-900' : 'text-gray-500'
            }`}
          >
            اطلاعات تکمیلی
          </button>
          <button 
            onClick={() => setActiveTab('review')}
            className={`pb-4 px-4 font-medium transition-colors ${
              activeTab === 'review' ? 'border-b-2 border-amber-900 text-amber-900' : 'text-gray-500'
            }`}
          >
            نظرات
          </button>
        </div>

        {activeTab === 'additional' && (
          <div className="w-full mx-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-300">
                  <th className="text-right py-3 px-4 font-medium">ویژگی</th>
                  <th className="text-right py-3 px-4 font-medium">توضیحات</th>
                </tr>
              </thead>
              <tbody>
                {additionalInfo.map((info, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border-b text-right">{info.feature}</td>
                    <td className="py-3 px-4 border-b text-right">{info.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <p className="text-right px-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
          </div>
        )}

        {activeTab === 'review' && (
          <ReviewSection />
        )}
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-16 max-sm:px-3 py-10 bg-gray-50">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-2">محصولات مرتبط</p>
          <h2 className="text-3xl font-semibold">کاوش محصولات مرتبط</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, idx) => (
            <ProductCard/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;




