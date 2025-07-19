import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const EditBlogModal = ({ isOpen, onClose, blog, onUpdated }) => {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = blog.imageUrl;

    if (imageFile) {
      const imageData = new FormData();
      imageData.append("file", imageFile);
      imageData.append("upload_preset", "cloudy");
      imageData.append("cloud_name", "drbmetoqj");

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/drbmetoqj/image/upload",
        imageData
      );
      imageUrl = cloudRes.data.secure_url;
    }

    try {
      await axios.patch(
        `http://localhost:5000/api/blogs/user-update/${blog._id}`,
        {
          title,
          content,
          imageUrl,
        }
      );

      toast.success("Blog updated");
      onUpdated();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <form
        onSubmit={handleUpdate}
        className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-6 text-white"
      >
        <h2 className="text-2xl text-center font-bold mb-4">Update Blog</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full p-2 border border-gray-700 rounded-lg bg-gray-800 file:bg-blue-600 file:text-white file:rounded-l file:px-3"
        />
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogModal;
