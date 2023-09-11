import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = true;

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  //   if (isLoading) <Loader />;

  return <div>{children}</div>;
};

export default ProtectedRoute;
