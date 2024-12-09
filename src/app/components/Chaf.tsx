import React from 'react';

import Image from 'next/image';

const Chef = () => {
  return (
<div>
<div className="text-center text-white py-12">
<h2 className="text-yellow-500 text-2xl">Chefs</h2>
<h1 className="text-4xl font-bold">
  <span className="text-yellow-500">Meet   </span>
    Our Chef
</h1>
</div>
<div className="flex flex-wrap justify-center gap-6 px-4">
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-xs">
  <Image
    alt="Chef D. Estwood"
    className="w-full h-48 object-cover"
    height={300}
    src="/chef1.png"
    width={400}
  />
 
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-xs">
<Image
    alt="Chef D. Scoreish"
    className="w-full h-48 object-cover"
    height={300}
    src="/chef2.png"
    width={400}
  />

</div>
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-xs">
<Image
    alt="Chef M. William"
    className="w-full h-48 object-cover"
    height={300}
    src="/chef3.png"
    width={400}
  />

</div>
<div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-xs">
<Image
    alt="Chef W. Readfroad"
    className="w-full h-48 object-cover"
    height={300}
    src="/chef4.png"
    width={400}
  />
 
</div>
</div>

<div className="text-center py-12">
<a href='/OurChef'>
<button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
  See More
  
  
</button>
</a>
</div>
</div>

)
}

export default Chef;