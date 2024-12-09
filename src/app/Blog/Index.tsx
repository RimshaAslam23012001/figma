import Card from "./Card";
import Sidebar from "./Sidebar";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
         <Hero />
    
    <div className="container mx-auto px-4 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Card
            image="/food1.png"
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
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
    </div>
  );
}
