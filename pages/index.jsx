import React from "react";

export default function Home() {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "home";
    const active = document.querySelector('[aria-selected="home"]');
    if (active) {
      active.setAttribute("aria-selected", true);
    }
  }, []);
  return (
    <main
      className="grid justify-center sm:pt-8 md:grid-cols-2 md:items-center sm:px-8 max-w-screen-2xl"
      id="main"
    >
      <div className="text-center justify-center mx-auto md:text-left">
        <h1 className="font-sans-cond uppercase tracking-[0.2em] text-clr-light sm:text-xl md:text-[clamp(1.2rem,6vw,1.8rem)]">
          So, you want to travel to{" "}
          <span className="block font-serif text-7xl leading-none text-clr-white sm:text-[5rem] md:text-[clamp(6rem,10vw,8rem)]">
            space
          </span>
        </h1>
        <p className="max-w-[47ch] text-clr-light md:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex content-center justify-center py-10">
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
