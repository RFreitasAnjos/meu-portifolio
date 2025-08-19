import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center">{t("projects.title")}</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            href: "https://github.com/CaronaFC",
            img: "https://res.cloudinary.com/exercice-disp/image/upload/v1755593716/project1_ecijxp.png",
            title: "Carona FC",
            text: t("projects.project_1")
          },
          {
            href: "https://github.com/RFreitasAnjos/botWhatsApp",
            img: "https://res.cloudinary.com/exercice-disp/image/upload/v1755593716/project2_fhyn7d.png",
            title: "ChatBot SAF",
            text: t("projects.project_2")
          },
          {
            href: "https://github.com/Viaggia",
            img: "https://res.cloudinary.com/exercice-disp/image/upload/v1755593716/project3_pniydm.png",
            title: "Viaggia",
            text: t("projects.project_3")
          }
        ].map((project, idx) => (
          <a key={idx} href={project.href}>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition flex flex-col h-full">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-600 flex-grow">{project.text}</p>
            </div>
          </a>
        ))}
      </div>

    </section>
  )
}

export default Projects;