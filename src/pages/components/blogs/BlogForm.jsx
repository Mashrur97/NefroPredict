import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const BlogForm = ({ email, onBlogCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please upload an image");
      return;
    }

    if (!email) {
      toast.error("User email not found. Please log in.");
      return;
    }

    setLoading(true);

    try {
      // Upload image to Cloudinary
      const imageData = new FormData();
      imageData.append("file", imageFile);
      imageData.append("upload_preset", "cloudy");
      imageData.append("cloud_name", "drbmetoqj");

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/drbmetoqj/image/upload",
        imageData
      );

      const imageUrl = cloudRes.data.secure_url;

      // Create blog post with image URL & author email
      const result = await axios.post("http://localhost:5000/api/blogs", {
        title: formData.title,
        content: formData.content,
        imageUrl,
        authorEmail: email,
      });

      if (result.data?.data?._id) {
        toast.success("Blog posted successfully!");
        setFormData({ title: "", content: "" });
        setImageFile(null);
        onBlogCreated?.();
      } else {
        toast.error("Blog post failed");
      }
    } catch (error) {
      toast.error("Failed to post blog");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="">
      <p className="text-3xl mb-8 font-bold">Post Blog</p>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-6 space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className="w-full p-2 border rounded file:text-black"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
