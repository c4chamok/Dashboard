import React, { useState } from "react";
import { MdSpaceDashboard, MdOutlineShoppingBag } from "react-icons/md";
import { BsClipboard2Data } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SideBar = ({collapsed}) => {

  return (
      <div
        className={`bg-slate-900 text-white transition-all duration-500 ease-in-out 
        ${collapsed ? "w-20" : "w-40"} h-full flex flex-col`}
      >
        <ul className="flex flex-col gap-5 p-4 pr-0">
          <NavLink to={"Overview"} className="cursor-pointer flex items-center gap-3 text-lg">
            <MdSpaceDashboard className="text-4xl w-fit" />
            <span
              className={`transition-all duration-500  ${
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-full"
              }`}
            >
              Overview
            </span>
          </NavLink>
          <NavLink to={"inventory"} className="cursor-pointer flex items-center gap-3 text-lg">
            <MdOutlineShoppingBag className="text-4xl w-fit" />
            <span
              className={`transition-all duration-500  ${
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-full"
              }`}
            >
              Inventory
            </span>
          </NavLink >
          <NavLink to={"sales"} className="cursor-pointer flex items-center gap-3 text-lg">
            <BsClipboard2Data className="text-4xl w-fit" />
            <span
              className={`transition-all duration-500  ${
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-full"
              }`}
            >
              Sales
            </span>
          </NavLink >
        </ul>
      </div>
  );
};

export default SideBar;






















