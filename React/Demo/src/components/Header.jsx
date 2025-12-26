import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-2 bg-primary">
        <h3 className="fw-bolder text-white">My Website</h3>
        <div className="d-flex gap-3">
           <Link to={"/"} className="text-decoration-none text-light fw-bold">Home</Link>
           <Link to={"/about"} className="text-decoration-none text-light fw-bold">About</Link>
           <Link to={"/product"} className="text-decoration-none text-light fw-bold">Product</Link>
           <Link to={"/contact"} className="text-decoration-none text-light fw-bold">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
