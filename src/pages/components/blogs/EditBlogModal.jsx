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
      onUpdated(); // refetch blogs
      onClose(); // close modal
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-6 rounded shadow w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold mb-2">Update Blog</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full p-2 border rounded file:text-black"
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogModal;
