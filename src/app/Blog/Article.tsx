import ArticleContent from "./ArticleContent";
import CommentSection from "./Comment.Section";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Image from "next/image";


export default function Article() {
  return (
     <div>
        <Hero />
    <div className="container mx-auto px-4 lg:px-8 py-6">
              
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Article Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Article Header */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
              src="/pic5.png"
              alt="Article Header"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800">
                10 Reasons To Try A New Kitchen Challenge
              </h1>
              <div className="flex items-center space-x-4 mt-4">
              <Image
                  src="/pic6.png"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">John Doe</p>
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
