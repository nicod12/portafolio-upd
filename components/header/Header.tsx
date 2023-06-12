
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState("sm:hidden");
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathname = window.location.pathname;

  return (
    <nav className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-gray-800 justify-between items-center p-2 shadow-lg ${
          showMenu !== "sm:hidden" && "flex-col"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          <Link to="/">
            <h1 className="text-4xl font-semibold hover:text-yellow-500 cursor-pointer">
              N A D
            </h1>
          </Link>
          <FaBars
            onClick={() => {
              if (showMenu == "sm:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("sm:hidden");
              }
            }}
            className=" lg:hidden xl:hidden md:hidden 2xl:hidden cursor-pointer"
          />
        </div>

        <div className="flex sm:hidden justify:center">
          {menuItems.map((item, index) => {
            return (
              <li
              key={index}
                className={`list-none mx-5 px-5 ${
                  item.key == pathname && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`mt-5 sm:flex items-start justify-start w-full flex-col lg:hidden md:hidden 2xl:hidden 3xl:hidden xl:hidden ${showMenu}`}
        >
          {menuItems.map((item,index) => {
            return (
              <li
              key={index}
                className={`list-none mt-5 ${
                  item.key == pathname && "bg-white text-black rounded-md px-5"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </nav> /*end navbar*/
  );
};

export default Header;