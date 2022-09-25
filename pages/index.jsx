import React from "react";

export default function Home(props) {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "home";
    document
      .querySelector('[aria-selected="home"]')
      .setAttribute("aria-selected", true);
  }, []);
  return (
    <div>
      <h1>Hello From Home.</h1>
    </div>
  );
}
