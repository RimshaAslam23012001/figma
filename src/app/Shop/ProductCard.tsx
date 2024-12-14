import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ image, name, price }:any) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={image} alt={name} width={400} height={300} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
          <p className="text-orange-500 font-semibold mt-2">{price}</p>
             {/* Button: Hidden by default, shown on hover */}
             <Link href={"/ShopDetails"}>
        <button
           className="text-white px-6 py-2 border border-yellow-500 rounded-full font-semibold hover:text-yellow-500 transition duration-300">
          
          Shop List
         
        </button>
        </Link>
        </div>
      </div>
    );
  }
  