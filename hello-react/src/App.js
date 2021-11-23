// 3.3 propTypes를 통한 props 검증
// propTypes를 string으로 설정하고, string 타입인 props를 전달하여 오류 해결

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name="react">리액트</MyComponent>;
};
export default App;
