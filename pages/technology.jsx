// Copyright (c) 2022 Dayal Moirangthem
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";

function Technology() {
  React.useEffect(() => {
    document.querySelector("body").classList.value = "technology";
    const active = document.querySelector('[aria-selected="technology"]');
    if (active) {
      active.setAttribute("aria-selected", true);
    }
  }, []);
  return <main></main>;
}

export default Technology;
