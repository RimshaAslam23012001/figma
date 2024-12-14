import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaStar, FaSearch} from "react-icons/fa";

export default function Sidebar() {
    return (
<div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="p-4">
    <div className="flex items-center border-b pb-4">
      <input
        className="flex-grow p-2 border rounded-l-lg"
        placeholder="Search for recipes..."
        type="text"
      />
      <button className="bg-orange-500 text-white p-2 rounded-r-lg">
        <FaSearch/>
      </button>
    </div>
    <div className="text-center mt-4">
      <Image
        alt="Profile picture of a person"
        className="w-24 h-24 rounded-full mx-auto"
        height={100}
        src="/pic5.png"
        width={100}
      />
      <h2 className="text-xl font-bold mt-2">Prince Whyte</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros.
      </p>
      <div className="flex justify-center items-center mt-2">
        <FaStar className=" text-yellow-500"/>
        <FaStar className=" text-yellow-500"/>
        <FaStar className=" text-yellow-500"/>
        <FaStar className=" text-yellow-500"/>
        <FaStar className=" text-gray-300"/>
/      <div className="flex justify-center space-x-4">
      <Link className="text-gray-600" href="#">
      <FaFacebookF/>
      </Link>
      <Link className="text-gray-600" href="#">
     <FaInstagram/>
      </Link>
      <Link className="text-gray-600" href="#">
      <FaPinterestP/>
      </Link>
      <Link className="text-gray-600" href="#">
        <FaTwitter/>
      </Link>
    </div>
    </div>
  </div>
  <div className="p-4 border-t">
    <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
    <div className="space-y-4">
      <div className="flex items-center">
      <Image
          alt="Image of a dish"
          className="w-12 h-12 rounded-lg"
          height={50}
          src="/food1.png"
          width={50}
        />
        <div className="ml-4">
          <h4 className="font-semibold">Quick-start guide to nuts and seeds</h4>
          <p className="text-gray-600 text-sm">3 min read</p>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          alt="Image of a dish"
          className="w-12 h-12 rounded-lg"
          height={50}
          src="/food2.png"
          width={50}
        />
        <div className="ml-4">
          <h4 className="font-semibold">
            Nutrition: Tips for Improving Your Health
          </h4>
          <p className="text-gray-600 text-sm">4 min read</p>
        </div>
      </div>
      <div className="flex items-center">
      <Image
          alt="Image of a dish"
          className="w-12 h-12 rounded-lg"
          height={50}
          src="/food3.png"
          width={50}
        />
        <div className="ml-4">
          <h4 className="font-semibold">
            The top 10 benefits of eating healthy
          </h4>
          <p className="text-gray-600 text-sm">5 min read</p>
        </div>
      </div>
      <div className="flex items-center">
      <Image
          alt="Image of a dish"
          className="w-12 h-12 rounded-lg"
          height={50}
          src="/food4.png"
          width={50}
        />
        <div className="ml-4">
          <h4 className="font-semibold">What Makes a Healthy Diet?</h4>
          <p className="text-gray-600 text-sm">6 min read</p>
        </div>
      </div>
    </div>
  </div>
  <div className="p-4 border-t">
    <h3 className="text-lg font-semibold mb-4">Filter By Name</h3>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <Image
            alt="Image of a dish"
            className="w-12 h-12 rounded-lg"
            height={50}
            src="/drinks.png"
            width={50}
          />
          <span className="ml-4 font-semibold">Chicken Fry</span>
        </div>
        <span className="text-gray-600">26</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <Image
            alt="Image of a dish"
            className="w-12 h-12 rounded-lg"
            height={50}
            src="/aboutus.png"
            width={50}
          />
          <span className="ml-4 font-semibold">Burger Food</span>
        </div>
        <span className="text-gray-600">4</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <Image
            alt="Image of a dish"
            className="w-12 h-12 rounded-lg"
            height={50}
            src="/bug.png"
            width={50}
          />
          <span className="ml-4 font-semibold">Pizza Fruits</span>
        </div>
        <span className="text-gray-600">20</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <Image
            alt="Image of a dish"
            className="w-12 h-12 rounded-lg"
            height={50}
            src="/menu.png"
            width={50}
          />
          <span className="ml-4 font-semibold">Vegetables</span>
        </div>
        <span className="text-gray-600">8</span>
      </div>
    </div>
  </div>
  <div className="p-4 border-t">
    <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        Restaurant
      </span>
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        Food
      </span>
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        Dessert
      </span>
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        Chicken
      </span>
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        Dishes
      </span>
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        Drinks
      </span>
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        Vegetables
      </span>
      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
        Chef
      </span>
    </div>
  </div>
  <div className="p-4 border-t">
    <h3 className="text-lg font-semibold mb-4">Photo Gallery</h3>
    <div className="grid grid-cols-3 gap-2">
    <Image
        alt="Image of a dish"
        className="w-full h-full object-cover rounded-lg"
        height={100}
        src="/bug.png"
        width={100}
      />
      <Image
        alt="Image of a dish"
        className="w-full h-full object-cover rounded-lg"
        height={100}
        src="/bug.png"
        width={100}
      />
     <Image
        alt="Image of a dish"
        className="w-full h-full object-cover rounded-lg"
        height={100}
        src="/bug.png"
        width={100}
      />
       <Image
        alt="Image of a dish"
        className="w-full h-full object-cover rounded-lg"
        height={100}
        src="/bug.png"
        width={100}
      />
       <Image
        alt="Image of a dish"
        className="w-full h-full object-cover rounded-lg"
        height={100}
        src="/bug.png"
        width={100}
      />
       <Image
        alt="Image of a dish"
        className="w-full h-full object-cover rounded-lg"
        height={100}
        src="/bug.png"
        width={100}
      />
    </div>
  </div>
  <div className="p-4 border-t">
    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
    <div className="flex justify-center space-x-4">
      <Link className="text-gray-600" href="#">
      <FaFacebookF/>
      </Link>
      <Link className="text-gray-600" href="#">
     <FaInstagram/>
      </Link>
      <Link className="text-gray-600" href="#">
      <FaPinterestP/>
      </Link>
      <Link className="text-gray-600" href="#">
        <FaTwitter/>
      </Link>
    </div>
  </div>
</div>
</div>

    );
  }
  