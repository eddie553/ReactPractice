// 3.4 state를 활용하여 counter 컴포넌트 만들기
// 클래스형 컴포넌트 - setState를 이용
// this.setState가 끝난 후 특정 작업 실행하기

import React, { Component } from 'react';
class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              // 두 번째 파라미터로 특정 작업 실행
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
