import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="mb-10">
        <Link to={"/"}>
          <img className="w-36" src="/netflix_logo.svg" alt="" />
        </Link>
      </header>
    </div>
  );
};

export default Header;
