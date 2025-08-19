import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import MyVideo from "../assets/12554223_3840_2160_30fps.mp4";
import posterVideo from "../assets/poster_video.png";

function Hero() {
  const { t } = useTranslation();

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Inicializa AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden pt-24"
    >
      {/* Poster como fallback absoluto */}
      <img
        src={posterVideo}
        alt="Background fallback"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded && !error ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 🎥 Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlayThrough={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded && !error ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={MyVideo} type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
          {t("hero.subtitle")}
        </h2>
        <p
          className="text-lg max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Renan - {t("hero.title")}
        </p>
      </div>
    </section>
  );
}

export default Hero;
