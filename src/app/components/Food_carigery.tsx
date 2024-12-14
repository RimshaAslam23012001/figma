import React from "react";
import Image from "next/image";

const Food_carigery = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-8">
      <div className="text-center text-white mb-8">
        <h2 className="text-yellow-500 text-lg">Food Category</h2>
        <h1 className="text-2xl sm:text-4xl font-bold">
          <span className="text-yellow-500">Choose </span> Food Item
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="relative w-full sm:w-[305px] h-[328px]">
          <Image
            alt="A bowl of salad with a 'Save 30%' label and 'Fast Food Dish' text"
            className="w-full h-full object-cover rounded-lg"
            src="/food1.png"
            width={305}
            height={328}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded">
              Save 30%
            </div>
            <div className=" bottom-4 left-4 bg-orange-500 text-white px-2 py-1 rounded">
              Fast Food Dish
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-[305px] h-[328px]">
          <Image
            alt="A burger with lettuce and tomato"
            className="w-full h-full object-cover rounded-lg"
            src="/food2.png"
            width={305}
            height={328}
          />
        </div>

        <div className="relative w-full sm:w-[305px] h-[328px]">
          <Image
            alt="A plate of salad with various vegetables"
            className="w-full h-full object-cover rounded-lg"
            src="/food3.png"
            width={305}
            height={328}
          />
        </div>

        <div className="relative w-full sm:w-[305px] h-[328px]">
          <Image
            alt="A stack of donuts with sprinkles"
            className="w-full h-full object-cover rounded-lg"
            src="/food4.png"
            width={305}
            height={328}
          />
        </div>
      </div>
    </div>
  );
};

export default Food_carigery;
