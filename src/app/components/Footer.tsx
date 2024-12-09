import { Clock, Facebook, Twitter, Instagram, Youtube, PinIcon } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  // About Us Section
  const AboutUsSection = () => (
    <div className='w-[395.2px]'>
      <h3 className="text-xl font-bold mb-8">About Us.</h3>
      <p className="mb-6 text-[18px] leading-[26px]">
        Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the World.
      </p>
      <div className="flex items-start">
        <div className="bg-[#FF9F0D] p-2 rounded mr-4 w-[77.23px] h-[70.79px]">
          <Clock className="text-white" />
        </div>
        <div>
          <h4 className="font-semibold">Opening Hours</h4>
          <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );

  // Help Section
  const HelpSection = () => {
    const links = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'];
    return (
      <div>
        <h3 className="text-xl font-bold mb-6">Help?</h3>
        <ul className="text-[16px] flex flex-col gap-4 leading-6">
          {links.map((link, ) => (
           
            <li key={link} className="mb-2">
              <a href="../FAQ" className="hover:text-[#FF9F0D] transition duration-300">
                {link}
              </a>
            </li>
        
          ))}
        </ul>
      </div>
    );
  };

  // Newsletter Section
  const NewsletterSection = () => (
    <div className="w-[1169px] mx-auto text-center mb-12 flex gap-[271px]">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#FF9F0D]">Still</span> You Need Our Support ?
        </h2>
        <p className="mb-6">Don&apos;t wait make a smart & logical quote here. It&apos;s pretty easy.</p>
      </div>
      <form className="w-[459px] h-[55.86px] flex max-w-2xl mx-auto">
        <input 
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-[#FF9F0D] px-6 py-2 rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );

  // Recent Posts Section
  const RecentPostsSection = () => {
    const posts = [
      { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
      { title: "Change your food habit With organic food", date: "February 28, 2022", image: "/recentPost.png" },
      { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/recentPost.png" },
    ];
    return (
      <div className="w-[273.83px]">
        <h3 className="text-xl font-bold mb-8">Recent Post</h3>
        {posts.map((post, index) => (
          <div key={index} className="flex  items-center mb-4">
            <Image src={post.image} alt="" className="w-16 h-16 object-cover mr-4" />
            <div>
              <h4 className="font-semibold mb-1">{post.title}</h4>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Social Icons Section
  const SocialIcons = () => {
    const icons = [
      { Icon: Facebook, color: 'text-[#1E1E1E]' },
      { Icon: Twitter, color: 'text-[#1E1E1E]' },
      { Icon: Instagram, color: 'text-[#1E1E1E]' },
      { Icon: Youtube, color: 'text-[#FF9F0D]' },
      { Icon: PinIcon, color: 'text-[#1E1E1E]' },
    ];
    return (
      <div className="flex space-x-4">
        {icons.map(({ Icon, color }, index) => (
          <a
            key={index}
            href="#"
            className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    );
  };

  // Useful Links Section
  const UsefulLinksSection = () => {
    const links = ['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'];
    return (
      <div className="w-[120.36px]">
        <h3 className="text-xl font-bold mb-6">Useful Links</h3>
        <ul className="text-[16px] leading-6 flex flex-col gap-4">
          {links.map((Partner) => (
            <li key={Partner} className="mb-2">
              <a href="../Partner" className="hover:text-[#FF9F0D] transition duration-300">
                {Partner}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4 py-16">
        <NewsletterSection />
        <div className="border-t border-[#FF9F0D] my-8"></div>
        <div className="flex justify-between items-center mt-[56px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>
      <div className="bg-[#4F4F4F] py-8 flex ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
