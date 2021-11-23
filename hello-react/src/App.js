import React from "react";

// 2.4.3 삼항 연산자로 조건부 렌더링

function App() {
  const name = "리액트";
  return (
    <div>
      {name === "리액트" ? (
        <h1> 리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}

export default App;
