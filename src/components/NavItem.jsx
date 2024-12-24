import React from "react";
import { Link } from "react-router";

const NavItem = React.memo(({ item, isActive }) => (
  <li>
    <Link
      to={item.path}
      className={`flex items-center space-x-4 px-4 py-2 rounded-md ${
        isActive ? "bg-blue-500 text-white" : "text-black hover:bg-blue-100"
      }`}
    >
      <img src={item.icon} alt={`${item.label} Icon`} className="w-5 h-5" />
      <span>{item.label}</span>
    </Link>
  </li>
));

export default NavItem;
