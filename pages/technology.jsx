// Copyright (c) 2022 Dayal Moirangthem
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";

function Technology(props) {
  const technology = props.data.technology;

  const [numberActive, setNumberActive] = React.useState("Launch vehicle");

  React.useEffect(() => {
    document.querySelector("body").classList.value = "technology";
    const active = document.querySelector('[aria-selected="technology"]');
    if (active) {
      active.setAttribute("aria-selected", true);
    }
  }, []);
  return (
    <main className="grid justify-center justify-items-center text-center px-6 gap-12 md:grid-container md:grid-container--technology md:px-0 md:mb-14">
      <h1 className="title font-sans-cond tracking-[.2em] text-lg uppercase sm:text-2xl sm:mt-8">
        <span className="font-bold text-clr-white text-opacity-40">03</span>{" "}
        Space launch 101
      </h1>

      {technology.map((tech) => (
        <picture
          className="active-tab"
          key={tech.name}
          data-hidden={tech.name !== numberActive}
        >
          <img
            className="md:hidden"
            src={tech.images.landscape}
            alt={tech.name}
          />
          <img
            className="mmd:hidden"
            src={tech.images.portrait}
            alt={tech.name}
          />
        </picture>
      ))}

      <div className="number-tab flex gap-5">
        {technology.map((tech) => (
          <button
            key={tech.name}
            onClick={() => setNumberActive(tech.name)}
            aria-selected={tech.name === numberActive}
            className="active-tab bg-transparent text-clr-light text-xl border border-transparent w-12 aspect-[1] rounded-full hocus:border-clr-light hocus:border-opacity-40 aria-selected:bg-clr-white aria-selected:text-clr-dark"
          >
            {technology.indexOf(tech) + 1}
          </button>
        ))}
      </div>

      {/* articles */}
      {technology.map((tech) => (
        <article
          key={tech.name}
          data-hidden={tech.name !== numberActive}
          className="technology-info active-tab mb-12 sm:mb-0"
        >
          <header className="font-serif uppercase my-6">
            <h3 className="sm:text-lg">The terminology...</h3>
            <p className="text-2xl sm:text-4xl sm:mt-2">{tech.name}</p>
          </header>
          <p className="max-w-[50ch]">{tech.description}</p>
        </article>
      ))}
    </main>
  );
}

export default Technology;
