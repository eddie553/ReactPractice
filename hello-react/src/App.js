// 3.3 propTypes를 통한 props 검증
// propTypes를 string으로 설정했으나 number로 전달하여 콘솔에 오류가 뜸

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name={3}>리액트</MyComponent>;
};
export default App;
