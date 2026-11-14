import { SidebarRoutingConstant } from "../../utilities/Constants";
import SidebarSubItems from "./SidebarSubItems";
import SidebarItem from "./SidebarItem";
import { NavItemProps } from "../../models/SidebarMenu";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { GrTransaction } from "react-icons/gr";
// import { FaUsers } from "react-icons/fa6";

const SidebarMenu = () => {
  const location = useLocation();
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);
  // const pathname = location?.pathname;

  console.log(location, "location");
  // const toggleSidebar = () => {
  //   console.log("clikc");
  //   setIsExpanded(!isExpanded);
  //   if (!isExpanded) {
  //     document.body.classList.add("sidebar-is-expanded");
  //     document.body.classList.remove("sidebar-is-reduced");
  //   } else {
  //     document.body.classList.remove("sidebar-is-expanded");
  //     document.body.classList.add("sidebar-is-reduced");
  //   }
  // };
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {SidebarRoutingConstant.length > 0 &&
            SidebarRoutingConstant?.map((item: NavItemProps, index: number) => {
              return (
                <div key={index}>
                  {item?.inside ? (
                    <>
                      <SidebarSubItems item={item} />
                    </>
                  ) : (
                    <>
                      <SidebarItem item={item} />
                    </>
                  )}
                </div>
              );
            })}
        </ul>
      </aside>
    </div>
  );
};

export default SidebarMenu;
