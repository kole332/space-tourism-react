import React from "react";

export default function Home(props) {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "home";
    const active = document.querySelector('[aria-selected="home"]');
    if (active) {
      active.setAttribute("aria-selected", true);
    }
  }, []);
  return (
    <main className="grid md:grid-cols-2 justify-center" id="main">
      <div className="text-center justify-center mx-auto">
        <h1 className="font-sans-cond uppercase tracking-[0.2em] text-clr-light">
          So, you want to travel to{" "}
          <span className="block font-serif text-7xl leading-none text-clr-white">
            space
          </span>
        </h1>
        <p className="max-w-[47ch] text-clr-light">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex content-center justify-center py-16">
        <a
          href="/destination"
          className="large-btn uppercase font-serif text-clr-dark bg-clr-white after:hocus:opacity-100 after:hocus:transform after:hocus:scale-150"
        >
          Explore
        </a>
      </div>
    </main>
  );
}
