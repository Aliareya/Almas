import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import ProductCard from '../../components/cards/Product';

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
              <button className="flex-1 max-sm:w-full bg-amber-900 text-white py-3 px-8 rounded font-medium hover:bg-amber-950 transition-colors">
                افزودن به سبد خرید
              </button>
              <button className="flex-1 max-sm:w-full bg-amber-400 text-white py-3 px-8 rounded font-medium hover:bg-amber-500 transition-colors">
                خرید الآن
              </button>
              <button className="p-3 border-2 border-gray-300 rounded-full hover:border-amber-400 hover:text-amber-600 transition-colors">
                <Icon icon="lucide:heart" className="w-5 h-5" />
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
      <div className="container mx-auto px-4 py-12">
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
          <div className="max-w-4xl mx-auto">
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
          // Then in your main ProductDetails component, replace the review tab content with:
             <ReviewSection />
        )}
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-16 max-sm:px-3 py-12 bg-gray-50">
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

// Add this ReviewSection component to your file
const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      author: 'Kristin Watson',
      verified: true,
      date: '1 month ago',
      title: 'Love It: My Recent Clothing Purchase',
      content: 'I recently picked up some new clothes, and I have to say, I\'m loving them! From the fit to the fabric, everything about these pieces is just perfect. They\'re comfortable, stylish, and exactly what I was looking for.',
      rating: 5.0,
      images: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=250&fit=crop',
        'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=250&fit=crop',
        'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=200&h=250&fit=crop'
      ]
    },
    {
      id: 2,
      author: 'Bessie Cooper',
      verified: true,
      date: '2 month ago',
      title: 'Excellent Product, I like it!',
      content: 'I recently treated myself to some new clothes, and I couldn\'t be happier with my purchase! The fit is spot-on, and the fabric feels amazing against my skin. These pieces are not only comfortable but incredibly stylish as well. They\'re exactly what I\'ve been searching for to elevate my wardrobe. I\'m absolutely loving them!',
      rating: 5.0,
      images: []
    },
    {
      id: 3,
      author: 'Guy Hawkins',
      verified: true,
      date: '3 month ago',
      title: 'Great Quality and Fast Shipping',
      content: 'The quality exceeded my expectations. The coat is well-made and the color is exactly as shown in the pictures. Shipping was faster than expected too!',
      rating: 4.5,
      images: []
    },
    {
      id: 4,
      author: 'Jenny Wilson',
      verified: false,
      date: '4 month ago',
      title: 'Good but runs slightly large',
      content: 'Overall a great purchase. The material is soft and comfortable. Just note that it runs a bit large, so you might want to size down.',
      rating: 4.0,
      images: []
    }
  ];

  const ratingDistribution = [
    { stars: 5, count: 85, percentage: 79 },
    { stars: 4, count: 15, percentage: 14 },
    { stars: 3, count: 4, percentage: 4 },
    { stars: 2, count: 2, percentage: 2 },
    { stars: 1, count: 1, percentage: 1 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Review Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-8 border-b">
        <div className="text-center md:text-right">
          <div className="text-5xl font-bold text-gray-900 mb-2">4.8</div>
          <div className="text-gray-500 mb-3">out of 5</div>
          <div className="flex items-center justify-center md:justify-end gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                icon="lucide:star" 
                className="w-5 h-5 text-amber-400 fill-amber-400" 
              />
            ))}
          </div>
          <div className="text-gray-500 text-sm">[107 Reviews]</div>
        </div>

        <div className="space-y-3">
          {ratingDistribution.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <div className="text-sm text-gray-600 w-12">{rating.stars} Star</div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-amber-400 h-2 rounded-full"
                  style={{ width: `${rating.percentage}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 w-8">{rating.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Review List Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-6">Review List</h3>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="text-gray-600">
            Showing 1-4 of 24 results
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by :</span>
            <select className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-amber-500">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Highest Rating</option>
              <option>Lowest Rating</option>
            </select>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-8 last:border-0">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:user" className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h4 className="font-semibold text-gray-900">{review.author}</h4>
                    {review.verified && (
                      <span className="text-xs text-green-600 border border-green-600 px-2 py-0.5 rounded w-fit">
                        Verified
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                  
                  <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                  <p className="text-gray-600 leading-relaxed mb-3">{review.content}</p>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        icon={i < Math.floor(review.rating) ? "lucide:star" : "lucide:star-off"} 
                        className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{review.rating}</span>
                  </div>
                </div>
              </div>

              {/* Review Images */}
              {review.images.length > 0 && (
                <div className="flex gap-3 mt-4 mr-16">
                  {review.images.map((img, idx) => (
                    <div key={idx} className="w-24 h-32 rounded-lg overflow-hidden border border-gray-200">
                      <img src={img} alt={`Review ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-amber-900 text-white px-8 py-3 rounded hover:bg-amber-950 transition-colors">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

