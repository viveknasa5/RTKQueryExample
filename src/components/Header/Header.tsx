import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoBell } from "react-icons/go";
import { MdOutlineMessage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state?.user?.user);
  const navigate = useNavigate();
  const ProfileName = userData?.userProfile?.name ?? "Admin";
  const profileImage =
    userData?.userProfile?.profileImage ?? "/assets/images/profile-img.png";
  console.log(userData, "userDatauserData");
  useEffect(() => {
    // Function to toggle the class
    const toggleClass = () => {
      if (isToggled) {
        document.body.classList.add("toggle-sidebar");
      } else {
        document.body.classList.remove("toggle-sidebar");
      }
    };

    // Call the function to apply the class
    toggleClass();

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("toggle-sidebar");
    };
  }, [isToggled]);

  const logout = () => {
    dispatch({ type: "RESET" });
    navigate("/login");
  };
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between headerLogs">
          <span className="logo d-flex align-items-center">
            <img src="/assets/images/kkbitslogo.svg" alt="" />
            {/* <span className="d-none d-lg-block">NiceAdmin</span> */}
          </span>
          {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
          <RxHamburgerMenu onClick={() => setIsToggled(!isToggled)} />
        </div>
        {/* <!-- End Logo --> */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <span className="nav-link nav-icon search-bar-toggle ">
                <i className="bi bi-search"></i>
              </span>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link nav-icon" data-bs-toggle="dropdown">
                <GoBell />

                <span className="badge bg-primary badge-number">4</span>
              </span>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <span>
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <span>Show all notifications</span>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link nav-icon" data-bs-toggle="dropdown">
                <MdOutlineMessage />

                <span className="badge bg-success badge-number">3</span>
              </span>
              {/* <!-- End Messages Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <span>
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <span>
                    <img
                      src="assets/img/messages-1.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <span>
                    <img
                      src="assets/img/messages-2.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <span>
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <span>Show all messages</span>
                </li>
              </ul>
              {/* <!-- End Messages Dropdown Items --> */}
            </li>
            {/* <!-- End Messages Nav --> */}

            <li className="nav-item dropdown pe-3">
              <span
                className="nav-link nav-profile d-flex align-items-center pe-0"
                data-bs-toggle="dropdown"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {ProfileName}
                </span>
              </span>
              {/* <!-- End Profile Iamge Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <span
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => logout()}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
