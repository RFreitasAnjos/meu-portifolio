import { useTranslation } from "react-i18next";

function Footer(){
   const { t } = useTranslation();
   return(
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
        <p> &copy; {new Date().getFullYear()} Renan Freitas — {t("footer.rights")}</p>
      </footer>
   )
}
export default Footer;