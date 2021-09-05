import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석 작성하는 법 */}
      <div
        className="react" //시작 태그를 여러줄로 작성하게 된다면 여기에 주석 가능
      >
        {name}
      </div>
      //이런 주석은 그대로
      <input />
    </>
  );
}

export default App;
