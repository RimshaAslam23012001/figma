import Image from "next/image";
export default function ArticleContent() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
  
        <blockquote className="p-4 bg-orange-100 border-l-4 border-orange-500 text-orange-700 italic">
          “Cooking is an art, but all art requires knowing something about the
          techniques and materials.”
        </blockquote>
  
        <p className="text-gray-700">
          Suspendisse potenti. Phasellus hendrerit. Pellentesque aliquet nibh nec
          urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
        </p>
  
        <Image
          src="/food3.png"
          alt="Inline Image"
          className="w-full rounded-lg"
          height={100}
          width={200}
        />
        <p className="text-gray-700">
          Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac
          dui quis mi consectetuer lacinia.
        </p>
      </div>
    );
  }
  