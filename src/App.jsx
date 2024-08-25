
import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Details from "./Details";

const App = () => {
  /*return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);*/

  return(
    <BrowserRouter>
    
    <h1>Adopt Me</h1>

    <Routes>
    <Route path="/" element={<SearchParams />} />
    <Route path="/details/:id" element={<Details />} />
    </Routes>
    
    </BrowserRouter>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
