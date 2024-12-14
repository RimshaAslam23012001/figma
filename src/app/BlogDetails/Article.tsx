import ArticleContent from "./ArticleContent";
import Image from "next/image";
import CommentSection from "./CommentSection";
import Sidebar from "../Blog/Sidebar";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Article() {
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
              <span className="text-[#FF9F0D]">Blog Details</span>
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Article Header */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/aboutus.png"
                alt="Article Header"
                className="w-full h-80 object-cover"
                height={100}
                width={200}
              />
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  10 Reasons To Try A New Kitchen Challenge
                </h1>
                <div className="flex items-center space-x-4 mt-4">
                  <Image
                    src="/food1.png"
                    alt="Author"
                    className="w-10 h-10 rounded-full"
                    height={100}
                    width={200}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      John Doe
                    </p>
                    <p className="text-sm text-gray-500">December 8, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <ArticleContent />

            {/* Comments Section */}
            <CommentSection />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
