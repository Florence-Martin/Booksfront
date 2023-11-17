import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

interface NavBarProps {
  imageSrcPath: string;
}

const NavBar: FC<NavBarProps> = ({ imageSrcPath }) => {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div>
        <a className="relative" href="/">
          <img
            src={imageSrcPath}
            width="100%"
            style={{ height: "90px" }}
            className="d-inline-block align-center"
            alt="banner"
          />
        </a>
        <button onClick={handleChangePage} className="absolute shadow-lg shadow-slate-300 bottom-0 left-10 transform translate-y-1/2 z-10 flex items-center p-4 rounded bg-white hover:bg-gray-200">
          <FontAwesomeIcon icon={faHouse} className="h-8 w-8 text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
