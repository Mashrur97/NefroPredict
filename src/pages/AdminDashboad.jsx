import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast, Toaster } from "sonner";
import axios from "axios";
import {
  FaBlog,
  FaHistory,
  FaTrash,
  FaUserEdit,
  FaUsers,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("manageUsers");
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const token = Cookies.get("token");
  const navigate = useNavigate();

  const fetchUsers = () => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => toast.error("Failed to load users"));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = (email, newRole) => {
    fetch(`http://localhost:5000/api/user/${email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` ${token}`,
      },
      body: JSON.stringify({ role: newRole }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Role updated!");
        fetchUsers();
      })
      .catch(() => toast.error("Failed to update role"));
  };

  const handleDeleteUser = (email) => {
    fetch(`http://localhost:5000/api/user/${email}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("User deleted");
        fetchUsers();
      })
      .catch(() => toast.error("Failed to delete user"));
  };

  useEffect(() => {
    if (activeTab === "manageBlogs") fetchBlogs();
  }, [activeTab]);

  const fetchBlogs = () => {
    axios
      .get("http://localhost:5000/api/blogs/get-all", {
        headers: { Authorization: token },
      })
      .then((res) => setBlogs(res.data.data || []))
      .catch(() => toast.error("Failed to load blogs"));
  };

  const handleToggleBlog = (id, currentStatus) => {
    axios
      .patch(
        `http://localhost:5000/api/blogs/${id}/publish`,
        { isPublished: !currentStatus },
        { headers: { Authorization: token } }
      )
      .then(() => {
        toast.success("Publish status updated");
        fetchBlogs();
      })
      .catch(() => toast.error("Failed to update status"));
  };

  const handleDeleteBlog = (id) => {
    axios
      .delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        toast.success("Blog deleted");
        fetchBlogs();
      })
      .catch(() => toast.error("Failed to delete blog"));
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 bg-gray-900 bg-opacity-90 backdrop-blur-md  shadow relative">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-center text-blue-400">Admin Dashboard</h2>
        </div>
        <nav className="p-6 space-y-3">
          <button
            onClick={() => setActiveTab("manageUsers")}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === "manageUsers" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <FaUsers /> Manage Users
          </button>
          <button
            onClick={() => setActiveTab("manageBlogs")}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === "manageBlogs" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <FaBlog /> Manage Blogs
          </button>
          <button
            onClick={() => setActiveTab("userHistory")}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === "userHistory" ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <FaHistory /> All User History
          </button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            🏠 Home
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        {activeTab === "manageUsers" && (
          <>
            <h3 className="text-3xl text-center font-semibold mb-6 text-blue-400">Manage Users</h3>
            <div className="overflow-x-auto bg-gray-900 rounded-lg shadow p-4">
              <table className="min-w-full text-sm text-left text-white">
                <thead className="bg-gray-800 text-xs uppercase text-gray-400 text-center">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Role</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700 text-center">
                  {users?.data?.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-800">
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">
                        <select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user.email, e.target.value)}
                          className="bg-gray-800 text-white border border-gray-600 px-2 py-1 rounded"
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 flex gap-3 justify-center">
                        <button
                          onClick={() => handleRoleChange(user.email, user.role === "admin" ? "user" : "admin")}
                          className="text-blue-400 hover:text-blue-600"
                        >
                          <FaUserEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.email)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === "manageBlogs" && (
          <>
            <h3 className="text-3xl mb-6 font-semibold text-blue-400 text-center">User Blogs</h3>
            <div className="bg-gray-900 rounded-xl shadow-lg p-4 overflow-x-auto">
              <table className="min-w-full table-auto border-collapse text-white">
                <thead>
                  <tr className="bg-gray-800 text-sm font-medium text-gray-300 text-center">
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Author Email</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {blogs.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-6 text-gray-500">
                        No blogs found
                      </td>
                    </tr>
                  ) : (
                    blogs.map((b) => (
                      <tr key={b._id} className="hover:bg-gray-800 transition duration-150 text-center">
                        <td className="px-6 py-3">{b.title}</td>
                        <td className="px-6 py-3">{b.authorEmail}</td>
                        <td className="px-6 py-3">{b.isPublished ? "✅ Published" : "🕓 Pending"}</td>
                        <td className="px-6 py-3 flex gap-2">
                          <button
                            onClick={() => handleToggleBlog(b._id, b.isPublished)}
                            className={`px-4 py-1 rounded font-medium transition text-white ${
                              b.isPublished ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
                            }`}
                          >
                            {b.isPublished ? "Unpublish" : "Publish"}
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(b._id)}
                            className="px-4 py-1 rounded font-medium bg-red-500 hover:bg-red-600 text-white transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === "userHistory" && (
          <>
            <h3 className="text-3xl font-semibold mb-6 text-blue-400 text-center">All User Prediction History</h3>
            <div className="bg-gray-900 p-4 rounded shadow text-gray-300">
              <p>User prediction history goes here...</p>
            </div>
          </>
        )}
      </main>
      <Toaster />
    </div>
  );
};

export default AdminDashboard;
