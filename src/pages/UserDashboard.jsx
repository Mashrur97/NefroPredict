import { useContext, useState } from "react";
import { IoMdExit } from "react-icons/io";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ChangePasswordModal from "./ChangePasswordModal";
import BlogManager from "./components/blogs/BlogManager";
import Nav from "../Components/Nav";

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("blogs");
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
    <div>
      <Nav />
      <div className="flex min-h-screen bg-black pt-3">
        <aside className="w-64 bg-gray-900 border-gray-700 shadow flex flex-col justify-between">
          <div>
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">User Dashboard</h2>
            </div>
            <nav className="p-6 space-y-3">
              <button
                onClick={() => setActiveTab("blogs")}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg ${
                  activeTab === "blogs"
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Manage Blogs
              </button>
              <button
                onClick={() => setActiveTab("history")}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg ${
                  activeTab === "history"
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Prediction History
              </button>
            </nav>
          </div>

          <div className="p-6 border-t border-gray-700">
            <h3 className="mb-3 text-gray-400 uppercase text-sm font-semibold">
              Hey there, {user?.name || "Guest"}!
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
              <h3 className="text-3xl font-bold mb-6 text-white text-center">
                Prediction History
              </h3>
              {/* Your prediction history content */}
            </div>
          )}

          {activeTab === "blogs" && <BlogManager />}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
