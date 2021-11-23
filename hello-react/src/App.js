// 2.4.8 태그는 꼭 닫아주기
// 태그를 닫지 않아 생기는 오류 코드 해결하기

import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {" "}
      <div className="react">{name}</div>
      <input />{" "}
    </>
  );
}

export default App;
