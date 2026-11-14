import { NavItemProps, InsideItemProps } from "../../models/SidebarMenu";
import React, { useState, FC } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";

interface SubItemProps {
  item: NavItemProps;
}

const SidebarSubItems: FC<SubItemProps> = (props) => {
  const { item } = props;
  const [showFirst, setShowFirst] = useState<boolean>(false);

  return (
    <>
      <li className="nav-item">
        <span
          className={`nav-link ${showFirst ? "" : "collapsed"} `}
          data-bs-target="#components-nav"
          data-bs-toggle="collapse"
          onClick={() => setShowFirst(!showFirst)}
        >
          <BsMenuButtonWide />

          <span className="ms-2 sidebar-font">{item?.name}</span>
          {/* <i className="bi bi-chevron-down ms-auto"></i> */}
          <FaChevronDown className="ms-auto chevron-down " />
        </span>
        <ul
          id="components-nav"
          className={`nav-content collapse ${showFirst ? "show" : ""}`}
          data-bs-parent="#sidebar-nav"
        >
          {item?.inside?.map((item2: InsideItemProps, index: number) => {
            return (
              <li key={index}>
                <NavLink
                  to={item2?.url}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending "
                      : isActive
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  <GoDotFill />
                  <span className="ms-2 sidebar-font">{item2?.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
};

export default SidebarSubItems;
