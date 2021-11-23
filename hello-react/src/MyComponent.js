// 3.3 부모 컴포넌트 App로부터 props 받아오기

import React from 'react';

const MyComponent = (props) => {
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};
export default MyComponent;
