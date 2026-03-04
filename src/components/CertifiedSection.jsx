import { useTranslation } from "react-i18next"

function CertifiedSection() {
   const { t } = useTranslation();

   const slides = [
      { src: "https://res.cloudinary.com/exercice-disp/image/upload/v1772214638/AI900_obdycs.png", alt: "AI-900" },
      { src: "https://res.cloudinary.com/exercice-disp/image/upload/v1772216350/Screenshot_2026-02-27_151511-removebg-preview_ljb4cg.png", alt: "SC-900" },
      { src: "https://res.cloudinary.com/exercice-disp/image/upload/v1772627417/sc300_jgznml.png", alt: "SC-300" },
      { src: "https://res.cloudinary.com/exercice-disp/image/upload/v1772627418/Imagem2_znjsna.png", alt: "ISO-27001/2022" },
      { src: "https://res.cloudinary.com/exercice-disp/image/upload/v1772627421/github-foundations_m4u02l.png", alt: "GH-900" },
      { src: "https://res.cloudinary.com/exercice-disp/image/upload/v1772627624/AZ-500_ch7bed.png", alt: "AZ-500" }
   ];

   // duplicamos 2x para evitar qualquer espaço vazio
   const marqueeSlides = [...slides, ...slides];

   return (
      <section
         id="certified"
         className="py-20 px-6 bg-gradient-to-l from-blue-800 to-gray-800 overflow-hidden"
      >
         <div className="text-center pb-16 ">
            <h3 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
               {t("certified.title")}
            </h3>
         </div>

         <div className="relative w-full overflow-hidden">
            <div className="marquee flex w-max hover:bg-gray-900/10 rounded-lg">
               {marqueeSlides.map((s, idx) => (
                  <div
                     key={idx}
                     className="flex items-center justify-center px-8"
                  >
                     <img
                        src={s.src}
                        alt={s.alt}
                        className="h-16 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
                     />
                  </div>
               ))}
            </div>
         </div>

         <style>{`
            .marquee {
               animation: scroll 25s linear infinite;
            }

            .marquee:hover {
               animation-play-state: paused;
            }

            @keyframes scroll {
               0% {
                  transform: translateX(0);
               }
               100% {
                  transform: translateX(-50%);
               }
            }

            @media (max-width: 640px) {
               .marquee {
                  animation-duration: 15s;
               }
            }
         `}</style>
      </section>
   );
}

export default CertifiedSection;