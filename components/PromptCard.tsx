interface PromptCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  sales: number;
  image: string;
  platform: string;
  seller: string;
}

export default function PromptCard({
  title,
  description,
  price,
  rating,
  sales,
  image,
  platform,
  seller,
}: PromptCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
          {platform}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">({sales})</span>
          </div>
          <span className="text-xs text-gray-500">by {seller}</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
