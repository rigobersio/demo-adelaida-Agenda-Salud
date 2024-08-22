import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  const mobileMenu = (
    <div className="lg:hidden block absolute top-16 w-full bg-[#1d616171] shadow-md z-50">
      <Link className="text-white font-bold text-sm hover:text-teal-800 block px-4 py-2" to=''>
        Servicios
      </Link>
      <Link className="text-white font-bold text-sm hover:text-teal-800 block px-4 py-2" to=''>
        Acerca de
      </Link>
      <Link className="text-white font-bold text-sm hover:text-teal-800 block px-4 py-2" to=''>
        Contacto
      </Link>
      <Link className="text-white font-bold text-sm hover:text-teal-800 block px-4 py-2" to=''>
        Preguntas
      </Link>
      <Link className="text-white font-bold text-sm hover:text-teal-800 block px-4 py-2" to='/intranet'>
        Intranet
      </Link>
    </div>
  );

  return (
    <nav className="bg-[#1d616171] shadow-md flex justify-between items-center w-full p-2 lg:p-4">
      <div className="flex items-center">
        <Link to="/">
          <img
            alt="logo Agenda Salud"
            src="/logonew.png"
            className="w-20 h-20 rounded-full object-cover"
          />
        </Link>
      </div>

      <div className="hidden lg:flex gap-10 mr-24 items-center">
        <Link className="text-white font-bold text-sm hover:text-teal-600" to=''>
          Servicios
        </Link>
        <Link className="text-white font-bold text-sm hover:text-teal-600" to=''>
          Acerca de
        </Link>
        <Link className="text-white font-bold text-sm hover:text-teal-600" to=''>
          Contacto
        </Link>
        <Link className="text-white font-bold text-sm hover:text-teal-600" to=''>
          Preguntas
        </Link>
        <Link className="text-white font-bold text-sm hover:text-teal-600" to='/intranet'>
          Intranet
        </Link>
      </div>

      <button className="lg:hidden text-white text-2xl bg-transparent border-none cursor-pointer mr-5" onClick={handleClick}>
        {menuOpen ? '✖' : '☰'}
      </button>

      {menuOpen && mobileMenu}
    </nav>
  );
}

export default Navbar;
