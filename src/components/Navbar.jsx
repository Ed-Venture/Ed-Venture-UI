import React from "react";
import { RxHamburgerMenu, RxDoubleArrowLeft,RxPlus } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({showNews, setShowNews}) => {
  const location = useLocation();
  return (
    <div className="w-full bg-[#645CBB] h-12 flex text-white pt-2">
      <div className="px-5 cursor-pointer" onClick={() => setShowNews(!showNews)}>
        <RxHamburgerMenu size={30} />
      </div>
      <div className="text-xl basis-8/12">Classname</div>
      <div className={`flex pt-1 ${location.pathname=="/Class" ? "hidden" : "block"}`}>
        <NavLink to="/Class/:id/stream" style={{ textDecoration: "none" }}>
          <div className="px-3 hover:text-gray-300 transition duration-500">Stream</div>
        </NavLink>
        <NavLink to="/Class/:id/assignment" style={{ textDecoration: "none" }}>
          <div className="px-3 hover:text-gray-300 transition duration-500">Assignment</div>
        </NavLink>
        <NavLink to="/Class/:id/people" style={{ textDecoration: "none" }}>
          <div className="px-3 hover:text-gray-300 transition duration-500">People</div>
        </NavLink>
      </div>
      <div className="px-5 pt-2">
      <NavLink to="/Class" style={{ textDecoration: "none" }}>
        <RxDoubleArrowLeft className="hover:scale-125 transition duration-500"/>
        </NavLink>
      </div>
      <div  className={`px-5 pt-2 ${location.pathname!="/Class" ? "hidden" : "block"}`}>
        <RxPlus/>
      </div>
    </div>
  );
}

export default Navbar;