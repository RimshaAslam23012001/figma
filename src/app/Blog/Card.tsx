import Image from "next/image";
export default function Card({ image, title, description, date, author } :any) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">{date}</p>
            <p className="text-sm font-medium text-gray-800">{author}</p>
          </div>
        </div>
      </div>
    );
  }
  