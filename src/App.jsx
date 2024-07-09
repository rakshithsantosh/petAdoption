import React from "react";
import ReactDOM from "react-dom/client";

const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "LUNA"),
    React.createElement("h2", {}, "DOG"),
    React.createElement("h2", {}, "SHIBA"),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
