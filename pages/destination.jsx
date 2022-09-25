import React from "react";

function Destination() {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "destination";
    document
      .querySelector('[aria-selected="destination"]')
      .setAttribute("aria-selected", true);
  }, []);

  return (
    <div>
      <h1>Hello from Destination!</h1>
    </div>
  );
}

export default Destination;
