import React from "react";

function Technology() {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "technology";
    const active = document.querySelector('[aria-selected="technology"]');
    if (active) {
      active.setAttribute("aria-selected", true);
    }
  }, []);
  return (
    <div>
      <h1>Hello from Technology!</h1>
    </div>
  );
}

export default Technology;
