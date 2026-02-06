import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ProductCard from "../../../components/cards/ProductCard";

const products = [
  {
    id: 1,
    name: "Trendy Brown Coat",
    category: "Coats",
    price: "$75.00",
    oldPrice: "$150.00",
    rating: 4.8,
    discount: "50% off",
    image: "https://i.imgur.com/8Km9tLL.jpg",
  },
  {
    id: 2,
    name: "Classy Light Coat",
    category: "Coats",
    price: "$165.00",
    oldPrice: "$220.00",
    rating: 4.9,
    discount: "25% off",
    image: "https://i.imgur.com/QCNbOAo.jpg",
  },
  {
    id: 3,
    name: "Modern Brown Dress",
    category: "Dress",
    price: "$90.00",
    oldPrice: "$100.00",
    rating: 4.8,
    discount: "10% off",
    image: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];

export default function TopSellerProducts() {
  return (
    <section className="max-w-7xl mx-auto px-16 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm text-gray-500">Our Products</p>
        <h2 className="text-3xl font-bold">Our Top Seller Products</h2>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8">
        {["All", "Women", "Men", "Accessories"].map((item) => (
          <button
            key={item}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              item === "All"
                ? "bg-[#4b1d0b] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  );
}
