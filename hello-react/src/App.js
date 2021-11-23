import React, { Fragment } from "react";

// 2.4.1 감싸인 요소
// Fragment 요소로 감싸 오류를 해결한 코드

function App() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>{" "}
    </Fragment>
  );
}

export default App;
