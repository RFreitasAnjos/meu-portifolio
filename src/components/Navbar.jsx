import { useTranslation } from "react-i18next";
import LanguageDropdown from "./inputs/LanguageDropdown";
import Logo from "../assets/logo.png"
import { useState, useRef, useEffect } from "react";


function Navbar() {
   const { t } = useTranslation();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isTransitioning, setIsTransitioning] = useState(false);
   const overlayRef = useRef(null);

   const handleNavigation = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || href.startsWith('http')) return;

      e.preventDefault();
      if (isTransitioning) return;

      setIsTransitioning(true);

      if (overlayRef.current) {
         overlayRef.current.style.opacity = '1';
      }

      setTimeout(() => {
         const element = document.querySelector(href);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
         if (overlayRef.current) {
            overlayRef.current.style.opacity = '0';
         }
         setIsMenuOpen(false);
         setIsTransitioning(false);
      }, 300);
   };

   useEffect(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
   }, []);

   return (
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-lg z-50">
         <img src={Logo} className="w-24" />

         <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-400" onClick={handleNavigation}>{t("navbar.about")}</a>
            <a href="#certified" className="hover:text-blue-400" onClick={handleNavigation}>{t("navbar.certified")}</a>
            <a href="#projects" className="hover:text-blue-400" onClick={handleNavigation}>{t("navbar.projects")}</a>
            <a href="#contacts" className="hover:text-blue-400" onClick={handleNavigation}>{t("navbar.contact")}</a>
         </nav>

         <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
            ☰
         </button>

         <div className="hidden md:block">
            <LanguageDropdown />
         </div>

         {isMenuOpen && (
            <nav className="absolute top-full left-0 w-full bg-gray-800 flex flex-col space-y-4 px-6 py-4 md:hidden">
               <a href="#about" className="hover:text-blue-400" onClick={handleNavigation}>{t("navbar.about")}</a>
               <a href="#certified" className="hover:text-blue-400" onClick={handleNavigation}>{t("navbar.certified")}</a>
               <a href="#projects" className="hover:text-blue-400" onClick={handleNavigation}>{t("navbar.projects")}</a>
               <a href="#contacts" className="hover:text-blue-400" onClick={handleNavigation}>{t("navbar.contact")}</a>
               <LanguageDropdown />
            </nav>
         )}

         <div
            ref={overlayRef}
            className="fixed inset-0 bg-black pointer-events-none z-40"
            style={{
               opacity: 0,
               transition: 'opacity 0.3s ease-in-out'
            }}
         />
      </header>
   )
}

export default Navbar;