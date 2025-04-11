import { Button, Tooltip } from "antd";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import SuccessAlert from "./SuccessAlert";
import { useRef, useState } from "react";

interface GlassmorphismCardProps { product: { id: number; title: string; price: string; image: string }; }
type SingleProductType = { id: number; title: string; price: string; image: string };

const GlassMorphismCard: React.FC<GlassmorphismCardProps> = ({ product }) => {

   const alertRef = useRef<HTMLDivElement>(null);
   const [alertShow, setAlertShow] = useState(false)

   const showAlert = () => {
      if (alertRef.current) {
         // Show the alert
         alertRef.current.classList.remove('hidden');
         alertRef.current.classList.add('block');

         // Hide after 1 second
         setTimeout(() => {
            if (alertRef.current) {
               alertRef.current.classList.remove('block');
               alertRef.current.classList.add('hidden');
            }
         }, 1500);
      }
   };


   //  RETURN =============================================================================================================================
   return (
      <>
         <div ref={alertRef} className="absolute top-5 right-5 hidden">
            <SuccessAlert />
         </div>
         <div className="relative bg-white bg-opacity-10 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg p-3 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col justify-center">

            {/* Product Image */}
            <div className="relative overflow-hidden rounded-lg flex justify-between">
               <Image src={product.image} alt={product.title} className="rounded-lg" width={200} height={150} />
            </div>

            {/* Product Title */}
            <h5 className="mt-4 text-lg font-semibold text-white truncate w-full">{product.title.slice(0, 25)}</h5>

            {/* Price and Button */}
            <div className="flex items-center justify-between w-full mt-6">
               <span className="text-xl font-bold text-blue-400">${product.price}</span>
               <Tooltip title="Add to Cart">
                  <Button type="primary" icon={<ShoppingBasket className="w-5 h-5" />} className="bg-blue-500 hover:bg-emerald-600 border-none text-white rounded-lg px-3 py-2" onClick={showAlert} >Buy Now</Button>
               </Tooltip>
            </div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg -z-10"></div>
         </div>
      </>
   );
};

export default GlassMorphismCard;