import React from "react";
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="navbar-brand text-white font-bold text-lg">
        Use effect
      </div>
      <ul className="navbar-links hidden md:flex space-x-4">
        <li>
          <Link to="/DragonBall" className="text-white hover:text-gray-300">
            Dragon Ball
          </Link>
        </li>
        <li>
          <Link to="/Morty" className="text-white hover:text-gray-300">
            Rick
          </Link>
        </li>
      </ul>
      {/* Agregar un botón hamburguesa para dispositivos móviles */}
      <button className="md:hidden text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Menú móvil */}
      <div className="md:hidden mt-4">
        <Link to="/DragonBall" className="block text-white my-2">
          Dragon Ball
        </Link>
        <Link to="/Morty" className="block text-white my-2">
          Rick
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
