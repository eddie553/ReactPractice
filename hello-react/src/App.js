// 2.4.5 undefined 반환시 오류
// return 반환 시에 OR 연산자로 undefined 반환 방지하기

import React from "react";

function App() {
  const name = undefined;
  return name || "값이 undefined입니다";
}

export default App;
