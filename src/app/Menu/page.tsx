import Link from "next/link";
import Experience from "../components/Experience";
import Dessert from "./Desserts";
import Drink from "./Drinks";
import MainCours from "./MainCours";
import PartnersAndClients from "./PartnersAndClient";
import StarterMenu from "./StarterMenu";
import Navbar1 from "../components/Navbar1";

export default function Menu() {
  return (
<div>
     <Navbar1/>
    <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
           Our Menu
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href={"/Menu"} className='text-[#FF9F0D]'>
              Menu
            </Link>
          </div>
        </div>
      </div>
    </section>

  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}