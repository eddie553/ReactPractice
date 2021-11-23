// 3.3 propTypes를 통한 props 검증

import React from 'react';
import PropTypes from 'prop-types';

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
MyComponent.propTypes = {
  name: PropTypes.string,
};
export default MyComponent;
