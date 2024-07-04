import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <a href="/#section1" className="mr-4">
        <button className="py-2 px-4 text-lg md:font-title md:text-primary md:hover:text-light-green duration-500">Cómo funciona</button>
      </a>
      <a href="/#section2" className="mr-4">
        <button className="py-2 px-4 text-lg md:font-title md:text-primary md:hover:text-light-green duration-500">Opiniones</button>
      </a>
      <a href="/#section3" className="mr-4">
        <button className="py-2 px-4 text-lg md:font-title md:text-primary md:hover:text-light-green duration-500">Preguntas frecuentes</button>
      </a>
      <a href="/#section4" className="mr-4">
        <button className="py-2 px-4 text-lg md:font-title md:text-primary md:hover:text-light-green duration-500">Contáctanos</button>
      </a>
      <Link to='/professionals' className="mr-4">
        <button className="py-2 px-4 text-lg md:font-title md:text-primary md:hover:text-light-green duration-500">Profesionales</button>
      </Link>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="m-auto flex justify-between items-center flex-wrap" id="top">
      <div className="flex items-center pl-4 w-56 sm:w-48 lg:w-64">
        <Link to='/'><img src="/imagenes/TtLogo2.png" alt="logo" className="w-full lg:w-64" /></Link>
      </div>
      <nav className={`flex justify-end ${open ? 'rounded' : ''}`}>
        <div className={`hidden ${open ? 'w-full' : 'md:flex'}`}>
          <Links />
        </div>
        <div className="md:hidden p-4 flex items-center">
          <button onClick={handleMenu}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {open && (
        <div onClick={()=> setOpen(false)} className="w-full md:w-auto flex flex-col items-center">
          <Links />
        </div>
      )}
    </div>
  );
};

export default Navbar;
