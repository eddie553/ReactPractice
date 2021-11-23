// 2.4.4 && 연산자를 사용한 조건부 렌더링
// 조건을 만족하지 않을 때 아무것도 렌더링하지않음

import React from "react";

function App() {
  const name = "리웩트";
  return <div>{name === "리액트" ? <h1> 리액트입니다.</h1> : null}</div>;
}

export default App;
