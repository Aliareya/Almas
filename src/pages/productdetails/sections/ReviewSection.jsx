import { Icon } from "@iconify/react";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      author: 'Kristin Watson',
      verified: true,
      date: '1 month ago',
      title: 'Love It: My Recent Clothing Purchase',
      content: 'I recently picked up some new clothes, and I have to say, I\'m loving them! From the fit to the fabric, ',
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
    <div className="w-full py-8">
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
      <div className="">

        {/* Reviews */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200  last:border-0">
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

export default ReviewSection;