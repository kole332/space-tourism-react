import React from "react";

export default function Crew() {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "crew";
    const active = document.querySelector('[aria-selected="crew"]');
    if (active) {
      active.setAttribute("aria-selected", true);
    }
  }, []);

  return (
    <div className="px-8">
      <h1>Hello from Crew!</h1>
    </div>
  );
}
