// 2.4.6 인라인 스타일링
// 스타일을 적용할 때는 객체 형태로

import React from "react";

function App() {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "italic",
    padding: 16,
  };

  return <div style={style}>{name}</div>;
}

export default App;
