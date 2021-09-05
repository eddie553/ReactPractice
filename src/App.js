import React from "react";

function App() {
  const name = "리액트";

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "italic",
        padding: 16,
      }}
    >
      {name}
    </div>
  );
}

export default App;
