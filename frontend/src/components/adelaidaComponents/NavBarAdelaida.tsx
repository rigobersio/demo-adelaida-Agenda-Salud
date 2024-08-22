import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => setMenuOpen(!menuOpen);

    

    return (
        <div className="bg-gray-800 shadow-md flex justify-between items-center w-full p-2 lg:p-4">
            <Link to="/">
                <img
                    alt="logo Agenda Salud"
                    src="/logonew.png"
                    className={`rounded-full object-cover lg:w-20 lg:h-20 w-6 h-6 ${menuOpen ? 'lg:w-20 lg:h-20' : 'lg:w-20 lg:h-20'}`}
                />
            </Link>

            <button 
                className="lg:hidden text-white text-2xl bg-transparent border-none cursor-pointer mr-5" 
                onClick={handleClick}
            >
                {menuOpen ? '✖' : '☰'}
            </button>

            {/* Menu de escritorio */}
            <nav className="hidden lg:flex gap-10 mr-24 items-center">
                <Link className="text-white font-bold text-sm hover:text-teal-600" to='/servicios'>
                    Servicios
                </Link>
                <Link className="text-white font-bold text-sm hover:text-teal-600" to='/acerca-de'>
                    Acerca de
                </Link>
                <Link className="text-white font-bold text-sm hover:text-teal-600" to='/contact'>
                    Contacto
                </Link>
                <Link className="text-white font-bold text-sm hover:text-teal-600" to='/preguntas'>
                    Preguntas
                </Link>
            </nav>

            {/* Menu móvil */}
            {menuOpen && (
                <nav className="lg:hidden fixed top-14 left-0 w-full bg-gray-800 shadow-md z-50">
                    <div className="flex flex-col items-center py-4">
                        <Link className="text-white font-bold text-sm py-2 hover:text-teal-600" to='/servicios' onClick={handleClick}>
                            Servicios
                        </Link>
                        <Link className="text-white font-bold text-sm py-2 hover:text-teal-600" to='/acerca-de' onClick={handleClick}>
                            Acerca de
                        </Link>
                        <Link className="text-white font-bold text-sm py-2 hover:text-teal-600" to='/contact' onClick={handleClick}>
                            Contacto
                        </Link>
                        <Link className="text-white font-bold text-sm py-2 hover:text-teal-600" to='/preguntas' onClick={handleClick}>
                            Preguntas
                        </Link>
                    </div>
                </nav>
            )}
        </div>
    );
}

export default Navbar;
