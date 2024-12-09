export default function Sidebar() {
    return (
      <div className="space-y-6">
        {/* Categories */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-sm text-gray-600">Burgers</li>
            <li className="text-sm text-gray-600">Pizzas</li>
            <li className="text-sm text-gray-600">Drinks</li>
            <li className="text-sm text-gray-600">Desserts</li>
          </ul>
        </div>
  
        {/* Filters */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Filter By</h3>
          <div className="mt-4">
            <label className="block text-sm text-gray-600">
              Price Range
              <input
                type="range"
                className="w-full mt-2"
                min="1"
                max="100"
              />
            </label>
          </div>
        </div>
  
        {/* Popular Tags */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Popular Tags</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-gray-100 text-sm text-gray-600 px-2 py-1 rounded-lg">
              Pizza
            </span>
            <span className="bg-gray-100 text-sm text-gray-600 px-2 py-1 rounded-lg">
              Drinks
            </span>
            <span className="bg-gray-100 text-sm text-gray-600 px-2 py-1 rounded-lg">
              Burgers
            </span>
          </div>
        </div>
      </div>
    );
  }
  