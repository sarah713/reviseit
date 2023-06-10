import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-inherit ">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="font-mono text-2xl font-bold align-middle ">
            {title}
          </Link>
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "revise.it",
};
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
