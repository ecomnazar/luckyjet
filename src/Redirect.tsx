import React from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(`/${window.location.pathname.split("/")[1]}`);
  }, []);

  return null;
};
