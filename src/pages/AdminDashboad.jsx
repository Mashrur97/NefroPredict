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
  const navigate = useNavigate(); // 👈 for redirection

  // Fetch users
  const fetchUsers = () => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => toast.error("Failed to load users"));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Update role
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

  // Delete user
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

  // Fetch blogs
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

  // Toggle blog publish status
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

  // Delete blog
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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow relative">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="p-6 space-y-3">
          <button
            onClick={() => setActiveTab("manageUsers")}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeTab === "manageUsers"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaUsers /> Manage Users
          </button>
          <button
            onClick={() => setActiveTab("manageBlogs")}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeTab === "manageBlogs"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaBlog /> Manage Blogs
          </button>
          <button
            onClick={() => setActiveTab("userHistory")}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeTab === "userHistory"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaHistory /> All User History
          </button>
        </nav>

        {/* ✅ Home Button at Bottom */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            🏠 Home
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === "manageUsers" && (
          <>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Manage Users
            </h3>
            <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Role</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users?.data?.map((user) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">
                        <select
                          value={user.role}
                          onChange={(e) =>
                            handleRoleChange(user.email, e.target.value)
                          }
                          className="border px-2 py-1 rounded"
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <button
                          onClick={() =>
                            handleRoleChange(
                              user.email,
                              user.role === "admin" ? "user" : "admin"
                            )
                          }
                          className="text-blue-600 hover:underline"
                        >
                          <FaUserEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.email)}
                          className="text-red-600 hover:underline"
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
            <h3 className="text-xl mb-6 font-semibold text-gray-800">
              User Blogs
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-4 overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-100 to-blue-300 text-left text-sm font-medium text-gray-700">
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Author Email</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {blogs.length === 0 ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center py-6 text-gray-500"
                      >
                        No blogs found
                      </td>
                    </tr>
                  ) : (
                    blogs.map((b) => (
                      <tr
                        key={b._id}
                        className="hover:bg-gray-50 transition duration-150"
                      >
                        <td className="px-6 py-3">{b.title}</td>
                        <td className="px-6 py-3">{b.authorEmail}</td>
                        <td className="px-6 py-3">
                          {b.isPublished ? "✅ Published" : "🕓 Pending"}
                        </td>
                        <td className="px-6 py-3 flex gap-2">
                          <button
                            onClick={() =>
                              handleToggleBlog(b._id, b.isPublished)
                            }
                            className={`px-4 py-1 rounded font-medium ${
                              b.isPublished
                                ? "bg-yellow-500 hover:bg-yellow-600"
                                : "bg-green-500 hover:bg-green-600"
                            } text-white transition`}
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
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              All User Prediction History
            </h3>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500">
                User prediction history goes here...
              </p>
            </div>
          </>
        )}
      </main>
      <Toaster />
    </div>
  );
};

export default AdminDashboard;
