import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SourceParams";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Dog",
  //     breed: "Cockatiel"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "DOink",
  //     breed: "Mixed"
  //   })
  // ]);

  return (
    <div>
      <h1 id="something"> Adopt</h1>
      {/* <Pet name="Luna" animal="Dog" breed="havanese" />
      <Pet name="Pepper" animal="Dog" breed="havanese" />
      <Pet name="Doink" animal="Dog" breed="havanese" /> */}

      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
