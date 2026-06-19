import React from "react";

const Sidebar = ({ isOpen, children }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-full bg-white transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      sm:translate-x-0`}
    >
      {children}
    </aside>
  );
};

export default Sidebar;