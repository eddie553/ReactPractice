// 3.4 state를 활용하여 counter 컴포넌트 만들기
// 클래스형 컴포넌트 - setState를 이용
// constructor 메서드를 사용하지 않고 state의 초깃값 지정하기
// this.setState를 두 번 사용해도 클릭 시 숫자는 1씩 더해진다.
// -> 해결: this.setState의 인자로 함수를 넣어준다. (prevState)

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
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
