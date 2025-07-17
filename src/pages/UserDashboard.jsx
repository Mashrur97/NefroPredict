import { useContext, useState } from "react";
import { IoMdExit } from "react-icons/io";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ChangePasswordModal from "./ChangePasswordModal";
import BlogManager from "./components/blogs/BlogManager";
// import BlogManager from "./blogs/BlogManager";

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("history");
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    if (!Cookies.get("token")) {
      setUser(null);
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="flex flex-col justify-between w-64 bg-white shadow-md border-r border-gray-200">
        <div>
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">User Dashboard</h2>
          </div>
          <nav className="px-4 py-6 space-y-2">
            <button
              onClick={() => setActiveTab("history")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "history"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Prediction History
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "blogs"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Manage Blogs
            </button>
          </nav>
        </div>

        <div className="px-6 py-6 border-t border-gray-200">
          <h3 className="mb-3 text-gray-500 uppercase tracking-wide text-xs font-semibold">
            Profile: {user?.name || "Guest"}
          </h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mb-3 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            Change Password
          </button>
          <ChangePasswordModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition flex items-center justify-center gap-2"
          >
            <IoMdExit size={20} />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        {activeTab === "history" && (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Prediction History
            </h3>
            {/* Your prediction history content */}
          </div>
        )}

        {activeTab === "blogs" && <BlogManager />}
      </main>
    </div>
  );
};

export default UserDashboard;
