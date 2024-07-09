
import ReactDOM from "react-dom/client";
import Pet from "./Pet";


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
    <Pet name="Luna" animal="dog" breed="shiba inu" />
    <Pet name="Shiba" animal="dog" breed="shiba inu" />
    <Pet name="Coco" animal="dog" breed="shiba inu" />
    </div>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
