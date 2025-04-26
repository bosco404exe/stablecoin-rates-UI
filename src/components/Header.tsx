import React from "react";
import logo from "../assets/logo/logo.svg";
import { Link, useLocation } from "react-router-dom";


const Header: React.FC = () => {
  const location = useLocation();
  const isDeveloperPage = location.pathname === "/developer";
  return (
    <header className="w-full  h-[6rem] flex flex-row items-center justify-between gap-7 py-5 px-7 md:px-20">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[12rem] h-[1.32rem]  object-contain cursor-pointer"
        />
      </Link>

      <Link
        to="/developer"
          className={`text-[1.6rem] font-medium text-base hover:text-white active:text-white transition duration-200 ease-in-out ${
          isDeveloperPage ? "text-white" : "text-white-dull"
        }`}
      >
        For Developers
      </Link>
    </header>
  );
};

export default Header;
