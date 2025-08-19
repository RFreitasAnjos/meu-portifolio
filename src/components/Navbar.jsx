import { useTranslation } from "react-i18next";
import LanguageDropdown from "./inputs/LanguageDropdown";
import Logo from "../assets/logo.png"

function Navbar() {
   const { t } = useTranslation();
   return (
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-lg z-50">
         <img src={Logo} className="w-24"/>
         <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-400">{t("navbar.about")}</a>
            <a href="#projects" className="hover:text-blue-400">{t("navbar.projects")}</a>
            <a href="#contacts" className="hover:text-blue-400">{t("navbar.contact")}</a>
         </nav>
         <div>
            <LanguageDropdown />
         </div>
      </header>
   )
}

export default Navbar;