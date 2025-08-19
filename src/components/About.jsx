import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <article
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-gray-50 to-white grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Imagem */}
      <div className="flex justify-center md:justify-center">
        <img
          src="https://res.cloudinary.com/exercice-disp/image/upload/v1755554734/Screenshot_20240125_125205_Instagram-Photoroom_ox93hj.png"
          alt="my-photo"
          className="w-72 h-64 object-cover rounded-l-xl shadow-xl border-2 border-gray-500 bg-gradient-to-tl from-blue-700 to-violet-800 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Texto */}

      <div className="text-center md:text-left space-y-6 ">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          {t("about.title")}
        </h2>
        <p className="max-w-xl mx-auto md:mx-0 text-lg text-justify leading-relaxed text-gray-700">
          {t("about.text")}
        </p>
      </div>
    </article>

  )
}

export default About;