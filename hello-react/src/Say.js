// 3.4 state를 활용하여 Say 컴포넌트 만들기
// 함수형 컴포넌트 - useState를 이용

import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState(' ');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
