import Link from "next/link";
import ProductCard from "./ProductCard";
import Sidebar from "./SideBars";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Menu() {
  // Example data for the products
  const products = [
    { id: 1, name: "Burger Special", image: "/bug.png", price: "$12.99" },
    { id: 2, name: "Pizza", image: "/pixx.png", price: "$14.99" },
    { id: 3, name: "Cocktails", image: "/drinks.png", price: "$8.99" },
    { id: 4, name: "Dessert", image: "/dessert.png", price: "$6.50" },
    { id: 5, name: "Pasta", image: "/pixx.png", price: "$10.50" },
    { id: 6, name: "Wings", image: "/salad.png", price: "$9.99" },
    {
      id: 7,
      name: "Sandwich",
      image: "/unsplash_mAQZ3X_8_lb6.png",
      price: "$10.99",
    },
    { id: 8, name: "Chaomin", image: "/menu.png", price: "$15.32" },
    { id: 9, name: "Lava Burger", image: "/mainCourse.png", price: "$56.00" },
    { id: 10, name: "Sandwich", image: "/foodpic3.jpeg", price: "$23.62" },
    { id: 11, name: "Nuggets", image: "/foodpic2.jpeg", price: "$8.25" },
    { id: 12, name: "Eggs", image: "/foodpic1.jpeg", price: "$32.33" },
    { id: 13, name: "Mix Salad", image: "/food1.png", price: "$23.23" },
    { id: 14, name: "Donuts", image: "/food2.png", price: "$10.12" },
    { id: 15, name: "Salad", image: "/food3.png", price: "$15.99" },
  ];
  return (
    <div>
      <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
              Our Shop
            </h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
              <span className="text-white ">Home</span>
              <IoChevronForwardOutline className="text-white" />
              <span className="text-[#FF9F0D]">Shop </span>
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Sort By :</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-gray-700">
              <option>Newest</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Show :</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-gray-700">
              <option>Default</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Product Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
          {/* Sidebar */}
          <Sidebar />
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-white rounded-lg hover:bg-orange-600">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-orange-600">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-orange-600">
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
