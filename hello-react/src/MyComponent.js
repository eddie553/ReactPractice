// 3.3 비구조화 할당 문법을 통해 props 내부 값 추출하기

import React from 'react';

const MyComponent = ({ name, children }) => {
  // 비구조화 할당
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}
      입니다.
    </div>
  );
};
MyComponent.defaultProps = {
  name: '기본이름',
};
export default MyComponent;
