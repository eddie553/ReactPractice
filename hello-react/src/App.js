// 2.4.6 인라인 스타일링
// 스타일을 적용할 때는 객체 형태로
// 미리 선언하지 않고 바로 스타일 값 JSX 내부에서 전달하기

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
