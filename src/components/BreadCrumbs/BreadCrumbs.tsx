import React from "react";

const BreadCrumbs = () => {
  return (
    <div className="main breadCrumb-main-div pb-0">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumbs;
