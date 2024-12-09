import Image from "next/image";

export default function Sidebar() {
    return (
<div>
        

      <div className="space-y-6">
        {/* Author Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
        <Image
            src="/chef1.png"
            alt="Author"
            width={20}
            height={20}
            className=" mx-auto rounded-full"
          />
          <h3 className="text-center text-lg font-semibold mt-4">John Doe</h3>
          <p className="text-center text-sm text-gray-600 mt-2">
            Food blogger & enthusiast.
          </p>
        </div>
  
        {/* Categories */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-sm text-gray-600">Sandwiches</li>
            <li className="text-sm text-gray-600">Pizzas</li>
            <li className="text-sm text-gray-600">Soups</li>
          </ul>
        </div>
  
        {/* Popular Recipes */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Popular Recipes</h3>
          <ul className="mt-4 space-y-4">
            <li>
            <Image
                src="/b1.png"
                alt="Recipe 1"
                width={100}
                height={100}
                className="w-full rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Quick & Easy Pasta Recipe
              </p>
            </li>
            <li>
            <Image
                src="/b2.png"
                alt="Recipe 2"
                className="w-full rounded-lg"
                width={100}
                height={100}
              />
              <p className="text-sm text-gray-600 mt-2">
                Best Homemade Pizza Dough
              </p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
  