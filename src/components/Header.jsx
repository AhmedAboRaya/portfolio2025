import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle
import { Transition } from "@headlessui/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if( window.scrollY  > 200 ) {
      setScrollPosition(window.scrollY);
      console.log(scrollPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent shadow-md z-[1000]">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-white">MyLogo</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-800">
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#certificates" className="hover:text-pink-500">Certificates</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a href="#about" className="text-gray-800 hover:text-pink-500" onClick={() => setIsOpen(false)}>About</a>
            <a href="#certificates" className="text-gray-800 hover:text-pink-500" onClick={() => setIsOpen(false)}>Certificates</a>
            <a href="#projects" className="text-gray-800 hover:text-pink-500" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-pink-500" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
