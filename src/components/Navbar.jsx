import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  const headerBgClass = isTransparent
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-md shadow-sm";

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClass = "pb-1 font-semibold transition-colors duration-300 font-body-md text-body-md";
    const activeClass = isActive ? "border-b-2" : "";

    if (isTransparent) {
      return `${baseClass} ${activeClass} ${isActive ? 'text-white border-white' : 'text-white/90 hover:text-white border-transparent'}`;
    } else {
      return `${baseClass} ${activeClass} ${isActive ? 'text-[#004407] border-[#004407]' : 'text-gray-800 hover:text-[#004407] border-transparent'}`;
    }
  };

  const logoTextClass = isTransparent ? "text-white" : "text-[#004407]";
  const positionClass = isHomePage ? "fixed w-full" : "sticky w-full";

  return (
    <header className={`${headerBgClass} ${positionClass} top-0 z-50 transition-all duration-300`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="flex justify-between items-center px-6 md:px-12 w-full max-w-7xl mx-auto h-24">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/photos/GROWMIND VECTOR.png"
            alt="Growmind Logo"
            className="h-10 w-auto transition-all duration-300"
          />
          <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${logoTextClass}`}>
            Growmind Academy
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={getLinkClass('/')}>Beranda</Link>
          <Link to="/tentang-kami" className={getLinkClass('/tentang-kami')}>Tentang Kami</Link>
          <Link to="/program" className={getLinkClass('/program')}>Program</Link>
          <Link to="/hubungi-kami" className={getLinkClass('/hubungi-kami')}>Hubungi Kami</Link>
        </nav>
        <div className="hidden md:inline-flex items-center">
          <Link to="/hubungi-kami" className="font-bold tracking-wide uppercase text-sm px-7 py-3.5 rounded-md transition-all duration-300 shadow-[0_8px_30px_rgb(212,175,55,0.4)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.6)] hover:-translate-y-1 bg-[#D4AF37] text-[#004407] hover:bg-amber-300">
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-[#004407]'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col space-y-6 absolute w-full shadow-2xl">
          <Link to="/" className="text-gray-800 font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
          <Link to="/tentang-kami" className="text-gray-800 font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>Tentang Kami</Link>
          <Link to="/program" className="text-gray-800 font-semibold text-lg" onClick={() => setIsMenuOpen(false)}>Program</Link>
          <Link to="/hubungi-kami" className="bg-[#004407] text-white text-center font-bold uppercase text-sm px-6 py-4 rounded-sm mt-4" onClick={() => setIsMenuOpen(false)}>Hubungi Kami</Link>
        </div>
      )}
    </header>
  );
}
