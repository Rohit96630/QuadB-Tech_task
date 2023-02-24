import React, { useState } from "react";
export const summaryContex = React.createContext(null);
function Context(props) {
  const [summary, setSummary] = useState([]);
  console.log(summary);
  return (
    <div>
      <summaryContex.Provider value={{ summary, setSummary }}>
        {props.children}
      </summaryContex.Provider>
    </div>
  );
}

export default Context;
