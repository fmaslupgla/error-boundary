import React from "react";
import { PropTypes } from "prop-types";
import "./layout.css";

import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>

      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;