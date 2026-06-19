import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Searchbar from "../Commponents/Ui/Searchbar";
import Notification from "../Commponents/Ui/Notification";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const sidebarItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
          />
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
          />
        </svg>
      ),
    },
    {
      title: "Employees",
      path: "/employees",
      icon: <FaUsers className="w-5 h-5" />,
    },
    {
      title: "Attendance",
      path: "/attendance",
      icon: <FaCalendarCheck className="w-5 h-5" />,
    },
    {
      title: "Request",
      path: "/request",
      icon: <VscGitPullRequestGoToChanges className="w-5 h-5" />,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <MdOutlineAnalytics className="w-5 h-5" />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IoSettingsOutline className="w-5 h-5" />,
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <h1 className="font-bold text-xl">EMS</h1>
          </div>

          <div className="hidden md:flex flex-1 justify-center px-6">
            <Searchbar />
          </div>

          <div className="flex items-center gap-4 relative">
            <Notification />

            {/* User Avatar */}
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="rounded-full overflow-hidden border-2 border-gray-200"
            >
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="profile"
                className="w-10 h-10 object-cover"
              />
            </button>

            {/* User Dropdown */}
            {userMenuOpen && (
              <div className="absolute right-0 top-14 w-52 bg-white rounded-xl shadow-lg border z-50">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                  Profile
                </button>

                <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
                  Settings
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200 transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-4 py-5">
          <div className="flex items-center gap-2 mb-10">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="logo"
              className="w-8 h-8"
            />
            <h2 className="font-bold text-xl">EMS</h2>
          </div>

          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 rounded-lg transition-all
                    ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100 text-gray-700"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      
      <main className="sm:ml-64 mt-16 p-6">
      <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
