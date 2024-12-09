import React from 'react'



export default function CommentSection() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800">Comments (2)</h2>
  
        {/* Existing Comments */}
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium text-gray-800">Jane Doe</p>
            <p className="text-sm text-gray-600">December 8, 2024</p>
            <p className="mt-2 text-gray-700">
              This is a fantastic article. Thank you for sharing!
            </p>
          </div>
  
          <div>
            <p className="font-medium text-gray-800">Mike Smith</p>
            <p className="text-sm text-gray-600">December 7, 2024</p>
            <p className="mt-2 text-gray-700">
              I tried this recipe, and it turned out amazing!
            </p>
          </div>
        </div>
  
        {/* Add a Comment */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Post a comment</h3>
          <form className="mt-4 space-y-4">
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
              rows={4}
              placeholder="Write your comment here..."
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  