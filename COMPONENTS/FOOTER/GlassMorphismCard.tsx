import { Button, Tooltip } from "antd";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";

interface GlassmorphismCardProps { product: { id: number; title: string; price: string; image: string }; }
type SingleProductType = { id: number; title: string; price: string; image: string };

const GlassMorphismCard: React.FC<GlassmorphismCardProps> = ({ product }) => {
   return (
      <div className="relative bg-white bg-opacity-10 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg p-3 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col justify-center">
         {/* Product Image */}
         <div className="relative overflow-hidden rounded-lg flex justify-center">
            <Image src={product.image} alt={product.title} className="rounded-lg" width={200} height={150} />
         </div>

         {/* Product Title */}
         <h5 className="mt-4 text-lg font-semibold text-white truncate">{product.title.slice(0, 25)}</h5>

         {/* Price and Button */}
         <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-blue-400">${product.price}</span>
            <Tooltip title="Add to Cart" >
               <Button type="primary" icon={<ShoppingBasket className="w-5 h-5" />} className="bg-blue-500 hover:bg-blue-600 border-none text-white rounded-lg px-3 py-2"   >Buy Now</Button>
            </Tooltip>s
         </div>

         {/* Decorative Glow */}
         <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg -z-10"></div>
      </div>
   );
};

export default GlassMorphismCard;