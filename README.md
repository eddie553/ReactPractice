#### 종합설계 (송오영 교수님)

### 전자전기공학부 김나은 20173639

## 리액트를 다루는 기술 - 코드 실습

## CH 10~11 todo-app과 컴포넌트 성능 최적화, 2021.09.17

- CH10 todo-app
  - TodoTemplate.js : 화면을 가운데에 정렬, 앱 타이틀 보여줌 (children으로 내부 JSX를 props로 받아와 렌더링)
  - TodoInsert.js : 입력 및 추가 (state를 통해 인풋 상태 관리)
  - TodoListItem.js : 각 할 일 항목에 대한 정보 (todo 객체를 props로 받아와 상태에 따라 다른 UI )
  - TodoList.js : todos배열을 받아와 map 함수를 이용하여 TodoListItem 컴포넌트로 변환하여 보여줌 (props로 todos 배열을 받아옴)

* CH11 컴포넌트 성능 최적화
  - React.memo
  - useState 함수형
  - useReducer
  - react-virtualized 렌더링 최적화
