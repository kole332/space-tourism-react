import React from "react";

export default function Header(props) {
  return (
    <header>
      <a href="#main">Skip to main</a>
      <div>
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>
      <button>
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul>
          {props.pages.map((nav) => {
            <li>
              <a href={nav[1]}>
                <span>
                  {props.pages.indexOf(nav) < 10
                    ? `0${props.pages.indexOf(nav)}`
                    : props.pages.indexOf(nav)}
                </span>
                {nav[0]}
              </a>
            </li>;
          })}
        </ul>
      </nav>
    </header>
  );
}
