import Card from "./Card";
import Sidebar from "./Sidebar";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
              Blog List
            </h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
              <span className="text-white ">Home</span>
              <IoChevronForwardOutline className="text-white" />
              <span className="text-[#FF9F0D]">Blog Page</span>
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card
              image="/aboutus.png"
              title="Delicious and Healthy Chicken Sandwich"
              description="A step-by-step recipe guide for making a perfect chicken sandwich."
              date="December 8, 2024"
              author="John Doe"
            />
            <Card
              image="/food2.png"
              title="Wood-Fired Pizza with Extra Cheese"
              description="Learn how to create the best wood-fired pizza from scratch."
              date="December 7, 2024"
              author="Jane Smith"
            />
            <Card
              image="/food3.png"
              title="Spicy Mexican Soup with Fresh Ingredients"
              description="Try out this amazing spicy Mexican soup recipe for a warm treat."
              date="December 6, 2024"
              author="Emily Brown"
            />
            <Card
              image="/food1.png"
              title="Spicy Mexican Soup with Fresh Ingredients"
              description="Try out this amazing spicy Mexican soup recipe for a warm treat."
              date="December 8, 2024"
              author="Emily Brown"
            />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
