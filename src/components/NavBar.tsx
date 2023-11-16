import { useState } from "react";
import { Home } from 'react-feather';
import "../App.css"

interface NavBarProps {
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({  imageSrcPath, navItems }: NavBarProps) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid relative">
        {/* Image en tant que lien vers la page d'accueil */}
        <a className="navbar-home" href="/">
          <img
            src={imageSrcPath}
            width="100%"
            height="200"
            className="d-inline-block align-center"
            alt="banner"
            style={{ position: 'relative' }}
          />
        </a>
        <button className="absolute shadow-lg shadow-slate-300 bottom-0 left-10 transform translate-y-1/2 z-10 flex items-center p-1 rounded bg-white hover:bg-gray-200">
          <Home className="h-8 w-8 text-gray-600" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;