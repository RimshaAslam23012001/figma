import Image from "next/image";

export default function ProductCard({ image, name, price }:any) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={image} alt={name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
          <p className="text-orange-500 font-semibold mt-2">{price}</p>
          <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  