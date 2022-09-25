import React from "react";

function Technology() {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "technology";
    document
      .querySelector('[aria-selected="technology"]')
      .setAttribute("aria-selected", true);
  }, []);
  return (
    <div>
      <h1>Hello from Technology!</h1>
    </div>
  );
}

export default Technology;
