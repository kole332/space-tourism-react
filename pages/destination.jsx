import React from "react";

function Destination(props) {
  const destinations = props.data.destinations;

  const [activeTab, setActiveTab] = React.useState("moon");

  React.useEffect(() => {
    document.querySelector("body").classList.value = "destination";
    const activePage = document.querySelector('[aria-selected="destination"]');
    if (activePage) {
      activePage.setAttribute("aria-selected", true);
    }
  }, []);

  return (
    <main className="grid grid-container--destination items-center px-8 md:grid-container md:grid-container--destination-md ">
      <h1 className="title uppercase font-sans-cond tracking-[.3em] text-center sm:text-xl sm:tracking-[.2em]">
        <span className="text-clr-white text-opacity-30 font-bold">01</span>{" "}
        Pick your destination
      </h1>

      {destinations.map((tab) => (
        <picture
          key={tab.name}
          data-hidden={tab.name.toLowerCase() !== activeTab}
          className="active-tab flex my-10 justify-self-center msm:max-w-[65%] md:max-w-[80%] md:my-auto md:items-center md:justify-self-start"
        >
          <img src={tab.images.png} alt={`${tab.name}-image`} />
          <source srcSet={tab.images.webp} type="webp" />
        </picture>
      ))}

      <nav className="tab-list justify-self-center md:justify-self-start">
        {destinations.map((tab) => (
          <button
            key={tab.name}
            aria-selected={tab.name.toLowerCase() === activeTab}
            onClick={() => setActiveTab(tab.name.toLowerCase())}
            className="font-sans-cond uppercase py-2 mx-2 text-clr-light tracking-widest border-b-2 border-transparent text-lg hocus:text-clr-light hocus:border-clr-white hocus:border-opacity-40 sm:text-xl aria-selected:border-clr-white"
          >
            {tab.name}
          </button>
        ))}
      </nav>

      {destinations.map((tab) => (
        <article
          key={tab.name}
          data-hidden={tab.name.toLowerCase() !== activeTab}
          className="active-tab destination-info flex flex-col items-center"
        >
          <h2 className="font-serif text-clr-white uppercase text-6xl my-6 sm:text-9xl md:text-8xl md:text-left md:self-start">
            {tab.name}
          </h2>
          <p className="max-w-[50ch] text-center md:text-left">
            {tab.description}
          </p>
          <hr className="border-t border-clr-light border-opacity-20 w-full my-8" />
          <div className="flex msm:flex-col items-center text-center w-full mb-12 gap-8 sm:justify-center sm:gap-16 md:justify-start md:gap-14">
            <div>
              <p className="font-sans-cond text-lg uppercase tracking-wide sm:mb-2">
                Avg. distance
              </p>
              <p className="font-serif text-3xl sm:text-4xl">{tab.distance}</p>
            </div>
            <div>
              <p className="font-sans-cond text-lg uppercase tracking-wide sm:mb-2">
                Est. travel time
              </p>
              <p className="font-serif text-3xl sm:text-4xl">{tab.travel}</p>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}

export default Destination;
