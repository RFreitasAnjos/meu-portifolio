import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { DownloadIcon } from "lucide-react";

function ContactForm() {
   const { t } = useTranslation();
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: ""
   });
   const [success, setSuccess] = useState(false);

   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   function sendEmail(e) {
      e.preventDefault();
      emailjs
         .send(
            "service_role3dn",
            "template_xkp2tmb",
            formData,
            "sLBpyF0WrrSzWmtOs"
         )
         .then(
            (result) => {
               console.log(result.text);
               setSuccess(true);
               setFormData({ name: "", email: "", phone: "", message: "" });
               setTimeout(() => setSuccess(false), 5000);
            },
            (error) => {
               console.log(error.text);
               alert("Ocorreu um erro, tente novamente.");
            }
         );
   }

   return (
      <section id="contacts" className="p-10 bg-gray-50 flex flex-col md:flex-row gap-10 rounded-lg shadow-md">
         {/* Formulário */}
         <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{t("contact.subtitle")}</h2>
            <form onSubmit={sendEmail} className="flex flex-col gap-4">
               <input
                  type="text"
                  name="name"
                  placeholder={t("contact.name")}
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded focus:ring-2 focus:ring-blue-400"
                  required
               />
               <input
                  type="email"
                  name="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded focus:ring-2 focus:ring-blue-400"
                  required
               />
               <input
                  type="tel"
                  name="phone"
                  placeholder={t("contact.phone")}
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 rounded focus:ring-2 focus:ring-blue-400"
               />
               <textarea
                  name="message"
                  placeholder={t("contact.message")}
                  value={formData.message}
                  onChange={handleChange}
                  className="border p-2 rounded focus:ring-2 focus:ring-blue-400"
                  required
               />
               <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
               >
                  {t("contact.send")}
               </button>
               {success && (
                  <div className="mt-2 text-green-600 font-semibold">
                     Mensagem enviada com sucesso!
                  </div>
               )}
            </form>

         </div>

         {/* Redes sociais + Ações rápidas */}
         <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
               <h2 className="text-2xl font-bold mb-4">{t("contact.social")}</h2>
               <div className="flex flex-col gap-4">
                  <a href="https://www.instagram.com/p.yxis/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-500 hover:text-pink-600">
                     <FaInstagram /> Instagram
                  </a>
                  <a href="https://linkedin.com/in/renanfreitasdev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-800">
                     <FaLinkedinIn /> LinkedIn
                  </a>
               </div>
               <div className="mt-6 flex flex-col gap-2">
                  <a href="portfolio.pdf" 
                     download
                     className="bg-gray-800 text-white flex justify-center gap-4 py-2 px-4 rounded hover:bg-gray-900 transition text-center">
                     <DownloadIcon /> Download Portfólio
                  </a>
                  <a
                     href="https://wa.me/5581983657715?text=Olá!%20Estou%20entrando%20em%20contato%20para%20realizar%20um%20orçamento!"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-green-500 text-white flex items-center justify-center gap-2 py-2 px-4 rounded hover:bg-green-600 transition"
                  >
                     <FaWhatsapp /> Fale no WhatsApp
                  </a>

               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactForm;
