import React from "react";

export default function Layout(props) {
  return (
    <>
      <Header navigation={props.nav} />
      {props.children}
    </>
  );
}

function Header(props) {
  return (
    <header>
      <div>
        <img src="/assets/shared/logo.svg" />
      </div>
      <button>
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav>
        <ul>
          {props.navigation.map((nav) => (
            <li key={nav[0]}>
              <a href={nav[1]}>
                <span>
                  {props.navigation.indexOf(nav) < 10
                    ? `0${props.navigation.indexOf(nav)}`
                    : props.navigation.indexOf(nav)}
                </span>
                {nav[0]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
