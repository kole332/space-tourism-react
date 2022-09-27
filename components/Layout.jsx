// Copyright (c) 2022 Dayal Moirangthem
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { useState } from "react";

export default function Layout(props) {
  return (
    <>
      <Header navigation={props.nav} />
      {props.children}
    </>
  );
}

function Header(props) {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle((prevState) => !prevState);
  }

  return (
    <header className="flex justify-between items-center max-w-screen-2xl md:pt-6 md:after:content-[''] md:after:block md:after:relative md:after:h-[1px] md:after:w-full md:after:-mr-10 md:after:bg-clr-white md:after:bg-opacity-25 md:after:order-1">
      <div>
        <img
          className="logo my-6 mx-[clamp(1.5rem,5vw,5rem)] self-start sm:self-center"
          src="/assets/shared/logo.svg"
        />
      </div>
      <button
        onClick={handleToggle}
        aria-expanded={toggle}
        className="toggle-btn msm:block h-6 w-8 z-20 bg-hamburger bg-center bg-no-repeat absolute top-8 right-6 aria-expanded:bg-close sm:hidden transition-opacity"
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav className="md:order-2">
        <ul
          data-visible={toggle}
          className="flex bg-clr-white bg-opacity-5 backdrop-blur-lg msm:flex-col msm:gap-1 msm:pt-24 msm:px-8 msm:w-[70vw] msm:fixed msm:top-0 msm:right-0 msm:h-full msm:translate-x-full msm:data-visible:translate-x-0 transition-transform sm:px-[clamp(1rem,_7vw,_5rem)] sm:gap-8"
        >
          {props.navigation.map((nav) => (
            <li
              key={nav[0]}
              aria-selected={nav[0]}
              className="msm:py-2 border-b-2 border-transparent hocus:border-clr-white hocus:border-opacity-40 sm:py-6 sm:border-b-[3px] aria-selected:border-clr-light"
            >
              <a
                href={nav[1]}
                className="font-sans-cond text-[1.1rem] uppercase tracking-widest"
              >
                <span className="font-bold mr-2 sm:hidden md:inline">
                  {props.navigation.indexOf(nav) < 10
                    ? `0${props.navigation.indexOf(nav)}`
                    : props.navigation.indexOf(nav)}
                </span>
                {nav[0]}
              </a>
            </li>
          ))}
          <li className="flex self-center items-center mt-auto mb-8 px-4 py-1 border border-clr-light border-opacity-40 rounded text-clr-light text-opacity-80 bg-clr-dark bg-opacity-10 hover:border-transparent hover:text-clr-white hover:bg-clr-light hover:bg-opacity-10 backdrop-blur-3xl sm:hidden">
            <a href="/about">About us </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="self-center ml-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
              />
              <path
                fillRule="evenodd"
                d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
}
