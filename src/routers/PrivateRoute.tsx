import { GetAccessToken } from "../redux/user/user-slice";
import React, { useState, FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface RouterProps {
  component?: any;
  authenticated?: any;
}

const PrivateRoute: FC<RouterProps> = (props) => {
  const { component: Component, authenticated, ...rest } = props;
  const token = useSelector(GetAccessToken);

  const [isAuthenticated] = useState<boolean>(token ? true : false);
  // const [isAuthenticated] = useState<boolean>(true);

  // Add your authentication logic here

  // useEffect(() => {
  //   if (token) {
  //     console.log(token, "ttttt");
  //     setIsAuthenticated(true);
  //   }
  // }, [token]);

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
