// 3.3 isRequired로 필수 props 설정하기

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyComponent name="react" favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};
export default App;
