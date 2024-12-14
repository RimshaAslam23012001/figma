import Image from "next/image";
import { FaShare } from "react-icons/fa";

export default function Sidebar() {
    return (
      <div className="w-full max-w-xs mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <input
            className="w-full border border-gray-300 rounded-full py-2 px-4"
            placeholder="Search Product"
            type="text"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 bg-orange-500 text-white rounded-full p-2">
            <FaShare />
          </button>
        </div>
      </div>
      {/* Category */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">Category</h2>
        <ul className="space-y-2">
          <li>
            <label>
              <input className="mr-2" type="checkbox" />
              Sandwiches
            </label>
          </li>
          <li>
            <label>
              <input className="mr-2" type="checkbox" />
              Burger
            </label>
          </li>
          <li>
            <label>
              <input className="mr-2" type="checkbox" />
              Chicken Chop
            </label>
          </li>
          <li>
            <label>
              <input className="mr-2" type="checkbox" />
              Pasta
            </label>
          </li>
          <li>
            <label>
              <input className="mr-2" type="checkbox" />
              Pizza
            </label>
          </li>
          <li>
            <label>
              <input className="mr-2" type="checkbox" />
              Veg
            </label>
          </li>
          <li>
            <label>
              <input className="mr-2" type="checkbox" />
              Non Veg
            </label>
          </li>
          <li>
            <label>
              <input className="mr-2" type="checkbox" />
              Uncategorized
            </label>
          </li>
        </ul>
      </div>
      {/* Featured Product */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">Featured Product</h2>
        <div className="relative">
          <Image
            alt="A chef preparing a gourmet dish"
            className="w-full rounded-lg"
            height={200}
            src="/salt.png"
            width={300}
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
            <h3 className="text-lg font-bold">Gourmet Course</h3>
            <p className="text-sm">$15.00</p>
            <button className="mt-2 bg-orange-500 text-white rounded-full px-4 py-1">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* Filter by Price */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">Filter by Price</h2>
        <input className="w-full" max={200} min={20} type="range" />
        <div className="flex justify-between text-sm mt-2">
          <span>$20</span>
          <span>$200</span>
        </div>
      </div>
      {/* Latest Products */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">Latest Products</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
          <Image
              alt="Image of Fries"
              className="w-12 h-12 rounded-lg mr-4"
              height={50}
              src="/min.png"
              width={50}
            />
            <div>
              <h3 className="text-sm font-bold">Fries</h3>
              <p className="text-sm">$2.00</p>
            </div>
          </li>
          <li className="flex items-center">
          <Image
              alt="Image of Cupcake"
              className="w-12 h-12 rounded-lg mr-4"
              height={50}
              src="/min.png"
              width={50}
            />
            <div>
              <h3 className="text-sm font-bold">Cupcake</h3>
              <p className="text-sm">$3.00</p>
            </div>
          </li>
          <li className="flex items-center">
          <Image
              alt="Image of Soda"
              className="w-12 h-12 rounded-lg mr-4"
              height={50}
              src="/min.png"
              width={50}
            />
            <div>
              <h3 className="text-sm font-bold">Soda</h3>
              <p className="text-sm">$1.50</p>
            </div>
          </li>
          <li className="flex items-center">
          <Image
              alt="Image of Burger"
              className="w-12 h-12 rounded-lg mr-4"
              height={50}
           src="/min.png"
              width={50}
            />
            <div>
              <h3 className="text-sm font-bold">Burger</h3>
              <p className="text-sm">$5.00</p>
            </div>
          </li>
        </ul>
      </div>
      {/* Product Tags */}
      <div className="mb-4">
        <h2 className="font-bold mb-2">Product Tags</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Sandwich</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Our Menu</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Pizza</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Cupcake</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Chicken</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Burger</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Our Shop</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Seafood</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Chicken</span>
        </div>
      </div>
    </div>
    
    );
  }
  