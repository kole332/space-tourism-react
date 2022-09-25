import React from "react";

export default function Crew() {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "crew";
    document
      .querySelector('[aria-selected="crew"]')
      .setAttribute("aria-selected", true);
  }, []);

  return (
    <div>
      <h1>Hello from Crew!</h1>
    </div>
  );
}
