import React from "react";
import "./App.css";
import "./styleFiles/style.css";
import "./styleFiles/fontStyle.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import UsersPage from "./pages/DashboardPages/UsersPage/UsersPage";
import Transactions from "./pages/DashboardPages/Transactions/Transactions";
import ZaiTransactions from "./pages/DashboardPages/ZaiTransactions/ZaiTransactions";
import SettingMainPage from "./pages/DashboardPages/Settings/SettingMainPage";
import BlogCategory from "./pages/DashboardPages/Management/Category/BlogCategory";
import AddCategory from "./pages/DashboardPages/Management/Category/AddCategory";
import BlogListing from "./pages/DashboardPages/Management/BlogListing/BlogListing";
import AddBlog from "./pages/DashboardPages/Management/BlogListing/AddBlog";
import FaqComponent from "./pages/DashboardPages/Management/FAQ/Faq";
import AddFaq from "./pages/DashboardPages/Management/FAQ/AddFaq";
import Testimonial from "./pages/DashboardPages/Management/Testimonial/Testimonial";
import AddTestimonials from "./pages/DashboardPages/Management/Testimonial/AddTestimonial";
import BroadCastMessage from "./pages/DashboardPages/BroadCastMessage/BroadCastMessage";
import KycRequests from "./pages/DashboardPages/KycRequests/KycRequests";
import Promotion from "./pages/DashboardPages/Management/Promotion/Promotion";
import ZiaBankAccounts from "./pages/DashboardPages/Management/ZiaBankAccounts/ZiaBankAccounts";
import CurrencyConversion from "./pages/DashboardPages/Management/CurrencyConversion/CurrencyConversion";
import Staff from "./pages/DashboardPages/Management/Staff/Staff";
import InstantPayIDBankAccount from "./pages/DashboardPages/Management/InstantPayIDBankAccount/InstantPayIDBankAccount";
import Countries from "./pages/DashboardPages/Management/Countries/Countries";
import PrivateRoute from "./routers/PrivateRoute";
import Layout from "./pages/DashboardPages/Dashboard/Layout";
import EditCurrencyConversion from "./pages/DashboardPages/Management/CurrencyConversion/EditCurrencyConversion";
import AddCountry from "./pages/DashboardPages/Management/Countries/AddCountry";
import EmailTemplate from "./pages/DashboardPages/Management/EmailTemplates/EmailTemplate";
import AddTemplate from "./pages/DashboardPages/Management/EmailTemplates/AddTemplate";
import PayIDTransaction from "./pages/DashboardPages/PayIdTransaction/PayIDTransaction";
import AddBroadCastMessage from "./pages/DashboardPages/BroadCastMessage/AddBroadCastMessage";
import AddPromotion from "./pages/DashboardPages/Management/Promotion/AddPromotion";
import AddStaff from "./pages/DashboardPages/Management/Staff/AddStaff";
import NotFound from "./pages/NotFound/NotFound";
import UserDetails from "./pages/DashboardPages/UsersPage/UserDetails";
import KycDetails from "./pages/DashboardPages/KycRequests/KycDetails";

document.body.style.backgroundColor = "#DAF3E8";
document.body.style.fontFamily = "Open Sans, sans-serif";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      // loader: rootLoader,
      errorElement: <NotFound />,
    },
    {
      path: "/",
      element: <Login />,
      // loader: rootLoader,
      errorElement: <NotFound />,
    },
    {
      path: "/dashboard",
      element: <PrivateRoute component={Layout} />,
      children: [
        {
          path: "/dashboard/users",
          element: <UsersPage />,
          // loader: teamLoader,
        },
        {
          path: "/dashboard/users/:id",
          element: <KycDetails />,
          // loader: teamLoader,
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
          path: "/dashboard/manageblogcategory/edit/:id",
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
          path: "/dashboard/bloglisting/edit/:id",
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
          path: "/dashboard/managefaq/edit/:id",
          element: <AddFaq />,
        },
        {
          path: "/dashboard/email-templates",
          element: <EmailTemplate />,
        },
        {
          path: "/dashboard/email-templates/add",
          element: <AddTemplate />,
        },
        {
          path: "/dashboard/email-templates/edit/:id",
          element: <AddTemplate />,
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
          path: "/dashboard/novatti-transactions",
          element: <PayIDTransaction />,
        },
        {
          path: "/dashboard/managecommunicationmedium",
          element: <BroadCastMessage />,
        },
        {
          path: "/dashboard/managecommunicationmedium/add",
          element: <AddBroadCastMessage />,
        },
        {
          path: "/dashboard/managecommunicationmedium/edit/:id",
          element: <AddBroadCastMessage />,
        },
        {
          path: "/dashboard/kycrequest",
          element: <KycRequests />,
        },
        {
          path: "/dashboard/kycrequest/:id",
          element: <KycDetails />,
        },
        {
          path: "/dashboard/staff",
          element: <Staff />,
        },
        {
          path: "/dashboard/staff/add",
          element: <AddStaff />,
        },
        {
          path: "/dashboard/staff/edit/:id",
          element: <AddStaff />,
        },
        {
          path: "/dashboard/managecountrycurrency",
          element: <Countries />,
        },
        {
          path: "/dashboard/managecountrycurrency/add",
          element: <AddCountry />,
        },
        {
          path: "/dashboard/managecountrycurrency/edit/:id",
          element: <AddCountry />,
        },
        {
          path: "/dashboard/currencyconversion",
          element: <CurrencyConversion />,
        },
        {
          path: "/dashboard/currencyconversion/edit/:id",
          element: <EditCurrencyConversion />,
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
        {
          path: "/dashboard/promotion/add",
          element: <AddPromotion />,
        },
        {
          path: "/dashboard/promotion/edit/:id",
          element: <AddPromotion />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
