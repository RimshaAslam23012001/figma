import ProductCard from "./ProductCard";
import Sidebar from "./SideBars";
import HeroS from './HeroS'


export default function Menu() {
  // Example data for the products
  const products = [
    { id: 1, name: "Burger Special", image: "/bug.png", price: "$12.99" },
    { id: 2, name: "Pizza", image: "/pixx.png", price: "$14.99" },
    { id: 3, name: "Cocktails", image: "/drinks.png", price: "$8.99" },
    { id: 4, name: "Dessert", image: "/dessert.png", price: "$6.50" },
    { id: 5, name: "Pasta", image: "/pixx.png", price: "$10.50" },
    { id: 6, name: "Wings", image: "/salad.png", price: "$9.99" },
  ];

  return (
    <div>
        <HeroS />
    <div className="container mx-auto px-4 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <Sidebar />

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
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            1
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            2
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            3
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
