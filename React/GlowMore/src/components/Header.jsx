import React from "react"
import {Link} from "react-router-dom"
import { IoHomeSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-2 align-ite bg-amber-400">
        <h3 className="font-bold text-2xl">My Website</h3>
        <div className="flex gap-3">
           <Link to={"/"} className="font-bold hover:text-white"><IoHomeSharp />Home</Link>
           <Link to={"/about"} className="font-bold hover:text-white">About</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
