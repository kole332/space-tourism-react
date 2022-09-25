import React from "react";

function Destination() {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "destination";
    const active = document.querySelector('[aria-selected="destination"]');
    if (active) {
      active.setAttribute("aria-selected", true);
    }
  }, []);

  return (
    <div>
      <h1>Hello from Destination!</h1>
    </div>
  );
}

export default Destination;
