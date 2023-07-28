import { FaBars } from 'react-icons/fa'
import { useState } from 'react'



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleScrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-gray-800 shadow-md text-white w-full justify-between px-2 py-4 font-bold uppercase">
      <section className="mx-4">
        <h2 className="text-[25px]">WD</h2>
      </section>

      <section className="text-[25px] mx-4 lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
        <FaBars onClick={handleClick} />
        <ul
          className={`${
            showMenu
              ? 'flex-col text-[15px] bg-gray-900 bg-opacity-90 absolute right-4 top-12 rounded shadow-md p-4 lg:hidden xl:hidden 2xl:hidden 3xl:hidden'
              : 'sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden'
          }`}
        >
          <li>
            <a href="#container" onClick={() => handleScrollToSection('container')}>
              Inicio
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#proyectos" onClick={() => handleScrollToSection('proyectos')}>
              Proyectos
            </a>
          </li>
        </ul>
      </section>

      <ul className="flex items-center justify-between gap-9 sm:hidden md:hidden mr-8 sm:text-[15px] text-[20px]">
        <li>
          <a href="#container" onClick={() => handleScrollToSection('container')}>
            Inicio
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="#proyectos" onClick={() => handleScrollToSection('proyectos')}>
            Proyectos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
