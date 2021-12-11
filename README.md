# context-tutorial 디렉토리는 CH.15 의 코드 실습입니다.

# CH 15 Context API를 사용한 전역 상태 관리, 2021.09.19

## 15.1 Context API를 사용한 전역 상태 관리 흐름 이해하기

여기저기서 필요한 데이터는 주로 최상위 컴포넌트인 App의 state에 넣어서 관리한다.

하지만, App이 가지고 있는 value(props)를 전달하려면 거치는 하위 컴포넌트들이 많아지면, 유지 보수성이 낮아질 수 있다.

Context API를 사용하여 Context를 만들어 한 번에 원하는 값을 받아 와 사용할 수 있다.

## 15.2 Context API를 사용한 전역 상태 관리

- Consumer

  - props로 받아오지않고 Consumer 컴포넌트를 통해 색상을 조회함

- Provider

  - Context의 value를 변경할 수 있음

- useContext (Hook)

  - (함수형 컴포넌트)

- static contextType

  - (Class형 컴포넌트)
