import React from "react";

const UserMenu = ({
  isOpen,
  image,
  onToggle,
  onProfile,
  onSettings,
  onLogout,
}) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center bg-gray-800 rounded-full p-1.5"
      >
        <img
          src={image}
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border">
          <button
            onClick={onProfile}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Profile
          </button>

          <button
            onClick={onSettings}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Settings
          </button>

          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;