import React, { useState, useEffect, useMemo, useCallback } from "react";
import TeamCard from "./TeamCard.jsx";
import FlechaIzq from "../../image/FlechaIzq.webp";
import FlechaDrch from "../../image/FlechaDrch.webp";

import CA from "../../image/equipo/CA.webp";
import GCG from "../../image/equipo/GCG.webp";
import GPC from "../../image/equipo/GPC.webp";
import JCM from "../../image/equipo/JCM.webp";
import MBR from "../../image/equipo/MBR.webp";
import XLD from "../../image/equipo/XLD.webp";

const team = [
  {
    person: "Juliette C. Mallen",
    position: "CO-FOUNDER & CEO/COO",
    linkImage: JCM,
    description:
      "Construir mundos desde cero es mi pasión. Convertirlos en proyectos tangibles y significativos, mi objetivo profesional.",
    linkedin: "https://www.linkedin.com/in/juliette-mallen-a001a2125/",
  },
  {
    person: "Guillermo Perales",
    position: "Co-Founder & Creative Director",
    linkImage: GPC,
    description:
      "Para mí, solo hay dos tipos de cosas en el mundo: las que sé hacer y las que aún no sé hacer. Todo es ponerse a ello.",
    linkedin: "https://www.linkedin.com/in/gperalesc/",
  },
  {
    person: "Manuel Ben",
    position: "UX Product Designer Specialist",
    linkImage: MBR,
    description:
      "Curioso, apasionado y siempre dispuesto a ayudar. ¿Lo que más me gusta de mi profesión? Tendría que decir que todo.",
    linkedin: "https://www.linkedin.com/in/benmanuel/",
  },
  {
    person: "Cristina Allen Casal",
    position: "Marketing expert Content & Brand",

    linkImage: CA,
    description:
      "Creo marcas, resuelvo problemas y me especializo en el marketing en entornos innovadores.",
    linkedin: "https://www.linkedin.com/in/cristina-allende-casal/",
  },
  {
    person: "Xavier Longo",
    position: "Full Stack Developer",
    linkImage: XLD,
    description:
      "Con que exista una idea, puedo traducirla al lenguaje de programación.  No perderá un solo pixel de su potencial.",
    linkedin: "https://www.linkedin.com/in/xavierlongo/",
  },
  {
    person: "Guillermo Correa",
    position: "Full Stack Developer",
    linkImage: GCG,
    description:
      "Soy escalador. Disfruto el proceso de llegar hasta la cima y ver el paisaje reservado para quienes nos aventuramos",
    linkedin: "https://www.linkedin.com/in/guillermocg8/",
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Optimización con useCallback para las funciones de navegación
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setCardsToShow(width >= 1100 ? 3 : width >= 900 ? 2 : 1);
    };

    handleResize(); // Llamar a la función una vez al cargar el componente
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Limpiar evento al desmontar
  }, []);

  // UseMemo para evitar cálculos innecesarios en cada renderizado
  const visibleCards = useMemo(() => {
    const visible = team.slice(currentIndex, currentIndex + cardsToShow);
    const extra = team.slice(
      0,
      Math.max(0, currentIndex + cardsToShow - team.length)
    );
    return visible.concat(extra);
  }, [currentIndex, cardsToShow]);

  return (
    <div
      className="relative w-full mx-auto rounded-sm"
      role="region"
      aria-label="Carrusel de equipo"
    >
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out gap-3 h-[500px]">
          {visibleCards.map((member, index) => (
            <div
              key={index}
              className={`flex justify-center ${
                cardsToShow === 3 ? "w-1/3" : "w-full"
              }`}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          aria-label="Ver el miembro anterior del equipo"
          className="p-2 focus:outline-none focus:ring-2 focus:ring-verdeLimaAbitacolo"
        >
          <img
            src={FlechaIzq.src}
            className="w-8 h-8"
            alt="Desplazar Izquierda"
            loading="lazy"
            width={32}
            height={32}
          />
        </button>

        <div className="flex space-x-2" role="tablist">
          {team.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-verdeLimaAbitacolo ${
                index === currentIndex ? "bg-verdeAbitacolo" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al miembro ${index + 1} del equipo`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Ver el siguiente miembro del equipo"
          className="p-2 focus:outline-none focus:ring-2 focus:ring-verdeLimaAbitacolo"
        >
          <img
            src={FlechaDrch.src}
            className="w-8 h-8"
            alt="Desplazar Derecha"
            loading="lazy"
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
