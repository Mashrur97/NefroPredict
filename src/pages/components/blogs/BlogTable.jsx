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
      <div className="overflow-x-auto bg-white rounded-lg shadow p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Published
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {blogs.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No blogs found
                </td>
              </tr>
            )}
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">
                  {blog.isPublished ? "✅ Yes" : "❌ No"}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => openModal(blog)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onDelete(blog._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
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
