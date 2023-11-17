import React, { FC, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
  imageSrcPath: string;
}

const NavBar: FC<NavBarProps> = ({ imageSrcPath }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid relative">
        <a className="relative" href="/">
          <img
            src={imageSrcPath}
            width="100%"
            height="100"
            className="d-inline-block align-center"
            alt="banner"
          />
        </a>
        <button className="absolute shadow-lg shadow-slate-300 bottom-0 left-10 transform translate-y-1/2 z-10 flex items-center p-4 rounded bg-white hover:bg-gray-200">
          {/* <Home className="h-8 w-8 text-gray-600" /> */}
          <FontAwesomeIcon icon={faHouse} className="h-8 w-8 text-gray-600"  />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
