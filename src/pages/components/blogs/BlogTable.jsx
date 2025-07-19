import { useState } from "react";
import EditBlogModal from "./EditBlogModal";

const BlogTable = ({ blogs, onDelete, onUpdated }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="overflow-x-auto bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-6 text-white animate-fadeIn">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr className="bg-gray-800 text-center">
              <th className="px-6 py-3  text-xs font-medium text-gray-400 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase">
                Published
              </th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-center">
            {blogs.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No blogs found
                </td>
              </tr>
            )}
            {blogs.map((blog, index) => (
              <tr
                key={blog._id}
                className="hover:bg-gray-800 transition duration-200 animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
              >
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">
                  {blog.isPublished ? "✅ Yes" : "❌ No"}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => openModal(blog)}
                    className="px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 transition duration-200"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDelete(blog._id)}
                    className="px-4 py-1 rounded-lg bg-red-600 hover:bg-red-500 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedBlog && (
        <EditBlogModal
          isOpen={isModalOpen}
          onClose={closeModal}
          blog={selectedBlog}
          onUpdated={onUpdated}
        />
      )}
    </>
  );
};

export default BlogTable;
