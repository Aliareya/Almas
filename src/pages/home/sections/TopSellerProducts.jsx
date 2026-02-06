import ProductCard from "../../../components/cards/ProductCard";
import img2 from "../../../images/img2.jpg"
import img3 from "../../../images/img4.jpg"
import img1 from "../../../images/img1.jpg"

const products = [
  {
    id: 1,
    name: "لباس مجلسی زنانه",
    category: "لباس زنانه",
    price: "۸,۵۰۰ افغانی",
    oldPrice: "۱۷,۰۰۰ افغانی",
    rating: 4.8,
    discount: "۵۰٪ تخفیف",
    image: img1,
  },
  {
    id: 3,
    name: "پیراهن زنانه مدرن",
    category: "لباس زنانه",
    price: "۱۰,۰۰۰ افغانی",
    oldPrice: "۱۱,۰۰۰ افغانی",
    rating: 4.7,
    discount: "۱۰٪ تخفیف",
    image: img3,
  },
  {
    id: 4,
    name: "کت زنانه شیک",
    category: "لباس زنانه",
    price: "۱۴,۰۰۰ افغانی",
    oldPrice: "۱۹,۰۰۰ افغانی",
    rating: 4.6,
    discount: "۲۵٪ تخفیف",
    image: img2,
  },
];



export default function TopSellerProducts() {
  return (
    <section className="max-w-7xl xl:px-16 lg:px-12 max-sm:px-3 md:px-6 max-md:px-6 px-16 max-sm:py-5">
      {/* Header */}
      <div className="flex flex-col max-sm:flex-col items-center justify-between mb-6">
        <h2 className="pb-2  max-sm:text-center
  text-4xl font-extrabold
  text-transparent bg-clip-text
  bg-gradient-to-r
  from-[#ae8b52]
  via-[#e2ae68]
  to-[#b97a38]
">
 پرفروش‌ ترین محصولات ما
</h2>
      <p className="text-red-950 font-serif font-semibold">بهترین محصولات ما در سطح افغانستان</p>
      </div>

      {/* Filters */}
      

      {/* Products */}
      <div className="flex max-sm:flex-col max-md:grid grid-cols-2 max-sm:flex max-md:flex-col justify-between gap-5">
        {products.map((product , index)=>{
          return(
            <ProductCard product={product}/>
          )
        })}

      </div>
    </section>
  );
}
