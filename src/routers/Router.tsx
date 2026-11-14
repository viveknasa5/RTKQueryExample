import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/LoginPage/Login";
import * as ReactDOM from "react-dom/client";
import UsersPage from "@/pages/DashboardPages/UsersPage/UsersPage";
import Transactions from "@/pages/DashboardPages/Transactions/Transactions";
import ZaiTransactions from "@/pages/DashboardPages/ZaiTransactions/ZaiTransactions";
import SettingMainPage from "@/pages/DashboardPages/Settings/SettingMainPage";
import BlogCategory from "@/pages/DashboardPages/Management/Category/BlogCategory";
import AddCategory from "@/pages/DashboardPages/Management/Category/AddCategory";
import FaqComponent from "@/pages/DashboardPages/Management/FAQ/Faq";
import BlogListing from "@/pages/DashboardPages/Management/BlogListing/BlogListing";
import AddBlog from "@/pages/DashboardPages/Management/BlogListing/AddBlog";
import AddFaq from "@/pages/DashboardPages/Management/FAQ/AddFaq";
import Testimonial from "@/pages/DashboardPages/Management/Testimonial/Testimonial";
import AddTestimonials from "@/pages/DashboardPages/Management/Testimonial/AddTestimonial";
import BroadCastMessage from "@/pages/DashboardPages/BroadCastMessage/BroadCastMessage";
import Staff from "@/pages/DashboardPages/Management/Staff/Staff";
import Countries from "@/pages/DashboardPages/Management/Countries/Countries";
import CurrencyConversion from "@/pages/DashboardPages/Management/CurrencyConversion/CurrencyConversion";
import ZiaBankAccounts from "@/pages/DashboardPages/Management/ZiaBankAccounts/ZiaBankAccounts";
import InstantPayIDBankAccount from "@/pages/DashboardPages/Management/InstantPayIDBankAccount/InstantPayIDBankAccount";
import Promotion from "@/pages/DashboardPages/Management/Promotion/Promotion";
import Layout from "@/pages/DashboardPages/Dashboard/Layout";
import KycRequests from "@/pages/DashboardPages/KycRequests/KycRequests";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/dashboard",
  //   element: <PrivateRoute component={Dashboard} />,
  // },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/users",
        element: <UsersPage />,
      },
      {
        path: "/dashboard/transactions",
        element: <Transactions />,
      },
      {
        path: "/dashboard/zai-transactions",
        element: <ZaiTransactions />,
      },
      {
        path: "/dashboard/settings",
        element: <SettingMainPage />,
      },
      {
        path: "/dashboard/manageblogcategory",
        element: <BlogCategory />,
      },
      {
        path: "/dashboard/manageblogcategory/add",
        element: <AddCategory />,
      },
      {
        path: "/dashboard/bloglisting",
        element: <BlogListing />,
      },
      {
        path: "/dashboard/bloglisting/add",
        element: <AddBlog />,
      },
      {
        path: "/dashboard/managefaq",
        element: <FaqComponent />,
      },
      {
        path: "/dashboard/managefaq/add",
        element: <AddFaq />,
      },
      {
        path: "/dashboard/managetestimonial",
        element: <Testimonial />,
      },
      {
        path: "/dashboard/managetestimonial/add",
        element: <AddTestimonials />,
      },

      {
        path: "/dashboard/managecommunicationmedium",
        element: <BroadCastMessage />,
      },
      {
        path: "/dashboard/kycrequest",
        element: <KycRequests />,
      },
      {
        path: "/dashboard/managestaff",
        element: <Staff />,
      },
      {
        path: "/dashboard/managecountrycurrency",
        element: <Countries />,
      },
      {
        path: "/dashboard/managecountrycurrency/add",
        element: <Countries />,
      },
      {
        path: "/dashboard/currencyconversion",
        element: <CurrencyConversion />,
      },

      {
        path: "/dashboard/zai-accounts",
        element: <ZiaBankAccounts />,
      },
      {
        path: "/dashboard/novatti-accounts",
        element: <InstantPayIDBankAccount />,
      },
      {
        path: "/dashboard/promotion",
        element: <Promotion />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
