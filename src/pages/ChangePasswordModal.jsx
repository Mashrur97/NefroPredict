import { useContext, useState } from "react";
import Cookies from "js-cookie";
import { toast, Toaster } from "sonner";
import { AuthContext } from "../context/AuthContext";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      return toast.error("All fields are required");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("New password and confirm password do not match");
    }

    try {
      setIsSubmitting(true);
      const token = Cookies.get("token");
      const res = await fetch(`http://localhost:5000/api/auth/${user.email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Password changed successfully");
        onClose();
      } else {
        toast.error(data.error || "Failed to change password");
      }
    } catch (error) {
      toast.error("An error occurred while changing password");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled =
    !oldPassword ||
    !newPassword ||
    !confirmPassword ||
    newPassword !== confirmPassword;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full max-w-md text-white animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-center">Change Password</h2>

        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {newPassword !== confirmPassword && confirmPassword.length > 0 && (
          <p className="text-red-500 text-sm mb-2">
            New password and confirm password do not match.
          </p>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleChangePassword}
            className={`px-4 py-2 rounded-lg text-white transition duration-200 ${
              isDisabled || isSubmitting
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
            disabled={isDisabled || isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Change Password"}
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ChangePasswordModal;
