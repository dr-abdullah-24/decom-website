import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  // { path: '/services', label: 'Services' },
  // { path: '/portfolio', label: 'NotesMation' },
  // { path: '/demo', label: 'Demo' },
  // { path: '/blogs', label: 'Blogs' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-black text-[#ab2121] fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-3 py-3 relative">
        {/* Left side - Decom Robotics */}
        <div className="w-1/4 text-left font-bold text-3xl">
          Decom Robotics
        </div>

        {/* Center menu */}
        <nav className="hidden md:flex space-x-8 w-2/4 justify-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-[#c5edf7e4] ${
                  isActive ? 'text-[#0890c5] font-semibold' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side empty for spacing */}
        <div className="w-1/4"></div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden absolute right-4 top-3 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white px-4 py-6">
          <ul className="flex flex-col space-y-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md ${
                      isActive ? 'bg-blue-600' : 'hover:bg-blue-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {/* Decom Robotics on mobile below links */}
            <li className="pt-4 text-left font-bold text-lg">Decom Robotics</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
