// Copyright (c) 2022 Dayal Moirangthem
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";

export default function Crew(props) {
  const crews = props.data.crew;

  const [dotActive, setDotActive] = React.useState("Douglas Hurley");

  React.useEffect(() => {
    document.querySelector("body").classList.value = "crew";
    const active = document.querySelector('[aria-selected="crew"]');
    if (active) {
      active.setAttribute("aria-selected", true);
    }
  }, []);

  return (
    <main className="px-8 grid md:grid-container grid-container--crew sm:grid-container--crew-sm md:grid-container--crew-md justify-center justify-items-center text-center gap-4 md:justify-items-start">
      <h1 className="title font-sans-cond tracking-[.2em] text-lg uppercase sm:text-2xl sm:mt-8">
        <span className="font-bold text-clr-white text-opacity-40">02</span>{" "}
        Meet your crew
      </h1>
      {crews.map((crew) => (
        <picture
          key={crew.name}
          data-hidden={crew.name !== dotActive}
          className="active-tab place-self-center max-w-[60%] border-b border-clr-white border-opacity-40 mt-8"
        >
          <img src={crew.images.png} alt={`${crew.name} image`} />
          <source srcSet={crew.images.webp} type="webp" />
        </picture>
      ))}

      {/* dots */}
      <div className="tab-list">
        {crews.map((crew) => (
          <button
            key={crew.name}
            onClick={() => setDotActive(crew.name)}
            className="dots aspect-[1] w-2 bg-clr-white bg-opacity-40 rounded-full mx-1 aria-selected:bg-opacity-100"
            aria-selected={crew.name === dotActive}
          >
            <span className="sr-only">{crew.name} tab</span>
          </button>
        ))}
      </div>

      {/* articles */}
      {crews.map((crew) => (
        <article
          key={crew.name}
          data-hidden={crew.name !== dotActive}
          className="crew-info active-tab mb-12 sm:mb-0"
        >
          <header className="font-serif uppercase my-6">
            <h3 className="sm:text-lg">{crew.role}</h3>
            <p className="text-2xl sm:text-4xl sm:mt-2">{crew.name}</p>
          </header>
          <p className="max-w-[50ch]">{crew.bio}</p>
        </article>
      ))}
    </main>
  );
}
