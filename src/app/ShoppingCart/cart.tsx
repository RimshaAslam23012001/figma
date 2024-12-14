import Image from "next/image";
import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-blue-500">
            <thead>
              <tr className="w-full bg-gray-100 border-b">
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Total</th>
                <th className="py-2 px-4 text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-4 flex items-center">
                  <Image
                    alt="Burger"
                    className="w-12 h-12 rounded-full mr-4"
                    height={50}
                    src="/bug.png"
                    width={50}
                  />
                  <div>
                    <p>Burger</p>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-gray-300" />
                      <FaStar className=" text-gray-300" />
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">$35.00</td>
                <td className="py-4 px-4 flex items-center">
                  <button className="px-2 py-1 border">-</button>
                  <input
                    className="w-12 text-center border mx-2"
                    type="text"
                    defaultValue={1}
                  />
                  <button className="px-2 py-1 border">+</button>
                </td>
                <td className="py-4 px-4">$221.00</td>
                <td className="py-4 px-4 text-red-500 cursor-pointer">X</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 flex items-center">
                  <Image
                    alt="Fresh Lime"
                    className="w-12 h-12 rounded-full mr-4"
                    height={50}
                    src="/aboutus.png"
                    width={50}
                  />
                  <div>
                    <p>Fresh Lime</p>
                    <div className="flex items-center">
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-gray-300" />
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">$25.00</td>
                <td className="py-4 px-4 flex items-center">
                  <button className="px-2 py-1 border">-</button>
                  <input
                    className="w-12 text-center border mx-2"
                    type="text"
                    defaultValue={1}
                  />
                  <button className="px-2 py-1 border">+</button>
                </td>
                <td className="py-4 px-4">$521.00</td>
                <td className="py-4 px-4 text-red-500 cursor-pointer">X</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 flex items-center">
                  <Image
                    alt="Pizza"
                    className="w-12 h-12 rounded-full mr-4"
                    height={50}
                    src="/pixx.png"
                    width={50}
                  />
                  <div>
                    <p>Pizza</p>
                    <div className="flex items-center">
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-gray-300" />
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">$15.00</td>
                <td className="py-4 px-4 flex items-center">
                  <button className="px-2 py-1 border">-</button>
                  <input
                    className="w-12 text-center border mx-2"
                    type="text"
                    defaultValue={1}
                  />
                  <button className="px-2 py-1 border">+</button>
                </td>
                <td className="py-4 px-4">$421.00</td>
                <td className="py-4 px-4 text-red-500 cursor-pointer">X</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 flex items-center">
                  <Image
                    alt="Chocolate Muffin"
                    className="w-12 h-12 rounded-full mr-4"
                    height={50}
                    src="/dessert.png"
                    width={50}
                  />
                  <div>
                    <p>Chocolate Muffin</p>
                    <div className="flex items-center">
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-gray-300" />
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">$45.00</td>
                <td className="py-4 px-4 flex items-center">
                  <button className="px-2 py-1 border">-</button>
                  <input
                    className="w-12 text-center border mx-2"
                    type="text"
                    defaultValue={1}
                  />
                  <button className="px-2 py-1 border">+</button>
                </td>
                <td className="py-4 px-4">$521.00</td>
                <td className="py-4 px-4 text-red-500 cursor-pointer">X</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 flex items-center">
                  <Image
                    alt="Cheese Butter"
                    className="w-12 h-12 rounded-full mr-4"
                    height={50}
                    src="/about4.png"
                    width={50}
                  />
                  <div>
                    <p>Cheese Butter</p>
                    <div className="flex items-center">
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-yellow-500" />
                      <FaStar className=" text-gray-300" />
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">$15.00</td>
                <td className="py-4 px-4 flex items-center">
                  <button className="px-2 py-1 border">-</button>
                  <input
                    className="w-12 text-center border mx-2"
                    type="text"
                    defaultValue={1}
                  />
                  <button className="px-2 py-1 border">+</button>
                </td>
                <td className="py-4 px-4">$325.00</td>
                <td className="py-4 px-4 text-red-500 cursor-pointer">X</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-6">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
            <textarea
              className="w-full p-2 border rounded mb-4"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non"
              rows={3}
              defaultValue={""}
            />
            <div className="flex">
              <input
                className="w-full p-2 border rounded-l"
                placeholder="Enter Here code"
                type="text"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r">
                Apply
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>Cart Subtotal</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping Charge</span>
                <span>$00.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>$205.00</span>
              </div>
            </div>
            <button className="bg-orange-500 text-white w-full py-2 mt-4 rounded-lg flex items-center justify-center">
              Proceed to Checkout
              <BsCheck2Square />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
