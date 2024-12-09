import React from 'react';
import Image from 'next/image';

const Food_carigery = () => {
    return (
    
        <div className="container mx-auto py-8">
  <div className="text-center text-white mb-8">
    <h2 className="text-yellow-500 text-lg">Food Category</h2>
    <h1 className="text-4xl font-bold">
      <span className="text-yellow-500">Choose  </span>
         Food Item
    </h1>
  </div>
  <div className="flex justify-center space-x-4">
    <div className="relative">
      <Image
        alt="A bowl of salad with a 'Save 30%' label and 'Fast Food Dish' text"
        className="w-48 h-48 object-cover rounded-lg"
        height={200}
        src="/food1.png"
        width={200}
      />
      <div className="absolute top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded">
        Save 30%
      </div>
      <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-2 py-1 rounded">
        Fast Food Dish
      </div>
    </div>
    <div>
      <Image
        alt="A burger with lettuce and tomato"
        className="w-48 h-48 object-cover rounded-lg"
        height={200}
        src="/food2.png"
        width={200}
      />
    </div>
    <div>
      <Image
        alt="A plate of salad with various vegetables"
        className="w-48 h-48 object-cover rounded-lg"
        height={200}
        src="/food3.png"
        width={200}
      />
    </div>
    <div>
      <Image
        alt="A stack of donuts with sprinkles"
        className="w-48 h-48 object-cover rounded-lg"
        height={200}
        src="/food4.png"
        width={200}
      />
    </div>
  </div>
</div>


  )
}

export default Food_carigery;
