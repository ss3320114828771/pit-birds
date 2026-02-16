import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group perspective-3d">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-white/20 transform rotate-3d group-hover:rotate-0 transition-all duration-500 hover:border-yellow-300">
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%] p-1">
            <div className="relative w-full h-full">
              <Image
                src={`/images/${image}`}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Category Badge */}
          <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold text-white z-10">
            {category}
          </span>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-2xl font-bold text-yellow-300 mb-4">{price}</p>
          
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform">
              Add to Cart
            </button>
            <Link
              href={`/products/${id}`}
              className="px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-all"
            >
              🔍
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}