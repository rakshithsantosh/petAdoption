const Pet = (props) => {
    /*return React.createElement("div", {}, [
      React.createElement("h1", {}, "LUNA"),
      React.createElement("h2", {}, "DOG"),
      React.createElement("h2", {}, "SHIBA"),
    ]);*/

    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.animal}</h1>
            <h1>{props.breed}</h1>
        </div>
    )
  };

  export default Pet;