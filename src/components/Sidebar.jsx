import React, { useState, useCallback, useMemo } from "react";

import { useLocation } from "react-router";
import { Bars, Close, Logo } from "../constants/images";

import { navItems, users } from "../constants/data";
import NavItem from "./NavItem";
import UserSelector from "./UserSelector";

export default React.memo(function SidebarLayout({
  children,
  username,
  onUsernameChange,
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);

  const filteredNavItems = useMemo(
    () => ({
      top: navItems.slice(0, 5),
      bottom: navItems.slice(5),
    }),
    []
  );

  return (
    <div>
      {/* Mobile Header */}
      <div className="w-full p-4 flex justify-between items-center md:hidden border-b border-b-[#E9EAEB]">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="CodeAnt Logo" />
          <h2 className="font-satoshi text-xl md:text-2xl">CodeAnt AI</h2>
        </div>
        <img
          src={isSidebarOpen ? Close : Bars}
          alt="Menu Icon"
          onClick={toggleSidebar}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-12 w-full bg-white z-40 md:hidden">
          <UserSelector
            username={username}
            onChange={onUsernameChange}
            users={users}
          />
          <ul className="flex flex-col gap-y-3 p-4">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                isActive={item.path === location.pathname}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-64 flex-col justify-between bg-white shadow-lg">
        <div>
          <div className="flex items-center gap-3 mx-auto p-4">
            <img src={Logo} alt="Logo" />
            <h2 className="font-satoshi text-xl md:text-2xl">CodeAnt AI</h2>
          </div>
          <UserSelector
            username={username}
            onChange={onUsernameChange}
            users={users}
          />
          <ul className="mt-5 px-4 space-y-4">
            {filteredNavItems.top.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                isActive={item.path === location.pathname}
              />
            ))}
          </ul>
        </div>
        <ul className="mb-4 px-4">
          {filteredNavItems.bottom.map((item) => (
            <NavItem
              key={item.path}
              item={item}
              isActive={item.path === location.pathname}
            />
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1  ml-0 md:ml-64 md:p-4 ${
          isSidebarOpen ? "bg-[#6C6C6C4D]" : "bg-[#FAFAFA]"
        }`}
      >
        {children}
      </div>
    </div>
  );
});
