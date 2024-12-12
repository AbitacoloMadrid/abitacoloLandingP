import React, { useMemo } from "react";
import LinkedInNegro from "../../image/logos/LinkedInNegro.webp";

const TeamCard = React.memo(
  ({ person, position, linkImage, description, linkedin = "" }) => {
    const teamPageLink = useMemo(
      () => `/team/${encodeURIComponent(person)}`,
      [person]
    );

    return (
      <article className="max-w-[427px] max-h-[495px] bg-white flex flex-col">
        <a href={teamPageLink} aria-label={`Ver perfil de ${person}`}>
          <img
            className="w-full h-auto object-cover"
            src={linkImage.src}
            alt={`${person} - Miembro del equipo`}
            loading="lazy"
            width="427"
            height="320"
          />
        </a>
        <div className="grid gap-1 p-3 pb-0 my-auto">
          <h2 className="text-black/90 text-2xl font-semibold leading-7">
            {person}
          </h2>
          <div className="grid gap-4 flex-grow">
            <p className="text-black/90 uppercase max-md:text-xs leading-tight mt-2">
              {position}
            </p>
            <p className="text-gris2 text-sm leading-tight mt-2">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver LinkedIn"
            >
              <img
                src={LinkedInNegro.src}
                alt="LinkedIn"
                className="h-6 w-6"
                loading="lazy"
                width="24"
                height="24"
              />
            </a>
          )}
          <a href={teamPageLink} className="ml-auto">
            <button className="rounded-full px-2 py-1.5 text-sm font-semibold leading-tight tracking-tight border-2 border-black hover:bg-black hover:text-white">
              Leer más
            </button>
          </a>
        </div>
      </article>
    );
  }
);

export default TeamCard;
