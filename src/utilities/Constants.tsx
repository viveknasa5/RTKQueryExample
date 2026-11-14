import { RxDashboard } from "react-icons/rx";
import { BsMenuButtonWide } from "react-icons/bs";
// import { FaChevronDown } from "react-icons/fa6";
// import { GoDotFill } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdDomainVerification } from "react-icons/md";
import { MdOutlineBroadcastOnPersonal } from "react-icons/md";
// import { MdLogout } from "react-icons/md";
// import BlogCategory from "../pages/DashboardPages/Management/BlogCategory/BlogCategory";
import { NavItemProps } from "../models/SidebarMenu";

import { GrTransaction } from "react-icons/gr";

export const SidebarRoutingConstant: NavItemProps[] = [
  {
    url: "/dashboard",
    icon: <RxDashboard />,
    name: "Dashboard",
  },
  {
    url: "",
    icon: <BsMenuButtonWide />,
    name: "Managment",
    inside: [
      {
        url: "/dashboard/manageblogcategory",
        icon: <RxDashboard />,
        name: "Category",
      },
      {
        url: "/dashboard/bloglisting",
        icon: <RxDashboard />,
        name: "Blog Listing",
      },
      {
        url: "/dashboard/email-templates",
        icon: <RxDashboard />,
        name: "Email",
      },
      {
        url: "/dashboard/managefaq",
        icon: <RxDashboard />,
        name: "FAQ",
      },
      {
        url: "/dashboard/managetestimonial",
        icon: <RxDashboard />,
        name: "Testimonial",
      },
      {
        url: "/dashboard/staff",
        icon: <RxDashboard />,
        name: "Staff",
      },
      {
        url: "/dashboard/managecountrycurrency",
        icon: <RxDashboard />,
        name: "Countries",
      },
      {
        url: "/dashboard/currencyconversion",
        icon: <RxDashboard />,
        name: "Currency Conversion",
      },
      {
        url: "/dashboard/zai-accounts",
        icon: <RxDashboard />,
        name: "Zai Bank Accounts",
      },
      {
        url: "/dashboard/novatti-accounts",
        icon: <RxDashboard />,
        name: "Instant PayID Bank Accounts",
      },
      {
        url: "/dashboard/promotion",
        icon: <RxDashboard />,
        name: "Promotions",
      },
    ],
  },
  {
    url: "/dashboard/transactions",
    icon: <GrTransaction />,
    name: "Transactions",
  },
  {
    url: "/dashboard/zai-transactions",
    icon: <GrTransaction />,
    name: "Zia Transactions",
  },
  {
    url: "/dashboard/novatti-transactions",
    icon: <GrTransaction />,
    name: "Instant PayID Transactions",
  },
  {
    url: "/dashboard/settings",
    icon: <IoSettings />,
    name: "General Settings",
  },
  {
    url: "/dashboard/users",
    icon: <FaUsers />,
    name: "Users",
  },
  {
    url: "/dashboard/kycrequest",
    icon: <MdDomainVerification />,
    name: "KYC Request",
  },
  {
    url: "/dashboard/managecommunicationmedium",
    icon: <MdOutlineBroadcastOnPersonal />,
    name: "Broadcast Message",
  },
];

// export const RoutesList = [
//   {

//   }
// ]

export const EditorOptions = [
  "bold",
  "italic",
  "|",
  "ul",
  "ol",
  "|",
  "font",
  "fontsize",
  "|",
  "outdent",
  "indent",
  "align",
  "|",
  "fullsize",
  "brush",
  "|",
  "table",
  "link",
  "|",
  "undo",
  "redo",
];
