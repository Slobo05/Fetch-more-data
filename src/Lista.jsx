import React from "react";
import Covjek from "./Covjek";

function Lista({ data }) {
  return (
    <React.Fragment>
      {data.length > 0 ? (
        data.map(person => (
          <Covjek key={person.birth_year + Math.random().toString()} name={person.name} />
        ))
      ) : 
        <h5>Nema vise podataka</h5>
      }
    </React.Fragment>
  );
}

export default Lista;
