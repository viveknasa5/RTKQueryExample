import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavItemProps } from "../../models/SidebarMenu";

interface SidebarItemProps {
  item: NavItemProps;
}
const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { item } = props;
  return (
    <li className="nav-item">
      <NavLink
        to={item?.url}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
        }
      >
        {item.icon}
        <span className="ms-2 sidebar-font">{item?.name}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
