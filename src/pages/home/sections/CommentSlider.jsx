import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CommentCard from "../../../components/cards/CommentCard";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/pagination";
import AnimationTitle from "../../../components/ui/AnimationTitle";

export default function CommentSlider() {
  return (
    <section className="pt-14 max-sm:pt-5 xl:px-14 lg:px-8 md:px-3 max-md:px-3 max-sm:px-1 text-center">
        <AnimationTitle text={'نظرات مشتریان'} />
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2 mt-7 text-center">

        {/* Title */}

        <Swiper
          className="!pb-10"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            700: { slidesPerView: 2 },
            // 768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <CommentCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard/>
          </SwiperSlide>


        </Swiper>
      </div>
    </section>
  );
}

/* Comment Card */
// function CommentCard({ name, comment, image }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
//       <div className="flex items-center gap-4 mb-4">
//         <img
//           src={image}
//           alt={name}
//           className="w-12 h-12 rounded-full object-cover"
//         />

//         <div className="flex-1">
//           <h4 className="font-semibold text-gray-800">{name}</h4>
//           <div className="flex text-yellow-400">
//             <Icon icon="mdi:star" width="16" />
//             <Icon icon="mdi:star" width="16" />
//             <Icon icon="mdi:star" width="16" />
//             <Icon icon="mdi:star" width="16" />
//             <Icon icon="mdi:star-outline" width="16" />
//           </div>
//         </div>
//       </div>

//       <p className="text-sm text-gray-600 leading-relaxed flex-1">
//         {comment}
//       </p>
//     </div>
//   );
// }
