import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-darkBlue fixed top-0 end-0 start-0 z-50">
        <div className="w-5/6 m-auto py-10">
          <div className="flex justify-between items-center">
            <NavLink to={''} className="text-white text-3xl font-bold uppercase teto">
              Start Framework
            </NavLink>

            <button
              className="text-white text-3xl md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            <div
              className={`flex-col md:flex-row md:flex md:items-center absolute md:static bg-darkBlue top-24 left-0 w-full md:w-auto md:gap-8 transition-all menu ${
                isMenuOpen ? 'flex' : 'hidden'
              }`}
            >
              <ul className="flex flex-col md:flex-row gap-4 md:gap-4 p-4 md:p-0 text-start">
                <li>
                  <NavLink to={'about'} className="text-white font-bold p-2">
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'portfolio'} className="text-white font-bold p-2">
                    PORTFOLIO
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'contact'} className="text-white font-bold p-2">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
