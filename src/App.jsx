
import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";


const App = () => {
  /*return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);*/

  return(
    <div>
    <h1>Adopt Me</h1>
    <SearchParams />
    </div>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
